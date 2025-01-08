import JSEncrypt from 'jsencrypt';

// 密钥对生成 http://web.chacuo.net/netrsakeypair
const publicKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuhHNT+jHAuqKwe0huYrCniVnvkYm/6QjD2ricBS1XcNKjBZCLQumhKB4C4usHo1RrXCtIVAmH9wUDKRFix5AOHK+4WFaFnDeHvBunSh4tuGFE4DWyMuK1vz0j9BRSTZm+YHAmdqQwG3Lh7tpf+QwWUcMg82F4/+DweIu/tsOk1QIDAQAB";

// 加密
export const encrypt = (txt) => {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey); // 设置公钥
    return encryptor.encrypt(txt); // 对数据进行加密
};
