<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Input 输入框</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value1" placeholder="请输入" width="300px" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>v-model</code>实现数据的双向绑定，
              可以直接设置
              <code>width</code>来改变输入框的宽度，默认 auto。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;y-input v-model="value1" placeholder="请输入" width="300px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('CC')">
        <h3 id="CC">{{getNav('CC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input
                v-model="value2"
                size="large"
                placeholder="请输入"
                width="100px"
                style="margin-right: 10px"
              ></y-input>
              <y-input v-model="value3" placeholder="请输入" width="100px" style="margin-right: 10px"></y-input>
              <y-input
                v-model="value4"
                size="small"
                placeholder="请输入"
                width="100px"
                style="margin-right: 10px"
              ></y-input>
              <y-input
                v-model="value5"
                size="mini"
                placeholder="请输入"
                width="100px"
                style="margin-right: 10px"
              ></y-input>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>size</code>可以为
              <code>large</code>大、
              中（默认）、
              <code>small</code>小、
              <code>mini</code>极小。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('CC').name" />
            <pre>
            <code>
  &lt;y-input v-model="value2" size="large" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
  &lt;y-input v-model="value3" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
  &lt;y-input v-model="value4" size="small" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
  &lt;y-input v-model="value5" size="mini" placeholder="请输入" width="100px" style="margin-right: 10px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('JY')">
        <h3 id="JY">{{getNav('JY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value6" disabled placeholder="请输入" width="300px" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过添加
              <code>disabled</code>属性可设置为不可用状态。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('JY').name" />
            <pre>
            <code>
  &lt;y-input v-model="value6" disabled placeholder="请输入" width="300px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('ZD')">
        <h3 id="ZD">{{getNav('ZD').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value6" readonly placeholder="请输入" width="300px" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过添加
              <code>readonly</code>属性可设置为只读状态。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('ZD').name" />
            <pre>
            <code>
  &lt;y-input v-model="value6" readonly placeholder="请输入" width="300px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('KQK')">
        <h3 id="KQK">{{getNav('KQK').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value9" clearable placeholder="请输入" width="300px" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>clearable</code>属性可显示清空按钮。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('KQK').name" />
            <pre>
            <code>
  &lt;y-input v-model="value9" clearable placeholder="请输入" width="300px" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('QHTB')">
        <h3 id="QHTB">{{getNav('QHTB').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-input v-model="value7" placeholder="请输入" width="300px" class="m-b-5">
                <y-icon type="sousuo" slot="prefix"></y-icon>
              </y-input>
              <br />
              <y-input v-model="value8" clearable placeholder="请输入" width="300px">
                <y-icon type="sousuo" slot="suffix"></y-icon>
              </y-input>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>prefix</code> 和
              <code>suffix</code> 的 slot 设置前缀及后缀图标
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <code-action-bar :name="getNav('QHTB').name" />
            <pre>
            <code>
  &lt;y-input v-model="value7" placeholder="请输入" width="300px" class="m-b-5"&gt;
    &lt;y-icon type="sousuo" slot="prefix"&gt;&lt;/y-icon&gt;
  &lt;/y-input&gt;
  &lt;br /&gt;
  &lt;y-input v-model="value8" placeholder="请输入" width="300px"&gt;
    &lt;y-icon type="sousuo" slot="suffix"&gt;&lt;/y-icon&gt;
  &lt;/y-input&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table
        :name="$options.name"
        :propList="filterVersion(propList)"
        :slotList="filterVersion(slotList)"
        :eventList="filterVersion(eventList)"
      ></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
export default {
  name: "Input",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0"
        },
        {
          id: "CC",
          name: "尺寸",
          version: "1.0.0"
        },
        {
          id: "ZD",
          name: "只读",
          version: "1.0.0"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0"
        },
        {
          id: "KQK",
          name: "可清空",
          version: "1.0.0"
        },
        {
          id: "QHTB",
          name: "前后图标",
          version: "1.0.0"
        },
        {
          id: "PROPS",
          name: "Input Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Input Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Input Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "type",
          explain: `输入框类型，可选值为<code class="keyword-code">text</code>、<code class="keyword-code">password</code>、<code class="keyword-code">textarea</code>、<code class="keyword-code">url</code>、<code class="keyword-code">email</code>、<code class="keyword-code">date</code>、<code class="keyword-code">number</code>、<code class="keyword-code">tel</code>`,
          type: "String",
          default: "-"
        },
        {
          attr: "value",
          explain: `绑定的值，可使用<code class="keyword-code">v-model</code>双向绑定`,
          type: "String | Number",
          default: "空"
        },
        {
          attr: "size",
          explain: `输入框尺寸，可选值为<code class="keyword-code">large</code>、<code class="keyword-code">small</code>、<code class="keyword-code">mini</code>或者不设置`,
          type: "String",
          default: "-"
        },
        {
          attr: "maxlength",
          explain: `最大输入长度`,
          type: "Number",
          default: "-"
        },
        {
          attr: "width",
          explain: `宽度`,
          type: "String",
          default: "auto"
        },
        {
          attr: "placeholder",
          explain: `占位文本`,
          type: "String",
          default: "空"
        },
        {
          attr: "disabled",
          explain: `设置输入框为禁用状态`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "readonly",
          explain: `设置输入框为只读状态`,
          type: "Boolean",
          default: "false"
        }
      ],
      slotList: [
        {
          attr: "prefix",
          explain: `输入框头部图标`
        },
        {
          attr: "suffix",
          explain: `输入框尾部图标`
        }
      ],
      eventList: [
        {
          attr: "on-focus",
          explain: `输入框聚焦时触发`,
          return: "无"
        },
        {
          attr: "on-enter",
          explain: `按下回车键时触发`,
          return: "value"
        },
        {
          attr: "on-click",
          explain: `点击input时触发`,
          return: "event"
        },
        {
          attr: "on-change",
          explain: `数据改变时触发`,
          return: "value"
        },
        {
          attr: "on-blur",
          explain: `输入框失去焦点时触发`,
          return: "event"
        },
        {
          attr: "on-clear",
          explain: `点击清空按钮时触发`,
          return: "无"
        },
        {
          attr: "on-prefix-click",
          explain: `点击头部图标时触发`,
          return: "event"
        },
        {
          attr: "on-suffix-click",
          explain: `点击尾部图标时触发`,
          return: "event"
        },
        {
          attr: "on-keydown",
          explain: `原生的 keydown 事件`,
          return: "event"
        },
        {
          attr: "on-keypress",
          explain: `原生的 keypress 事件`,
          return: "event"
        },
        {
          attr: "on-keyup",
          explain: `原生的 keyup 事件`,
          return: "event"
        }
      ]
    };
  }
};
</script>