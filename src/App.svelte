<!-- Welcome to eslint-plugin-svelte -->
<script lang="ts">
    import Button from './lib/Button.svelte'
    import Slider from './lib/Slider.svelte'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'
    import Input from './lib/Input.svelte'
    import Table from './lib/Table.svelte'

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    })

  
    const a = 1
    let b = 2
    let c = 2
    const user = {
        firstname: 'Ada',
        lastname: 'Lovelace'
    }
    let current = 'foo'
    const color = 'red'
    const active = true
    const onclick = e => console.log({ e })
    let fillings = 'Rice'
    const sourcehead = [
        {
            'children': [
                {
                    'prop': 'REGION_NAME',
                    'label': '单位'
                },
                {
                    'prop': 'AREA_NAME',
                    'label': '部门/区县名称'
                },
                {
                    'prop': 'YF_NAME',
                    'label': 'BU/营服名称'
                },
                {
                    'prop': 'YYT_NAME',
                    'label': '营业厅名称'
                },
                {
                    'prop': 'USER_NAME',
                    'label': '姓名'
                },
                {
                    'prop': 'EMPLOYEE_NUMBER',
                    'label': '员工编码'
                }
            ],
            'prop': 'JBXX',
            'label': '基本信息'
        },
        {
            'children': [
                {
                    'prop': 'ORG_1',
                    'label': '组织名称'
                },
                {
                    'prop': 'JOB_LEV',
                    'label': '岗级'
                },
                {
                    'prop': 'ORG_PROPERTY',
                    'label': '组织属性'
                },
                {
                    'prop': 'IS_HX_UNITS',
                    'label': '是否划小单元'
                },
                {
                    'prop': 'JOB',
                    'label': '职务'
                },
                {
                    'prop': 'POSITION_PROPERTY',
                    'label': '专业线类别'
                },
                {
                    'prop': 'POST_FAMILY',
                    'label': '岗位族'
                },
                {
                    'prop': 'ORG_PERSSION',
                    'label': '岗位名称',
                    'fixed':'right'
                },
                {
                    'prop': 'ATTRIBUTE1',
                    'label': '备用'
                }
            ],
            'prop': 'ZZGW',
            'label': '组织与岗位'
        }
    ]
    const columns = sourcehead.map(it => it.children.map(({ prop:key, label:title }) => ({ title, key }))).reduce((res, it) => (res.push(...it), res), [])
    columns[8].fixed = 'right'
