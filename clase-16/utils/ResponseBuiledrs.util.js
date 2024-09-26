class ResponseBuilder {
  static CODE = {
    GET_INFO_SUCCESS: "GET_INFO_SUCCESS",
  };

  constructor() {
    this.response = {
      ok: false,
      payload: {},
      status: 500,
    };
  }

  setStatus(status) {
    this.response.status = status;
    return this;
  }

  setOk(ok) {
    this.response.ok = ok;
    return this;
  }

  setPayload(payload) {
    this.response.payload = payload;
    return this;
  }

  setCode(code) {
    this.response.code = code;
    return this;
  }

  build() {
    return this.response;
  }
}

export default ResponseBuilder;
