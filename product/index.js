module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "{\"id\":\""+ name +"\", \"name\" : \"samochodzik\" }"
        : "ShelfID not exist";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}