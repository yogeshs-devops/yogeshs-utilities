const utility = {
    error: function (data: any) {
        console.error(data);
    },
    info: function (msg: string) {
        console.info(msg);
    },
    print: function (msg: string) {
        console.warn(msg);
    }
}

export default utility;