const tableData = [
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '大学本科',
        'FIRST_EDUCATION': '大学本科',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '其它',
        'IS_HX_UNITS': '否',
        'SEX': '女',
        'PHONE': '18602030712',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '深圳大学',
        'EMAIL': 'zengsuling@chinaunicom.cn',
        'FIRST_DEGREE': '学士',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'zengsuling',
        'EMPLOYEE_NUMBER': '0549996',
        'JOB': '员工',
        'HIGHESTDEGREE': '学士',
        'AGE': '39',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '校园招聘',
        'CARDS_ID': '441424198407090346',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '是',
        'USER_NAME': '曾素灵',
        'POSITION_NAME': '经营支撑',
        'ATTRIBUTE7': '经营支撑',
        'POST_FAMILY': '经营支撑',
        'ORG_PERSSION': '999000',
        'JOB_LEV': '中国联通.12.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '851824',
        'CITY_NAME': '广州',
        'CARD_ID': '441424**********46',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '会计学',
        'ENTRY_DATE': '2007-06-25',
        'RN': '1',
        'YYT_NAME': ''
    },
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '大学本科',
        'FIRST_EDUCATION': '大学专科',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '其它',
        'IS_HX_UNITS': '否',
        'SEX': '女',
        'PHONE': '18602031969',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '广州城市职业学院',
        'EMAIL': 'zhangsuishan@chinaunicom.cn',
        'FIRST_DEGREE': '无',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'zhangsuishan',
        'EMPLOYEE_NUMBER': '0209159',
        'JOB': '员工',
        'HIGHESTDEGREE': '无',
        'AGE': '39',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '社会招聘',
        'CARDS_ID': '440102198501070020',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '否',
        'USER_NAME': '张穗珊',
        'POSITION_NAME': '服务支撑',
        'ATTRIBUTE7': '服务支撑',
        'POST_FAMILY': '服务支撑',
        'ORG_PERSSION': '000',
        'JOB_LEV': '中国联通.09.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '494981',
        'CITY_NAME': '广州',
        'CARD_ID': '440102**********20',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '财务管理',
        'ENTRY_DATE': '2003-01-01',
        'RN': '1',
        'YYT_NAME': ''
    },
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '大学本科',
        'FIRST_EDUCATION': '大学专科',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '其它',
        'IS_HX_UNITS': '否',
        'SEX': '女',
        'PHONE': '18602031939',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '广大财税高等专科学校',
        'EMAIL': 'yangyinglin@chinaunicom.cn',
        'FIRST_DEGREE': '无',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'yangyinglin',
        'EMPLOYEE_NUMBER': '0181170',
        'JOB': '员工',
        'HIGHESTDEGREE': '',
        'AGE': '47',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '调入',
        'CARDS_ID': '44200019770214278X',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '否',
        'USER_NAME': '杨颖琳',
        'POSITION_NAME': '服务支撑',
        'ATTRIBUTE7': '服务支撑',
        'POST_FAMILY': '服务支撑',
        'ORG_PERSSION': '00',
        'JOB_LEV': '中国联通.12.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '2975',
        'CITY_NAME': '广州',
        'CARD_ID': '442000**********8X',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '会计',
        'ENTRY_DATE': '2002-02-01',
        'RN': '1',
        'YYT_NAME': ''
    },
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '硕士研究生',
        'FIRST_EDUCATION': '硕士研究生',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '其它',
        'IS_HX_UNITS': '否',
        'SEX': '女',
        'PHONE': '18602031160',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '德保罗大学',
        'EMAIL': 'lengzy6@chinaunicom.cn',
        'FIRST_DEGREE': '硕士',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'lengzy6',
        'EMPLOYEE_NUMBER': '0892154',
        'JOB': '员工',
        'HIGHESTDEGREE': '硕士',
        'AGE': '35',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '',
        'CARDS_ID': '440301198810021921',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '',
        'USER_NAME': '冷祉沂',
        'POSITION_NAME': '服务支撑',
        'ATTRIBUTE7': '服务支撑',
        'POST_FAMILY': '服务支撑',
        'ORG_PERSSION': '服务支撑',
        'JOB_LEV': '中国联通.08.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '1414323',
        'CITY_NAME': '广州',
        'CARD_ID': '440301**********21',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '会计',
        'ENTRY_DATE': '2018-06-12',
        'RN': '1',
        'YYT_NAME': ''
    },
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '大学本科',
        'FIRST_EDUCATION': '大学本科',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '其它',
        'IS_HX_UNITS': '否',
        'SEX': '男',
        'PHONE': '18602031910',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '广东财经大学',
        'EMAIL': 'chenl226@chinaunicom.cn',
        'FIRST_DEGREE': '学士',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'chenl226',
        'EMPLOYEE_NUMBER': '0892134',
        'JOB': '员工',
        'HIGHESTDEGREE': '学士',
        'AGE': '30',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '',
        'CARDS_ID': '440184199310045710',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '',
        'USER_NAME': '陈亮',
        'POSITION_NAME': '经营支撑',
        'ATTRIBUTE7': '经营支撑',
        'POST_FAMILY': '经营支撑',
        'ORG_PERSSION': '999',
        'JOB_LEV': '中国联通.08.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '1414270',
        'CITY_NAME': '广州',
        'CARD_ID': '440184**********10',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '会计学',
        'ENTRY_DATE': '2018-06-07',
        'RN': '1',
        'YYT_NAME': ''
    },
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '大学本科',
        'FIRST_EDUCATION': '大学本科',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '其它',
        'IS_HX_UNITS': '否',
        'SEX': '女',
        'PHONE': '18602032487',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '河南财经政法大学',
        'EMAIL': 'limh84@chinaunicom.cn',
        'FIRST_DEGREE': '学士',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'limh84',
        'EMPLOYEE_NUMBER': '0882392',
        'JOB': '员工',
        'HIGHESTDEGREE': '学士',
        'AGE': '33',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '',
        'CARDS_ID': '412827199009115561',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '',
        'USER_NAME': '李明慧',
        'POSITION_NAME': '内部审计',
        'ATTRIBUTE7': '内部审计',
        'POST_FAMILY': '内部审计',
        'ORG_PERSSION': '内部审计',
        'JOB_LEV': '中国联通.07.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '1393279',
        'CITY_NAME': '广州',
        'CARD_ID': '412827**********61',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '资产评估',
        'ENTRY_DATE': '2017-06-01',
        'RN': '1',
        'YYT_NAME': ''
    },
    {
        'BUSINESS_SCENARIOS': '',
        'ORG_ID': '221949',
        'HIGHESTEDU': '硕士研究生',
        'FIRST_EDUCATION': '硕士研究生',
        'CODE_DESC': '合同制',
        'POSITION_PROPERTY': '市场线',
        'IS_HX_UNITS': '否',
        'SEX': '男',
        'PHONE': '18602031417',
        'ORG_1': '广东省分公司财务共享支撑中心',
        'COLLEGE_NAME': '阿伯丁大学',
        'EMAIL': 'qiansy5@chinaunicom.cn',
        'FIRST_DEGREE': '硕士',
        'STATUS': '否',
        'IS_INNOVATE': '',
        'OA_ACCOUNT': 'qiansy5',
        'EMPLOYEE_NUMBER': '0881557',
        'JOB': '员工',
        'HIGHESTDEGREE': '硕士',
        'AGE': '30',
        'YF_NAME': '广东省分公司财务共享支撑中心',
        'ATTRIBUTE2': '',
        'CARDS_ID': '341202199311301710',
        'ATTRIBUTE1': '',
        'PERSONATTR': '1',
        'AREA_NAME': '集约化生产中心',
        'FRESH_COLLEGE': '',
        'USER_NAME': '钱适雨',
        'POSITION_NAME': '人效管理岗',
        'ATTRIBUTE7': '人效管理岗',
        'POST_FAMILY': '市场-综合统筹',
        'ORG_PERSSION': '人效管理岗',
        'JOB_LEV': '中国联通.08.A.',
        'REGION_NAME': '省本部',
        'PERSON_ID': '1391002',
        'CITY_NAME': '广州',
        'CARD_ID': '341202**********10',
        'ORG_PROPERTY': '本部管理',
        'PROFESSION': '金融投资管理',
        'ENTRY_DATE': '2017-04-10',
        'RN': '1',
        'YYT_NAME': ''
    }
]
    let yes = false
</script>
<input type=checkbox bind:checked={yes} />
<Input bind:value={fillings} />
{#if yes}
    <Table columns={columns} data={tableData} />
{:else}
    <Button on:click={onclick}>边框按钮{fillings}</Button>
{/if}
<progress value={$progress} />
<div>{$progress.toFixed(3)}</div>
<button on:click="{() => progress.set(0)}">
    0%
</button>

<button on:click="{() => progress.set(0.25)}">
    25%
</button>

<button on:click="{() => progress.set(0.5)}">
    50%
</button>

<button on:click="{() => progress.set(0.75)}">
    75%
</button>

<button on:click="{() => progress.set(1)}">
    100%
</button>

<input
    type="number"
    bind:value={b} />
<input
    type="number"
    bind:value={c} />
<p>{a} + {b} + {c} = {a + b + c}</p>

<input bind:value={user.firstname} />
<input bind:value={user.lastname} />

<h1>Hello {user.firstname}!</h1>

{#if a}
    <div>foo</div>
{:else if b}
    <div>bar</div>
{/if}

<button
    type=button
    class:selected={current === 'foo'} class:active
    on:click="{() => current = 'foo'}"
>foo</button>

<div style:color>...</div>

<Slider />
<style>
  
</style>