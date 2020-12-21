import _ from 'lodash';

const objectUtil = {
  /**
   * @desc 移除对象中有空值的属性 空值包含 undefined '' null
   * @param object
   */
  omitUndefinedAndEmptyStringAndNullValue(object) {
    const keys = Object.keys(object);

    const definedMap = {};

    keys.forEach((key) => {
      const value = object[key];

      if (value === undefined || value === '' || value === null) {
        return;
      }

      definedMap[key] = value;
    });

    return definedMap;
  },

  /**
   * @desc 移除对象中有空值的属性 空值包含 undefined null
   * @param object
   */
  omitUndefinedAndNullValue(object) {
    const keys = Object.keys(object);

    const definedMap = {};

    keys.forEach((key) => {
      const value = object[key];

      if (value === undefined || value === null) {
        return;
      }

      definedMap[key] = value;
    });

    return definedMap;
  },

  omitUndefinedValue(object) {
    const keys = Object.keys(object);

    const definedMap = {};

    keys.forEach((key) => {
      const value = object[key];

      if (value === undefined) {
        return;
      }

      definedMap[key] = value;
    });

    return definedMap;
  },

  mergeDefaultObject(targetObject, defaultObject) {
    return _.mergeWith(targetObject, defaultObject, (targetValue, defaultValue) => {
      return _.isUndefined(targetValue) ? defaultValue : targetValue;
    });
  },
};

export { objectUtil };
