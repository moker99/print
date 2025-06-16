const escpos = require('escpos');
escpos.USB = require('escpos-usb');

const device = new escpos.USB(); 

const options = { encoding: "big5" }; 
const printer = new escpos.Printer(device, options);

device.open(function() {
    printer
        .align('CT')
        .text('電子發票證明聯')
        .text('109年03-04月')
        .text('AB-12345678')
        .text('隨機碼：1234')
        .text('總計：$123')
        .barcode('12345678', 'EAN8')
        .cut()
        .close();
});
