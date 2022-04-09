var data = [];
res.forEach((item) => {
    var tmp ={};
    switch (item.Type) {
        case "E":
            tmp.type = sap.ui.core.MessageType.Error;
            tmp.message = item.Message;
            break;
        case "S":
            tmp.type = sap.ui.core.MessageType.Success;
            tmp.message = item.Message;
            break;
        default:
            tmp.type = sap.ui.core.MessageType.None;
            tmp.message = item.Message;
            break;
    }
data.push(tmp);
});