const mongoose = require('mongoose');
// Define collection and schema

let OrderSchema = new mongoose.Schema({
  BOL: {type: String},
BOLIssuedOn: {type: String},
BOLNO: {type: String},
BOLToConsignee: {type: String},
CIAdded: {type: String},
CIIssuedOn: {type: String},
CINO: {type: String},
DateDelivered: {type: String},
LCNo: {type: String},
OrderNo: {type: String},
PLIssuedOn: {type: String},
PLNo: {type: String},
PortWallet: {type: String},
SellerAddedPL: {type: String},
ShippingAgencyPL: {type: String},
TotalAmount: {type: String},
actualAmount: {type: String},
carrier: {type: String},
carrierName: {type: String},
consigneeEmail: {type: String},
consigneeLEI: {type: String},
consigneeMob: {type: String},
consigneeName: {type: String},
consigneeWalletAddress: {type: String},
consigneebankName: {type: String},
consignmentNO: {type: String},
current_status: {type: String},
eccStatus: {type: String},
modified_dateTime: {type: String},
orderDate: {type: String},
orderDelivered: {type: String},
previous_hash: {type: String},
prodConsigneeAddress: {type: String},
prodConsigneeCountry: {type: String},
prodDelLoc: {type: String},
prodLoc: {type: String},
seller: {type: String},
sellerAddress: {type: String},
sellerBank: {type: String},
sellerBankName: {type: String},
sellerCountry: {type: String},
sellerLEI: {type: String},
sellerMob: {type: String},
sellerWallet: {type: String},
shippingAgencyName: {type: String},
tokenID: {type: String},})
module.exports = mongoose.model('OrderSwift', OrderSchema)
