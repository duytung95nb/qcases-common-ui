import _ from "lodash";

export function buildFormData<T extends Record<string, unknown>>(
    form?: HTMLFormElement | undefined
  ): T {
    const data = new FormData(form);
    const keys = Array.from(data.entries());
    const resultFormDataAsObject = {};
    for (const [k, v] of keys) {
      _.set(resultFormDataAsObject, k, v);
    }
    return resultFormDataAsObject as T;
  }
  