const nullproto =function () {
    const emptyObj = Object.create(null)
    console.log(emptyObj);
}
nullproto();