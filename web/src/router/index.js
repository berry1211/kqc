import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Hello'

// 会員用
import Information from '@/components/members/Information'
import InformationDetail from '@/components/members/InformationDetail'
import Rules from '@/components/members/Rules'
import EditRule from '@/components/members/EditRule'
import KqcTimesList from '@/components/members/KqcTimesList'
import KqcTimesDetail from '@/components/members/KqcTimesDetail'
import EditKqcTimes from '@/components/members/EditKqcTimes'
import JobList from '@/components/members/JobList'
import JobDetail from '@/components/members/JobDetail'
import JobEdit from '@/components/members/JobEditDetail'
import CreateKqcTimes from '@/components/members/CreateKqcTimes'
import CreateInformation from '@/components/members/CreateInformation'
import EditInformation from '@/components/members/EditInformation'
import RecordList from '@/components/members/RecordList'
import RecordDetail from '@/components/members/RecordDetail'
import EditRecord from '@/components/members/EditRecord'
import CreateRecord from '@/components/members/CreateRecord'

// デベロッパーページ
import Developer from '@/components/developer/ForDeveloper'

// 共通要素
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import HeaderForMembers from '@/components/common/HeaderForMembers'
import Oops from '@/components/common/Ooooops'

// グローバルメニュー(常に表示されているメニュー)要素
import Schedule from '@/components/menu/Schedule'
import ClubMembers from '@/components/members/ClubMember'
import Links from '@/components/menu/Links'
import ContestResult from '@/components/menu/ContestResult'

Vue.use(Router)

/** ここではルーティングを行っています
*   path: 実際にアクセスされるときの相対パス
*   name: 名前。割りと適当に決めているが、importしたときと同じ名前のほうがわかりやすい
*   components: その画面内にどんなコンポーネントがあるかを示している。たとえば、どの画面にもフッターは存在するので、
*               どのcomponentsにもフッターは記述されている。
*
*   ========== ATTENTION ==========
*   componentsに記述される要素は、以下のルールに従います
*
*       component-name: imported-name
*
*   component-name : App.vueなどの親要素において、router-viewタグのnameで指定された名前
*   imported-name  : このindex.jsなどでimportされた際に決めた名前
*
*   ===============================
*/
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
        footer: Footer,
        header: Header
      }
    },
    {
      path: '/members/information',
      name: 'Information',
      components: {
        default: Information,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/infomation/:id',
      name: 'info-detail',
      components: {
        default: InformationDetail,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/infomation/:id/edit',
      name: 'EditInformation',
      components: {
        default: EditInformation,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/information/create',
      name: 'CreateInformation',
      components: {
        default: CreateInformation,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/rules',
      name: 'Rules',
      components: {
        default: Rules,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/rules/edit',
      name: 'EditRule',
      components: {
        default: EditRule,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/kqc-times',
      name: 'KQCTimes',
      components: {
        default: KqcTimesList,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/kqc-times/:id',
      name: 'kqctimes-detail',
      components: {
        default: KqcTimesDetail,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/kqc-times/:id/edit',
      name: 'EditKqcTimes',
      components: {
        default: EditKqcTimes,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/create-kqctimes',
      name: 'CreateKqcTimes',
      components: {
        default: CreateKqcTimes,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/record',
      name: RecordList,
      components: {
        default: RecordList,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/record/:id',
      name: 'RecordDetail',
      components: {
        default: RecordDetail,
        Footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/record/:id/edit',
      name: 'EditRecord',
      components: {
        default: EditRecord,
        Footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/create-record',
      name: CreateRecord,
      components: {
        default: CreateRecord,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/job',
      name: 'JobList',
      components: {
        default: JobList,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/job/:id',
      name: 'JobDetail',
      components: {
        default: JobDetail,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members/job/:id/edit',
      name: 'JobEdit',
      components: {
        default: JobEdit,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/members',
      name: 'Members',
      components: {
        default: ClubMembers,
        footer: Footer,
        header: HeaderForMembers
      }
    },
    {
      path: '/ooops',
      name: 'Ooops',
      component: Oops
    },
    {
      path: '/schedule',
      name: 'Schedule',
      components: {
        default: Schedule,
        footer: Footer,
        header: Header
      }
    },
    {
      path: '/links',
      name: 'Links',
      components: {
        default: Links,
        footer: Footer,
        header: Header
      }
    },
    {
      path: '/contest-result',
      name: 'ContestResult',
      components: {
        default: ContestResult,
        footer: Footer,
        header: Header
      }
    },{
      path: '/developer',
      name: 'ForDeveloper',
      components: {
        default: Developer,
        footer: Footer,
        header: HeaderForMembers
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
