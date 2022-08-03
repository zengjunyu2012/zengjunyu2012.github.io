// mojom-webui/chrome/browser/cart/chrome_cart.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { UrlSpec as url_mojom_UrlSpec } from 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
/**
 * @const { {$: !mojo.internal.MojomType} }
 */
export const ConsentStatusSpec = { $: mojo.internal.Enum() };
/**
 * @enum {number}
 */
export const ConsentStatus = {
    ACCEPTED: 0,
    DISMISSED: 1,
    REJECTED: 2,
    MIN_VALUE: 0,
    MAX_VALUE: 2,
};
/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
export class CartHandlerPendingReceiver {
    /**
     * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
     */
    constructor(handle) {
        /** @public {!mojo.internal.interfaceSupport.Endpoint} */
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    /** @param {string=} scope */
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'chrome_cart.mojom.CartHandler', scope);
    }
}
/** @interface */
export class CartHandlerInterface {
    /**
     * @return {!Promise<{
          carts: !Array<!MerchantCart>,
     *  }>}
     */
    getMerchantCarts() { }
    /**
     */
    hideCartModule() { }
    /**
     */
    restoreHiddenCartModule() { }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    hideCart(cartUrl) { }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    restoreHiddenCart(cartUrl) { }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    removeCart(cartUrl) { }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    restoreRemovedCart(cartUrl) { }
    /**
     * @return {!Promise<{
          welcomeVisible: !boolean,
     *  }>}
     */
    getWarmWelcomeVisible() { }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          discountUrl: !url_mojom_Url,
     *  }>}
     */
    getDiscountURL(cartUrl) { }
    /**
     * @return {!Promise<{
          consentVisible: !boolean,
     *  }>}
     */
    getDiscountConsentCardVisible() { }
    /**
     * @return {!Promise<{
          toggleVisible: !boolean,
     *  }>}
     */
    getDiscountToggleVisible() { }
    /**
     * @param { !boolean } accept
     */
    onDiscountConsentAcknowledged(accept) { }
    /**
     */
    onDiscountConsentDismissed() { }
    /**
     */
    onDiscountConsentContinued() { }
    /**
     * @return {!Promise<{
          consentStatus: !ConsentStatus,
     *  }>}
     */
    showNativeConsentDialog() { }
    /**
     * @return {!Promise<{
          enabled: !boolean,
     *  }>}
     */
    getDiscountEnabled() { }
    /**
     * @param { !boolean } enabled
     */
    setDiscountEnabled(enabled) { }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @param { !boolean } isNavigating
     */
    prepareForNavigation(cartUrl, isNavigating) { }
}
/**
 * @implements { CartHandlerInterface }
 */
