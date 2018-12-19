export declare interface Location {
  description?: string;
  latitude?: number;
  longitude?: number;
}

export declare interface EventItem {
  itemName?: string;
  unitPrice?: number;
  quantity?: number;
  revenue?: number;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
}

export declare interface DateObj {
  day?: number;
  month?: number;
  year?: number;
}

// Receipt and InAppReceipt defined: https://developer.apple.com/library/archive/releasenotes/General/ValidateAppStoreReceipt/Chapters/ReceiptFields.html#//apple_ref/doc/uid/TP40010573-CH106-SW1
export declare interface Receipt {
  bundle_id?: string;
  application_version?: string;
  in_app?: Array<InAppReceipt>;
  original_application_version?: string;
  receipt_creation_date?: string;
  expiration_date?: string;
}

export declare interface InAppReceipt {
  quantity?: number;
  product_id?: string;
  transaction_id?: string;
  original_transaction_id?: string;
  purchase_date?: string;
  original_purchase_date?: string;
  expires_date?: string;
  expiration_intent?: string;
  is_in_billing_retry_period?: string;
  is_trial_period?: string;
  is_in_intro_offer_period?: string;
  cancellation_date?: string;
  cancellation_reason?: string;
  app_item_id?: string;
  version_external_identifier?: string;
  web_order_line_item_id?: string;
  auto_renew_status?: string;
  auto_renew_product_id?: string;
  price_consent_status?: string;
}

export declare interface TuneEvent {
  eventName: string;
  eventId?: number;
  eventItems?: Array<EventItem>;
  revenue?: number;
  currencyCode?: string;
  refId?: string;
  receipt?: Receipt;
  contentType?: string;
  contentId?: string;
  searchString?: string;
  transactionState?: number;
  rating?: number;
  level?: number;
  quantity?: number;
  date1?: DateObj;
  date2?: DateObj;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
}

export default class TuneSDK {
  /***
   * Track a custom event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Object} tuneEvent    The TuneEvent object
   */
  static measureEvent({
    id,
    userIdType,
    tuneEvent
  }: {
    id?: string;
    userIdType?: string;
    tuneEvent: TuneEvent;
  }): void;

  /***
   * Track an share event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {String} email        The user email address
   * @param  {String} name         The user name
   * @param  {Int}    age          The user age
   * @param  {String} gender       The user gender, MALE or FEMALE
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float} latitude
   *    @param {Float} longitude
   */
  static login({
    id,
    userIdType,
    email,
    name,
    age,
    gender,
    location
  }: {
    id?: string;
    userIdType?: string;
    email?: string;
    name?: string;
    age?: number;
    gender?: string;
    location?: Location;
  }): void;

  /***
   * Track an share event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {String} email        The user email address
   * @param  {String} name         The user name
   * @param  {Int}    age          The user age
   * @param  {String} gender       The user gender, MALE or FEMALE
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float} latitude
   *    @param {Float} longitude
   */
  static registration({
    id,
    userIdType,
    email,
    name,
    age,
    gender,
    location
  }: {
    id?: string;
    userIdType?: string;
    email?: string;
    name?: string;
    age?: number;
    gender?: string;
    location?: Location;
  }): void;

  // eCommerce

  /***
   * Add To Cart
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {String} gender       The user gender, MALE or FEMALE
   * @param  {Int}    age          The user age
   * @param  {Float}  revenue
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float} latitude
   *    @param {Float} longitude
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static addToCart({
    id,
    userIdType,
    gender,
    age,
    revenue,
    currencyCode,
    location,
    eventItems
  }: {
    id?: string;
    userIdType?: string;
    gender?: string;
    age?: number;
    revenue?: number;
    currencyCode?: string;
    location?: Location;
    eventItems?: Array<EventItem>;
  }): void;

  /***
   * Add To Wish List
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float} latitude
   *    @param {Float} longitude
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static addToWishList({
    id,
    userIdType,
    currencyCode,
    location,
    eventItems
  }: {
    id?: string;
    userIdType?: string;
    currencyCode?: string;
    location?: Location;
    eventItems?: Array<EventItem>;
  }): void;

  /***
   * Add Payment Info
   * @param  {String} id       The User Id
   * @param  {String} type     The User Id type : facebook, twitter, google or user
   */
  static addedPaymentInfo({
    id,
    userIdType
  }: {
    id?: string;
    userIdType?: string;
  }): void;

