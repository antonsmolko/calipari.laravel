<?php
/**
 * Dynamic image resizer routes
 */


//Route::get('label/order-item/{id}','PDFController@generateOrderItemLabel');
//Route::get('layout/order-item/{id}','PDFController@generateOrderItemLayout');
//Route::get('order-details/{id}','PDFController@generateOrderDetails');

Route::get('label/demo', function () {
    return view('pdf/order-label');
});
