const pre = '/bmsa/';

export default {
  path: '/bmsa',
  title: '组件API',
  header: 'home',
  icon: 'md-speedometer',
  children: [
    {
      path: `${pre}table`,
      title: '表格',
    },
    {
      path: `${pre}tree`,
      title: '树',
    }
  ]
}
