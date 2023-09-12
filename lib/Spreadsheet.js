const { GoogleSpreadsheet } = require("google-spreadsheet");
const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

module.exports = class Sheet {
    constructor(sheetId) {
        this.doc = new GoogleSpreadsheet(sheetId);
    }

    async load() {
        await this.doc.useServiceAccountAuth({
            client_email: serviceAccount,
            private_key: privateKey.replace(new RegExp("\\\\n", "g"), "\n"),
        });
        await this.doc.loadInfo();
    }

    async addRows(rows, i) {
        const sheet = this.doc.sheetsByIndex[i];
        await sheet.addRows(rows); //receives an array of objects
    }

    async getRows(i) {
        const sheet = this.doc.sheetsByIndex[i];
        return await sheet.getRows();
    }
};
