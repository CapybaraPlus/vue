import { ref, computed } from "vue";
const useLabelWidth = () => {
  const labelWidthArray = ref([]);
  function registerLabelWidth(val) {
    labelWidthArray.value.push(val);
  }
  function deregisterLableWidth(val) {
    const targetIndex = getLabelWidthIndex(val);
    if (targetIndex != -1) {
      labelWidthArray.value.splice(targetIndex, 1);
    }
  }
  function getLabelWidthIndex(val) {
    return labelWidthArray.value.findIndex((labelWidth2) => labelWidth2 === val);
  }
  const labelWidth = computed(() => {
    return labelWidthArray.value.length > 0 ? Math.max(...labelWidthArray.value) : 0;
  });
  return {
    registerLabelWidth,
    deregisterLableWidth,
    labelWidth
  };
};
const useFormItemContext = () => {
  const formItemContextArr = ref([]);
  function registerFormItemContext(context) {
    formItemContextArr.value.push(context);
  }
  function deregisterFormItemContext(id) {
    const targetIndex = getFormItemContext(id);
    if (targetIndex != -1) {
      formItemContextArr.value.splice(targetIndex, 1);
    }
  }
  function getFormItemContext(id) {
    const targetIndex = formItemContextArr.value.findIndex(
      (context) => context._id === id
    );
    return targetIndex;
  }
  function resetValidateState() {
    formItemContextArr.value.forEach((context) => {
      context.resetValidateState();
    });
  }
  async function validate() {
    return new Promise((resolve, reject) => {
      Promise.all(formItemContextArr.value.map((context) => context.validate())).then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    });
  }
  return {
    registerFormItemContext,
    deregisterFormItemContext,
    resetValidateState,
    validate
  };
};
export {
  useFormItemContext,
  useLabelWidth
};
