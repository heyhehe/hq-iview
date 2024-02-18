import BasicLayout from '@/layouts/basic-layout';

const meta = {
  auth: true
};

const pre = 'bmsa-';

export default {
  path: '/bmsa',
  name: 'bmsa',
  // redirect: {
  //   name: `${pre}table`
  // },
  meta,
  component: BasicLayout,
  children: [
    {
      path: 'table',
      name: `${pre}table`,
      meta: {
        ...meta,
        title: '表格',
        closable: false
      },
      component: () => import('@/pages/bmsa/table')
    },
    {
      path: 'tree',
      name: `${pre}tree`,
      meta: {
        ...meta,
        title: '树',
        closable: false
      },
      component: () => import('@/pages/bmsa/tree')
    },
  ]
};
