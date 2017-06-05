let valids = {
  required: {
    valid(value) {
      return value !== null && value !== undefined && new String(value).length > 0;
    },
    message: '字段不能为空'
  },
  maxLen(value, configValue) {
    let result = value !== null && value !== undefined && new String(value).length <= configValue;
    return result === true ? true : `字段长度不能大于${configValue}`;
  },
  minLen(value, configValue) {
    let result = value !== null && value !== undefined && new String(value).length >= configValue;
    return result === true ? true : `字段长度不能小于${configValue}`;
  },
  max(value, configValue) {
    let result = value !== null && value !== undefined && new Number(value) <= configValue;
    return result === true ? true : `字段不能大于${configValue}`;
  },
  min(value, configValue) {
    let result = value !== null && value !== undefined && new Number(value) >= configValue;
    return result === true ? true : `字段不能小于${configValue}`;
  }
};
module.exports = valids;