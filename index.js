/**
 *  TUNE SDK v4.* REACT NATIVE BRIDGE
 *
 *
 *
 * */

'use strict';

import {
  Platform,
  NativeModules,
} from 'react-native';

const TuneSDKBridge = NativeModules.TuneSDKBridge;

class TuneSDK {

  /***
   * Track a custom event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Object} tuneEvent    The Event Object
   */
  static measureEvent({id = '', userIdType = '', tuneEvent = {}}) {
    if (!tuneEvent) return;
    TuneSDKBridge.measureEvent(id, userIdType, tuneEvent);
  }

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
  static login({id = '', userIdType = '', email = '', name = '', age = 0, gender = 'MALE', location = {}}) {
    TuneSDKBridge.login(id, userIdType, email, name, age, gender, location);
  }


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
  static registration({id = '', userIdType = '', email = '', name = '', age = 0, gender = 'MALE', location = {}}) {
    TuneSDKBridge.registration(id, userIdType, email, name, age, gender, location);
  }

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
  static addToCart({id = '', userIdType = '', gender = 'MALE', age = 0, revenue = 0.0, currencyCode = '',location = {}, eventItems = []}) {
    TuneSDKBridge.addToCart(id, userIdType, gender, age, revenue, currencyCode, location, eventItems);
  }

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
  static addToWishList({id = '', userIdType = '', currencyCode = '', location = {}, eventItems = []}) {
    TuneSDKBridge.addToWishList( id, userIdType, currencyCode,location, eventItems);
  }

  /***
   * Add Payment Info
   * @param  {String} id       The User Id
   * @param  {String} type     The User Id type : facebook, twitter, google or user
   */
  static addedPaymentInfo({id = '', userIdType = ''}) {
    TuneSDKBridge.addedPaymentInfo(id, userIdType);
  }

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
  static checkoutInitiated({id = '', userIdType = '', revenue = 0.0, currencyCode = '', advertiserRefId = '', location ={}, eventItems = []}) {
    TuneSDKBridge.checkoutInitiated( id, userIdType, revenue, currencyCode, advertiserRefId, location, eventItems);
  }

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
  static purchase({id = '', userIdType = '', revenue = 0.0, currencyCode = '', advertiserRefId = '', location = {}, eventItems = {}}) {
    TuneSDKBridge.purchase(id, userIdType, revenue, currencyCode, advertiserRefId, location, eventItems);
  }

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
  static reservation({id = '', userIdType = '', gender = '', age = 0, revenue = 0.0, quantity = 0, currencyCode = 'USD', advertiserRefId = '', location = {}, date1 = {}, date2 = {}}) {
    TuneSDKBridge.reservation (id, userIdType, gender, age, revenue, quantity, currencyCode, advertiserRefId, location, date1, date2);
  }

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
  static search({id = '', userIdType = '', quantity = 0, currencyCode = '', searchString = '', location = {}, date1 = {}, date2 = {}, eventItems = []}) {
    TuneSDKBridge.search (id, userIdType, currencyCode, searchString, quantity, location, date1, date2, eventItems);
  }

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
  static contentView({id = '', userIdType = '', currencyCode = 'USD', location = {}, eventItems = []}) {
    TuneSDKBridge.contentView(id, userIdType, currencyCode, location, eventItems);
  }

  /***
   * Track an share event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int} contentId    The content Id number
   */
  static achievementUnlocked({id = '', userIdType = '', contentId = ''}) {
    TuneSDKBridge.achievementUnlocked(id, userIdType, contentId);
  }

  /***
   * Track an share event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int}    level        The level that the user acheved
   */
  static levelAchieved({ id = '', userIdType = '', level = 0}) {
    TuneSDKBridge.levelAchieved(id, userIdType, level);
  }


  /***
   * Track an spent credits event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   * @param  {Int} credits      The credits for the user
   */
  static spentCredits({id = '', userIdType = '', credits = 0}) {
    TuneSDKBridge.spentCredits(id, userIdType, credits);
  }

  /***
   * Track an tutorial Completed  event
   * @param  {String} id            The User Id
   * @param  {String} userIdType    The User Id type : facebook, twitter, google or user
   */
  static tutorialComplete({id = '', userIdType = ''}) {
    TuneSDKBridge.tutorialComplete(id, userIdType);
  }

  /***
   * Track an invite event
   * @param  {String} id           The User Id
   * @param  {String} userIdType   The User Id type : facebook, twitter, google or user
   */
  static invite({ id = '', userIdType = ''}) {
    TuneSDKBridge.invite(id, userIdType);
  }

  /***
   * Track an rating event
   * @param  {String} id            The User Id
   * @param  {String} userIdType    The User Id type : facebook, twitter, google or user
   * @param  {Float}  rating        The rating
   * @param  {String} contentId     The content Id string
   *
   */
  static rated({id = '', userIdType = '', rating = 0.0, contentId = ''}) {
    TuneSDKBridge.rated(id, userIdType, rating, contentId);
  }

  /***
   * Track an share event
   * @param  {String} id            The User Id
   * @param  {String} userIdType    The User Id type : facebook, twitter, google or user
   */
  static share({id = '', userIdType = ''}) {
    TuneSDKBridge.share(id, userIdType);
  }
}

module.exports = TuneSDK;