export class CartHandlerRemote {
    /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
    constructor(handle = undefined) {
        /**
         * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!CartHandlerPendingReceiver>}
         */
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(CartHandlerPendingReceiver, handle);
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!CartHandlerPendingReceiver>}
         */
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    /**
     * @return {!Promise<{
          carts: !Array<!MerchantCart>,
     *  }>}
     */
    getMerchantCarts() {
        return this.proxy.sendMessage(1429048047, CartHandler_GetMerchantCarts_ParamsSpec.$, CartHandler_GetMerchantCarts_ResponseParamsSpec.$, []);
    }
    /**
     */
    hideCartModule() {
        this.proxy.sendMessage(2074623204, CartHandler_HideCartModule_ParamsSpec.$, null, []);
    }
    /**
     */
    restoreHiddenCartModule() {
        this.proxy.sendMessage(1339696060, CartHandler_RestoreHiddenCartModule_ParamsSpec.$, null, []);
    }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    hideCart(cartUrl) {
        return this.proxy.sendMessage(155161234, CartHandler_HideCart_ParamsSpec.$, CartHandler_HideCart_ResponseParamsSpec.$, [
            cartUrl
        ]);
    }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    restoreHiddenCart(cartUrl) {
        return this.proxy.sendMessage(1401607753, CartHandler_RestoreHiddenCart_ParamsSpec.$, CartHandler_RestoreHiddenCart_ResponseParamsSpec.$, [
            cartUrl
        ]);
    }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    removeCart(cartUrl) {
        return this.proxy.sendMessage(6309251, CartHandler_RemoveCart_ParamsSpec.$, CartHandler_RemoveCart_ResponseParamsSpec.$, [
            cartUrl
        ]);
    }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          success: !boolean,
     *  }>}
     */
    restoreRemovedCart(cartUrl) {
        return this.proxy.sendMessage(1101849415, CartHandler_RestoreRemovedCart_ParamsSpec.$, CartHandler_RestoreRemovedCart_ResponseParamsSpec.$, [
            cartUrl
        ]);
    }
    /**
     * @return {!Promise<{
          welcomeVisible: !boolean,
     *  }>}
     */
    getWarmWelcomeVisible() {
        return this.proxy.sendMessage(2136248818, CartHandler_GetWarmWelcomeVisible_ParamsSpec.$, CartHandler_GetWarmWelcomeVisible_ResponseParamsSpec.$, []);
    }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @return {!Promise<{
          discountUrl: !url_mojom_Url,
     *  }>}
     */
    getDiscountURL(cartUrl) {
        return this.proxy.sendMessage(680469530, CartHandler_GetDiscountURL_ParamsSpec.$, CartHandler_GetDiscountURL_ResponseParamsSpec.$, [
            cartUrl
        ]);
    }
    /**
     * @return {!Promise<{
          consentVisible: !boolean,
     *  }>}
     */
    getDiscountConsentCardVisible() {
        return this.proxy.sendMessage(2139436140, CartHandler_GetDiscountConsentCardVisible_ParamsSpec.$, CartHandler_GetDiscountConsentCardVisible_ResponseParamsSpec.$, []);
    }
    /**
     * @return {!Promise<{
          toggleVisible: !boolean,
     *  }>}
     */
    getDiscountToggleVisible() {
        return this.proxy.sendMessage(973544098, CartHandler_GetDiscountToggleVisible_ParamsSpec.$, CartHandler_GetDiscountToggleVisible_ResponseParamsSpec.$, []);
    }
    /**
     * @param { !boolean } accept
     */
    onDiscountConsentAcknowledged(accept) {
        this.proxy.sendMessage(1772474960, CartHandler_OnDiscountConsentAcknowledged_ParamsSpec.$, null, [
            accept
        ]);
    }
    /**
     */
    onDiscountConsentDismissed() {
        this.proxy.sendMessage(619020264, CartHandler_OnDiscountConsentDismissed_ParamsSpec.$, null, []);
    }
    /**
     */
    onDiscountConsentContinued() {
        this.proxy.sendMessage(1146496571, CartHandler_OnDiscountConsentContinued_ParamsSpec.$, null, []);
    }
    /**
     * @return {!Promise<{
          consentStatus: !ConsentStatus,
     *  }>}
     */
    showNativeConsentDialog() {
        return this.proxy.sendMessage(486924763, CartHandler_ShowNativeConsentDialog_ParamsSpec.$, CartHandler_ShowNativeConsentDialog_ResponseParamsSpec.$, []);
    }
    /**
     * @return {!Promise<{
          enabled: !boolean,
     *  }>}
     */
    getDiscountEnabled() {
        return this.proxy.sendMessage(1198926801, CartHandler_GetDiscountEnabled_ParamsSpec.$, CartHandler_GetDiscountEnabled_ResponseParamsSpec.$, []);
    }
    /**
     * @param { !boolean } enabled
     */
    setDiscountEnabled(enabled) {
        this.proxy.sendMessage(1085971740, CartHandler_SetDiscountEnabled_ParamsSpec.$, null, [
            enabled
        ]);
    }
    /**
     * @param { !url_mojom_Url } cartUrl
     * @param { !boolean } isNavigating
     */
    prepareForNavigation(cartUrl, isNavigating) {
        this.proxy.sendMessage(2017088081, CartHandler_PrepareForNavigation_ParamsSpec.$, null, [
            cartUrl,
            isNavigating
        ]);
    }
}
/**
 * An object which receives request messages for the CartHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export class CartHandlerReceiver {
    /**
     * @param {!CartHandlerInterface } impl
     */
    constructor(impl) {
        /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!CartHandlerRemote>} */
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(CartHandlerRemote);
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!CartHandlerRemote>}
         */
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.helper_internal_.registerHandler(1429048047, CartHandler_GetMerchantCarts_ParamsSpec.$, CartHandler_GetMerchantCarts_ResponseParamsSpec.$, impl.getMerchantCarts.bind(impl));
        this.helper_internal_.registerHandler(2074623204, CartHandler_HideCartModule_ParamsSpec.$, null, impl.hideCartModule.bind(impl));
        this.helper_internal_.registerHandler(1339696060, CartHandler_RestoreHiddenCartModule_ParamsSpec.$, null, impl.restoreHiddenCartModule.bind(impl));
        this.helper_internal_.registerHandler(155161234, CartHandler_HideCart_ParamsSpec.$, CartHandler_HideCart_ResponseParamsSpec.$, impl.hideCart.bind(impl));
        this.helper_internal_.registerHandler(1401607753, CartHandler_RestoreHiddenCart_ParamsSpec.$, CartHandler_RestoreHiddenCart_ResponseParamsSpec.$, impl.restoreHiddenCart.bind(impl));
        this.helper_internal_.registerHandler(6309251, CartHandler_RemoveCart_ParamsSpec.$, CartHandler_RemoveCart_ResponseParamsSpec.$, impl.removeCart.bind(impl));
        this.helper_internal_.registerHandler(1101849415, CartHandler_RestoreRemovedCart_ParamsSpec.$, CartHandler_RestoreRemovedCart_ResponseParamsSpec.$, impl.restoreRemovedCart.bind(impl));
        this.helper_internal_.registerHandler(2136248818, CartHandler_GetWarmWelcomeVisible_ParamsSpec.$, CartHandler_GetWarmWelcomeVisible_ResponseParamsSpec.$, impl.getWarmWelcomeVisible.bind(impl));
        this.helper_internal_.registerHandler(680469530, CartHandler_GetDiscountURL_ParamsSpec.$, CartHandler_GetDiscountURL_ResponseParamsSpec.$, impl.getDiscountURL.bind(impl));
        this.helper_internal_.registerHandler(2139436140, CartHandler_GetDiscountConsentCardVisible_ParamsSpec.$, CartHandler_GetDiscountConsentCardVisible_ResponseParamsSpec.$, impl.getDiscountConsentCardVisible.bind(impl));
        this.helper_internal_.registerHandler(973544098, CartHandler_GetDiscountToggleVisible_ParamsSpec.$, CartHandler_GetDiscountToggleVisible_ResponseParamsSpec.$, impl.getDiscountToggleVisible.bind(impl));
        this.helper_internal_.registerHandler(1772474960, CartHandler_OnDiscountConsentAcknowledged_ParamsSpec.$, null, impl.onDiscountConsentAcknowledged.bind(impl));
        this.helper_internal_.registerHandler(619020264, CartHandler_OnDiscountConsentDismissed_ParamsSpec.$, null, impl.onDiscountConsentDismissed.bind(impl));
        this.helper_internal_.registerHandler(1146496571, CartHandler_OnDiscountConsentContinued_ParamsSpec.$, null, impl.onDiscountConsentContinued.bind(impl));
        this.helper_internal_.registerHandler(486924763, CartHandler_ShowNativeConsentDialog_ParamsSpec.$, CartHandler_ShowNativeConsentDialog_ResponseParamsSpec.$, impl.showNativeConsentDialog.bind(impl));
        this.helper_internal_.registerHandler(1198926801, CartHandler_GetDiscountEnabled_ParamsSpec.$, CartHandler_GetDiscountEnabled_ResponseParamsSpec.$, impl.getDiscountEnabled.bind(impl));
        this.helper_internal_.registerHandler(1085971740, CartHandler_SetDiscountEnabled_ParamsSpec.$, null, impl.setDiscountEnabled.bind(impl));
        this.helper_internal_.registerHandler(2017088081, CartHandler_PrepareForNavigation_ParamsSpec.$, null, impl.prepareForNavigation.bind(impl));
        /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
}
export class CartHandler {
    /**
     * @return {!string}
     */
    static get $interfaceName() {
        return "chrome_cart.mojom.CartHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     *
     * @return {!CartHandlerRemote}
     */
    static getRemote() {
        let remote = new CartHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
/**
 * An object which receives request messages for the CartHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export class CartHandlerCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(CartHandlerRemote);
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!CartHandlerRemote>}
         */
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.getMerchantCarts =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1429048047, CartHandler_GetMerchantCarts_ParamsSpec.$, CartHandler_GetMerchantCarts_ResponseParamsSpec.$, this.getMerchantCarts.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.hideCartModule =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2074623204, CartHandler_HideCartModule_ParamsSpec.$, null, this.hideCartModule.createReceiverHandler(false /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.restoreHiddenCartModule =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1339696060, CartHandler_RestoreHiddenCartModule_ParamsSpec.$, null, this.restoreHiddenCartModule.createReceiverHandler(false /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.hideCart =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(155161234, CartHandler_HideCart_ParamsSpec.$, CartHandler_HideCart_ResponseParamsSpec.$, this.hideCart.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.restoreHiddenCart =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1401607753, CartHandler_RestoreHiddenCart_ParamsSpec.$, CartHandler_RestoreHiddenCart_ResponseParamsSpec.$, this.restoreHiddenCart.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.removeCart =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(6309251, CartHandler_RemoveCart_ParamsSpec.$, CartHandler_RemoveCart_ResponseParamsSpec.$, this.removeCart.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.restoreRemovedCart =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1101849415, CartHandler_RestoreRemovedCart_ParamsSpec.$, CartHandler_RestoreRemovedCart_ResponseParamsSpec.$, this.restoreRemovedCart.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.getWarmWelcomeVisible =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2136248818, CartHandler_GetWarmWelcomeVisible_ParamsSpec.$, CartHandler_GetWarmWelcomeVisible_ResponseParamsSpec.$, this.getWarmWelcomeVisible.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.getDiscountURL =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(680469530, CartHandler_GetDiscountURL_ParamsSpec.$, CartHandler_GetDiscountURL_ResponseParamsSpec.$, this.getDiscountURL.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.getDiscountConsentCardVisible =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2139436140, CartHandler_GetDiscountConsentCardVisible_ParamsSpec.$, CartHandler_GetDiscountConsentCardVisible_ResponseParamsSpec.$, this.getDiscountConsentCardVisible.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.getDiscountToggleVisible =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(973544098, CartHandler_GetDiscountToggleVisible_ParamsSpec.$, CartHandler_GetDiscountToggleVisible_ResponseParamsSpec.$, this.getDiscountToggleVisible.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.onDiscountConsentAcknowledged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1772474960, CartHandler_OnDiscountConsentAcknowledged_ParamsSpec.$, null, this.onDiscountConsentAcknowledged.createReceiverHandler(false /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.onDiscountConsentDismissed =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(619020264, CartHandler_OnDiscountConsentDismissed_ParamsSpec.$, null, this.onDiscountConsentDismissed.createReceiverHandler(false /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.onDiscountConsentContinued =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1146496571, CartHandler_OnDiscountConsentContinued_ParamsSpec.$, null, this.onDiscountConsentContinued.createReceiverHandler(false /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.showNativeConsentDialog =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(486924763, CartHandler_ShowNativeConsentDialog_ParamsSpec.$, CartHandler_ShowNativeConsentDialog_ResponseParamsSpec.$, this.showNativeConsentDialog.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.getDiscountEnabled =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1198926801, CartHandler_GetDiscountEnabled_ParamsSpec.$, CartHandler_GetDiscountEnabled_ResponseParamsSpec.$, this.getDiscountEnabled.createReceiverHandler(true /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.setDiscountEnabled =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1085971740, CartHandler_SetDiscountEnabled_ParamsSpec.$, null, this.setDiscountEnabled.createReceiverHandler(false /* expectsResponse */));
        /**
         * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
         */
        this.prepareForNavigation =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2017088081, CartHandler_PrepareForNavigation_ParamsSpec.$, null, this.prepareForNavigation.createReceiverHandler(false /* expectsResponse */));
        /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param {number} id An ID returned by a prior call to addListener.
     * @return {boolean} True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const MerchantCartSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetMerchantCarts_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetMerchantCarts_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_HideCartModule_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RestoreHiddenCartModule_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_HideCart_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_HideCart_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RestoreHiddenCart_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RestoreHiddenCart_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RemoveCart_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RemoveCart_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RestoreRemovedCart_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_RestoreRemovedCart_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetWarmWelcomeVisible_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetWarmWelcomeVisible_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountURL_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountURL_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountConsentCardVisible_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountConsentCardVisible_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountToggleVisible_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountToggleVisible_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_OnDiscountConsentAcknowledged_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_OnDiscountConsentDismissed_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_OnDiscountConsentContinued_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_ShowNativeConsentDialog_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_ShowNativeConsentDialog_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountEnabled_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_GetDiscountEnabled_ResponseParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_SetDiscountEnabled_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
export const CartHandler_PrepareForNavigation_ParamsSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(MerchantCartSpec.$, 'MerchantCart', [
    mojo.internal.StructField('merchant', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('cartUrl', 8, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('productImageUrls', 16, 0, mojo.internal.Array(url_mojom_UrlSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('discountText', 24, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 40],]);
/**
 * @record
 */
export class MerchantCart {
    constructor() {
        /** @type { !string } */
        this.merchant;
        /** @type { !url_mojom_Url } */
        this.cartUrl;
        /** @type { !Array<!url_mojom_Url> } */
        this.productImageUrls;
        /** @type { !string } */
        this.discountText;
    }
}
mojo.internal.Struct(CartHandler_GetMerchantCarts_ParamsSpec.$, 'CartHandler_GetMerchantCarts_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_GetMerchantCarts_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_GetMerchantCarts_ResponseParamsSpec.$, 'CartHandler_GetMerchantCarts_ResponseParams', [
    mojo.internal.StructField('carts', 0, 0, mojo.internal.Array(MerchantCartSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetMerchantCarts_ResponseParams {
    constructor() {
        /** @type { !Array<!MerchantCart> } */
        this.carts;
    }
}
mojo.internal.Struct(CartHandler_HideCartModule_ParamsSpec.$, 'CartHandler_HideCartModule_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_HideCartModule_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_RestoreHiddenCartModule_ParamsSpec.$, 'CartHandler_RestoreHiddenCartModule_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_RestoreHiddenCartModule_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_HideCart_ParamsSpec.$, 'CartHandler_HideCart_Params', [
    mojo.internal.StructField('cartUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_HideCart_Params {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.cartUrl;
    }
}
mojo.internal.Struct(CartHandler_HideCart_ResponseParamsSpec.$, 'CartHandler_HideCart_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_HideCart_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.success;
    }
}
mojo.internal.Struct(CartHandler_RestoreHiddenCart_ParamsSpec.$, 'CartHandler_RestoreHiddenCart_Params', [
    mojo.internal.StructField('cartUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_RestoreHiddenCart_Params {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.cartUrl;
    }
}
mojo.internal.Struct(CartHandler_RestoreHiddenCart_ResponseParamsSpec.$, 'CartHandler_RestoreHiddenCart_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_RestoreHiddenCart_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.success;
    }
}
mojo.internal.Struct(CartHandler_RemoveCart_ParamsSpec.$, 'CartHandler_RemoveCart_Params', [
    mojo.internal.StructField('cartUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_RemoveCart_Params {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.cartUrl;
    }
}
mojo.internal.Struct(CartHandler_RemoveCart_ResponseParamsSpec.$, 'CartHandler_RemoveCart_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_RemoveCart_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.success;
    }
}
mojo.internal.Struct(CartHandler_RestoreRemovedCart_ParamsSpec.$, 'CartHandler_RestoreRemovedCart_Params', [
    mojo.internal.StructField('cartUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_RestoreRemovedCart_Params {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.cartUrl;
    }
}
mojo.internal.Struct(CartHandler_RestoreRemovedCart_ResponseParamsSpec.$, 'CartHandler_RestoreRemovedCart_ResponseParams', [
    mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_RestoreRemovedCart_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.success;
    }
}
mojo.internal.Struct(CartHandler_GetWarmWelcomeVisible_ParamsSpec.$, 'CartHandler_GetWarmWelcomeVisible_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_GetWarmWelcomeVisible_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_GetWarmWelcomeVisible_ResponseParamsSpec.$, 'CartHandler_GetWarmWelcomeVisible_ResponseParams', [
    mojo.internal.StructField('welcomeVisible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetWarmWelcomeVisible_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.welcomeVisible;
    }
}
mojo.internal.Struct(CartHandler_GetDiscountURL_ParamsSpec.$, 'CartHandler_GetDiscountURL_Params', [
    mojo.internal.StructField('cartUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetDiscountURL_Params {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.cartUrl;
    }
}
mojo.internal.Struct(CartHandler_GetDiscountURL_ResponseParamsSpec.$, 'CartHandler_GetDiscountURL_ResponseParams', [
    mojo.internal.StructField('discountUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetDiscountURL_ResponseParams {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.discountUrl;
    }
}
mojo.internal.Struct(CartHandler_GetDiscountConsentCardVisible_ParamsSpec.$, 'CartHandler_GetDiscountConsentCardVisible_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_GetDiscountConsentCardVisible_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_GetDiscountConsentCardVisible_ResponseParamsSpec.$, 'CartHandler_GetDiscountConsentCardVisible_ResponseParams', [
    mojo.internal.StructField('consentVisible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetDiscountConsentCardVisible_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.consentVisible;
    }
}
mojo.internal.Struct(CartHandler_GetDiscountToggleVisible_ParamsSpec.$, 'CartHandler_GetDiscountToggleVisible_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_GetDiscountToggleVisible_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_GetDiscountToggleVisible_ResponseParamsSpec.$, 'CartHandler_GetDiscountToggleVisible_ResponseParams', [
    mojo.internal.StructField('toggleVisible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetDiscountToggleVisible_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.toggleVisible;
    }
}
mojo.internal.Struct(CartHandler_OnDiscountConsentAcknowledged_ParamsSpec.$, 'CartHandler_OnDiscountConsentAcknowledged_Params', [
    mojo.internal.StructField('accept', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_OnDiscountConsentAcknowledged_Params {
    constructor() {
        /** @type { !boolean } */
        this.accept;
    }
}
mojo.internal.Struct(CartHandler_OnDiscountConsentDismissed_ParamsSpec.$, 'CartHandler_OnDiscountConsentDismissed_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_OnDiscountConsentDismissed_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_OnDiscountConsentContinued_ParamsSpec.$, 'CartHandler_OnDiscountConsentContinued_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_OnDiscountConsentContinued_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_ShowNativeConsentDialog_ParamsSpec.$, 'CartHandler_ShowNativeConsentDialog_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_ShowNativeConsentDialog_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_ShowNativeConsentDialog_ResponseParamsSpec.$, 'CartHandler_ShowNativeConsentDialog_ResponseParams', [
    mojo.internal.StructField('consentStatus', 0, 0, ConsentStatusSpec.$, 0, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_ShowNativeConsentDialog_ResponseParams {
    constructor() {
        /** @type { !ConsentStatus } */
        this.consentStatus;
    }
}
mojo.internal.Struct(CartHandler_GetDiscountEnabled_ParamsSpec.$, 'CartHandler_GetDiscountEnabled_Params', [], [[0, 8],]);
/**
 * @record
 */
export class CartHandler_GetDiscountEnabled_Params {
    constructor() {
    }
}
mojo.internal.Struct(CartHandler_GetDiscountEnabled_ResponseParamsSpec.$, 'CartHandler_GetDiscountEnabled_ResponseParams', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_GetDiscountEnabled_ResponseParams {
    constructor() {
        /** @type { !boolean } */
        this.enabled;
    }
}
mojo.internal.Struct(CartHandler_SetDiscountEnabled_ParamsSpec.$, 'CartHandler_SetDiscountEnabled_Params', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 16],]);
/**
 * @record
 */
export class CartHandler_SetDiscountEnabled_Params {
    constructor() {
        /** @type { !boolean } */
        this.enabled;
    }
}
mojo.internal.Struct(CartHandler_PrepareForNavigation_ParamsSpec.$, 'CartHandler_PrepareForNavigation_Params', [
    mojo.internal.StructField('cartUrl', 0, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('isNavigating', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 24],]);
/**
 * @record
 */
export class CartHandler_PrepareForNavigation_Params {
    constructor() {
        /** @type { !url_mojom_Url } */
        this.cartUrl;
        /** @type { !boolean } */
        this.isNavigating;
    }
}
