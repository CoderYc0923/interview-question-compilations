import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "IT面试题汇总",
  description: "A Interview Question Compilations Site",
  lastUpdated: true,
  cleanUrls: true,
  base: "/interview-question-compilations",
  themeConfig: {
    logo: "https://raw.githubusercontent.com/CoderYc0923/image-bed/images/images/slogin.svg",
    nav: [{ text: "Home", link: "/" }],

    sidebar: {
      "/font-end/": [
        {
          text: "开始",
          items: [{ text: "介绍", link: "/font-end/starting" }],
        },
        {
          text: "HTML+CSS",
          items: [{ text: "基础面试题", link: "/font-end/html_css/iq" }],
        },
        {
          text: "JS",
          items: [
            { text: "基础面试题", link: "/font-end/js/iq" },
            { text: "进阶面试题", link: "/font-end/js/siq" },
          ],
        },
        {
          text: "TS",
          items: [],
        },
        {
          text: "Vue",
          items: [],
        },
        {
          text: "浏览器",
          items: [],
        },
        {
          text: "网络相关",
          items: [],
        },
        {
          text: "性能优化",
          items: [],
        },
        {
          text: "H5适配",
          items: [],
        },
        {
          text: "项目相关",
          items: [],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CoderYc0923/interview-question-compilations",
      },
    ],
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/CoderYc0923/image-bed/images/images/slogin.svg",
      },
    ],
  ],
});
