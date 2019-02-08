package com.tune.react.TuneSDKBridge;

 import com.tune.Tune;
 import com.tune.ITune;
 import com.tune.TuneEvent;
 import com.tune.TuneGender;
 import com.tune.TuneEventItem;

 import java.util.ArrayList;
 import java.util.Date;
 import java.util.GregorianCalendar;
 import java.util.List;

 import android.location.Location;
 import android.util.Log;

 import com.facebook.react.bridge.ReactMethod;
 import com.facebook.react.bridge.ReadableMap;
 import com.facebook.react.bridge.ReadableArray;
 import com.facebook.react.bridge.ReactApplicationContext;
 import com.facebook.react.bridge.ReactContextBaseJavaModule;

 public class TuneSDKBridge extends ReactContextBaseJavaModule {

     public TuneSDKBridge(ReactApplicationContext reactContext) {
         super(reactContext);
         // Log.d(TuneSDKBridge.class.getName(), "TuneSDKBridge constructor");
     }

     @Override
     public String getName() {
         return "TuneSDKBridge";
     }

     @ReactMethod
     public void login(String id,String userIdType,String email, String name, Integer age, String gender, ReadableMap location) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.login");
         ITune tune = Tune.getInstance();
         TuneGender tuneGender = ( gender.equals("MALE") ) ? TuneGender.MALE : TuneGender.FEMALE;

         this.setUserId(tune, userIdType, id);

         tune.setAge(age);
         tune.setUserName(name);
         tune.setLocation(this.getLocation(location));
         tune.setUserEmail(email);
         tune.setGender(tuneGender);
         tune.measureEvent(TuneEvent.LOGIN);
     }

     @ReactMethod
     public void registration(String id,String userIdType, String email, String name, Integer age, String gender, ReadableMap location) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.registration");
         ITune tune = Tune.getInstance();
         TuneGender tuneGender = ( gender.equals("MALE") ) ? TuneGender.MALE : TuneGender.FEMALE;

         this.setUserId(tune, userIdType, id);
         tune.setAge(age);
         tune.setUserName(name);
         tune.setLocation(this.getLocation(location));
         tune.setUserEmail(email);
         tune.setGender(tuneGender);
         tune.measureEvent(TuneEvent.REGISTRATION);
     }

     // eCommerce
     @ReactMethod
     public void addToCart(String id,String userIdType, String gender, Integer age, Float revenue, String currencyCode,ReadableMap location, ReadableArray eventItems) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.addToCart");
         ITune tune = Tune.getInstance();
         TuneGender tuneGender = ( gender.equals("MALE") ) ? TuneGender.MALE : TuneGender.FEMALE;

         this.setUserId(tune, userIdType, id);

         tune.setAge(age);
         tune.setGender(tuneGender);
         tune.setLocation(this.getLocation(location));
         tune.measureEvent(new TuneEvent(TuneEvent.ADD_TO_CART)
                 .withEventItems(this.getTuneEventItemList(eventItems))
                 .withRevenue(revenue)
                 .withCurrencyCode(currencyCode));
     }

     //
     @ReactMethod
     public void addToWishList(String id, String userIdType, String currencyCode, ReadableMap location, ReadableArray eventItems) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.addToWishlist");
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.setLocation(this.getLocation(location));
         TuneEvent tuneEvent = new TuneEvent(TuneEvent.ADD_TO_WISHLIST).withEventItems(this.getTuneEventItemList(eventItems));
         tuneEvent.withCurrencyCode(currencyCode);
         tune.measureEvent(tuneEvent);
     }

     //
     @ReactMethod
     public void addedPaymentInfo(String id, String userIdType) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.addedPaymentInfo");
         ITune tune = Tune.getInstance();
         this.setUserId(tune, userIdType, id);

         tune.measureEvent(TuneEvent.ADDED_PAYMENT_INFO);
     }

     //
     @ReactMethod
     public void checkoutInitiated(String id, String userIdType, Float revenue, String currencyCode, String advertiserRefId, ReadableMap location, ReadableArray eventItems) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.checkoutInitiated");
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.setLocation(this.getLocation(location));
         tune.measureEvent(new TuneEvent(TuneEvent.CHECKOUT_INITIATED)
                 .withEventItems(this.getTuneEventItemList(eventItems))
                 .withRevenue(revenue)
                 .withCurrencyCode(currencyCode)
                 .withAdvertiserRefId(advertiserRefId));
     }

     //
     @ReactMethod
     public void purchase(String id, String userIdType,  Float revenue, String currencyCode, String advertiserRefId, ReadableMap location, ReadableArray eventItems) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.purchase");
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.setLocation(this.getLocation(location));
         tune.measureEvent(new TuneEvent(TuneEvent.PURCHASE)
                 .withEventItems(this.getTuneEventItemList(eventItems))
                 .withRevenue(revenue)
                 .withCurrencyCode(currencyCode)
                 .withAdvertiserRefId(advertiserRefId));
     }

     //
     @ReactMethod
     public void reservation(String id, String userIdType, String gender, Integer age, Float revenue, Integer quantity, String currencyCode, String advertiserRefId, ReadableMap location, ReadableMap date1, ReadableMap date2) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.reservation");
         ITune tune = Tune.getInstance();
         TuneGender tuneGender = ( gender.equals("MALE") ) ? TuneGender.MALE : TuneGender.FEMALE;

         this.setUserId(tune, userIdType, id);
         tune.setAge(age);
         tune.setGender(tuneGender);
         tune.setLocation(this.getLocation(location));
         tune.measureEvent(new TuneEvent(TuneEvent.RESERVATION)
                 .withRevenue(revenue)
                 .withCurrencyCode(currencyCode)
                 .withAdvertiserRefId(advertiserRefId)
                 .withDate1(this.getDate(date1))
                 .withDate2(this.getDate(date2))
                 .withQuantity(quantity));
     }

     //
     @ReactMethod
     public void search (String id, String userIdType, String currencyCode, String searchString, Integer quantity, ReadableMap location, ReadableMap date1, ReadableMap date2, ReadableArray eventItems) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.search");
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.setLocation(this.getLocation(location));
         tune.measureEvent(new TuneEvent(TuneEvent.SEARCH)
                 .withCurrencyCode(currencyCode)
                 .withEventItems(this.getTuneEventItemList(eventItems))
                 .withSearchString(searchString)
                 .withDate1(this.getDate(date1))
                 .withDate2(this.getDate(date2))
                 .withQuantity(quantity));
     }

     //
     @ReactMethod
     public void contentView (String id, String userIdType, String currencyCode, ReadableMap location, ReadableArray eventItems) {
         Log.d(TuneSDKBridge.class.getName()," TuneSDKBridge.contentView");
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.setLocation(this.getLocation(location));
         TuneEvent tuneEvent = new TuneEvent(TuneEvent.CONTENT_VIEW).withEventItems(this.getTuneEventItemList(eventItems));
         tuneEvent.withCurrencyCode(currencyCode);
         tune.measureEvent(tuneEvent);
     }

     //
     @ReactMethod
     public void achievementUnlocked (String id, String userIdType, String contentId) {
         ITune tune = Tune.getInstance();
         this.setUserId(tune, userIdType, id);
         tune.measureEvent(new TuneEvent(TuneEvent.ACHIEVEMENT_UNLOCKED).withContentId(contentId));
     }

     //
     @ReactMethod
     public void levelAchieved (String id, String userIdType, Integer level) {
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.measureEvent(new TuneEvent(TuneEvent.LEVEL_ACHIEVED).withLevel(level));
     }

     //
     @ReactMethod
     public void spentCredits (String id, String userIdType, Integer credits) {
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.measureEvent(new TuneEvent(TuneEvent.SPENT_CREDITS).withQuantity(credits));
     }

     // tutorial complete Methods
     @ReactMethod
     public void tutorialComplete (String id, String userIdType) {
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.measureEvent(TuneEvent.TUTORIAL_COMPLETE);
     }

     // invite Methods
     @ReactMethod
     public void invite (String id, String userIdType) {
         ITune tune = Tune.getInstance();

         this.setUserId(tune,userIdType, id);
         tune.measureEvent(TuneEvent.INVITE);
     }

     // rated Method
     @ReactMethod
     public void rated (String id, String userIdType, Float rating, String contentId) {
         ITune tune = Tune.getInstance();

         this.setUserId(tune, userIdType, id);
         tune.measureEvent(new TuneEvent(TuneEvent.RATED)
                 .withRating(rating)
                 .withContentId(contentId));
     }

     // Share Methods
     @ReactMethod
     public void share (String id, String userIdType) {
         ITune tune = Tune.getInstance();
         this.setUserId(tune, userIdType, id);
         tune.measureEvent(TuneEvent.SHARE);
     }

     // PRIVATE HELPER METHODS
     private void setUserId(ITune tune, String userIdType, String id ) {
         switch( userIdType ) {
             case "facebook" : tune.setFacebookUserId(id);break;
             case "google"   : tune.setGoogleUserId(id); break;
             case "twitter"  : tune.setTwitterUserId(id);break;
             default : tune.setUserId(id); break;
         }
     }

     private List<TuneEventItem> getTuneEventItemList(ReadableArray tuneEventArray) {
         List<TuneEventItem> tuneEventItemList = new ArrayList<>(tuneEventArray.size());

         for (int i = 0; i < tuneEventArray.size(); i++) {
             ReadableMap  event = tuneEventArray.getMap(i);
             tuneEventItemList.add( this.getTuneEventItem(event));
         }

         return tuneEventItemList;
     }

     private TuneEventItem getTuneEventItem(ReadableMap eventMap ) {
         TuneEventItem tuneEventItem = new TuneEventItem(eventMap.getString("itemName"));

         if (eventMap.hasKey("attribute1")) {
             tuneEventItem = tuneEventItem.withAttribute1(eventMap.getString("attribute1"));
         }
         if (eventMap.hasKey("attribute2")) {
             tuneEventItem = tuneEventItem.withAttribute2(eventMap.getString("attribute2"));
         }
         if (eventMap.hasKey("attribute3")) {
             tuneEventItem = tuneEventItem.withAttribute3(eventMap.getString("attribute3"));
         }
         if (eventMap.hasKey("attribute4")) {
             tuneEventItem = tuneEventItem.withAttribute4(eventMap.getString("attribute4"));
         }
         if (eventMap.hasKey("attribute5")) {
             tuneEventItem = tuneEventItem.withAttribute5(eventMap.getString("attribute5"));
         }
         if (eventMap.hasKey("unitPrice")) {
             tuneEventItem = tuneEventItem.withUnitPrice(eventMap.getDouble("unitPrice"));
         }
         if (eventMap.hasKey("quantity")) {
             tuneEventItem = tuneEventItem.withQuantity(eventMap.getInt("quantity"));
         }
         if (eventMap.hasKey("revenue")) {
             tuneEventItem = tuneEventItem.withRevenue(eventMap.getDouble("revenue"));
         }
         return tuneEventItem;
     }

     private Location getLocation ( ReadableMap loc ) {
         Location location = (loc.hasKey("description")) ? new Location(loc.getString("description")) : new Location("");

         if(loc.hasKey("longitude")) {
             location.setLongitude(loc.getDouble("longitude"));
         }

         if(loc.hasKey("latitude")) {
             location.setLatitude(loc.getDouble("latitude"));
         }

         return location;
     }

     private Date getDate(ReadableMap date) {

         if(date.hasKey("year") && date.hasKey("month") && date.hasKey("day")) {
             return new GregorianCalendar(date.getInt("year"), date.getInt("month"), date.getInt("day")).getTime();
         } else {
             return null;
         }
     }
 }
