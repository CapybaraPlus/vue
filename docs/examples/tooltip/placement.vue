<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ra-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <ra-button>top-start</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <ra-button>top</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <ra-button>top-end</ra-button>
      </ra-tooltip>
    </div>
    <div class="row">
      <ra-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <ra-button>left-start</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <ra-button>right-start</ra-button>
      </ra-tooltip>
    </div>
    <div class="row">
      <ra-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <ra-button class="mt-3 mb-3">left</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <ra-button>right</ra-button>
      </ra-tooltip>
    </div>
    <div class="row">
      <ra-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <ra-button>left-end</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <ra-button>right-end</ra-button>
      </ra-tooltip>
    </div>
    <div class="row center">
      <ra-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <ra-button>bottom-start</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <ra-button>bottom</ra-button>
      </ra-tooltip>
      <ra-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <ra-button>bottom-end</ra-button>
      </ra-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
