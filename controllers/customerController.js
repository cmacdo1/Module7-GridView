const Customer = require('../schemas/customerSchema');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getCustomer = async (req, res) => {
    //  GET ALL CUSTOMERS (USING GET METHOD IN POSTMAN)
    try {
        // EXECUTE QUERY
        const features = new APIFeatures(Customer.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const customers = await features.query;

        

        // SEND RESPONSE
        res.render('index', {customers});
        
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.getCustomerById = async (req, res) => {
    // GET ONE CUSTOMER FROM DATABASE BY ID (USING GET METHOD IN POSTMAN)
    try {
        const customers = await Customer.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                customers,
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.postCustomer = async (req, res) => {
    // CREATE A Customer (USING POST METHOD IN POSTMAN)
    try {
        const newCustomer = req.body;
        const customers = await Customer.create(newCustomer);
        res.status(201).json({
            status: 'success',
            data: {
                customers,
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.updateCustomerById = async (req, res) => {
    //  UPDATE A CUSTOMER BY ID (USING PUT METHOD IN POSTMAN)
    try {
        const customers = await Customer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(201).json({
            status: 'success',
            data: {
                customers
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.deleteCustomer = async (req, res) => {
    // DELETE A CUSTOMER FROM DATABASE (USING DELETE METHOD IN POSTMAN)
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};