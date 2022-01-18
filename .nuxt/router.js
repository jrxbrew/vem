import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05c92d17 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _8aa1d0ac = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _ea966940 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _258107dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _05c92d17,
    name: "about"
  }, {
    path: "/contact",
    component: _8aa1d0ac,
    name: "contact"
  }, {
    path: "/projects",
    component: _ea966940,
    name: "projects"
  }, {
    path: "/",
    component: _258107dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
