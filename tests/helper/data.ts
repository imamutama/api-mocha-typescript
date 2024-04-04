export class Data {
  public _token!: string;
  public _refreshToken!: string;
  public _encryptPhone!: string;
  public _encryptPin!: string;
  public _encryptOtp!: string;
  public _nameRegister!: string;
  public _phoneRegister!: string;
  public _idListAddress!: string;
  public _addressName!: string;
  public _storeName!: string;
  public _idListNotif!: string;

  public set listIdNotif(idListNotif: string) {
    this._idListNotif = idListNotif;
  }
  public get listIdNotif() {
    return this._idListNotif;
  }

  public set nameStore(storeName: string) {
    this._storeName = storeName;
  }
  public get nameStore() {
    return this._storeName;
  }

  public set nameAddress(addressName: string) {
    this._addressName = addressName;
  }
  public get nameAddress() {
    return this._addressName;
  }

  public set listIdAddress(idListAddress: string) {
    this._idListAddress = idListAddress;
  }
  public get listIdAddress() {
    return this._idListAddress;
  }

  public set registerPhone(idListAddress: string) {
    this._phoneRegister = idListAddress;
  }
  public get registerPhone() {
    return this._phoneRegister;
  }

  public set registerName(nameRegister: string) {
    this._nameRegister = nameRegister;
  }
  public get registerName() {
    return this._nameRegister;
  }

  public set accessToken(token: string) {
    this._token = token;
  }
  public get accessToken() {
    return this._token;
  }
  public set tokenRefresh(refreshToken: string) {
    this._refreshToken = refreshToken;
  }
  public get tokenRefresh() {
    return this._refreshToken;
  }
  public set phoneEncrypt(encryptPhone: string) {
    this._encryptPhone = encryptPhone;
  }
  public get phoneEncrypt() {
    return this._encryptPhone;
  }
  public set pinEncrypt(encryptPin: string) {
    this._encryptPin = encryptPin;
  }
  public get pinEncrypt() {
    return this._encryptPin;
  }
  public set otpEncrypt(encryptOtp: string) {
    this._encryptOtp = encryptOtp;
  }
  public get otpEncrypt() {
    return this._encryptOtp;
  }
}
export default new Data();