  /***
   * Checkout Initiated
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Float}  revenue
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {String} advertiserRefId
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float}  latitude
   *    @param {Float}  longitude
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static checkoutInitiated({
    id,
    userIdType,
    revenue,
    currencyCode,
    advertiserRefId: location,
    eventItems
  }: {
    id?: string;
    userIdType?: string;
    revenue?: number;
    currencyCode?: string;
    advertiserRefId?: string;
    location?: Location;
    eventItems?: Array<EventItem>;
  }): void;

  /***
   * Purchase
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Float}  revenue
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {String} advertiserRefId
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float}  latitude
   *    @param {Float}  longitude
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static purchase({
    id,
    userIdType,
    revenue: currencyCode,
    advertiserRefId,
    location,
    eventItems
  }: {
    id?: string;
    userIdType?: string;
    revenue?: number;
    currencyCode?: string;
    advertiserRefId?: string;
    location?: Location;
    eventItems?: Array<EventItem>;
  }): void;

  /***
   * Reservation
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {String} gender       The user gender, MALE or FEMALE
   * @param  {Int}    age          The user age
   * @param  {Float}  revenue
   * @param  {Int}    quantity
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {String} advertiserRefId
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float}  latitude
   *    @param {Float}  longitude
   * @param  {Object} date1
   *    @param {Int}  day
   *    @param {Int}  month
   *    @param {Int}  year
   * @param  {Object} date2
   *    @param {Int}  day
   *    @param {Int}  month
   *    @param {Int}  year
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static reservation({
    id,
    userIdType,
    gender,
    age,
    revenue,
    quantity,
    currencyCode,
    advertiserRefId,
    location,
    date1,
    date2
  }: {
    id?: string;
    userIdType?: string;
    gender?: string;
    age?: number;
    revenue?: number;
    quantity?: number;
    currencyCode?: string;
    advertiserRefId?: string;
    location?: Location;
    date1?: DateObj;
    date2?: DateObj;
  }): void;

  /***
   * Search
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int}    quantity
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {String} searchString
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float}  latitude
   *    @param {Float}  longitude
   * @param  {Object} date1
   *    @param {Int}  day
   *    @param {Int}  month
   *    @param {Int}  year
   * @param  {Object} date2
   *    @param {Int}  day
   *    @param {Int}  month
   *    @param {Int}  year
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static search({
    id,
    userIdType,
    quantity,
    currencyCode,
    searchString,
    location,
    date1,
    date2,
    eventItems
  }: {
    id?: string;
    userIdType?: string;
    quantity?: number;
    currencyCode?: string;
    searchString?: string;
    location?: Location;
    date1?: DateObj;
    date2?: DateObj;
    eventItems?: Array<EventItem>;
  }): void;

  /***
   * Content View
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {String} currencyCode The currency Code, ex. USD
   * @param  {Object} location     The address of the location
   *    @param {String} description
   *    @param {Float} latitude
   *    @param {Float} longitude
   * @param  {Array}  eventItems - An array of Event objects item with required keys
   *    event EXAMPLE
   *    @event {
   *      @param  {String} itemName
   *      @param  {Float}  unitPrice
   *      @param  {Int}    quantity
   *      @param  {Float}  revenue
   *      @param  {String} attribute1
   *      @param  {String} attribute2
   *      @param  {String} attribute3
   *      @param  {String} attribute4
   *      @param  {String} attribute5
   *    }
   */
  static contentView({
    id,
    userIdType,
    currencyCode,
    location,
    eventItems
  }: {
    id?: string;
    userIdType?: string;
    currencyCode?: string;
    location?: Location;
    eventItems?: Array<EventItem>;
  }): void;

  /***
   * Track an share event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int} contentId    The content Id number
   */
  static achievementUnlocked({
    id,
    userIdType,
    contentId
  }: {
    id?: string;
    userIdType?: string;
    contentId?: number;
  }): void;

  /***
   * Track an share event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int}    level        The level that the user acheved
   */
  static levelAchieved({
    id,
    userIdType,
    level
  }: {
    id?: string;
    userIdType?: string;
    level?: number;
  }): void;

  /***
   * Track an spent credits event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int} credits      The credits for the user
   */
  static spentCredits({
    id,
    userIdType,
    credits
  }: {
    id?: string;
    userIdType?: string;
    credits?: number;
  }): void;

  /***
   * Track an tutorial Completed  event
   * @param  {String} id            The User Id
   * @param  {String} userIdType    The User Id type : facebook, twitter, google or user
   */
  static tutorialComplete({
    id,
    userIdType
  }: {
    id?: string;
    userIdType?: string;
  }): void;

  /***
   * Track an invite event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   */
  static invite({ id, userIdType }: { id?: string; userIdType?: string }): void;

  /***
   * Track an rating event
   * @param  {String} id            The User Id
   * @param  {String} userIdType    The User Id type : facebook, twitter, google or user
   * @param  {Float}  rating        The rating
   * @param  {String} contentId     The content Id string
   *
   */
  static rated({
    id,
    userIdType,
    rating,
    contentId
  }: {
    id?: string;
    userIdType?: string;
    rating?: number;
    contentId?: string;
  }): void;

  /***
   * Track an share event
   * @param  {String} id            The User Id
   * @param  {String} userIdType    The User Id type : facebook, twitter, google or user
   */
  static share({ id, userIdType }: { id?: string; userIdType?: string }): void;
}
