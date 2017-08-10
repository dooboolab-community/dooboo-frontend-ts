module.exports = {
    resCode : {
        NO_DATA : 0,
        SUCCESS : 1,
        FAILED : 2,
        NO_REQ_PARAM : 3,
        ERR_PARAM : 4, // 정수형이어야 되는데 문자가 들어오는 경우
        ALREADY_INSERTED : 5,
        NOT_GRANTED : 6 // 권한이 없음
    }
};