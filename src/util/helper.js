/**
 * Commonly used constants and functions.
 *
 * @module Helpers
 */

 /**
  * Match media device indicator.
  */
 class Responsive {
     /**
      * Get window's current width.
      *
      * @get
      * @static
      * @return {Number}
      */
     static get currWidth() {
         return window.innerWidth;
     }
 
     /**
      * Detect touch events.
      *
      * @get
      * @static
      * @return {Boolean}
      */
     static get isTouch() {
         return 'ontouchstart' in window;
     }
 
     /**
      * Detect desktop device.
      *
      * @get
      * @static
      * @return {Boolean}
      */
     static get isDesk() {
         return window.matchMedia('(min-width: 1024px)').matches;
     }
 
     /**
      * Detect tablet device.
      *
      * @get
      * @static
      * @return {Boolean}
      */
     static get isTablet() {
         return window.matchMedia('(min-width: 768px) and (max-width: 1024px)')
             .matches;
     }
 
     /**
      * Detect tablet device portrait orientation.
      *
      * @get
      * @static
      * @return {Boolean}
      */
     static get isTabletPortrait() {
         return window.matchMedia('(max-width: 991px)').matches;
     }
 
     /**
      * Detect mobile device.
      *
      * @get
      * @static
      * @return {Boolean}
      */
     static get isMobile() {
         return window.matchMedia('(max-width: 767px)').matches;
     }
 
     /**
      * Detect ios device.
      *
      * @get
      * @static
      * @return {Boolean}
      */
     static get isIOSDevice() {
         return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
     }
 }
 


 export { Responsive as Resp };
 