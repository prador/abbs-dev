import homeConfig from './configs/homeConfig'
import pageConfig from './configs/pageConfig'
import blogConfig from './configs/blogConfig'
import newsConfig from './configs/newsConfig'
import eventConfig from './configs/eventConfig'
import testimonialConfig from './configs/testimonialConfig'
import facultyConfig from './configs/facultyConfig'
import docsConfig from './configs/docsConfig'
import naacConfig from './configs/naacConfig'
import teamConfig from './configs/teamConfig'
import navigationConfig from './configs/navigationConfig'
import generalConfig from './configs/generalConfig'
import conferenceConfig from './configs/conferenceConfig'

module.exports = {
  cms_manual_init: true,
  // Backend configuration, in this case with git
  // backend: {
  //   name: "git-gateway",
  //   branch: "main",
  //   squash_merges: true,
  // },
  // Backend config for vercel and github
  backend: {
    name:"github",
    repo: "prador/abbs-dev",
    base_url: "https://abbs-dev.vercel.app",
    auth_endpoint: "api/auth",
    branch: "main",
  },
  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: "public/static/img/",
  display_url: "/admin/help",
  logo_url: "static/img/00-abbs-logo-black.svg",
  // Where to link the images
  public_folder: "static/img/",
  collections: [
    homeConfig,
    pageConfig,
    blogConfig,
    newsConfig,
    eventConfig,
    testimonialConfig,
    facultyConfig,
    docsConfig,
    naacConfig,
    teamConfig,
    conferenceConfig,
    navigationConfig,
    generalConfig
  ]
}