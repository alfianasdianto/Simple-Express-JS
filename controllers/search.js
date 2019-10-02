let Joi = require('@hapi/joi');
let httpStatus = require('http-status');
let axios = require('axios');

let { apiKey, apiBaseURL } = require('../config/config');

exports.index = (req, res) => {
    let data = req.query;
    if (!data.page) data.page = 1;

    let {error} = Joi.object().keys({
        s: Joi.string().required(),
        page: Joi.number()
    }).validate(data);

    if (error) {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({
            code: httpStatus.UNPROCESSABLE_ENTITY,
            success: false,
            message: error.details[0].message.replace(`"${error.details[0].context.label}"`, error.details[0].context.label)
        });
    } else {
        axios.get(apiBaseURL, {
            params: {
                apikey: apiKey,
                s: data.s,
                page: data.page
            }
        })
        .then(function (response) {
            if (response.Error) {
                return res.status(httpStatus.UNPROCESSABLE_ENTITY)
                .json({
                    code: httpStatus.UNPROCESSABLE_ENTITY,
                    success: false,
                    message: response.Error
                })
            } else {
                return res.status(httpStatus.OK)
                    .json({
                        data: response.data
                    })
            }
        })
        .catch(function (error) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY)
                .json({
                    code: httpStatus.UNPROCESSABLE_ENTITY,
                    success: false,
                    message: error.message
                })
        })
    }
}