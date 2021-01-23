// Express Initialize
const express = require('express');
const authenticModel = require('../model/authentic.model');
const { authentic } = require('../model/authentic.model');
const ChequeModel = require('../model/cheque.model');
const CustomerModel = require('../model/customer.model');
const NotificationModel = require('../model/notification.model');
const router = express.Router()
const hashservice = require('../services/hashservice');
const generatepin = require('../services/pingenerationservice');
var dateFormat = require('dateformat');

router.get('/', (req, res) => {
    res.send("Customer Accessed !!!")
}
);
//[3]
router.get('/getAllData/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    CustomerModel.getCustomerById(id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);

router.get('/getpin/:id', (req, res) => {
    var id = req.params.id;
    console.log("PIN RESET " + id);
    var pin = generatepin(6);
    console.log(pin);

    CustomerModel.updateCustomerPin(id, pin)
        .then((success) => {
            console.log("PIN RESET " + id + "--" + pin);
            CustomerModel.getCustomerById(id)
                .then((success) => {
                    console.log(success);
                    var day=dateFormat(new Date(), "yyyy-mm-dd");
                    console.log(day);
                    NotificationModel.addNotification(day, id, "Pin Reset Success","You New Pin is "+pin)
                        .then((success) => {
                            res.json({
                                "success": true,
                                "data": success
                            });
                        })
                        .catch((failed) => {
                            res.json({
                                "success": false,
                                "data": failed
                            });
                        });
                })
                .catch((failed) => {
                    res.json({
                        "success": false,
                        "data": failed
                    });
                });
        })
        .catch((failed) => {
            res.json({
                "success": false,
                "data": failed
            });
        });
});


//[4]
router.get('/getAllNotification/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    NotificationModel.getNotiById(id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);
//[5]
router.get('/markPinForget/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    CustomerModel.updateCustomerPinForget(id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);
//[6]
router.post('/addCheque', (req, res) => {


    var cheque_data = [
        req.body.sender_id,
        req.body.receiver_id,
        null,
        parseFloat(req.body.amount),
        req.body.date,
    ]
    console.log(cheque_data);
    ChequeModel.addCheque(cheque_data).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
        res.end();
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
        res.end();
    });


}
);
//[7]
router.get('/getAllChequeReceived/:receiver_id', (req, res) => {
    var receiver_id = req.params.receiver_id;
    console.log(receiver_id);
    ChequeModel.getChequesByRID(receiver_id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);

//[8]
router.get('/getAllChequeSent/:sender_id', (req, res) => {
    var sender_id = req.params.sender_id;
    console.log(sender_id);
    ChequeModel.getChequesBySID(sender_id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);

//[9]
router.get('/updateChequeToEval/:cheque_id', (req, res) => {
    var cheque_id = req.params.cheque_id;
    console.log(cheque_id);
    ChequeModel.updateChequeToEval(cheque_id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);
//[10]
router.get('/updateChequeToRefund/:cheque_id', (req, res) => {
    var cheque_id = req.params.cheque_id;
    console.log(cheque_id);
    ChequeModel.updateChequeToRefund(cheque_id).then((success) => {
        res.json({
            "success": true,
            "data": success
        });
    }).catch((failed) => {
        res.json({
            "success": false,
            "data": failed
        });
    });
}
);

module.exports = router;