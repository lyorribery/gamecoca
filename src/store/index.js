import { createStore } from 'vuex'
import { getClassList, getStationImgList } from '@/apis/home.js'

const store = createStore({
  state: () => ({
    loading_visible: false,
    user_info: {},
    station_base: {
      "marquee": "",
      "stationName": "brbr games - BRBR GAMES",
      "fullStationLogo": "https://file.ckgame.vip/master/1013/2b096982e2a340c092bfeaa9d9170d71.png",
      "stationDes": "brbr games - BRBR GAMES",
      "stationSeo": "brbr games - BRBR GAMES",
      "onlineCustomerLicense": "18925312",
      "fullStationIco": "https://file.ckgame.vip/master/1013/f0729a8c3c084d71aa79ae66b8755090.png",
      "recentGameRecordEnabled": false,
      "recentGameRecordLabel": "Registro de Jogos",
      "recentGameRecordIcon": "/master/1013/112f82fc0f024089a48da8a61f966bf9.png",
      "fullRecentGameRecordIcon": "https://file.ckgame.vip/master/1013/112f82fc0f024089a48da8a61f966bf9.png",
      "bottomTabBar": [{
        "id": "1",
        "name": "Inicio",
        "path": "/home",
        "routerType": 0,
        "icon": "<svg class=\"tabbar_icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><path d=\"M204.896 863.104c-3.456 0-6.912-0.128-10.4-0.416-107.776-8.832-179.584-169.792-163.488-366.4C47.36 296.352 141.024 151.744 249.44 161.056c48.384 3.968 81.92 42.912 105.76 76.416 10.24 14.4 6.88 34.368-7.52 44.64-14.432 10.24-34.368 6.816-44.64-7.552-23.456-32.96-41.6-48.288-58.816-49.728-59.008-4.256-135.584 107.584-149.408 276.672-13.824 169.056 44.192 292.384 104.928 297.344 52.96 4.96 105.024-61.152 132.192-166.848 3.616-14.112 16.352-24 30.976-24h299.904c14.432 0 27.072 9.664 30.88 23.552C722.848 738.24 774.912 803.904 829.024 798.4c29.408-2.976 57.28-33.632 76.448-84.096 22.208-58.592 30.016-135.04 21.888-215.232s-31.072-153.536-64.64-206.56c-28.928-45.696-62.016-70.592-91.744-67.2-18.336 1.888-39.616 19.2-59.808 48.736A31.958 31.958 0 0 1 684.736 288H448c-17.664 0-32-14.336-32-32s14.336-32 32-32h220.48c29.28-37.92 61.568-58.848 96.064-62.336C871.872 150.72 971.136 296.256 991.04 492.672c9.088 89.888-0.032 176.672-25.76 244.384-28.512 75.072-74.592 119.456-129.824 125.056-81.76 8.352-156.128-63.968-196.544-190.08H387.104c-36.48 119.52-104.512 191.072-182.208 191.072zM320 448h-32v-32c0-17.664-14.336-32-32-32s-32 14.336-32 32v32h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v32c0 17.696 14.336 32 32 32s32-14.304 32-32v-32h32c17.664 0 32-14.336 32-32s-14.336-32-32-32z m416-64a2 2 0 1 0 128 0 2 2 0 1 0-128 0zM608 512a2 2 0 1 0 128 0 2 2 0 1 0-128 0z\" fill=\"#ffffff\"></path></svg>",
        "sort": 1
      }, {
        "id": "2",
        "name": "Agente",
        "path": "/refer/invite",
        "routerType": 2,
        "icon": "<svg class=\"tabbar_icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><path d=\"M1022.293364 470.409918a511.990827 511.990827 0 1 0-551.883445 551.883446 513.484133 513.484133 0 0 0 551.883445-551.883446zM697.392519 448.01032l-49.919106 91.73169A53.332378 53.332378 0 1 1 554.675076 489.182915l6.826544-12.373111c0-1.279977 0-2.559954-1.493306-2.559954a132.477626 132.477626 0 0 0-132.264297 132.264297v90.025053a53.332378 53.332378 0 0 1-106.664756 0v-90.025053a238.929053 238.929053 0 0 1 238.929053-238.929053 1.706636 1.706636 0 0 0 1.493306-2.346625l-6.826544-12.373111a53.332378 53.332378 0 1 1 93.864985-50.559094l49.919105 92.585008a54.825684 54.825684 0 0 1-1.066647 53.119048z\" fill=\"#ffffff\"></path></svg>",
        "sort": 2
      }, {
        "id": "3",
        "name": "promotion",
        "path": "/promotion",
        "icon": "<svg class=\"tabbar_icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><path d=\"M474.18097 127.290893l-134.35708 0q-13.933327 0-21.397609-6.469045t-10.449995-16.421421-2.985713-22.392847 1.990475-23.388084q0.995238-10.947614 3.980951-23.885703t8.45952-21.895228 14.430946-11.942852 21.895228 4.976188q14.928564 8.957139 33.83808 19.407134t36.823792 20.89999 33.340461 18.909515 23.388084 13.435708q9.952376 6.966663 14.928564 15.426183t3.980951 15.923802-7.961901 12.44047-19.904753 4.976188zM551.809505 126.295656l133.361843 0q13.933327 0 21.397609-6.469045t10.449995-16.421421 2.985713-22.392847-0.995238-23.388084q-1.990475-10.947614-4.478569-23.388084t-7.961901-21.397609-14.430946-11.942852-21.895228 3.980951q-14.928564 8.957139-33.83808 19.407134t-37.321411 20.89999-33.83808 18.909515-22.392847 13.435708q-10.947614 6.966663-15.923802 15.426183t-3.980951 15.923802 7.961901 12.44047 20.89999 4.976188zM460.247643 191.981339l-288.618913 0q-31.847604 0-41.302362 10.449995t-9.454758 33.340461l0 87.580912q0 24.880941 10.449995 36.823792t41.302362 11.942852l287.623676 0 0-180.138011zM568.728545 191.981339l284.637963 0q31.847604 0 43.292837 12.44047t11.445233 35.330936l0 85.590436q0 23.885703-10.449995 35.330936t-41.302362 11.445233l-287.623676 0 0-180.138011zM460.247643 424.866945l-305.537953 0 0 163.218972 0 64.690446 0 60.709496 0 51.752357 0 35.828555q0 50.757119 28.861891 78.623773t89.571387 27.866654l187.104675 0 0-482.690252zM568.728545 424.866945l304.542716 0 0 373.214112q-0.995238 50.757119-28.861891 80.116629t-88.576149 29.35951l-187.104675 0 0-482.690252z\"></path></svg>",
        "sort": 3
      }, {
        "id": "4",
        "name": "inbox",
        "path": "/inbox",
        "icon": "<svg class=\"tabbar_icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><path d=\"M863.460142 234.780211c12.746302-9.595542 10.121522-17.447371-5.832845-17.447371l-693.052542 0c-15.954367 0-18.583241 7.856945-5.843078 17.45965l328.98885 247.964488c12.740162 9.602705 33.592073 9.608845 46.338375 0.013303L863.460142 234.780211z\" fill=\"#3D3B4F\"></path><path d=\"M678.609087 450.79708c-12.746302 9.595542-13.45136 26.15673-1.566682 36.801161l211.248262 189.215456c11.883655 10.643408 10.57587 12.375865-2.908236 3.847631L631.603517 520.147564c-13.484106-8.528234-34.942837-7.653307-47.690162 1.941212l-49.876967 37.550221c-12.746302 9.595542-33.598212 9.589402-46.338375-0.013303l-50.363038-37.960567c-12.740162-9.602705-34.192753-10.475586-47.671743-1.941212l-254.139118 160.925133c-13.478989 8.53642-14.757099 6.840802-2.838651-3.76679l212.452693-189.088566c11.917424-10.606569 11.244089-27.14115-1.496074-36.743856l-257.81381-194.320731c-12.740162-9.602705-23.164582-4.406356-23.164582 11.54801l0 562.683333c0 15.953344 13.053294 29.007661 29.007661 29.007661l838.401931 0c15.954367 0 29.007661-13.054317 29.007661-29.007661l0-562.311873c0-15.954367-10.42749-21.156856-23.173792-11.561313L678.609087 450.79708z\" fill=\"#3D3B4F\"></path></svg>",
        "sort": 4
      }, {
        "id": "5",
        "name": "Perfil",
        "path": "/mine",
        "icon": "<svg class=\"tabbar_icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><path d=\"M512 354.176m-185.984 0a185.984 185.984 0 1 0 371.968 0 185.984 185.984 0 1 0-371.968 0Z\" fill=\"#333333\"></path><path d=\"M644.48 559.36c-37.888 25.344-83.456 40.32-132.48 40.32s-94.592-14.848-132.48-40.32c-106.624 44.16-186.368 140.032-208 256.384-6.144 33.152 19.584 63.744 53.376 63.744h574.336c33.664 0 59.52-30.592 53.376-63.744-21.76-116.224-101.504-212.096-208.128-256.384z\" fill=\"#333333\"></path></svg>",
        "sort": 5
      }],
      "cpf": false,
      "birthday": false,
      "isAge18Plus": false,
      "theme": "black_green",
      "isAppDownload": false,
      "isAppDownloadTip": false
    },
    activity_notice: {
      "orders": [],
      "records": [{
        "id": 9,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/02dcd14502de4a1194e252f9e4fa570d.png",
        "noticeTitle": "APP",
        "noticeIntroduction": "⏬ Ganhe 5R$ baixando nosso APP!",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/ef8972fb341945648a6811a537596e69.png",
        "noticeType": 1,
        "noticeTypeName": "Recharge Notice",
        "noticeContent": "<p style=\"text-align: center;\"><span style=\"color: rgb(255, 236, 61);\"><strong>\uD83C\uDF89 Ganhe 5R$ baixando nosso APP!</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\">Faça o download e faça login no APP da nossa plataforma para receber seu bônus de 5R$.</span></p><p><span style=\"color: rgb(250, 250, 250);\">\uD83D\uDCA1 </span><span style=\"color: rgb(250, 250, 250);\"><strong>Somente para membros ativos que já fizeram recargas.</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\">\uD83D\uDD12 </span><span style=\"color: rgb(250, 250, 250);\"><strong>Regra simples</strong></span><span style=\"color: rgb(250, 250, 250);\">: Bônus com 5x de rollover e apenas 1 participação por membro.</span></p><p><span style=\"color: rgb(250, 250, 250);\">\uD83D\uDC49 Não perca! </span></p>"
      }, {
        "id": 8,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/575b31f8f6874811b6c6d3e0eb6a3615.png",
        "noticeTitle": "PARCEIRO",
        "noticeIntroduction": "? PROGRAMA DE AFILIADOS",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/a05c32c80b78438fadfd96c324423a03.png",
        "noticeType": 1,
        "noticeTypeName": "Recharge Notice",
        "noticeContent": "<p><span style=\"color: rgb(255, 236, 61);\"><strong>\uD83C\uDFAF Programa de Parceria Exclusivo para Agentes</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Seja um agente parceiro do nosso plataforma e multiplique seus ganhos!</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\">Compartilhe seu link exclusivo, convide novos membros e aproveite uma renda extra com base nas recargas e apostas realizadas pelos seus indicados. Quanto mais pessoas você convidar, maior será sua comissão! \uD83D\uDE80</span></p><hr/><p><strong>\uD83D\uDCCC </strong><span style=\"color: rgb(255, 236, 61);\"><strong>Benefícios do Programa de Parceria</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"> 1. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Comissões sobre Depósitos</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Receba uma porcentagem de comissão para</span> <span style=\"color: rgb(255, 77, 79);\"><strong>todas as recargas</strong></span> <span style=\"color: rgb(250, 250, 250);\">realizadas pelos membros registrados com o seu link exclusivo.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Quanto mais seus indicados depositarem, mais você ganha!</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 2. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Comissões sobre Apostas</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Ganhe comissões com base em</span> <span style=\"color: rgb(255, 77, 79);\"><strong>todas as apostas</strong></span> <span style=\"color: rgb(250, 250, 250);\">realizadas pelos seus indicados.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Cada aposta realizada por seus membros gera ganhos para você.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 3. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Comissões Crescentes</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Quanto mais membros você trouxer, maior será sua comissão!</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Nosso sistema de</span> <span style=\"color: rgb(255, 77, 79);\"><strong>comissões progressivas</strong></span> <span style=\"color: rgb(250, 250, 250);\">garante recompensas ainda mais atrativas para nossos parceiros mais dedicados.</span></p><hr/><p><span style=\"color: rgb(255, 236, 61);\"><strong>\uD83D\uDD17 Como Funciona?</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"> 1. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Acesse sua área de agente</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Entre no painel de controle do agente para gerar e copiar seu</span> <span style=\"color: rgb(255, 77, 79);\"><strong>link exclusivo de indicação</strong></span><span style=\"color: rgb(255, 77, 79);\">.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 2. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Compartilhe seu link</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Divulgue seu link em redes sociais, grupos de amigos ou outros canais.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Novos membros que se registrarem através do seu link se tornarão seus indicados automaticamente.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 3. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Acompanhe seus ganhos</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Monitore em tempo real os registros, recargas e apostas dos seus indicados no painel do agente.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Veja sua comissão crescer à medida que mais pessoas se registram e participam!</span></p><hr/><p><strong>\uD83D\uDC8E </strong><span style=\"color: rgb(255, 236, 61);\"><strong>Níveis de Comissão</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\">Nosso programa recompensa seu desempenho!</span></p><p><span style=\"color: rgb(255, 77, 79);\"> • </span><span style=\"color: rgb(255, 77, 79);\"><strong>Comissões sobre recargas</strong></span><span style=\"color: rgb(255, 77, 79);\">: Até </span><span style=\"color: rgb(255, 77, 79);\"><strong>X% do valor depositado</strong></span> <span style=\"color: rgb(250, 250, 250);\">por seus indicados.</span></p><p><span style=\"color: rgb(255, 77, 79);\"> • </span><span style=\"color: rgb(255, 77, 79);\"><strong>Comissões sobre apostas</strong></span><span style=\"color: rgb(255, 77, 79);\">: Até </span><span style=\"color: rgb(255, 77, 79);\"><strong>X% do valor apostado</strong></span><span style=\"color: rgb(250, 250, 250);\"> por seus indicados.</span></p><p><span style=\"color: rgb(250, 250, 250);\"><em>(os percentuais podem ser ajustados conforme o planejamento financeiro)</em></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\">\uD83D\uDD3A Quanto mais indicados, maior será a porcentagem de comissão liberada para você!</span></p><hr/><p><strong>\uD83C\uDF81</strong><span style=\"color: rgb(255, 236, 61);\"><strong> Bônus Exclusivo para Novos Agentes</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"> • Cadastre-se como agente e receba um</span> <span style=\"color: rgb(255, 77, 79);\"><strong>bônus de boas-vindas</strong></span> <span style=\"color: rgb(250, 250, 250);\">exclusivo ao trazer seus 5 primeiros indicados que realizarem depósitos!</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Aproveite promoções exclusivas e aumente ainda mais seus ganhos.</span></p><hr/><p><strong>\uD83D\uDCC8</strong><span style=\"color: rgb(255, 236, 61);\"><strong> Por Que Participar?</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"> • </span><span style=\"color: rgb(250, 250, 250);\"><strong>Renda Extra Simples</strong></span><span style=\"color: rgb(250, 250, 250);\">: Convide, compartilhe e receba comissões regularmente.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • </span><span style=\"color: rgb(250, 250, 250);\"><strong>Transparência Total</strong></span><span style=\"color: rgb(250, 250, 250);\">: Painel dedicado para acompanhar em tempo real suas comissões e resultados.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • </span><span style=\"color: rgb(250, 250, 250);\"><strong>Ganhos Escaláveis</strong></span><span style=\"color: rgb(250, 250, 250);\">: Quanto mais você se empenhar, maior será sua renda!</span></p><hr/><p><strong>\uD83D\uDE80 </strong><span style=\"color: rgb(255, 236, 61);\"><strong>Comece Agora!</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\">\uD83D\uDCA1 Torne-se um agente parceiro hoje mesmo e transforme seu link em uma fonte de renda recorrente. </span></p><p><span style=\"color: rgb(250, 250, 250);\">Estamos prontos para ajudá-lo a crescer e alcançar novos patamares. Junte-se à nossa comunidade de parceiros de sucesso!</span></p>"
      }, {
        "id": 7,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/f5d3490c44134175b1594fe8fedba848.png",
        "noticeTitle": "BÔNUS DIÁRIO 8%",
        "noticeIntroduction": "? Promoção Diária de Depósito – Ganhe 8% de Bônus!",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/c49d49753f8d475a92cea6bb3fc395db.png",
        "noticeType": 1,
        "noticeTypeName": "Recharge Notice",
        "noticeContent": "<p><span style=\"color: rgb(255, 236, 61);\"><strong>\uD83C\uDF81 Promoção Diária de Depósito – Ganhe 8% de Bônus!</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83D\uDCC5 Período da Promoção</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"> &nbsp; &nbsp;Válida todos os dias. Aproveite agora!</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83D\uDCA1 Como Funciona?</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"> 1. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Depósito Qualificado</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Realize um depósito único de </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$100 ou mais</strong></span><span style=\"color: rgb(250, 250, 250);\"> e receba </span><span style=\"color: rgb(250, 250, 250);\"><strong>8% de bônus</strong></span><span style=\"color: rgb(250, 250, 250);\"> sobre o valor depositado.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Cada jogador pode participar até </span><span style=\"color: rgb(250, 250, 250);\"><strong>5 vezes por dia</strong></span><span style=\"color: rgb(250, 250, 250);\">.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 2. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Exemplo de Bônus</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Deposite </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$200</strong></span><span style=\"color: rgb(250, 250, 250);\"> e ganhe </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$16</strong></span><span style=\"color: rgb(250, 250, 250);\"> de bônus.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Deposite </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$500</strong></span><span style=\"color: rgb(250, 250, 250);\"> e ganhe </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$40</strong></span><span style=\"color: rgb(250, 250, 250);\"> de bônus.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • O bônus será creditado automaticamente após o depósito.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 3. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Requisitos de Apostas</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • O valor do bônus deve cumprir um requisito de </span><span style=\"color: rgb(250, 250, 250);\"><strong>10 vezes o valor do bônus em apostas</strong></span><span style=\"color: rgb(250, 250, 250);\"> antes de ser liberado para saque.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 4. </span><span style=\"color: rgb(250, 250, 250);\"><strong>Limites de Bônus</strong></span><span style=\"color: rgb(250, 250, 250);\">:</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • O bônus máximo por depósito é de </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$100</strong></span><span style=\"color: rgb(250, 250, 250);\">.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Somente depósitos acima de R$100 são elegíveis para a promoção.</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83D\uDD27 Regras e Condições</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Cada jogador pode participar até </span><span style=\"color: rgb(250, 250, 250);\"><strong>5 vezes por dia</strong></span><span style=\"color: rgb(250, 250, 250);\">.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Esta promoção é válida apenas para depósitos realizados durante o período da campanha.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • O bônus não pode ser usado para outras promoções ou transferido entre contas.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Contas suspeitas de abuso da promoção estão sujeitas a revisão.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • A plataforma reserva-se o direito de alterar ou encerrar a promoção a qualquer momento.</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83C\uDFAF Por Que Participar?</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"> • </span><span style=\"color: rgb(250, 250, 250);\"><strong>Mais Benefícios</strong></span><span style=\"color: rgb(250, 250, 250);\">: Multiplique suas chances de ganhar com 8% de bônus!</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • </span><span style=\"color: rgb(250, 250, 250);\"><strong>Fácil de Participar</strong></span><span style=\"color: rgb(250, 250, 250);\">: Simplesmente deposite e receba o bônus automaticamente.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • </span><span style=\"color: rgb(250, 250, 250);\"><strong>Diário</strong></span><span style=\"color: rgb(250, 250, 250);\">: Aproveite esta promoção incrível todos os dias!</span></p><p><br></p>"
      }, {
        "id": 6,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/e6bc437fd7ca422c978d3cc587a768c9.png",
        "noticeTitle": "INDICAÇÃO DE AMIGOS",
        "noticeIntroduction": "?‍?‍? GANHE R$12 POR AMIGO, E REPITA INFINITAMENTE",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/2ddceba140cc4f42ae823a5c29c546b5.png",
        "noticeType": 1,
        "noticeTypeName": "Recharge Notice",
        "noticeContent": "<p><span style=\"color: rgb(255, 236, 61);\"><strong>\uD83C\uDF89 BEM-VINDO, MEMBRO PRESTIGIADO! \uD83C\uDF89</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\">Estamos muito felizes em recebê-lo! Para agradecer sua confiança e apoio, preparamos uma oferta especial para você. Agora, você pode ganhar prêmios incríveis simplesmente convidando seus amigos para se juntarem à nossa plataforma! Quanto mais amigos você convida, mais bônus você acumula! E o melhor: essa promoção é ilimitada! \uD83D\uDE80\uD83D\uDCB0</span></p><p><br></p><p><span style=\"color: rgb(255, 236, 61);\"><strong>\uD83D\uDCCB Detalhes da Promoção:</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Como Participar:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"> 1. Use seu link exclusivo para convidar amigos a se registrarem e jogarem.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 2. Para cada amigo que se cadastrar e jogar, você ganhará </span><span style=\"color: rgb(250, 250, 250);\"><strong>R$12</strong></span><span style=\"color: rgb(250, 250, 250);\"> como recompensa!</span></p><p><span style=\"color: rgb(250, 250, 250);\"> 3. Convide quantos amigos quiser — mais convites, mais ganhos! ♾️\uD83C\uDF81</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83D\uDCDC Regras:</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"> • Somente registros feitos através do seu link exclusivo serão considerados válidos.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • O amigo convidado precisa realizar um depósito inicial e jogar para você receber o bônus.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Os bônus serão creditados automaticamente na sua conta e poderão ser sacados ou usados em novos jogos.</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83D\uDD14 Dicas Importantes:</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"> • Respeite as regras da plataforma e jogue de forma justa.</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Qualquer tentativa de fraude ou comportamento inadequado poderá resultar no cancelamento de seus bônus. \uD83D\uDEAB</span></p><p><span style=\"color: rgb(250, 250, 250);\"> • Vamos juntos manter um ambiente de jogo saudável e divertido para todos! \uD83C\uDF1F</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>\uD83D\uDD25 Não perca essa chance! Convide agora, ganhe recompensas incríveis e aproveite ao máximo nosso cassino! \uD83D\uDD25</strong></span></p>"
      }, {
        "id": 5,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/c5015eaf66724302b6b8d9d60f24d97f.png",
        "noticeTitle": "Roda da Sorte Bônus: 777",
        "noticeIntroduction": "? Até R$777 de bônus grátis para cada membro",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/b231e037447345658fe90a9b4ad9596c.png",
        "noticeType": 0,
        "noticeTypeName": "Lucky Wheel Notice",
        "noticeContent": "<p><span style=\"color: rgb(250, 250, 250);\"><strong>Bem-vindo ao cassino mais profissional e justo do Brasil!</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\">A Roda da Sorte está disponível para todos os membros. Aproveite ao máximo os benefícios que preparamos para você!</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Forma de Obtenção:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\">Deposite diariamente um valor superior a R$100 (ganhe um cupom de sorteio)</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Você também pode:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\">Continue nos acompanhando para receber cupons de sorteio gratuitos que serão enviados periodicamente!</span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\">Por favor, respeite as regras da plataforma e ajude a manter um ecossistema de jogo saudável e justo. Se detectarmos qualquer comportamento malicioso ou irregular, seu bônus será cancelado.</span></p>"
      }, {
        "id": 4,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/4eb08aeda22c4f5b86e1be15bc2d966f.png",
        "noticeTitle": "Clube VIP",
        "noticeIntroduction": "⬆️ Benefícios imperdíveis para nossos VIP",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/9aacf0a80fa84515b0974b642d6ee96e.png",
        "noticeType": 1,
        "noticeTypeName": "Recharge Notice",
        "noticeContent": "<p><span style=\"color: rgb(250, 250, 250);\"><strong>QUANTO MAIOR O NÍVEL MAIOR O DESCONTO</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Junte-se ao clube, atualize o nível VIP e desbloqueie mais benefícios.</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>DETALHES DOS BENEFÍCIOS VIP</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>1. Vários bônus VIP disponíveis</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>• Bônus da promoção, você pode obtê-lo toda vez que atualizar o nível VIP:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>• Bônus semanal, você pode obtê-lo todas as segundas-feiras;</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>• Bônus mensal, você pode obter 1 vez no primeiro dia de cada mês;</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>2. Vários permissões são abertas</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Com o aumento do nível VIP, sua Saques diários, Limite saque único, Limite saque diário, Taxa da retirada e Aposta bônus será atualizado em conformidade. Os detalhes podem ser vistos na página BÔNUS VIP.</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>3. Grupo VIP de telegram</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Junte-se ao grupo de telegram VIP para obter mais informações e serviços de eventos mais recentes a tempo.</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>LEMBRETE ESPECIAL</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Por favor, respeite conscientemente as regras da plataforma e mantenha em conjunto uma ecologia de jogo saudável e justa. Se descobrirmos que você cometeu violações maliciosas, cancelaremos seu bônus.</strong></span></p>"
      }, {
        "id": 3,
        "fullNoticeTitleIcon": "https://file.ckgame.vip/master/1013/f3b8d09933cb4ccf9bc85241ce532c0e.png",
        "noticeTitle": "Boas-Vindas 30%",
        "noticeIntroduction": "? Bônus de Boas-Vindas até R$2500",
        "fullNoticeImg": "https://file.ckgame.vip/master/1013/2e5413db5db444d48fa3106c87f45d8d.png",
        "noticeType": 1,
        "noticeTypeName": "Recharge Notice",
        "noticeContent": "<p><span style=\"color: rgb(250, 250, 250);\"><strong>GANHE 30% DE BÔNUS! </strong></span><span style=\"color: rgb(250, 250, 250);\">\uD83C\uDF81</span><span style=\"color: rgb(250, 250, 250);\"><strong> Deposite acima de R$20 e receba 30% extra como agradecimento pelo seu apoio. Bônus válido no 1º depósito, resgate único! </strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Uma vez feito seu depósito, o bônus será automaticamente creditado em sua conta,preste atenção ao saldo da sua conta, se você tiver alguma dúvida, sinta-se à vontade para consultar o atendimento ao cliente.</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Sinceramente desejo que você se divirta e ganhe mais!</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Detalhes da atividade:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>1.Primeira Recarga ≥ R20;</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>2.Após a recarga ser bem sucedida, você receberá uma recompensa de 30% do valor do depósito.</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>3.O bônus máximo é de R$ 2,500.</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Regras de bônus:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>1.Os bônus só podem ser reivindicados uma vez por conta;</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>2.Condições de retirada do bônus: o valor da aposta efetiva é igual a 10 vezes o valor do bônus;</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>3.Depois de completar o valor da aposta válida, você pode optar por continuar o jogo ou retirar o saldo.</strong></span></p><p><br></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Nota especial:</strong></span></p><p><span style=\"color: rgb(250, 250, 250);\"><strong>Certifique-se de que o seu nome, detalhes de contacto e CPF são exactos e únicos. Se o mesmo jogador utilizar diferentes IPs de rede para registar múltiplas contas para reclamar o prémio, seus ganhos serão cancelados e sua conta poderá ser permanentemente congelada.</strong></span></p>"
      }],
      "total": 7,
      "size": 10,
      "current": 1,
      "pages": 1
    },
    home_active_type: 0,
    current_game_list: [],
    game_list: {
      game: [{
        "gameId": 1556,
        "categoryId": 23,
        "gameCode": "GB13",
        "channelBean": "CQ9",
        "gameName": "FootballFeverM",
        "fullGameImg": "https://file.ckgame.vip/master/1000/1e45b700cd394e82b43e1f58f9b43fee.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1231,
        "categoryId": 12,
        "gameCode": "1543462",
        "channelBean": "PG",
        "gameName": "Fortune Rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/2cce0ccf3bd8470c896491f50e1ce76d.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1220,
        "categoryId": 12,
        "gameCode": "1418544",
        "channelBean": "PG",
        "gameName": "Bakery Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/91c6f9506a9647dd8ebb2d9ad87d59c8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1216,
        "categoryId": 12,
        "gameCode": "1372643",
        "channelBean": "PG",
        "gameName": "Diner Delights",
        "fullGameImg": "https://file.ckgame.vip/master/0/a4b38a583bd740baa6c3dc049847ebc7.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1220,
        "categoryId": 70,
        "gameCode": "1418544",
        "channelBean": "PG",
        "gameName": "Bakery Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/91c6f9506a9647dd8ebb2d9ad87d59c8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1216,
        "categoryId": 70,
        "gameCode": "1372643",
        "channelBean": "PG",
        "gameName": "Diner Delights",
        "fullGameImg": "https://file.ckgame.vip/master/0/a4b38a583bd740baa6c3dc049847ebc7.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1184,
        "categoryId": 70,
        "gameCode": "105",
        "channelBean": "PG",
        "gameName": "Heist Stakes",
        "fullGameImg": "https://file.ckgame.vip/master/0/35c05e98c9784df08d7348882381a515.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1160,
        "categoryId": 70,
        "gameCode": "75",
        "channelBean": "PG",
        "gameName": "Ganesha Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/006c319fd7274df5a6772450014895f8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1152,
        "categoryId": 70,
        "gameCode": "65",
        "channelBean": "PG",
        "gameName": "Mahjong Ways",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc8b82c0696b46a5880318cebe7973db.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1120,
        "categoryId": 70,
        "gameCode": "18",
        "channelBean": "PG",
        "gameName": "Hood vs Wolf",
        "fullGameImg": "https://file.ckgame.vip/master/0/87feb900652a4c37af2cdf58381d43b6.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1114,
        "categoryId": 70,
        "gameCode": "1",
        "channelBean": "PG",
        "gameName": "Honey Trap of Diao Chan",
        "fullGameImg": "https://file.ckgame.vip/master/0/9cee4ddf420d43f28fbb2a12d27bf7d8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1220,
        "categoryId": 230,
        "gameCode": "1418544",
        "channelBean": "PG",
        "gameName": "Bakery Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/91c6f9506a9647dd8ebb2d9ad87d59c8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1216,
        "categoryId": 230,
        "gameCode": "1372643",
        "channelBean": "PG",
        "gameName": "Diner Delights",
        "fullGameImg": "https://file.ckgame.vip/master/0/a4b38a583bd740baa6c3dc049847ebc7.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1184,
        "categoryId": 230,
        "gameCode": "105",
        "channelBean": "PG",
        "gameName": "Heist Stakes",
        "fullGameImg": "https://file.ckgame.vip/master/0/35c05e98c9784df08d7348882381a515.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1160,
        "categoryId": 230,
        "gameCode": "75",
        "channelBean": "PG",
        "gameName": "Ganesha Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/006c319fd7274df5a6772450014895f8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1152,
        "categoryId": 230,
        "gameCode": "65",
        "channelBean": "PG",
        "gameName": "Mahjong Ways",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc8b82c0696b46a5880318cebe7973db.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1120,
        "categoryId": 230,
        "gameCode": "18",
        "channelBean": "PG",
        "gameName": "Hood vs Wolf",
        "fullGameImg": "https://file.ckgame.vip/master/0/87feb900652a4c37af2cdf58381d43b6.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1114,
        "categoryId": 230,
        "gameCode": "1",
        "channelBean": "PG",
        "gameName": "Honey Trap of Diao Chan",
        "fullGameImg": "https://file.ckgame.vip/master/0/9cee4ddf420d43f28fbb2a12d27bf7d8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1313,
        "categoryId": 27,
        "gameCode": "166",
        "channelBean": "TADA",
        "gameName": "Wild Racer",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1bf2fd1140a41e3933ac76d6d489a45.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1280,
        "categoryId": 27,
        "gameCode": "109",
        "channelBean": "TADA",
        "gameName": "Fortune Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/dd57f76fbc194415bb7f761d5aa5066e.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1274,
        "categoryId": 27,
        "gameCode": "100",
        "channelBean": "TADA",
        "gameName": "Super Rich",
        "fullGameImg": "https://file.ckgame.vip/master/0/81dab867666e4eb9ba9e7767b5389b0d.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1243,
        "categoryId": 27,
        "gameCode": "17",
        "channelBean": "TADA",
        "gameName": "Shanghai Beauty",
        "fullGameImg": "https://file.ckgame.vip/master/0/8c6e77da8c134b71ba6b05148220e431.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1220,
        "categoryId": 19,
        "gameCode": "1418544",
        "channelBean": "PG",
        "gameName": "Bakery Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/91c6f9506a9647dd8ebb2d9ad87d59c8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1231,
        "categoryId": 19,
        "gameCode": "1543462",
        "channelBean": "PG",
        "gameName": "Fortune Rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/2cce0ccf3bd8470c896491f50e1ce76d.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1216,
        "categoryId": 19,
        "gameCode": "1372643",
        "channelBean": "PG",
        "gameName": "Diner Delights",
        "fullGameImg": "https://file.ckgame.vip/master/0/a4b38a583bd740baa6c3dc049847ebc7.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1184,
        "categoryId": 19,
        "gameCode": "105",
        "channelBean": "PG",
        "gameName": "Heist Stakes",
        "fullGameImg": "https://file.ckgame.vip/master/0/35c05e98c9784df08d7348882381a515.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1160,
        "categoryId": 19,
        "gameCode": "75",
        "channelBean": "PG",
        "gameName": "Ganesha Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/006c319fd7274df5a6772450014895f8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1152,
        "categoryId": 19,
        "gameCode": "65",
        "channelBean": "PG",
        "gameName": "Mahjong Ways",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc8b82c0696b46a5880318cebe7973db.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1120,
        "categoryId": 19,
        "gameCode": "18",
        "channelBean": "PG",
        "gameName": "Hood vs Wolf",
        "fullGameImg": "https://file.ckgame.vip/master/0/87feb900652a4c37af2cdf58381d43b6.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1114,
        "categoryId": 19,
        "gameCode": "1",
        "channelBean": "PG",
        "gameName": "Honey Trap of Diao Chan",
        "fullGameImg": "https://file.ckgame.vip/master/0/9cee4ddf420d43f28fbb2a12d27bf7d8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1313,
        "categoryId": 491,
        "gameCode": "166",
        "channelBean": "TADA",
        "gameName": "Wild Racer",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1bf2fd1140a41e3933ac76d6d489a45.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1250,
        "categoryId": 72,
        "gameCode": "33",
        "channelBean": "TADA",
        "gameName": "FortunePig",
        "fullGameImg": "https://file.ckgame.vip/master/0/7e8d3b73075646f3b0839be8375558c1.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1270,
        "categoryId": 72,
        "gameCode": "85",
        "channelBean": "TADA",
        "gameName": "Pharaoh Treasure",
        "fullGameImg": "https://file.ckgame.vip/master/0/f3b9fffd232a40d4a7d4a9a3cb2d6802.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1280,
        "categoryId": 72,
        "gameCode": "109",
        "channelBean": "TADA",
        "gameName": "Fortune Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/dd57f76fbc194415bb7f761d5aa5066e.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1348,
        "categoryId": 491,
        "gameCode": "241",
        "channelBean": "TADA",
        "gameName": "Keno",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdb5865539684a1ba691a34425f1fa88.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1345,
        "categoryId": 491,
        "gameCode": "235",
        "channelBean": "TADA",
        "gameName": "Limbo",
        "fullGameImg": "https://file.ckgame.vip/master/0/1543521a37d5430aac6e93b4ad424702.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1320,
        "categoryId": 491,
        "gameCode": "178",
        "channelBean": "TADA",
        "gameName": "Go Goal Bingo",
        "fullGameImg": "https://file.ckgame.vip/master/0/fe138a6b16344800924936c8aeee31ac.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1249,
        "categoryId": 29,
        "gameCode": "32",
        "channelBean": "TADA",
        "gameName": "Jackpot Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e4323aeacad4fa4aeb8c1855b80b585.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1348,
        "categoryId": 524,
        "gameCode": "241",
        "channelBean": "TADA",
        "gameName": "Keno",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdb5865539684a1ba691a34425f1fa88.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1249,
        "categoryId": 530,
        "gameCode": "32",
        "channelBean": "TADA",
        "gameName": "Jackpot Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e4323aeacad4fa4aeb8c1855b80b585.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1334,
        "categoryId": 540,
        "gameCode": "216",
        "channelBean": "TADA",
        "gameName": "Candyland Bingo",
        "fullGameImg": "https://file.ckgame.vip/master/0/c1682b62c2e3409ea3d6ef4628470157.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1288,
        "categoryId": 540,
        "gameCode": "122",
        "channelBean": "TADA",
        "gameName": "iRich Bingo",
        "fullGameImg": "https://file.ckgame.vip/master/0/55588ff9594b4e6e81d036613cafedc5.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1348,
        "categoryId": 544,
        "gameCode": "241",
        "channelBean": "TADA",
        "gameName": "Keno",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdb5865539684a1ba691a34425f1fa88.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1345,
        "categoryId": 544,
        "gameCode": "235",
        "channelBean": "TADA",
        "gameName": "Limbo",
        "fullGameImg": "https://file.ckgame.vip/master/0/1543521a37d5430aac6e93b4ad424702.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1220,
        "categoryId": 554,
        "gameCode": "1418544",
        "channelBean": "PG",
        "gameName": "Bakery Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/91c6f9506a9647dd8ebb2d9ad87d59c8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1216,
        "categoryId": 554,
        "gameCode": "1372643",
        "channelBean": "PG",
        "gameName": "Diner Delights",
        "fullGameImg": "https://file.ckgame.vip/master/0/a4b38a583bd740baa6c3dc049847ebc7.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1184,
        "categoryId": 554,
        "gameCode": "105",
        "channelBean": "PG",
        "gameName": "Heist Stakes",
        "fullGameImg": "https://file.ckgame.vip/master/0/35c05e98c9784df08d7348882381a515.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1160,
        "categoryId": 554,
        "gameCode": "75",
        "channelBean": "PG",
        "gameName": "Ganesha Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/006c319fd7274df5a6772450014895f8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1152,
        "categoryId": 554,
        "gameCode": "65",
        "channelBean": "PG",
        "gameName": "Mahjong Ways",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc8b82c0696b46a5880318cebe7973db.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1120,
        "categoryId": 554,
        "gameCode": "18",
        "channelBean": "PG",
        "gameName": "Hood vs Wolf",
        "fullGameImg": "https://file.ckgame.vip/master/0/87feb900652a4c37af2cdf58381d43b6.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1114,
        "categoryId": 554,
        "gameCode": "1",
        "channelBean": "PG",
        "gameName": "Honey Trap of Diao Chan",
        "fullGameImg": "https://file.ckgame.vip/master/0/9cee4ddf420d43f28fbb2a12d27bf7d8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1656,
        "categoryId": 38,
        "gameCode": "31248",
        "channelBean": "NEWPG",
        "gameName": "Zeus",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1345,
        "categoryId": 693,
        "gameCode": "235",
        "channelBean": "TADA",
        "gameName": "Limbo",
        "fullGameImg": "https://file.ckgame.vip/master/0/1543521a37d5430aac6e93b4ad424702.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 20001,
        "categoryId": 685,
        "gameCode": "1189baca156e1bbbecc3b26651a63565",
        "channelBean": "HUIDU",
        "gameName": "Mahjong Ways",
        "fullGameImg": "https://file.ckgame.vip/master/0/d724d4b81d9841c6b64a50695c703eb9.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 20119,
        "categoryId": 685,
        "gameCode": "c5435a8a73707a3a8bb4fe8baaaef3d2",
        "channelBean": "HUIDU",
        "gameName": "Fortune Dragon",
        "fullGameImg": "https://file.ckgame.vip/master/0/51b8a89831ef4952990084e041a7cef8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 20193,
        "categoryId": 685,
        "gameCode": "5aa472006c8698cf6f59dd0548129cda",
        "channelBean": "HUIDU",
        "gameName": "One Punch Man",
        "fullGameImg": "https://file.ckgame.vip/master/0/523b15953e81472db3803e77d9f6dcc4.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30007,
        "categoryId": 710,
        "gameCode": "108",
        "channelBean": "PGSOFTPT",
        "gameName": "buffalo win",
        "fullGameImg": "https://file.ckgame.vip/master/0/79251db71ec6448ca45cf170533292b8.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30083,
        "categoryId": 710,
        "gameCode": "7",
        "channelBean": "PGSOFTPT",
        "gameName": "medusa",
        "fullGameImg": "https://file.ckgame.vip/master/0/33448724e2a244c28e40a0e1d10bb0f1.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 35008,
        "categoryId": 713,
        "gameCode": "10007",
        "channelBean": "PGSOFTPP",
        "gameName": "Panda's Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/ef7bcf2a763c47b493858ba0ad25fe40.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30032,
        "categoryId": 710,
        "gameCode": "1695365",
        "channelBean": "PGSOFTPT",
        "gameName": "fortune-dragon",
        "fullGameImg": "https://file.ckgame.vip/master/0/9985df5b9be04119b458962ee384cfca.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30004,
        "categoryId": 710,
        "gameCode": "1543462",
        "channelBean": "PGSOFTPT",
        "gameName": "fortune-rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/eec69e69adc74c8592cbb4e4cf49a770.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30088,
        "categoryId": 710,
        "gameCode": "1555350",
        "channelBean": "PGSOFTPT",
        "gameName": "forge-wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/30f3feefdbc04de7b6e2a57b6de3d1a5.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30086,
        "categoryId": 710,
        "gameCode": "113",
        "channelBean": "PGSOFTPT",
        "gameName": "crypt-fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/9b670f2b55444012b5378ff919acf887.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30065,
        "categoryId": 710,
        "gameCode": "67",
        "channelBean": "PGSOFTPT",
        "gameName": "shaolin-soccer（少林足球）",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc89f04b7bea4118bf8950aaf087f5dd.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30043,
        "categoryId": 710,
        "gameCode": "60",
        "channelBean": "PGSOFTPT",
        "gameName": "leprechaun-riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/2a6e2c3e5df844b790907672cb15d9f3.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30043,
        "categoryId": 710,
        "gameCode": "60",
        "channelBean": "PGSOFTPT",
        "gameName": "leprechaun-riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/2a6e2c3e5df844b790907672cb15d9f3.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30032,
        "categoryId": 506,
        "gameCode": "1695365",
        "channelBean": "PGSOFTPT",
        "gameName": "fortune-dragon",
        "fullGameImg": "https://file.ckgame.vip/master/0/9985df5b9be04119b458962ee384cfca.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 23636,
        "categoryId": 693,
        "gameCode": "33ec5741c1a2837a099c0e94be8b54fd",
        "channelBean": "HUIDU",
        "gameName": "Bulls Run Wild",
        "fullGameImg": "https://file.ckgame.vip/master/0/633df17c74e34883b668f3ca6545409e.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 23653,
        "categoryId": 693,
        "gameCode": "5c427a9d1cbac9b50a2e4a2d495274e4",
        "channelBean": "HUIDU",
        "gameName": "Santa Spins",
        "fullGameImg": "https://file.ckgame.vip/master/0/91e7f16e6b7447e99d7c1befd8b61174.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 21339,
        "categoryId": 524,
        "gameCode": "a04d1f3eb8ccec8a4823bdf18e3f0e84",
        "channelBean": "HUIDU",
        "gameName": "Aviator",
        "fullGameImg": "https://file.ckgame.vip/master/0/8fcf923c23774e5697c887bf38da3ebc.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 20001,
        "categoryId": 506,
        "gameCode": "1189baca156e1bbbecc3b26651a63565",
        "channelBean": "HUIDU",
        "gameName": "Mahjong Ways",
        "fullGameImg": "https://file.ckgame.vip/master/0/d724d4b81d9841c6b64a50695c703eb9.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30004,
        "categoryId": 19,
        "gameCode": "1543462",
        "channelBean": "PGSOFTPT",
        "gameName": "fortune-rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/eec69e69adc74c8592cbb4e4cf49a770.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 30004,
        "categoryId": 12,
        "gameCode": "1543462",
        "channelBean": "PGSOFTPT",
        "gameName": "fortune-rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/eec69e69adc74c8592cbb4e4cf49a770.png",
        "minBalanceEnter": 0,
        "sort": 1,
        "isMaintenance": false
      }, {
        "gameId": 1237,
        "categoryId": 12,
        "gameCode": "1601012",
        "channelBean": "PG",
        "gameName": "Lucky Clover Lady",
        "fullGameImg": "https://file.ckgame.vip/master/0/c7328c1f6ec8425bb927a000596ef6e0.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1557,
        "categoryId": 23,
        "gameCode": "GB7",
        "channelBean": "CQ9",
        "gameName": "Mummy's Treasure",
        "fullGameImg": "https://file.ckgame.vip/master/1000/c5c5d9a8dcbf4778a8bb188eba706838.png",
        "minBalanceEnter": 1000,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1200,
        "categoryId": 12,
        "gameCode": "121",
        "channelBean": "PG",
        "gameName": "Destiny of Sun & Moon",
        "fullGameImg": "https://file.ckgame.vip/master/0/2470ab7fb3db4f9d92d0fb708725b46a.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1232,
        "categoryId": 12,
        "gameCode": "1555350",
        "channelBean": "PG",
        "gameName": "Forge of Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/ced149dda6894f7381479888acf6a953.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1221,
        "categoryId": 12,
        "gameCode": "1420892",
        "channelBean": "PG",
        "gameName": "Rave Party Fever",
        "fullGameImg": "https://file.ckgame.vip/master/0/6d3709360d02487e8d6b51b99f377442.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1217,
        "categoryId": 12,
        "gameCode": "1381200",
        "channelBean": "PG",
        "gameName": "Hawaiian Tiki",
        "fullGameImg": "https://file.ckgame.vip/master/0/560334dd10bd4b318b1d70a63c860504.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1221,
        "categoryId": 70,
        "gameCode": "1420892",
        "channelBean": "PG",
        "gameName": "Rave Party Fever",
        "fullGameImg": "https://file.ckgame.vip/master/0/6d3709360d02487e8d6b51b99f377442.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1217,
        "categoryId": 70,
        "gameCode": "1381200",
        "channelBean": "PG",
        "gameName": "Hawaiian Tiki",
        "fullGameImg": "https://file.ckgame.vip/master/0/560334dd10bd4b318b1d70a63c860504.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1185,
        "categoryId": 70,
        "gameCode": "106",
        "channelBean": "PG",
        "gameName": "Ways of the Qilin",
        "fullGameImg": "https://file.ckgame.vip/master/0/63fad6dd0ce14680958c90e1616dccde.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1161,
        "categoryId": 70,
        "gameCode": "79",
        "channelBean": "PG",
        "gameName": "Dreams of Macau",
        "fullGameImg": "https://file.ckgame.vip/master/0/9b52b296711f4ddd8eb88d7b65745a3b.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1153,
        "categoryId": 70,
        "gameCode": "67",
        "channelBean": "PG",
        "gameName": "Shaolin Soccer",
        "fullGameImg": "https://file.ckgame.vip/master/0/30216fdb5e31460faf76c2ac3b396179.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1153,
        "categoryId": 70,
        "gameCode": "67",
        "channelBean": "PG",
        "gameName": "Shaolin Soccer",
        "fullGameImg": "https://file.ckgame.vip/master/0/30216fdb5e31460faf76c2ac3b396179.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1121,
        "categoryId": 70,
        "gameCode": "20",
        "channelBean": "PG",
        "gameName": "Reel Love",
        "fullGameImg": "https://file.ckgame.vip/master/0/11a340ce75e643f4b97fd83d3d2efbd8.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1115,
        "categoryId": 70,
        "gameCode": "2",
        "channelBean": "PG",
        "gameName": "Gem Saviour",
        "fullGameImg": "https://file.ckgame.vip/master/0/b7a268ba6d514522879d5ff3e01cce3c.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1221,
        "categoryId": 230,
        "gameCode": "1420892",
        "channelBean": "PG",
        "gameName": "Rave Party Fever",
        "fullGameImg": "https://file.ckgame.vip/master/0/6d3709360d02487e8d6b51b99f377442.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1217,
        "categoryId": 230,
        "gameCode": "1381200",
        "channelBean": "PG",
        "gameName": "Hawaiian Tiki",
        "fullGameImg": "https://file.ckgame.vip/master/0/560334dd10bd4b318b1d70a63c860504.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1185,
        "categoryId": 230,
        "gameCode": "106",
        "channelBean": "PG",
        "gameName": "Ways of the Qilin",
        "fullGameImg": "https://file.ckgame.vip/master/0/63fad6dd0ce14680958c90e1616dccde.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1161,
        "categoryId": 230,
        "gameCode": "79",
        "channelBean": "PG",
        "gameName": "Dreams of Macau",
        "fullGameImg": "https://file.ckgame.vip/master/0/9b52b296711f4ddd8eb88d7b65745a3b.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1153,
        "categoryId": 230,
        "gameCode": "67",
        "channelBean": "PG",
        "gameName": "Shaolin Soccer",
        "fullGameImg": "https://file.ckgame.vip/master/0/30216fdb5e31460faf76c2ac3b396179.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1121,
        "categoryId": 230,
        "gameCode": "20",
        "channelBean": "PG",
        "gameName": "Reel Love",
        "fullGameImg": "https://file.ckgame.vip/master/0/11a340ce75e643f4b97fd83d3d2efbd8.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1115,
        "categoryId": 230,
        "gameCode": "2",
        "channelBean": "PG",
        "gameName": "Gem Saviour",
        "fullGameImg": "https://file.ckgame.vip/master/0/b7a268ba6d514522879d5ff3e01cce3c.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1316,
        "categoryId": 27,
        "gameCode": "173",
        "channelBean": "TADA",
        "gameName": "West Hunter Bingo",
        "fullGameImg": "https://file.ckgame.vip/master/0/d685b4faac7a441d8ca0c73a2df5b674.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1221,
        "categoryId": 19,
        "gameCode": "1420892",
        "channelBean": "PG",
        "gameName": "Rave Party Fever",
        "fullGameImg": "https://file.ckgame.vip/master/0/6d3709360d02487e8d6b51b99f377442.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1217,
        "categoryId": 19,
        "gameCode": "1381200",
        "channelBean": "PG",
        "gameName": "Hawaiian Tiki",
        "fullGameImg": "https://file.ckgame.vip/master/0/560334dd10bd4b318b1d70a63c860504.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1185,
        "categoryId": 19,
        "gameCode": "106",
        "channelBean": "PG",
        "gameName": "Ways of the Qilin",
        "fullGameImg": "https://file.ckgame.vip/master/0/63fad6dd0ce14680958c90e1616dccde.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1161,
        "categoryId": 19,
        "gameCode": "79",
        "channelBean": "PG",
        "gameName": "Dreams of Macau",
        "fullGameImg": "https://file.ckgame.vip/master/0/9b52b296711f4ddd8eb88d7b65745a3b.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1153,
        "categoryId": 19,
        "gameCode": "67",
        "channelBean": "PG",
        "gameName": "Shaolin Soccer",
        "fullGameImg": "https://file.ckgame.vip/master/0/30216fdb5e31460faf76c2ac3b396179.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1121,
        "categoryId": 19,
        "gameCode": "20",
        "channelBean": "PG",
        "gameName": "Reel Love",
        "fullGameImg": "https://file.ckgame.vip/master/0/11a340ce75e643f4b97fd83d3d2efbd8.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1115,
        "categoryId": 19,
        "gameCode": "2",
        "channelBean": "PG",
        "gameName": "Gem Saviour",
        "fullGameImg": "https://file.ckgame.vip/master/0/b7a268ba6d514522879d5ff3e01cce3c.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1316,
        "categoryId": 491,
        "gameCode": "173",
        "channelBean": "TADA",
        "gameName": "West Hunter Bingo",
        "fullGameImg": "https://file.ckgame.vip/master/0/d685b4faac7a441d8ca0c73a2df5b674.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1274,
        "categoryId": 72,
        "gameCode": "100",
        "channelBean": "TADA",
        "gameName": "Super Rich",
        "fullGameImg": "https://file.ckgame.vip/master/0/81dab867666e4eb9ba9e7767b5389b0d.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1352,
        "categoryId": 491,
        "gameCode": "254",
        "channelBean": "TADA",
        "gameName": "Mines Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/b186704f904f46c3815cc47bd753933e.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1346,
        "categoryId": 491,
        "gameCode": "236",
        "channelBean": "TADA",
        "gameName": "Wheel",
        "fullGameImg": "https://file.ckgame.vip/master/0/2478c161b7de4ec59222d1e0221b7447.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1287,
        "categoryId": 29,
        "gameCode": "119",
        "channelBean": "TADA",
        "gameName": "All-star Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/912b616c00c54849b7eb90bfc2f1e9c6.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1349,
        "categoryId": 524,
        "gameCode": "242",
        "channelBean": "TADA",
        "gameName": "Plinko",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ea76eff9c0b42d6bb0f28d344066c25.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1269,
        "categoryId": 530,
        "gameCode": "82",
        "channelBean": "TADA",
        "gameName": "Happy Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/1013/75a835a8a50141209a5d4eee04efd54e.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1335,
        "categoryId": 540,
        "gameCode": "217",
        "channelBean": "TADA",
        "gameName": "Magic Lamp Bingo",
        "fullGameImg": "https://file.ckgame.vip/master/0/c562d88f147c46698148fd1c169dad68.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1349,
        "categoryId": 544,
        "gameCode": "242",
        "channelBean": "TADA",
        "gameName": "Plinko",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ea76eff9c0b42d6bb0f28d344066c25.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1346,
        "categoryId": 544,
        "gameCode": "236",
        "channelBean": "TADA",
        "gameName": "Wheel",
        "fullGameImg": "https://file.ckgame.vip/master/0/2478c161b7de4ec59222d1e0221b7447.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1221,
        "categoryId": 554,
        "gameCode": "1420892",
        "channelBean": "PG",
        "gameName": "Rave Party Fever",
        "fullGameImg": "https://file.ckgame.vip/master/0/6d3709360d02487e8d6b51b99f377442.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1217,
        "categoryId": 554,
        "gameCode": "1381200",
        "channelBean": "PG",
        "gameName": "Hawaiian Tiki",
        "fullGameImg": "https://file.ckgame.vip/master/0/560334dd10bd4b318b1d70a63c860504.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1185,
        "categoryId": 554,
        "gameCode": "106",
        "channelBean": "PG",
        "gameName": "Ways of the Qilin",
        "fullGameImg": "https://file.ckgame.vip/master/0/63fad6dd0ce14680958c90e1616dccde.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1161,
        "categoryId": 554,
        "gameCode": "79",
        "channelBean": "PG",
        "gameName": "Dreams of Macau",
        "fullGameImg": "https://file.ckgame.vip/master/0/9b52b296711f4ddd8eb88d7b65745a3b.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1153,
        "categoryId": 554,
        "gameCode": "67",
        "channelBean": "PG",
        "gameName": "Shaolin Soccer",
        "fullGameImg": "https://file.ckgame.vip/master/0/30216fdb5e31460faf76c2ac3b396179.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1121,
        "categoryId": 554,
        "gameCode": "20",
        "channelBean": "PG",
        "gameName": "Reel Love",
        "fullGameImg": "https://file.ckgame.vip/master/0/11a340ce75e643f4b97fd83d3d2efbd8.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1115,
        "categoryId": 554,
        "gameCode": "2",
        "channelBean": "PG",
        "gameName": "Gem Saviour",
        "fullGameImg": "https://file.ckgame.vip/master/0/b7a268ba6d514522879d5ff3e01cce3c.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1346,
        "categoryId": 693,
        "gameCode": "236",
        "channelBean": "TADA",
        "gameName": "Wheel",
        "fullGameImg": "https://file.ckgame.vip/master/0/2478c161b7de4ec59222d1e0221b7447.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 20002,
        "categoryId": 685,
        "gameCode": "ba2adf72179e1ead9e3dae8f0a7d4c07",
        "channelBean": "HUIDU",
        "gameName": "Mahjong Ways 2",
        "fullGameImg": "https://file.ckgame.vip/master/0/21fe1c1f43ca4a86917abe753f2dafb2.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 35009,
        "categoryId": 713,
        "gameCode": "10008",
        "channelBean": "PGSOFTPP",
        "gameName": "Pyramid King",
        "fullGameImg": "https://file.ckgame.vip/master/0/acb4c71b36f643b986abc91c204b0020.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 30089,
        "categoryId": 710,
        "gameCode": "1397455",
        "channelBean": "PGSOFTPT",
        "gameName": "fruity-candy",
        "fullGameImg": "https://file.ckgame.vip/master/0/0090dee8b55f4032b5332744e6536795.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 30087,
        "categoryId": 710,
        "gameCode": "44",
        "channelBean": "PGSOFTPT",
        "gameName": "emperors-favour",
        "fullGameImg": "https://file.ckgame.vip/master/0/08ee034093c14e648aa71e8a8a7240d9.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 21340,
        "categoryId": 524,
        "gameCode": "8a87aae7a3624d284306e9c6fe1b3e9c",
        "channelBean": "HUIDU",
        "gameName": "Dice",
        "fullGameImg": "https://file.ckgame.vip/master/0/92804cc8c9b047e0ba914116d010c3ec.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 20002,
        "categoryId": 506,
        "gameCode": "ba2adf72179e1ead9e3dae8f0a7d4c07",
        "channelBean": "HUIDU",
        "gameName": "Mahjong Ways 2",
        "fullGameImg": "https://file.ckgame.vip/master/0/21fe1c1f43ca4a86917abe753f2dafb2.png",
        "minBalanceEnter": 0,
        "sort": 2,
        "isMaintenance": false
      }, {
        "gameId": 1558,
        "categoryId": 23,
        "gameCode": "GB15",
        "channelBean": "CQ9",
        "gameName": "Heroofthe3Kingdoms-CaoCao",
        "fullGameImg": "https://file.ckgame.vip/master/1000/1a30ad2f0b6c4a96b5aee31eff8e8ad4.jpg",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1233,
        "categoryId": 12,
        "gameCode": "1568554",
        "channelBean": "PG",
        "gameName": "Wild Heist Cashout",
        "fullGameImg": "https://file.ckgame.vip/master/0/1803225400de44bdab4d1ccff840a828.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1222,
        "categoryId": 12,
        "gameCode": "1432733",
        "channelBean": "PG",
        "gameName": "Mystical Spirits",
        "fullGameImg": "https://file.ckgame.vip/master/0/b8070dc8b6d947bb907c1efe7981494c.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1218,
        "categoryId": 12,
        "gameCode": "1397455",
        "channelBean": "PG",
        "gameName": "Fruity Candy",
        "fullGameImg": "https://file.ckgame.vip/master/0/a92977ee51b44fb48f6a4a1594571cd7.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1222,
        "categoryId": 70,
        "gameCode": "1432733",
        "channelBean": "PG",
        "gameName": "Mystical Spirits",
        "fullGameImg": "https://file.ckgame.vip/master/0/b8070dc8b6d947bb907c1efe7981494c.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1218,
        "categoryId": 70,
        "gameCode": "1397455",
        "channelBean": "PG",
        "gameName": "Fruity Candy",
        "fullGameImg": "https://file.ckgame.vip/master/0/a92977ee51b44fb48f6a4a1594571cd7.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1186,
        "categoryId": 70,
        "gameCode": "107",
        "channelBean": "PG",
        "gameName": "Legendary Monkey King",
        "fullGameImg": "https://file.ckgame.vip/master/0/17a2bcd471024bdbabfb0b26573d796f.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1162,
        "categoryId": 70,
        "gameCode": "80",
        "channelBean": "PG",
        "gameName": "Circus Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/15b55960e12f4cc09e8e49831db06eca.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1154,
        "categoryId": 70,
        "gameCode": "68",
        "channelBean": "PG",
        "gameName": "Fortune Mouse",
        "fullGameImg": "https://file.ckgame.vip/master/0/fb36eae50d9b41e6910cdff382c1e397.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1122,
        "categoryId": 70,
        "gameCode": "24",
        "channelBean": "PG",
        "gameName": "Win Win Won",
        "fullGameImg": "https://file.ckgame.vip/master/0/d697a6ed7d7047f4b89df3cba474995e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1116,
        "categoryId": 70,
        "gameCode": "3",
        "channelBean": "PG",
        "gameName": "Fortune Gods",
        "fullGameImg": "https://file.ckgame.vip/master/0/07ae85899d2c418e9152242303cf0c58.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1222,
        "categoryId": 230,
        "gameCode": "1432733",
        "channelBean": "PG",
        "gameName": "Mystical Spirits",
        "fullGameImg": "https://file.ckgame.vip/master/0/b8070dc8b6d947bb907c1efe7981494c.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1218,
        "categoryId": 230,
        "gameCode": "1397455",
        "channelBean": "PG",
        "gameName": "Fruity Candy",
        "fullGameImg": "https://file.ckgame.vip/master/0/a92977ee51b44fb48f6a4a1594571cd7.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1186,
        "categoryId": 230,
        "gameCode": "107",
        "channelBean": "PG",
        "gameName": "Legendary Monkey King",
        "fullGameImg": "https://file.ckgame.vip/master/0/17a2bcd471024bdbabfb0b26573d796f.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1162,
        "categoryId": 230,
        "gameCode": "80",
        "channelBean": "PG",
        "gameName": "Circus Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/15b55960e12f4cc09e8e49831db06eca.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1154,
        "categoryId": 230,
        "gameCode": "68",
        "channelBean": "PG",
        "gameName": "Fortune Mouse",
        "fullGameImg": "https://file.ckgame.vip/master/0/fb36eae50d9b41e6910cdff382c1e397.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1122,
        "categoryId": 230,
        "gameCode": "24",
        "channelBean": "PG",
        "gameName": "Win Win Won",
        "fullGameImg": "https://file.ckgame.vip/master/0/d697a6ed7d7047f4b89df3cba474995e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1116,
        "categoryId": 230,
        "gameCode": "3",
        "channelBean": "PG",
        "gameName": "Fortune Gods",
        "fullGameImg": "https://file.ckgame.vip/master/0/07ae85899d2c418e9152242303cf0c58.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1222,
        "categoryId": 19,
        "gameCode": "1432733",
        "channelBean": "PG",
        "gameName": "Mystical Spirits",
        "fullGameImg": "https://file.ckgame.vip/master/0/b8070dc8b6d947bb907c1efe7981494c.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1218,
        "categoryId": 19,
        "gameCode": "1397455",
        "channelBean": "PG",
        "gameName": "Fruity Candy",
        "fullGameImg": "https://file.ckgame.vip/master/0/a92977ee51b44fb48f6a4a1594571cd7.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1186,
        "categoryId": 19,
        "gameCode": "107",
        "channelBean": "PG",
        "gameName": "Legendary Monkey King",
        "fullGameImg": "https://file.ckgame.vip/master/0/17a2bcd471024bdbabfb0b26573d796f.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1162,
        "categoryId": 19,
        "gameCode": "80",
        "channelBean": "PG",
        "gameName": "Circus Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/15b55960e12f4cc09e8e49831db06eca.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1154,
        "categoryId": 19,
        "gameCode": "68",
        "channelBean": "PG",
        "gameName": "Fortune Mouse",
        "fullGameImg": "https://file.ckgame.vip/master/0/fb36eae50d9b41e6910cdff382c1e397.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1122,
        "categoryId": 19,
        "gameCode": "24",
        "channelBean": "PG",
        "gameName": "Win Win Won",
        "fullGameImg": "https://file.ckgame.vip/master/0/d697a6ed7d7047f4b89df3cba474995e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1116,
        "categoryId": 19,
        "gameCode": "3",
        "channelBean": "PG",
        "gameName": "Fortune Gods",
        "fullGameImg": "https://file.ckgame.vip/master/0/07ae85899d2c418e9152242303cf0c58.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1339,
        "categoryId": 491,
        "gameCode": "224",
        "channelBean": "TADA",
        "gameName": "Go Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/65bd67d7e8954580a5f645b71cdb05a0.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1352,
        "categoryId": 524,
        "gameCode": "254",
        "channelBean": "TADA",
        "gameName": "Mines Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/b186704f904f46c3815cc47bd753933e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1263,
        "categoryId": 530,
        "gameCode": "74",
        "channelBean": "TADA",
        "gameName": "Mega Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/ee2cff65b14d47ce9f30932a0d11531e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1244,
        "categoryId": 530,
        "gameCode": "20",
        "channelBean": "TADA",
        "gameName": "Bombing Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/7a112eeed3b24a208971c05065530f65.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1352,
        "categoryId": 544,
        "gameCode": "254",
        "channelBean": "TADA",
        "gameName": "Mines Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/b186704f904f46c3815cc47bd753933e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1339,
        "categoryId": 544,
        "gameCode": "224",
        "channelBean": "TADA",
        "gameName": "Go Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/65bd67d7e8954580a5f645b71cdb05a0.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1222,
        "categoryId": 554,
        "gameCode": "1432733",
        "channelBean": "PG",
        "gameName": "Mystical Spirits",
        "fullGameImg": "https://file.ckgame.vip/master/0/b8070dc8b6d947bb907c1efe7981494c.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1218,
        "categoryId": 554,
        "gameCode": "1397455",
        "channelBean": "PG",
        "gameName": "Fruity Candy",
        "fullGameImg": "https://file.ckgame.vip/master/0/a92977ee51b44fb48f6a4a1594571cd7.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1186,
        "categoryId": 554,
        "gameCode": "107",
        "channelBean": "PG",
        "gameName": "Legendary Monkey King",
        "fullGameImg": "https://file.ckgame.vip/master/0/17a2bcd471024bdbabfb0b26573d796f.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1162,
        "categoryId": 554,
        "gameCode": "80",
        "channelBean": "PG",
        "gameName": "Circus Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/15b55960e12f4cc09e8e49831db06eca.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1154,
        "categoryId": 554,
        "gameCode": "68",
        "channelBean": "PG",
        "gameName": "Fortune Mouse",
        "fullGameImg": "https://file.ckgame.vip/master/0/fb36eae50d9b41e6910cdff382c1e397.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1122,
        "categoryId": 554,
        "gameCode": "24",
        "channelBean": "PG",
        "gameName": "Win Win Won",
        "fullGameImg": "https://file.ckgame.vip/master/0/d697a6ed7d7047f4b89df3cba474995e.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1116,
        "categoryId": 554,
        "gameCode": "3",
        "channelBean": "PG",
        "gameName": "Fortune Gods",
        "fullGameImg": "https://file.ckgame.vip/master/0/07ae85899d2c418e9152242303cf0c58.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1348,
        "categoryId": 693,
        "gameCode": "241",
        "channelBean": "TADA",
        "gameName": "Keno",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdb5865539684a1ba691a34425f1fa88.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 20004,
        "categoryId": 685,
        "gameCode": "fb2a2ac51303c0a0801dbe6a72d936f7",
        "channelBean": "HUIDU",
        "gameName": "Leprechaun Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/94c73a73c1a54f9a9e92972461ecbb61.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 35010,
        "categoryId": 713,
        "gameCode": "10009",
        "channelBean": "PGSOFTPP",
        "gameName": "Pirate Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/5b9dac7eb677433382a9a3094edb6e75.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 30090,
        "categoryId": 710,
        "gameCode": "38",
        "channelBean": "PGSOFTPT",
        "gameName": "gem-saviour-sword",
        "fullGameImg": "https://file.ckgame.vip/master/0/9df4baf76f754f438d9f71b3a2b73427.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 21341,
        "categoryId": 524,
        "gameCode": "c68a515f0b3b10eec96cf6d33299f4e2",
        "channelBean": "HUIDU",
        "gameName": "Goal",
        "fullGameImg": "https://file.ckgame.vip/master/0/6bcfa36c25b24c60a0835d733a0e2116.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 20004,
        "categoryId": 506,
        "gameCode": "fb2a2ac51303c0a0801dbe6a72d936f7",
        "channelBean": "HUIDU",
        "gameName": "Leprechaun Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/94c73a73c1a54f9a9e92972461ecbb61.png",
        "minBalanceEnter": 0,
        "sort": 3,
        "isMaintenance": false
      }, {
        "gameId": 1234,
        "categoryId": 12,
        "gameCode": "1572362",
        "channelBean": "PG",
        "gameName": "Gladiator's Glory",
        "fullGameImg": "https://file.ckgame.vip/master/0/72f26e0db4e944fd93672d593bf1de11.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1223,
        "categoryId": 12,
        "gameCode": "1448762",
        "channelBean": "PG",
        "gameName": "Songkran Splash",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7543c4e236841398767284144dfc5fe.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1219,
        "categoryId": 12,
        "gameCode": "1402846",
        "channelBean": "PG",
        "gameName": "Midas Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/cecba87ddd124a09b5133fadc8ee5bc4.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1223,
        "categoryId": 70,
        "gameCode": "1448762",
        "channelBean": "PG",
        "gameName": "Songkran Splash",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7543c4e236841398767284144dfc5fe.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1219,
        "categoryId": 70,
        "gameCode": "1402846",
        "channelBean": "PG",
        "gameName": "Midas Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/cecba87ddd124a09b5133fadc8ee5bc4.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1187,
        "categoryId": 70,
        "gameCode": "108",
        "channelBean": "PG",
        "gameName": "Buffalo Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/79251db71ec6448ca45cf170533292b8.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1163,
        "categoryId": 70,
        "gameCode": "82",
        "channelBean": "PG",
        "gameName": "Phoenix Rises",
        "fullGameImg": "https://file.ckgame.vip/master/0/16eb1088af104b75bc3b8c1561a4b727.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1155,
        "categoryId": 70,
        "gameCode": "69",
        "channelBean": "PG",
        "gameName": "Bikini Paradise",
        "fullGameImg": "https://file.ckgame.vip/master/0/311e7674345e4421bcf85a347acf2e04.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1123,
        "categoryId": 70,
        "gameCode": "25",
        "channelBean": "PG",
        "gameName": "Plushie Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/034005d603354e1890c796c205571fab.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1117,
        "categoryId": 70,
        "gameCode": "6",
        "channelBean": "PG",
        "gameName": "Medusa 2: The Quest of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/57bb56292cff44d58e2af0a42be2912e.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1223,
        "categoryId": 230,
        "gameCode": "1448762",
        "channelBean": "PG",
        "gameName": "Songkran Splash",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7543c4e236841398767284144dfc5fe.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1219,
        "categoryId": 230,
        "gameCode": "1402846",
        "channelBean": "PG",
        "gameName": "Midas Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/cecba87ddd124a09b5133fadc8ee5bc4.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1187,
        "categoryId": 230,
        "gameCode": "108",
        "channelBean": "PG",
        "gameName": "Buffalo Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/79251db71ec6448ca45cf170533292b8.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1163,
        "categoryId": 230,
        "gameCode": "82",
        "channelBean": "PG",
        "gameName": "Phoenix Rises",
        "fullGameImg": "https://file.ckgame.vip/master/0/16eb1088af104b75bc3b8c1561a4b727.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1155,
        "categoryId": 230,
        "gameCode": "69",
        "channelBean": "PG",
        "gameName": "Bikini Paradise",
        "fullGameImg": "https://file.ckgame.vip/master/0/311e7674345e4421bcf85a347acf2e04.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1123,
        "categoryId": 230,
        "gameCode": "25",
        "channelBean": "PG",
        "gameName": "Plushie Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/034005d603354e1890c796c205571fab.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1117,
        "categoryId": 230,
        "gameCode": "6",
        "channelBean": "PG",
        "gameName": "Medusa 2: The Quest of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/57bb56292cff44d58e2af0a42be2912e.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1223,
        "categoryId": 19,
        "gameCode": "1448762",
        "channelBean": "PG",
        "gameName": "Songkran Splash",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7543c4e236841398767284144dfc5fe.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1219,
        "categoryId": 19,
        "gameCode": "1402846",
        "channelBean": "PG",
        "gameName": "Midas Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/cecba87ddd124a09b5133fadc8ee5bc4.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1187,
        "categoryId": 19,
        "gameCode": "108",
        "channelBean": "PG",
        "gameName": "Buffalo Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/79251db71ec6448ca45cf170533292b8.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1163,
        "categoryId": 19,
        "gameCode": "82",
        "channelBean": "PG",
        "gameName": "Phoenix Rises",
        "fullGameImg": "https://file.ckgame.vip/master/0/16eb1088af104b75bc3b8c1561a4b727.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1155,
        "categoryId": 19,
        "gameCode": "69",
        "channelBean": "PG",
        "gameName": "Bikini Paradise",
        "fullGameImg": "https://file.ckgame.vip/master/0/311e7674345e4421bcf85a347acf2e04.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1123,
        "categoryId": 19,
        "gameCode": "25",
        "channelBean": "PG",
        "gameName": "Plushie Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/034005d603354e1890c796c205571fab.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1117,
        "categoryId": 19,
        "gameCode": "6",
        "channelBean": "PG",
        "gameName": "Medusa 2: The Quest of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/57bb56292cff44d58e2af0a42be2912e.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1342,
        "categoryId": 491,
        "gameCode": "229",
        "channelBean": "TADA",
        "gameName": "Mines",
        "fullGameImg": "https://file.ckgame.vip/master/0/31489b7f53924d11a82a4500d19caf52.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1261,
        "categoryId": 29,
        "gameCode": "60",
        "channelBean": "TADA",
        "gameName": "Dragon Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/84df39c7b26a4631a86c055a560c16bf.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1353,
        "categoryId": 524,
        "gameCode": "261",
        "channelBean": "TADA",
        "gameName": "Crash Bonus",
        "fullGameImg": "https://file.ckgame.vip/master/0/36dca6c8d43443a7be10215db2c64ee8.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1353,
        "categoryId": 544,
        "gameCode": "261",
        "channelBean": "TADA",
        "gameName": "Crash Bonus",
        "fullGameImg": "https://file.ckgame.vip/master/0/36dca6c8d43443a7be10215db2c64ee8.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1342,
        "categoryId": 544,
        "gameCode": "229",
        "channelBean": "TADA",
        "gameName": "Mines",
        "fullGameImg": "https://file.ckgame.vip/master/0/31489b7f53924d11a82a4500d19caf52.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1223,
        "categoryId": 554,
        "gameCode": "1448762",
        "channelBean": "PG",
        "gameName": "Songkran Splash",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7543c4e236841398767284144dfc5fe.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1219,
        "categoryId": 554,
        "gameCode": "1402846",
        "channelBean": "PG",
        "gameName": "Midas Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/cecba87ddd124a09b5133fadc8ee5bc4.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1187,
        "categoryId": 554,
        "gameCode": "108",
        "channelBean": "PG",
        "gameName": "Buffalo Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/79251db71ec6448ca45cf170533292b8.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1163,
        "categoryId": 554,
        "gameCode": "82",
        "channelBean": "PG",
        "gameName": "Phoenix Rises",
        "fullGameImg": "https://file.ckgame.vip/master/0/16eb1088af104b75bc3b8c1561a4b727.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1155,
        "categoryId": 554,
        "gameCode": "69",
        "channelBean": "PG",
        "gameName": "Bikini Paradise",
        "fullGameImg": "https://file.ckgame.vip/master/0/311e7674345e4421bcf85a347acf2e04.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1123,
        "categoryId": 554,
        "gameCode": "25",
        "channelBean": "PG",
        "gameName": "Plushie Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/034005d603354e1890c796c205571fab.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1117,
        "categoryId": 554,
        "gameCode": "6",
        "channelBean": "PG",
        "gameName": "Medusa 2: The Quest of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/57bb56292cff44d58e2af0a42be2912e.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1349,
        "categoryId": 693,
        "gameCode": "242",
        "channelBean": "TADA",
        "gameName": "Plinko",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ea76eff9c0b42d6bb0f28d344066c25.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 35001,
        "categoryId": 713,
        "gameCode": "10000",
        "channelBean": "PGSOFTPP",
        "gameName": "Gates of Olympus",
        "fullGameImg": "https://file.ckgame.vip/master/0/2bcead3c4bff4b4fb1d34c0d51a049fe.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 30091,
        "categoryId": 710,
        "gameCode": "25",
        "channelBean": "PGSOFTPT",
        "gameName": "plushie-frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/14f4fd8f125549eea826afe7a4ecb3e7.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 20005,
        "categoryId": 506,
        "gameCode": "e1b4c6b95746d519228744771f15fe4b",
        "channelBean": "HUIDU",
        "gameName": "Lucky Neko",
        "fullGameImg": "https://file.ckgame.vip/master/0/6acb7addf8f04688870c222c5cfb5c27.png",
        "minBalanceEnter": 0,
        "sort": 4,
        "isMaintenance": false
      }, {
        "gameId": 1235,
        "categoryId": 12,
        "gameCode": "1580541",
        "channelBean": "PG",
        "gameName": "Mafia Mayhem",
        "fullGameImg": "https://file.ckgame.vip/master/0/fdea315a0891435988252aabed2d7cce.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1224,
        "categoryId": 12,
        "gameCode": "1451122",
        "channelBean": "PG",
        "gameName": "Dragon Hatch2",
        "fullGameImg": "https://file.ckgame.vip/master/0/cd51969ef42c4c4fbdafe58f866900cf.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1210,
        "categoryId": 12,
        "gameCode": "132",
        "channelBean": "PG",
        "gameName": "Wild Coaster",
        "fullGameImg": "https://file.ckgame.vip/master/0/dc670ae9a45040349e2c7aa2959be65b.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1224,
        "categoryId": 70,
        "gameCode": "1451122",
        "channelBean": "PG",
        "gameName": "Dragon Hatch2",
        "fullGameImg": "https://file.ckgame.vip/master/0/cd51969ef42c4c4fbdafe58f866900cf.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1200,
        "categoryId": 70,
        "gameCode": "121",
        "channelBean": "PG",
        "gameName": "Destiny of Sun & Moon",
        "fullGameImg": "https://file.ckgame.vip/master/0/2470ab7fb3db4f9d92d0fb708725b46a.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1164,
        "categoryId": 70,
        "gameCode": "83",
        "channelBean": "PG",
        "gameName": "Wild Fireworks",
        "fullGameImg": "https://file.ckgame.vip/master/0/a7e82493ccd549258ddf00312004fb75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1156,
        "categoryId": 70,
        "gameCode": "70",
        "channelBean": "PG",
        "gameName": "Candy Burst",
        "fullGameImg": "https://file.ckgame.vip/master/0/91e2035ee514462899e27cc625ba2cb0.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1124,
        "categoryId": 70,
        "gameCode": "26",
        "channelBean": "PG",
        "gameName": "Tree of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/76dc5b19124f457f88d4d1f769195fac.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1118,
        "categoryId": 70,
        "gameCode": "7",
        "channelBean": "PG",
        "gameName": "Medusa 1: The Curse of Athena",
        "fullGameImg": "https://file.ckgame.vip/master/0/fac440b0f747427d8390ed6b1b4c1c75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1224,
        "categoryId": 230,
        "gameCode": "1451122",
        "channelBean": "PG",
        "gameName": "Dragon Hatch2",
        "fullGameImg": "https://file.ckgame.vip/master/0/cd51969ef42c4c4fbdafe58f866900cf.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1200,
        "categoryId": 230,
        "gameCode": "121",
        "channelBean": "PG",
        "gameName": "Destiny of Sun & Moon",
        "fullGameImg": "https://file.ckgame.vip/master/0/2470ab7fb3db4f9d92d0fb708725b46a.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1188,
        "categoryId": 230,
        "gameCode": "109",
        "channelBean": "PG",
        "gameName": "Sushi Oishi",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1164,
        "categoryId": 230,
        "gameCode": "83",
        "channelBean": "PG",
        "gameName": "Wild Fireworks",
        "fullGameImg": "https://file.ckgame.vip/master/0/a7e82493ccd549258ddf00312004fb75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1156,
        "categoryId": 230,
        "gameCode": "70",
        "channelBean": "PG",
        "gameName": "Candy Burst",
        "fullGameImg": "https://file.ckgame.vip/master/0/91e2035ee514462899e27cc625ba2cb0.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1124,
        "categoryId": 230,
        "gameCode": "26",
        "channelBean": "PG",
        "gameName": "Tree of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/76dc5b19124f457f88d4d1f769195fac.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1118,
        "categoryId": 230,
        "gameCode": "7",
        "channelBean": "PG",
        "gameName": "Medusa 1: The Curse of Athena",
        "fullGameImg": "https://file.ckgame.vip/master/0/fac440b0f747427d8390ed6b1b4c1c75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1224,
        "categoryId": 19,
        "gameCode": "1451122",
        "channelBean": "PG",
        "gameName": "Dragon Hatch2",
        "fullGameImg": "https://file.ckgame.vip/master/0/cd51969ef42c4c4fbdafe58f866900cf.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1200,
        "categoryId": 19,
        "gameCode": "121",
        "channelBean": "PG",
        "gameName": "Destiny of Sun & Moon",
        "fullGameImg": "https://file.ckgame.vip/master/0/2470ab7fb3db4f9d92d0fb708725b46a.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1189,
        "categoryId": 19,
        "gameCode": "110",
        "channelBean": "PG",
        "gameName": "Jurassic Kingdom",
        "fullGameImg": "https://file.ckgame.vip/master/0/2d639aaee20f49be8a1087d09c9b5633.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1164,
        "categoryId": 19,
        "gameCode": "83",
        "channelBean": "PG",
        "gameName": "Wild Fireworks",
        "fullGameImg": "https://file.ckgame.vip/master/0/a7e82493ccd549258ddf00312004fb75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1156,
        "categoryId": 19,
        "gameCode": "70",
        "channelBean": "PG",
        "gameName": "Candy Burst",
        "fullGameImg": "https://file.ckgame.vip/master/0/91e2035ee514462899e27cc625ba2cb0.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1124,
        "categoryId": 19,
        "gameCode": "26",
        "channelBean": "PG",
        "gameName": "Tree of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/76dc5b19124f457f88d4d1f769195fac.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1118,
        "categoryId": 19,
        "gameCode": "7",
        "channelBean": "PG",
        "gameName": "Medusa 1: The Curse of Athena",
        "fullGameImg": "https://file.ckgame.vip/master/0/fac440b0f747427d8390ed6b1b4c1c75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1343,
        "categoryId": 491,
        "gameCode": "232",
        "channelBean": "TADA",
        "gameName": "Tower",
        "fullGameImg": "https://file.ckgame.vip/master/0/e87e2f4933444000bf76a114db1a5256.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1343,
        "categoryId": 544,
        "gameCode": "232",
        "channelBean": "TADA",
        "gameName": "Tower",
        "fullGameImg": "https://file.ckgame.vip/master/0/e87e2f4933444000bf76a114db1a5256.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1224,
        "categoryId": 554,
        "gameCode": "1451122",
        "channelBean": "PG",
        "gameName": "Dragon Hatch2",
        "fullGameImg": "https://file.ckgame.vip/master/0/cd51969ef42c4c4fbdafe58f866900cf.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1200,
        "categoryId": 554,
        "gameCode": "121",
        "channelBean": "PG",
        "gameName": "Destiny of Sun & Moon",
        "fullGameImg": "https://file.ckgame.vip/master/0/2470ab7fb3db4f9d92d0fb708725b46a.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1164,
        "categoryId": 554,
        "gameCode": "83",
        "channelBean": "PG",
        "gameName": "Wild Fireworks",
        "fullGameImg": "https://file.ckgame.vip/master/0/a7e82493ccd549258ddf00312004fb75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1156,
        "categoryId": 554,
        "gameCode": "70",
        "channelBean": "PG",
        "gameName": "Candy Burst",
        "fullGameImg": "https://file.ckgame.vip/master/0/91e2035ee514462899e27cc625ba2cb0.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1124,
        "categoryId": 554,
        "gameCode": "26",
        "channelBean": "PG",
        "gameName": "Tree of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/76dc5b19124f457f88d4d1f769195fac.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1118,
        "categoryId": 554,
        "gameCode": "7",
        "channelBean": "PG",
        "gameName": "Medusa 1: The Curse of Athena",
        "fullGameImg": "https://file.ckgame.vip/master/0/fac440b0f747427d8390ed6b1b4c1c75.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1352,
        "categoryId": 693,
        "gameCode": "254",
        "channelBean": "TADA",
        "gameName": "Mines Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/b186704f904f46c3815cc47bd753933e.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 35002,
        "categoryId": 713,
        "gameCode": "10001",
        "channelBean": "PGSOFTPP",
        "gameName": "Monkey Warrior",
        "fullGameImg": "https://file.ckgame.vip/master/0/aee82f20288a4b34a2848565e24f38ab.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 30092,
        "categoryId": 710,
        "gameCode": "20",
        "channelBean": "PGSOFTPT",
        "gameName": "reel-lovey",
        "fullGameImg": "https://file.ckgame.vip/master/0/5c83b20f16a94d62856845199fea8671.png",
        "minBalanceEnter": 0,
        "sort": 5,
        "isMaintenance": false
      }, {
        "gameId": 1236,
        "categoryId": 12,
        "gameCode": "1594259",
        "channelBean": "PG",
        "gameName": "Safari Wilds",
        "fullGameImg": "https://file.ckgame.vip/master/0/564fd63ed6ed4b9994b0356f3901f536.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1225,
        "categoryId": 12,
        "gameCode": "1473388",
        "channelBean": "PG",
        "gameName": "Cruise Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/2016463c0afe47689abe7b52266985d0.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1211,
        "categoryId": 12,
        "gameCode": "135",
        "channelBean": "PG",
        "gameName": "Wild Bounty Showdown",
        "fullGameImg": "https://file.ckgame.vip/master/0/cad57cb952fc4d8885db3cae1238b1af.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1225,
        "categoryId": 70,
        "gameCode": "1473388",
        "channelBean": "PG",
        "gameName": "Cruise Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/2016463c0afe47689abe7b52266985d0.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1201,
        "categoryId": 70,
        "gameCode": "122",
        "channelBean": "PG",
        "gameName": "Garuda Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/d213978746fc4ac0acb0b90fc74d0401.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1189,
        "categoryId": 70,
        "gameCode": "110",
        "channelBean": "PG",
        "gameName": "Jurassic Kingdom",
        "fullGameImg": "https://file.ckgame.vip/master/0/2d639aaee20f49be8a1087d09c9b5633.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1165,
        "categoryId": 70,
        "gameCode": "84",
        "channelBean": "PG",
        "gameName": "Queen of Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/2264482678bd44cf960c8a5028ed3f3c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1157,
        "categoryId": 70,
        "gameCode": "71",
        "channelBean": "PG",
        "gameName": "Cai Shen Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/acb651e8493e49bf84a71b620f7b2691.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1125,
        "categoryId": 70,
        "gameCode": "28",
        "channelBean": "PG",
        "gameName": "Hotpot",
        "fullGameImg": "https://file.ckgame.vip/master/0/3a12d54a4ce649a9b32fc7606105e06c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1225,
        "categoryId": 230,
        "gameCode": "1473388",
        "channelBean": "PG",
        "gameName": "Cruise Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/2016463c0afe47689abe7b52266985d0.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1201,
        "categoryId": 230,
        "gameCode": "122",
        "channelBean": "PG",
        "gameName": "Garuda Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/d213978746fc4ac0acb0b90fc74d0401.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1189,
        "categoryId": 230,
        "gameCode": "110",
        "channelBean": "PG",
        "gameName": "Jurassic Kingdom",
        "fullGameImg": "https://file.ckgame.vip/master/0/2d639aaee20f49be8a1087d09c9b5633.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1165,
        "categoryId": 230,
        "gameCode": "84",
        "channelBean": "PG",
        "gameName": "Queen of Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/2264482678bd44cf960c8a5028ed3f3c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1157,
        "categoryId": 230,
        "gameCode": "71",
        "channelBean": "PG",
        "gameName": "Cai Shen Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/acb651e8493e49bf84a71b620f7b2691.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1125,
        "categoryId": 230,
        "gameCode": "28",
        "channelBean": "PG",
        "gameName": "Hotpot",
        "fullGameImg": "https://file.ckgame.vip/master/0/3a12d54a4ce649a9b32fc7606105e06c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1119,
        "categoryId": 230,
        "gameCode": "17",
        "channelBean": "PG",
        "gameName": "Wizdom Wonders",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1225,
        "categoryId": 19,
        "gameCode": "1473388",
        "channelBean": "PG",
        "gameName": "Cruise Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/2016463c0afe47689abe7b52266985d0.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1201,
        "categoryId": 19,
        "gameCode": "122",
        "channelBean": "PG",
        "gameName": "Garuda Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/d213978746fc4ac0acb0b90fc74d0401.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1191,
        "categoryId": 19,
        "gameCode": "112",
        "channelBean": "PG",
        "gameName": "Oriental Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6c79306e04c4b69a0909724c32d2df0.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1165,
        "categoryId": 19,
        "gameCode": "84",
        "channelBean": "PG",
        "gameName": "Queen of Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/2264482678bd44cf960c8a5028ed3f3c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1157,
        "categoryId": 19,
        "gameCode": "71",
        "channelBean": "PG",
        "gameName": "Cai Shen Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/acb651e8493e49bf84a71b620f7b2691.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1125,
        "categoryId": 19,
        "gameCode": "28",
        "channelBean": "PG",
        "gameName": "Hotpot",
        "fullGameImg": "https://file.ckgame.vip/master/0/3a12d54a4ce649a9b32fc7606105e06c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1225,
        "categoryId": 554,
        "gameCode": "1473388",
        "channelBean": "PG",
        "gameName": "Cruise Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/2016463c0afe47689abe7b52266985d0.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1201,
        "categoryId": 554,
        "gameCode": "122",
        "channelBean": "PG",
        "gameName": "Garuda Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/d213978746fc4ac0acb0b90fc74d0401.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1189,
        "categoryId": 554,
        "gameCode": "110",
        "channelBean": "PG",
        "gameName": "Jurassic Kingdom",
        "fullGameImg": "https://file.ckgame.vip/master/0/2d639aaee20f49be8a1087d09c9b5633.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1165,
        "categoryId": 554,
        "gameCode": "84",
        "channelBean": "PG",
        "gameName": "Queen of Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/2264482678bd44cf960c8a5028ed3f3c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1157,
        "categoryId": 554,
        "gameCode": "71",
        "channelBean": "PG",
        "gameName": "Cai Shen Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/acb651e8493e49bf84a71b620f7b2691.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1125,
        "categoryId": 554,
        "gameCode": "28",
        "channelBean": "PG",
        "gameName": "Hotpot",
        "fullGameImg": "https://file.ckgame.vip/master/0/3a12d54a4ce649a9b32fc7606105e06c.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1353,
        "categoryId": 693,
        "gameCode": "261",
        "channelBean": "TADA",
        "gameName": "Crash Bonus",
        "fullGameImg": "https://file.ckgame.vip/master/0/36dca6c8d43443a7be10215db2c64ee8.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 35003,
        "categoryId": 713,
        "gameCode": "10002",
        "channelBean": "PGSOFTPP",
        "gameName": "Joker King",
        "fullGameImg": "https://file.ckgame.vip/master/0/c5bf66bbdd334d328baeff2f06d0e891.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 30093,
        "categoryId": 710,
        "gameCode": "1568554",
        "channelBean": "PGSOFTPT",
        "gameName": "wild-heist-co",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7cfb9c6492f4ad48fbb82119a276988.png",
        "minBalanceEnter": 0,
        "sort": 6,
        "isMaintenance": false
      }, {
        "gameId": 1237,
        "categoryId": 12,
        "gameCode": "1601012",
        "channelBean": "PG",
        "gameName": "Lucky Clover Lady",
        "fullGameImg": "https://file.ckgame.vip/master/0/c7328c1f6ec8425bb927a000596ef6e0.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1226,
        "categoryId": 12,
        "gameCode": "1489936",
        "channelBean": "PG",
        "gameName": "Ultimate Striker",
        "fullGameImg": "https://file.ckgame.vip/master/0/a0443f1e82524d9a972c388eff5338b5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1212,
        "categoryId": 12,
        "gameCode": "1312883",
        "channelBean": "PG",
        "gameName": "Prosperity Fortune Tree",
        "fullGameImg": "https://file.ckgame.vip/master/0/f01e7a4489894f5ea681d2ab600b3cb9.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1226,
        "categoryId": 70,
        "gameCode": "1489936",
        "channelBean": "PG",
        "gameName": "Ultimate Striker",
        "fullGameImg": "https://file.ckgame.vip/master/0/a0443f1e82524d9a972c388eff5338b5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1202,
        "categoryId": 70,
        "gameCode": "123",
        "channelBean": "PG",
        "gameName": "Rooster Rumble",
        "fullGameImg": "https://file.ckgame.vip/master/0/cc495d62e1794cc2a54ec2df808cd12b.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1166,
        "categoryId": 70,
        "gameCode": "85",
        "channelBean": "PG",
        "gameName": "Genie's 3 Wishes",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdd8c6f0db214b9c8c6bbf7b6baf6452.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1158,
        "categoryId": 70,
        "gameCode": "73",
        "channelBean": "PG",
        "gameName": "Egypt's Book of Mystery",
        "fullGameImg": "https://file.ckgame.vip/master/0/37ad3455f45843e4a0aacf28d5bc36d5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1126,
        "categoryId": 70,
        "gameCode": "29",
        "channelBean": "PG",
        "gameName": "Dragon Legend",
        "fullGameImg": "https://file.ckgame.vip/master/0/9f5d0c4d999f4fae824b317b9e1d1e31.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1226,
        "categoryId": 230,
        "gameCode": "1489936",
        "channelBean": "PG",
        "gameName": "Ultimate Striker",
        "fullGameImg": "https://file.ckgame.vip/master/0/a0443f1e82524d9a972c388eff5338b5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1202,
        "categoryId": 230,
        "gameCode": "123",
        "channelBean": "PG",
        "gameName": "Rooster Rumble",
        "fullGameImg": "https://file.ckgame.vip/master/0/cc495d62e1794cc2a54ec2df808cd12b.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1190,
        "categoryId": 230,
        "gameCode": "111",
        "channelBean": "PG",
        "gameName": "Groundhog Harvest",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1166,
        "categoryId": 230,
        "gameCode": "85",
        "channelBean": "PG",
        "gameName": "Genie's 3 Wishes",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdd8c6f0db214b9c8c6bbf7b6baf6452.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1158,
        "categoryId": 230,
        "gameCode": "73",
        "channelBean": "PG",
        "gameName": "Egypt's Book of Mystery",
        "fullGameImg": "https://file.ckgame.vip/master/0/37ad3455f45843e4a0aacf28d5bc36d5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1126,
        "categoryId": 230,
        "gameCode": "29",
        "channelBean": "PG",
        "gameName": "Dragon Legend",
        "fullGameImg": "https://file.ckgame.vip/master/0/9f5d0c4d999f4fae824b317b9e1d1e31.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1226,
        "categoryId": 19,
        "gameCode": "1489936",
        "channelBean": "PG",
        "gameName": "Ultimate Striker",
        "fullGameImg": "https://file.ckgame.vip/master/0/a0443f1e82524d9a972c388eff5338b5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1202,
        "categoryId": 19,
        "gameCode": "123",
        "channelBean": "PG",
        "gameName": "Rooster Rumble",
        "fullGameImg": "https://file.ckgame.vip/master/0/cc495d62e1794cc2a54ec2df808cd12b.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1192,
        "categoryId": 19,
        "gameCode": "113",
        "channelBean": "PG",
        "gameName": "Raider Jane's Crypt of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/228072ab690c4edaa37f2b4f69bdf69c.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1166,
        "categoryId": 19,
        "gameCode": "85",
        "channelBean": "PG",
        "gameName": "Genie's 3 Wishes",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdd8c6f0db214b9c8c6bbf7b6baf6452.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1158,
        "categoryId": 19,
        "gameCode": "73",
        "channelBean": "PG",
        "gameName": "Egypt's Book of Mystery",
        "fullGameImg": "https://file.ckgame.vip/master/0/37ad3455f45843e4a0aacf28d5bc36d5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1126,
        "categoryId": 19,
        "gameCode": "29",
        "channelBean": "PG",
        "gameName": "Dragon Legend",
        "fullGameImg": "https://file.ckgame.vip/master/0/9f5d0c4d999f4fae824b317b9e1d1e31.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1226,
        "categoryId": 554,
        "gameCode": "1489936",
        "channelBean": "PG",
        "gameName": "Ultimate Striker",
        "fullGameImg": "https://file.ckgame.vip/master/0/a0443f1e82524d9a972c388eff5338b5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1202,
        "categoryId": 554,
        "gameCode": "123",
        "channelBean": "PG",
        "gameName": "Rooster Rumble",
        "fullGameImg": "https://file.ckgame.vip/master/0/cc495d62e1794cc2a54ec2df808cd12b.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1190,
        "categoryId": 554,
        "gameCode": "111",
        "channelBean": "PG",
        "gameName": "Groundhog Harvest",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1166,
        "categoryId": 554,
        "gameCode": "85",
        "channelBean": "PG",
        "gameName": "Genie's 3 Wishes",
        "fullGameImg": "https://file.ckgame.vip/master/0/cdd8c6f0db214b9c8c6bbf7b6baf6452.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1158,
        "categoryId": 554,
        "gameCode": "73",
        "channelBean": "PG",
        "gameName": "Egypt's Book of Mystery",
        "fullGameImg": "https://file.ckgame.vip/master/0/37ad3455f45843e4a0aacf28d5bc36d5.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1126,
        "categoryId": 554,
        "gameCode": "29",
        "channelBean": "PG",
        "gameName": "Dragon Legend",
        "fullGameImg": "https://file.ckgame.vip/master/0/9f5d0c4d999f4fae824b317b9e1d1e31.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1339,
        "categoryId": 693,
        "gameCode": "224",
        "channelBean": "TADA",
        "gameName": "Go Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/65bd67d7e8954580a5f645b71cdb05a0.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 35004,
        "categoryId": 713,
        "gameCode": "10003",
        "channelBean": "PGSOFTPP",
        "gameName": "Madame Destiny",
        "fullGameImg": "https://file.ckgame.vip/master/0/d7cd56909de04fc2b3e801b0aef03774.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 30094,
        "categoryId": 710,
        "gameCode": "86",
        "channelBean": "PGSOFTPT",
        "gameName": "galactic-gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/7f29b2b5a040442aa9e2584a0e6cc620.png",
        "minBalanceEnter": 0,
        "sort": 7,
        "isMaintenance": false
      }, {
        "gameId": 1238,
        "categoryId": 12,
        "gameCode": "1671262",
        "channelBean": "PG",
        "gameName": "Gemstones Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1aaf6af74f44742ac7eb0ce7164b855.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1227,
        "categoryId": 12,
        "gameCode": "1492288",
        "channelBean": "PG",
        "gameName": "Pinata Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/2bcd81b4f4774d6eba35ac7d681baef0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1213,
        "categoryId": 12,
        "gameCode": "1338274",
        "channelBean": "PG",
        "gameName": "Totem Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/1c054293ab6b45618fcc409b870af4c2.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1227,
        "categoryId": 70,
        "gameCode": "1492288",
        "channelBean": "PG",
        "gameName": "Pinata Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/2bcd81b4f4774d6eba35ac7d681baef0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1203,
        "categoryId": 70,
        "gameCode": "124",
        "channelBean": "PG",
        "gameName": "Battleground Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/65b9c67660384aa5a064c9851c017c3a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1191,
        "categoryId": 70,
        "gameCode": "112",
        "channelBean": "PG",
        "gameName": "Oriental Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6c79306e04c4b69a0909724c32d2df0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1167,
        "categoryId": 70,
        "gameCode": "86",
        "channelBean": "PG",
        "gameName": "Galactic Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ae57ee99700450a8f79ea05c1e4f6b9.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1159,
        "categoryId": 70,
        "gameCode": "74",
        "channelBean": "PG",
        "gameName": "Mahjong Ways 2",
        "fullGameImg": "https://file.ckgame.vip/master/0/c4cdccd344564ddba8191d2149d648ca.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1127,
        "categoryId": 70,
        "gameCode": "31",
        "channelBean": "PG",
        "gameName": "Baccarat Deluxe",
        "fullGameImg": "https://file.ckgame.vip/master/0/98e97e3d2fb34754b1fa75e8e54f1b4a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1227,
        "categoryId": 230,
        "gameCode": "1492288",
        "channelBean": "PG",
        "gameName": "Pinata Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/2bcd81b4f4774d6eba35ac7d681baef0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1203,
        "categoryId": 230,
        "gameCode": "124",
        "channelBean": "PG",
        "gameName": "Battleground Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/65b9c67660384aa5a064c9851c017c3a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1191,
        "categoryId": 230,
        "gameCode": "112",
        "channelBean": "PG",
        "gameName": "Oriental Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6c79306e04c4b69a0909724c32d2df0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1167,
        "categoryId": 230,
        "gameCode": "86",
        "channelBean": "PG",
        "gameName": "Galactic Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ae57ee99700450a8f79ea05c1e4f6b9.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1159,
        "categoryId": 230,
        "gameCode": "74",
        "channelBean": "PG",
        "gameName": "Mahjong Ways 2",
        "fullGameImg": "https://file.ckgame.vip/master/0/c4cdccd344564ddba8191d2149d648ca.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1127,
        "categoryId": 230,
        "gameCode": "31",
        "channelBean": "PG",
        "gameName": "Baccarat Deluxe",
        "fullGameImg": "https://file.ckgame.vip/master/0/98e97e3d2fb34754b1fa75e8e54f1b4a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1227,
        "categoryId": 19,
        "gameCode": "1492288",
        "channelBean": "PG",
        "gameName": "Pinata Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/2bcd81b4f4774d6eba35ac7d681baef0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1203,
        "categoryId": 19,
        "gameCode": "124",
        "channelBean": "PG",
        "gameName": "Battleground Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/65b9c67660384aa5a064c9851c017c3a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1193,
        "categoryId": 19,
        "gameCode": "114",
        "channelBean": "PG",
        "gameName": "Emoji Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/00cd0bf4ef8a439fbe22e670ee17366b.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1167,
        "categoryId": 19,
        "gameCode": "86",
        "channelBean": "PG",
        "gameName": "Galactic Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ae57ee99700450a8f79ea05c1e4f6b9.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1159,
        "categoryId": 19,
        "gameCode": "74",
        "channelBean": "PG",
        "gameName": "Mahjong Ways 2",
        "fullGameImg": "https://file.ckgame.vip/master/0/c4cdccd344564ddba8191d2149d648ca.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1127,
        "categoryId": 19,
        "gameCode": "31",
        "channelBean": "PG",
        "gameName": "Baccarat Deluxe",
        "fullGameImg": "https://file.ckgame.vip/master/0/98e97e3d2fb34754b1fa75e8e54f1b4a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1227,
        "categoryId": 554,
        "gameCode": "1492288",
        "channelBean": "PG",
        "gameName": "Pinata Wins",
        "fullGameImg": "https://file.ckgame.vip/master/0/2bcd81b4f4774d6eba35ac7d681baef0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1203,
        "categoryId": 554,
        "gameCode": "124",
        "channelBean": "PG",
        "gameName": "Battleground Royale",
        "fullGameImg": "https://file.ckgame.vip/master/0/65b9c67660384aa5a064c9851c017c3a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1191,
        "categoryId": 554,
        "gameCode": "112",
        "channelBean": "PG",
        "gameName": "Oriental Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6c79306e04c4b69a0909724c32d2df0.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1167,
        "categoryId": 554,
        "gameCode": "86",
        "channelBean": "PG",
        "gameName": "Galactic Gems",
        "fullGameImg": "https://file.ckgame.vip/master/0/8ae57ee99700450a8f79ea05c1e4f6b9.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1159,
        "categoryId": 554,
        "gameCode": "74",
        "channelBean": "PG",
        "gameName": "Mahjong Ways 2",
        "fullGameImg": "https://file.ckgame.vip/master/0/c4cdccd344564ddba8191d2149d648ca.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1127,
        "categoryId": 554,
        "gameCode": "31",
        "channelBean": "PG",
        "gameName": "Baccarat Deluxe",
        "fullGameImg": "https://file.ckgame.vip/master/0/98e97e3d2fb34754b1fa75e8e54f1b4a.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1342,
        "categoryId": 693,
        "gameCode": "229",
        "channelBean": "TADA",
        "gameName": "Mines",
        "fullGameImg": "https://file.ckgame.vip/master/0/31489b7f53924d11a82a4500d19caf52.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 35005,
        "categoryId": 713,
        "gameCode": "10004",
        "channelBean": "PGSOFTPP",
        "gameName": "Diamond Strike",
        "fullGameImg": "https://file.ckgame.vip/master/0/5899e8364f554fb59b114c6abba2759c.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 30095,
        "categoryId": 710,
        "gameCode": "1418544",
        "channelBean": "PGSOFTPT",
        "gameName": "bakery-bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/5b80f4ecc37a4b52b74cc2f07bba860f.png",
        "minBalanceEnter": 0,
        "sort": 8,
        "isMaintenance": false
      }, {
        "gameId": 1239,
        "categoryId": 12,
        "gameCode": "1682240",
        "channelBean": "PG",
        "gameName": "Cash Mania",
        "fullGameImg": "https://file.ckgame.vip/master/0/5063d07558e84b4db7cebaa074bb21ba.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1228,
        "categoryId": 12,
        "gameCode": "1508783",
        "channelBean": "PG",
        "gameName": "Wild Ape #3258",
        "fullGameImg": "https://file.ckgame.vip/master/0/7d64cb3c8dd54c6190d053c66124c15a.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1214,
        "categoryId": 12,
        "gameCode": "1340277",
        "channelBean": "PG",
        "gameName": "Asgardian Rising",
        "fullGameImg": "https://file.ckgame.vip/master/0/0cfee73e8ecd4fc8bc923fe300337155.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1228,
        "categoryId": 70,
        "gameCode": "1508783",
        "channelBean": "PG",
        "gameName": "Wild Ape #3258",
        "fullGameImg": "https://file.ckgame.vip/master/0/7d64cb3c8dd54c6190d053c66124c15a.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1204,
        "categoryId": 70,
        "gameCode": "125",
        "channelBean": "PG",
        "gameName": "Butterfly Blossom",
        "fullGameImg": "https://file.ckgame.vip/master/0/cb561f31dacb4f8690ce0b46528a45d0.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1192,
        "categoryId": 70,
        "gameCode": "113",
        "channelBean": "PG",
        "gameName": "Raider Jane's Crypt of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/228072ab690c4edaa37f2b4f69bdf69c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1168,
        "categoryId": 70,
        "gameCode": "87",
        "channelBean": "PG",
        "gameName": "Treasures of Aztec",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed4f14e512da4a7aaf1173ae94f72f7c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1140,
        "categoryId": 70,
        "gameCode": "48",
        "channelBean": "PG",
        "gameName": "Double Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/0607c1a1efd546c9926b0a346198c4e5.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1128,
        "categoryId": 70,
        "gameCode": "33",
        "channelBean": "PG",
        "gameName": "Hip Hop Panda",
        "fullGameImg": "https://file.ckgame.vip/master/0/a99b46c71ce749449cc21ec2e4b7ac6d.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1228,
        "categoryId": 230,
        "gameCode": "1508783",
        "channelBean": "PG",
        "gameName": "Wild Ape #3258",
        "fullGameImg": "https://file.ckgame.vip/master/0/7d64cb3c8dd54c6190d053c66124c15a.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1204,
        "categoryId": 230,
        "gameCode": "125",
        "channelBean": "PG",
        "gameName": "Butterfly Blossom",
        "fullGameImg": "https://file.ckgame.vip/master/0/cb561f31dacb4f8690ce0b46528a45d0.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1192,
        "categoryId": 230,
        "gameCode": "113",
        "channelBean": "PG",
        "gameName": "Raider Jane's Crypt of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/228072ab690c4edaa37f2b4f69bdf69c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1168,
        "categoryId": 230,
        "gameCode": "87",
        "channelBean": "PG",
        "gameName": "Treasures of Aztec",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed4f14e512da4a7aaf1173ae94f72f7c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1140,
        "categoryId": 230,
        "gameCode": "48",
        "channelBean": "PG",
        "gameName": "Double Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/0607c1a1efd546c9926b0a346198c4e5.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1128,
        "categoryId": 230,
        "gameCode": "33",
        "channelBean": "PG",
        "gameName": "Hip Hop Panda",
        "fullGameImg": "https://file.ckgame.vip/master/0/a99b46c71ce749449cc21ec2e4b7ac6d.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1228,
        "categoryId": 19,
        "gameCode": "1508783",
        "channelBean": "PG",
        "gameName": "Wild Ape #3258",
        "fullGameImg": "https://file.ckgame.vip/master/0/7d64cb3c8dd54c6190d053c66124c15a.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1204,
        "categoryId": 19,
        "gameCode": "125",
        "channelBean": "PG",
        "gameName": "Butterfly Blossom",
        "fullGameImg": "https://file.ckgame.vip/master/0/cb561f31dacb4f8690ce0b46528a45d0.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1194,
        "categoryId": 19,
        "gameCode": "115",
        "channelBean": "PG",
        "gameName": "Supermarket Spree",
        "fullGameImg": "https://file.ckgame.vip/master/0/3118dbd345174cfd88399449286f54bc.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1168,
        "categoryId": 19,
        "gameCode": "87",
        "channelBean": "PG",
        "gameName": "Treasures of Aztec",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed4f14e512da4a7aaf1173ae94f72f7c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1140,
        "categoryId": 19,
        "gameCode": "48",
        "channelBean": "PG",
        "gameName": "Double Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/0607c1a1efd546c9926b0a346198c4e5.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1128,
        "categoryId": 19,
        "gameCode": "33",
        "channelBean": "PG",
        "gameName": "Hip Hop Panda",
        "fullGameImg": "https://file.ckgame.vip/master/0/a99b46c71ce749449cc21ec2e4b7ac6d.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1332,
        "categoryId": 530,
        "gameCode": "212",
        "channelBean": "TADA",
        "gameName": "Dinsaur Tycoon II",
        "fullGameImg": "https://file.ckgame.vip/master/0/8b019aa55a7740d381490d08f8d87b28.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1228,
        "categoryId": 554,
        "gameCode": "1508783",
        "channelBean": "PG",
        "gameName": "Wild Ape #3258",
        "fullGameImg": "https://file.ckgame.vip/master/0/7d64cb3c8dd54c6190d053c66124c15a.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1204,
        "categoryId": 554,
        "gameCode": "125",
        "channelBean": "PG",
        "gameName": "Butterfly Blossom",
        "fullGameImg": "https://file.ckgame.vip/master/0/cb561f31dacb4f8690ce0b46528a45d0.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1192,
        "categoryId": 554,
        "gameCode": "113",
        "channelBean": "PG",
        "gameName": "Raider Jane's Crypt of Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/228072ab690c4edaa37f2b4f69bdf69c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1168,
        "categoryId": 554,
        "gameCode": "87",
        "channelBean": "PG",
        "gameName": "Treasures of Aztec",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed4f14e512da4a7aaf1173ae94f72f7c.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1140,
        "categoryId": 554,
        "gameCode": "48",
        "channelBean": "PG",
        "gameName": "Double Fortune",
        "fullGameImg": "https://file.ckgame.vip/master/0/0607c1a1efd546c9926b0a346198c4e5.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1128,
        "categoryId": 554,
        "gameCode": "33",
        "channelBean": "PG",
        "gameName": "Hip Hop Panda",
        "fullGameImg": "https://file.ckgame.vip/master/0/a99b46c71ce749449cc21ec2e4b7ac6d.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1343,
        "categoryId": 693,
        "gameCode": "232",
        "channelBean": "TADA",
        "gameName": "Tower",
        "fullGameImg": "https://file.ckgame.vip/master/0/e87e2f4933444000bf76a114db1a5256.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 35006,
        "categoryId": 713,
        "gameCode": "10005",
        "channelBean": "PGSOFTPP",
        "gameName": "The Dog House",
        "fullGameImg": "https://file.ckgame.vip/master/0/602d19870a944300937407ecb5cb6af1.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 30096,
        "categoryId": 710,
        "gameCode": "124",
        "channelBean": "PGSOFTPT",
        "gameName": "battleground",
        "fullGameImg": "https://file.ckgame.vip/master/0/46d14fcee719473da35fbb24d82a5c7d.png",
        "minBalanceEnter": 0,
        "sort": 9,
        "isMaintenance": false
      }, {
        "gameId": 1230,
        "categoryId": 12,
        "gameCode": "1529867",
        "channelBean": "PG",
        "gameName": "Ninja Raccoon Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/119b4db6eb7a4ae1bf04019d3260fb6b.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1229,
        "categoryId": 12,
        "gameCode": "1513328",
        "channelBean": "PG",
        "gameName": "Super Golf Drive",
        "fullGameImg": "https://file.ckgame.vip/master/0/2ede9e0ef65845f083fe13dc4609c342.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1215,
        "categoryId": 12,
        "gameCode": "1368367",
        "channelBean": "PG",
        "gameName": "Alchemy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/e0e81ad700bd473490e317c45523aad0.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1229,
        "categoryId": 70,
        "gameCode": "1513328",
        "channelBean": "PG",
        "gameName": "Super Golf Drive",
        "fullGameImg": "https://file.ckgame.vip/master/0/2ede9e0ef65845f083fe13dc4609c342.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1205,
        "categoryId": 70,
        "gameCode": "126",
        "channelBean": "PG",
        "gameName": "Fortune Tiger",
        "fullGameImg": "https://file.ckgame.vip/master/0/c366b020e4244f97a9d2c854c78b3fee.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1193,
        "categoryId": 70,
        "gameCode": "114",
        "channelBean": "PG",
        "gameName": "Emoji Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/00cd0bf4ef8a439fbe22e670ee17366b.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1169,
        "categoryId": 70,
        "gameCode": "88",
        "channelBean": "PG",
        "gameName": "Jewels of Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c37bf745fe7444c82e5464fe099dca9.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1141,
        "categoryId": 70,
        "gameCode": "50",
        "channelBean": "PG",
        "gameName": "Journey to the Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/aea21a093f314716a67dca5287fd25f0.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1129,
        "categoryId": 70,
        "gameCode": "34",
        "channelBean": "PG",
        "gameName": "Legend of Hou Yi",
        "fullGameImg": "https://file.ckgame.vip/master/0/bdf84a62c7d243f3b93fbb7d487d4c6f.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1229,
        "categoryId": 230,
        "gameCode": "1513328",
        "channelBean": "PG",
        "gameName": "Super Golf Drive",
        "fullGameImg": "https://file.ckgame.vip/master/0/2ede9e0ef65845f083fe13dc4609c342.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1205,
        "categoryId": 230,
        "gameCode": "126",
        "channelBean": "PG",
        "gameName": "Fortune Tiger",
        "fullGameImg": "https://file.ckgame.vip/master/0/c366b020e4244f97a9d2c854c78b3fee.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1193,
        "categoryId": 230,
        "gameCode": "114",
        "channelBean": "PG",
        "gameName": "Emoji Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/00cd0bf4ef8a439fbe22e670ee17366b.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1169,
        "categoryId": 230,
        "gameCode": "88",
        "channelBean": "PG",
        "gameName": "Jewels of Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c37bf745fe7444c82e5464fe099dca9.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1141,
        "categoryId": 230,
        "gameCode": "50",
        "channelBean": "PG",
        "gameName": "Journey to the Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/aea21a093f314716a67dca5287fd25f0.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1129,
        "categoryId": 230,
        "gameCode": "34",
        "channelBean": "PG",
        "gameName": "Legend of Hou Yi",
        "fullGameImg": "https://file.ckgame.vip/master/0/bdf84a62c7d243f3b93fbb7d487d4c6f.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1229,
        "categoryId": 19,
        "gameCode": "1513328",
        "channelBean": "PG",
        "gameName": "Super Golf Drive",
        "fullGameImg": "https://file.ckgame.vip/master/0/2ede9e0ef65845f083fe13dc4609c342.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1205,
        "categoryId": 19,
        "gameCode": "126",
        "channelBean": "PG",
        "gameName": "Fortune Tiger",
        "fullGameImg": "https://file.ckgame.vip/master/0/c366b020e4244f97a9d2c854c78b3fee.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1196,
        "categoryId": 19,
        "gameCode": "117",
        "channelBean": "PG",
        "gameName": "Cocktail Nights",
        "fullGameImg": "https://file.ckgame.vip/master/0/82dd22156dbe4b7ab095c766753eb6dc.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1169,
        "categoryId": 19,
        "gameCode": "88",
        "channelBean": "PG",
        "gameName": "Jewels of Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c37bf745fe7444c82e5464fe099dca9.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1141,
        "categoryId": 19,
        "gameCode": "50",
        "channelBean": "PG",
        "gameName": "Journey to the Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/aea21a093f314716a67dca5287fd25f0.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1129,
        "categoryId": 19,
        "gameCode": "34",
        "channelBean": "PG",
        "gameName": "Legend of Hou Yi",
        "fullGameImg": "https://file.ckgame.vip/master/0/bdf84a62c7d243f3b93fbb7d487d4c6f.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1252,
        "categoryId": 530,
        "gameCode": "42",
        "channelBean": "TADA",
        "gameName": "Dinosaur Tycoon",
        "fullGameImg": "https://file.ckgame.vip/master/0/bbaabb30ca744331af43cdd51216f2e4.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1229,
        "categoryId": 554,
        "gameCode": "1513328",
        "channelBean": "PG",
        "gameName": "Super Golf Drive",
        "fullGameImg": "https://file.ckgame.vip/master/0/2ede9e0ef65845f083fe13dc4609c342.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1205,
        "categoryId": 554,
        "gameCode": "126",
        "channelBean": "PG",
        "gameName": "Fortune Tiger",
        "fullGameImg": "https://file.ckgame.vip/master/0/c366b020e4244f97a9d2c854c78b3fee.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1193,
        "categoryId": 554,
        "gameCode": "114",
        "channelBean": "PG",
        "gameName": "Emoji Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/00cd0bf4ef8a439fbe22e670ee17366b.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1169,
        "categoryId": 554,
        "gameCode": "88",
        "channelBean": "PG",
        "gameName": "Jewels of Prosperity",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c37bf745fe7444c82e5464fe099dca9.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1141,
        "categoryId": 554,
        "gameCode": "50",
        "channelBean": "PG",
        "gameName": "Journey to the Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/aea21a093f314716a67dca5287fd25f0.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1129,
        "categoryId": 554,
        "gameCode": "34",
        "channelBean": "PG",
        "gameName": "Legend of Hou Yi",
        "fullGameImg": "https://file.ckgame.vip/master/0/bdf84a62c7d243f3b93fbb7d487d4c6f.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 35007,
        "categoryId": 713,
        "gameCode": "10006",
        "channelBean": "PGSOFTPP",
        "gameName": "Great Rhino",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6e2ca663a914841aedeccc137424048.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 30097,
        "categoryId": 710,
        "gameCode": "1671262",
        "channelBean": "PGSOFTPT",
        "gameName": "gemstones-gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/e22985cc5071442789bc71d60ee234dc.png",
        "minBalanceEnter": 0,
        "sort": 10,
        "isMaintenance": false
      }, {
        "gameId": 1230,
        "categoryId": 70,
        "gameCode": "1529867",
        "channelBean": "PG",
        "gameName": "Ninja Raccoon Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/119b4db6eb7a4ae1bf04019d3260fb6b.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1206,
        "categoryId": 70,
        "gameCode": "127",
        "channelBean": "PG",
        "gameName": "Speed Winner",
        "fullGameImg": "https://file.ckgame.vip/master/0/945996f875804ea6ac9138adc9ab3b38.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1194,
        "categoryId": 70,
        "gameCode": "115",
        "channelBean": "PG",
        "gameName": "Supermarket Spree",
        "fullGameImg": "https://file.ckgame.vip/master/0/3118dbd345174cfd88399449286f54bc.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1170,
        "categoryId": 70,
        "gameCode": "89",
        "channelBean": "PG",
        "gameName": "Lucky Neko",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c79976f33414a31b1e28bafcdd77e67.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1142,
        "categoryId": 70,
        "gameCode": "53",
        "channelBean": "PG",
        "gameName": "The Great Icescape",
        "fullGameImg": "https://file.ckgame.vip/master/0/eb09cb2583f4461eacea3fbbc7cbb6eb.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1130,
        "categoryId": 70,
        "gameCode": "35",
        "channelBean": "PG",
        "gameName": "Mr. Hallow-Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/6e895c1ac82442949817f30a1f84019f.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1230,
        "categoryId": 230,
        "gameCode": "1529867",
        "channelBean": "PG",
        "gameName": "Ninja Raccoon Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/119b4db6eb7a4ae1bf04019d3260fb6b.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1206,
        "categoryId": 230,
        "gameCode": "127",
        "channelBean": "PG",
        "gameName": "Speed Winner",
        "fullGameImg": "https://file.ckgame.vip/master/0/945996f875804ea6ac9138adc9ab3b38.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1194,
        "categoryId": 230,
        "gameCode": "115",
        "channelBean": "PG",
        "gameName": "Supermarket Spree",
        "fullGameImg": "https://file.ckgame.vip/master/0/3118dbd345174cfd88399449286f54bc.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1170,
        "categoryId": 230,
        "gameCode": "89",
        "channelBean": "PG",
        "gameName": "Lucky Neko",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c79976f33414a31b1e28bafcdd77e67.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1142,
        "categoryId": 230,
        "gameCode": "53",
        "channelBean": "PG",
        "gameName": "The Great Icescape",
        "fullGameImg": "https://file.ckgame.vip/master/0/eb09cb2583f4461eacea3fbbc7cbb6eb.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1130,
        "categoryId": 230,
        "gameCode": "35",
        "channelBean": "PG",
        "gameName": "Mr. Hallow-Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/6e895c1ac82442949817f30a1f84019f.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1230,
        "categoryId": 19,
        "gameCode": "1529867",
        "channelBean": "PG",
        "gameName": "Ninja Raccoon Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/119b4db6eb7a4ae1bf04019d3260fb6b.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1206,
        "categoryId": 19,
        "gameCode": "127",
        "channelBean": "PG",
        "gameName": "Speed Winner",
        "fullGameImg": "https://file.ckgame.vip/master/0/945996f875804ea6ac9138adc9ab3b38.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1197,
        "categoryId": 19,
        "gameCode": "118",
        "channelBean": "PG",
        "gameName": "Mask Carnival",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed73e2df1dc54fe5a0415ab4c0759b14.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1170,
        "categoryId": 19,
        "gameCode": "89",
        "channelBean": "PG",
        "gameName": "Lucky Neko",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c79976f33414a31b1e28bafcdd77e67.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1142,
        "categoryId": 19,
        "gameCode": "53",
        "channelBean": "PG",
        "gameName": "The Great Icescape",
        "fullGameImg": "https://file.ckgame.vip/master/0/eb09cb2583f4461eacea3fbbc7cbb6eb.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1130,
        "categoryId": 19,
        "gameCode": "35",
        "channelBean": "PG",
        "gameName": "Mr. Hallow-Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/6e895c1ac82442949817f30a1f84019f.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1230,
        "categoryId": 554,
        "gameCode": "1529867",
        "channelBean": "PG",
        "gameName": "Ninja Raccoon Frenzy",
        "fullGameImg": "https://file.ckgame.vip/master/0/119b4db6eb7a4ae1bf04019d3260fb6b.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1206,
        "categoryId": 554,
        "gameCode": "127",
        "channelBean": "PG",
        "gameName": "Speed Winner",
        "fullGameImg": "https://file.ckgame.vip/master/0/945996f875804ea6ac9138adc9ab3b38.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1194,
        "categoryId": 554,
        "gameCode": "115",
        "channelBean": "PG",
        "gameName": "Supermarket Spree",
        "fullGameImg": "https://file.ckgame.vip/master/0/3118dbd345174cfd88399449286f54bc.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1170,
        "categoryId": 554,
        "gameCode": "89",
        "channelBean": "PG",
        "gameName": "Lucky Neko",
        "fullGameImg": "https://file.ckgame.vip/master/0/0c79976f33414a31b1e28bafcdd77e67.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1142,
        "categoryId": 554,
        "gameCode": "53",
        "channelBean": "PG",
        "gameName": "The Great Icescape",
        "fullGameImg": "https://file.ckgame.vip/master/0/eb09cb2583f4461eacea3fbbc7cbb6eb.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1130,
        "categoryId": 554,
        "gameCode": "35",
        "channelBean": "PG",
        "gameName": "Mr. Hallow-Win",
        "fullGameImg": "https://file.ckgame.vip/master/0/6e895c1ac82442949817f30a1f84019f.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 30098,
        "categoryId": 710,
        "gameCode": "118",
        "channelBean": "PGSOFTPT",
        "gameName": "mask-carniva",
        "fullGameImg": "https://file.ckgame.vip/master/0/df4d369d99904c3db608fe7e8ef339ef.png",
        "minBalanceEnter": 0,
        "sort": 11,
        "isMaintenance": false
      }, {
        "gameId": 1231,
        "categoryId": 70,
        "gameCode": "1543462",
        "channelBean": "PG",
        "gameName": "Fortune Rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/2cce0ccf3bd8470c896491f50e1ce76d.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1207,
        "categoryId": 70,
        "gameCode": "128",
        "channelBean": "PG",
        "gameName": "Legend of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/45b557440adb40509d40ddd03b466905.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1171,
        "categoryId": 70,
        "gameCode": "90",
        "channelBean": "PG",
        "gameName": "Secrets of Cleopatra",
        "fullGameImg": "https://file.ckgame.vip/master/0/24e7c80fa3de4012867c8f3edeffb7bb.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1143,
        "categoryId": 70,
        "gameCode": "54",
        "channelBean": "PG",
        "gameName": "Captain's Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/c27a4c910b994deebe806525724a760b.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1131,
        "categoryId": 70,
        "gameCode": "36",
        "channelBean": "PG",
        "gameName": "Prosperity Lion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e315bd647d745538133a79ce2bf091f.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1231,
        "categoryId": 230,
        "gameCode": "1543462",
        "channelBean": "PG",
        "gameName": "Fortune Rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/2cce0ccf3bd8470c896491f50e1ce76d.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1207,
        "categoryId": 230,
        "gameCode": "128",
        "channelBean": "PG",
        "gameName": "Legend of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/45b557440adb40509d40ddd03b466905.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1195,
        "categoryId": 230,
        "gameCode": "116",
        "channelBean": "PG",
        "gameName": "Farm Invaders",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1171,
        "categoryId": 230,
        "gameCode": "90",
        "channelBean": "PG",
        "gameName": "Secrets of Cleopatra",
        "fullGameImg": "https://file.ckgame.vip/master/0/24e7c80fa3de4012867c8f3edeffb7bb.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1143,
        "categoryId": 230,
        "gameCode": "54",
        "channelBean": "PG",
        "gameName": "Captain's Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/c27a4c910b994deebe806525724a760b.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1131,
        "categoryId": 230,
        "gameCode": "36",
        "channelBean": "PG",
        "gameName": "Prosperity Lion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e315bd647d745538133a79ce2bf091f.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1207,
        "categoryId": 19,
        "gameCode": "128",
        "channelBean": "PG",
        "gameName": "Legend of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/45b557440adb40509d40ddd03b466905.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1198,
        "categoryId": 19,
        "gameCode": "119",
        "channelBean": "PG",
        "gameName": "Spirited Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/59cff85f9ca5488c9ea2964c9abdf8ed.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1171,
        "categoryId": 19,
        "gameCode": "90",
        "channelBean": "PG",
        "gameName": "Secrets of Cleopatra",
        "fullGameImg": "https://file.ckgame.vip/master/0/24e7c80fa3de4012867c8f3edeffb7bb.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1143,
        "categoryId": 19,
        "gameCode": "54",
        "channelBean": "PG",
        "gameName": "Captain's Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/c27a4c910b994deebe806525724a760b.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1131,
        "categoryId": 19,
        "gameCode": "36",
        "channelBean": "PG",
        "gameName": "Prosperity Lion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e315bd647d745538133a79ce2bf091f.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1231,
        "categoryId": 554,
        "gameCode": "1543462",
        "channelBean": "PG",
        "gameName": "Fortune Rabbit",
        "fullGameImg": "https://file.ckgame.vip/master/0/2cce0ccf3bd8470c896491f50e1ce76d.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1207,
        "categoryId": 554,
        "gameCode": "128",
        "channelBean": "PG",
        "gameName": "Legend of Perseus",
        "fullGameImg": "https://file.ckgame.vip/master/0/45b557440adb40509d40ddd03b466905.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1171,
        "categoryId": 554,
        "gameCode": "90",
        "channelBean": "PG",
        "gameName": "Secrets of Cleopatra",
        "fullGameImg": "https://file.ckgame.vip/master/0/24e7c80fa3de4012867c8f3edeffb7bb.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1143,
        "categoryId": 554,
        "gameCode": "54",
        "channelBean": "PG",
        "gameName": "Captain's Bounty",
        "fullGameImg": "https://file.ckgame.vip/master/0/c27a4c910b994deebe806525724a760b.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1131,
        "categoryId": 554,
        "gameCode": "36",
        "channelBean": "PG",
        "gameName": "Prosperity Lion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e315bd647d745538133a79ce2bf091f.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 30099,
        "categoryId": 710,
        "gameCode": "107",
        "channelBean": "PGSOFTPT",
        "gameName": "lgd-monkey-kg",
        "fullGameImg": "https://file.ckgame.vip/master/0/8415090a612245318680f0f7c1560608.png",
        "minBalanceEnter": 0,
        "sort": 12,
        "isMaintenance": false
      }, {
        "gameId": 1232,
        "categoryId": 70,
        "gameCode": "1555350",
        "channelBean": "PG",
        "gameName": "Forge of Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/ced149dda6894f7381479888acf6a953.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1208,
        "categoryId": 70,
        "gameCode": "129",
        "channelBean": "PG",
        "gameName": "Win Win Fish Prawn Crab",
        "fullGameImg": "https://file.ckgame.vip/master/0/a5361ae1e39649fab6a8e458db6bff89.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1196,
        "categoryId": 70,
        "gameCode": "117",
        "channelBean": "PG",
        "gameName": "Cocktail Nights",
        "fullGameImg": "https://file.ckgame.vip/master/0/82dd22156dbe4b7ab095c766753eb6dc.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1172,
        "categoryId": 70,
        "gameCode": "91",
        "channelBean": "PG",
        "gameName": "Guardians of Ice & Fire",
        "fullGameImg": "https://file.ckgame.vip/master/0/817d66949c05458ab018fbc8711a64b2.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1144,
        "categoryId": 70,
        "gameCode": "57",
        "channelBean": "PG",
        "gameName": "Dragon Hatch",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc3c503ebe0e423f96f3f5f2e8eb0877.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1132,
        "categoryId": 70,
        "gameCode": "37",
        "channelBean": "PG",
        "gameName": "Santa's Gift Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/8c21a76b4fd046ae9cc6518a2340d4a5.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1232,
        "categoryId": 230,
        "gameCode": "1555350",
        "channelBean": "PG",
        "gameName": "Forge of Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/ced149dda6894f7381479888acf6a953.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1208,
        "categoryId": 230,
        "gameCode": "129",
        "channelBean": "PG",
        "gameName": "Win Win Fish Prawn Crab",
        "fullGameImg": "https://file.ckgame.vip/master/0/a5361ae1e39649fab6a8e458db6bff89.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1196,
        "categoryId": 230,
        "gameCode": "117",
        "channelBean": "PG",
        "gameName": "Cocktail Nights",
        "fullGameImg": "https://file.ckgame.vip/master/0/82dd22156dbe4b7ab095c766753eb6dc.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1172,
        "categoryId": 230,
        "gameCode": "91",
        "channelBean": "PG",
        "gameName": "Guardians of Ice & Fire",
        "fullGameImg": "https://file.ckgame.vip/master/0/817d66949c05458ab018fbc8711a64b2.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1144,
        "categoryId": 230,
        "gameCode": "57",
        "channelBean": "PG",
        "gameName": "Dragon Hatch",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc3c503ebe0e423f96f3f5f2e8eb0877.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1132,
        "categoryId": 230,
        "gameCode": "37",
        "channelBean": "PG",
        "gameName": "Santa's Gift Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/8c21a76b4fd046ae9cc6518a2340d4a5.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1232,
        "categoryId": 19,
        "gameCode": "1555350",
        "channelBean": "PG",
        "gameName": "Forge of Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/ced149dda6894f7381479888acf6a953.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1208,
        "categoryId": 19,
        "gameCode": "129",
        "channelBean": "PG",
        "gameName": "Win Win Fish Prawn Crab",
        "fullGameImg": "https://file.ckgame.vip/master/0/a5361ae1e39649fab6a8e458db6bff89.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1199,
        "categoryId": 19,
        "gameCode": "120",
        "channelBean": "PG",
        "gameName": "The Queen's Banquet",
        "fullGameImg": "https://file.ckgame.vip/master/0/4ae3e95afec749608801c759fbe96521.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1172,
        "categoryId": 19,
        "gameCode": "91",
        "channelBean": "PG",
        "gameName": "Guardians of Ice & Fire",
        "fullGameImg": "https://file.ckgame.vip/master/0/817d66949c05458ab018fbc8711a64b2.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1144,
        "categoryId": 19,
        "gameCode": "57",
        "channelBean": "PG",
        "gameName": "Dragon Hatch",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc3c503ebe0e423f96f3f5f2e8eb0877.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1132,
        "categoryId": 19,
        "gameCode": "37",
        "channelBean": "PG",
        "gameName": "Santa's Gift Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/8c21a76b4fd046ae9cc6518a2340d4a5.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1232,
        "categoryId": 554,
        "gameCode": "1555350",
        "channelBean": "PG",
        "gameName": "Forge of Wealth",
        "fullGameImg": "https://file.ckgame.vip/master/0/ced149dda6894f7381479888acf6a953.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1208,
        "categoryId": 554,
        "gameCode": "129",
        "channelBean": "PG",
        "gameName": "Win Win Fish Prawn Crab",
        "fullGameImg": "https://file.ckgame.vip/master/0/a5361ae1e39649fab6a8e458db6bff89.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1196,
        "categoryId": 554,
        "gameCode": "117",
        "channelBean": "PG",
        "gameName": "Cocktail Nights",
        "fullGameImg": "https://file.ckgame.vip/master/0/82dd22156dbe4b7ab095c766753eb6dc.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1172,
        "categoryId": 554,
        "gameCode": "91",
        "channelBean": "PG",
        "gameName": "Guardians of Ice & Fire",
        "fullGameImg": "https://file.ckgame.vip/master/0/817d66949c05458ab018fbc8711a64b2.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1144,
        "categoryId": 554,
        "gameCode": "57",
        "channelBean": "PG",
        "gameName": "Dragon Hatch",
        "fullGameImg": "https://file.ckgame.vip/master/0/fc3c503ebe0e423f96f3f5f2e8eb0877.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1132,
        "categoryId": 554,
        "gameCode": "37",
        "channelBean": "PG",
        "gameName": "Santa's Gift Rush",
        "fullGameImg": "https://file.ckgame.vip/master/0/8c21a76b4fd046ae9cc6518a2340d4a5.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 23140,
        "categoryId": 506,
        "gameCode": "28c9922e0ae7c409be4f7959c86c720f",
        "channelBean": "HUIDU",
        "gameName": "Diamond 7",
        "fullGameImg": "https://file.ckgame.vip/master/0/ab89af5374064ff5845914d6e7ff1061.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 30100,
        "categoryId": 710,
        "gameCode": "129",
        "channelBean": "PGSOFTPT",
        "gameName": "win-win-fpc",
        "fullGameImg": "https://file.ckgame.vip/master/0/f7953a3ba2a740969bd4c682d971e66d.png",
        "minBalanceEnter": 0,
        "sort": 13,
        "isMaintenance": false
      }, {
        "gameId": 1233,
        "categoryId": 70,
        "gameCode": "1568554",
        "channelBean": "PG",
        "gameName": "Wild Heist Cashout",
        "fullGameImg": "https://file.ckgame.vip/master/0/1803225400de44bdab4d1ccff840a828.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1209,
        "categoryId": 70,
        "gameCode": "130",
        "channelBean": "PG",
        "gameName": "Lucky Piggy",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6a6b54296b749e69ad45fd0ec1efd93.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1197,
        "categoryId": 70,
        "gameCode": "118",
        "channelBean": "PG",
        "gameName": "Mask Carnival",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed73e2df1dc54fe5a0415ab4c0759b14.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1173,
        "categoryId": 70,
        "gameCode": "92",
        "channelBean": "PG",
        "gameName": "Thai River Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/f1916023c2b04c199cc8e740f046fac6.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1145,
        "categoryId": 70,
        "gameCode": "58",
        "channelBean": "PG",
        "gameName": "Vampire's Charm",
        "fullGameImg": "https://file.ckgame.vip/master/0/4722055cad9e4de9b2fcdb0d4f517118.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1133,
        "categoryId": 70,
        "gameCode": "38",
        "channelBean": "PG",
        "gameName": "Gem Saviour Sword",
        "fullGameImg": "https://file.ckgame.vip/master/0/5d5f5595c5bc42159bd3a4cb4932299f.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1233,
        "categoryId": 230,
        "gameCode": "1568554",
        "channelBean": "PG",
        "gameName": "Wild Heist Cashout",
        "fullGameImg": "https://file.ckgame.vip/master/0/1803225400de44bdab4d1ccff840a828.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1209,
        "categoryId": 230,
        "gameCode": "130",
        "channelBean": "PG",
        "gameName": "Lucky Piggy",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6a6b54296b749e69ad45fd0ec1efd93.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1197,
        "categoryId": 230,
        "gameCode": "118",
        "channelBean": "PG",
        "gameName": "Mask Carnival",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed73e2df1dc54fe5a0415ab4c0759b14.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1173,
        "categoryId": 230,
        "gameCode": "92",
        "channelBean": "PG",
        "gameName": "Thai River Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/f1916023c2b04c199cc8e740f046fac6.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1145,
        "categoryId": 230,
        "gameCode": "58",
        "channelBean": "PG",
        "gameName": "Vampire's Charm",
        "fullGameImg": "https://file.ckgame.vip/master/0/4722055cad9e4de9b2fcdb0d4f517118.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1133,
        "categoryId": 230,
        "gameCode": "38",
        "channelBean": "PG",
        "gameName": "Gem Saviour Sword",
        "fullGameImg": "https://file.ckgame.vip/master/0/5d5f5595c5bc42159bd3a4cb4932299f.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1233,
        "categoryId": 19,
        "gameCode": "1568554",
        "channelBean": "PG",
        "gameName": "Wild Heist Cashout",
        "fullGameImg": "https://file.ckgame.vip/master/0/1803225400de44bdab4d1ccff840a828.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1209,
        "categoryId": 19,
        "gameCode": "130",
        "channelBean": "PG",
        "gameName": "Lucky Piggy",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6a6b54296b749e69ad45fd0ec1efd93.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1180,
        "categoryId": 19,
        "gameCode": "101",
        "channelBean": "PG",
        "gameName": "Rise of Apollo",
        "fullGameImg": "https://file.ckgame.vip/master/0/ca6d469320454954baa66b62e1e35179.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1173,
        "categoryId": 19,
        "gameCode": "92",
        "channelBean": "PG",
        "gameName": "Thai River Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/f1916023c2b04c199cc8e740f046fac6.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1145,
        "categoryId": 19,
        "gameCode": "58",
        "channelBean": "PG",
        "gameName": "Vampire's Charm",
        "fullGameImg": "https://file.ckgame.vip/master/0/4722055cad9e4de9b2fcdb0d4f517118.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1133,
        "categoryId": 19,
        "gameCode": "38",
        "channelBean": "PG",
        "gameName": "Gem Saviour Sword",
        "fullGameImg": "https://file.ckgame.vip/master/0/5d5f5595c5bc42159bd3a4cb4932299f.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1233,
        "categoryId": 554,
        "gameCode": "1568554",
        "channelBean": "PG",
        "gameName": "Wild Heist Cashout",
        "fullGameImg": "https://file.ckgame.vip/master/0/1803225400de44bdab4d1ccff840a828.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1209,
        "categoryId": 554,
        "gameCode": "130",
        "channelBean": "PG",
        "gameName": "Lucky Piggy",
        "fullGameImg": "https://file.ckgame.vip/master/0/c6a6b54296b749e69ad45fd0ec1efd93.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1197,
        "categoryId": 554,
        "gameCode": "118",
        "channelBean": "PG",
        "gameName": "Mask Carnival",
        "fullGameImg": "https://file.ckgame.vip/master/0/ed73e2df1dc54fe5a0415ab4c0759b14.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1173,
        "categoryId": 554,
        "gameCode": "92",
        "channelBean": "PG",
        "gameName": "Thai River Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/f1916023c2b04c199cc8e740f046fac6.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1145,
        "categoryId": 554,
        "gameCode": "58",
        "channelBean": "PG",
        "gameName": "Vampire's Charm",
        "fullGameImg": "https://file.ckgame.vip/master/0/4722055cad9e4de9b2fcdb0d4f517118.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1133,
        "categoryId": 554,
        "gameCode": "38",
        "channelBean": "PG",
        "gameName": "Gem Saviour Sword",
        "fullGameImg": "https://file.ckgame.vip/master/0/5d5f5595c5bc42159bd3a4cb4932299f.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 30101,
        "categoryId": 710,
        "gameCode": "1601012",
        "channelBean": "PGSOFTPT",
        "gameName": "lucky-clover",
        "fullGameImg": "https://file.ckgame.vip/master/0/18dc833302ba49dba458fa8e8f41575f.png",
        "minBalanceEnter": 0,
        "sort": 14,
        "isMaintenance": false
      }, {
        "gameId": 1234,
        "categoryId": 70,
        "gameCode": "1572362",
        "channelBean": "PG",
        "gameName": "Gladiator's Glory",
        "fullGameImg": "https://file.ckgame.vip/master/0/72f26e0db4e944fd93672d593bf1de11.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1210,
        "categoryId": 70,
        "gameCode": "132",
        "channelBean": "PG",
        "gameName": "Wild Coaster",
        "fullGameImg": "https://file.ckgame.vip/master/0/dc670ae9a45040349e2c7aa2959be65b.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1198,
        "categoryId": 70,
        "gameCode": "119",
        "channelBean": "PG",
        "gameName": "Spirited Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/59cff85f9ca5488c9ea2964c9abdf8ed.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1174,
        "categoryId": 70,
        "gameCode": "93",
        "channelBean": "PG",
        "gameName": "Opera Dynasty",
        "fullGameImg": "https://file.ckgame.vip/master/0/4937b57c10c84522b9fbbd16e1c22c46.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1146,
        "categoryId": 70,
        "gameCode": "59",
        "channelBean": "PG",
        "gameName": "Ninja vs Samurai",
        "fullGameImg": "https://file.ckgame.vip/master/0/92bf62a8e8bc494e8c1a248e366c08c9.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1134,
        "categoryId": 70,
        "gameCode": "39",
        "channelBean": "PG",
        "gameName": "Piggy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d4a7d0e1e0474c40860cfe5f52d99b3c.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1234,
        "categoryId": 230,
        "gameCode": "1572362",
        "channelBean": "PG",
        "gameName": "Gladiator's Glory",
        "fullGameImg": "https://file.ckgame.vip/master/0/72f26e0db4e944fd93672d593bf1de11.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1210,
        "categoryId": 230,
        "gameCode": "132",
        "channelBean": "PG",
        "gameName": "Wild Coaster",
        "fullGameImg": "https://file.ckgame.vip/master/0/dc670ae9a45040349e2c7aa2959be65b.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1198,
        "categoryId": 230,
        "gameCode": "119",
        "channelBean": "PG",
        "gameName": "Spirited Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/59cff85f9ca5488c9ea2964c9abdf8ed.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1174,
        "categoryId": 230,
        "gameCode": "93",
        "channelBean": "PG",
        "gameName": "Opera Dynasty",
        "fullGameImg": "https://file.ckgame.vip/master/0/4937b57c10c84522b9fbbd16e1c22c46.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1146,
        "categoryId": 230,
        "gameCode": "59",
        "channelBean": "PG",
        "gameName": "Ninja vs Samurai",
        "fullGameImg": "https://file.ckgame.vip/master/0/92bf62a8e8bc494e8c1a248e366c08c9.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1134,
        "categoryId": 230,
        "gameCode": "39",
        "channelBean": "PG",
        "gameName": "Piggy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d4a7d0e1e0474c40860cfe5f52d99b3c.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1234,
        "categoryId": 19,
        "gameCode": "1572362",
        "channelBean": "PG",
        "gameName": "Gladiator's Glory",
        "fullGameImg": "https://file.ckgame.vip/master/0/72f26e0db4e944fd93672d593bf1de11.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1210,
        "categoryId": 19,
        "gameCode": "132",
        "channelBean": "PG",
        "gameName": "Wild Coaster",
        "fullGameImg": "https://file.ckgame.vip/master/0/dc670ae9a45040349e2c7aa2959be65b.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1181,
        "categoryId": 19,
        "gameCode": "102",
        "channelBean": "PG",
        "gameName": "Mermaid Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/162df376d35e4fd8a3234baaa7bf2832.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1174,
        "categoryId": 19,
        "gameCode": "93",
        "channelBean": "PG",
        "gameName": "Opera Dynasty",
        "fullGameImg": "https://file.ckgame.vip/master/0/4937b57c10c84522b9fbbd16e1c22c46.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1146,
        "categoryId": 19,
        "gameCode": "59",
        "channelBean": "PG",
        "gameName": "Ninja vs Samurai",
        "fullGameImg": "https://file.ckgame.vip/master/0/92bf62a8e8bc494e8c1a248e366c08c9.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1134,
        "categoryId": 19,
        "gameCode": "39",
        "channelBean": "PG",
        "gameName": "Piggy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d4a7d0e1e0474c40860cfe5f52d99b3c.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1234,
        "categoryId": 554,
        "gameCode": "1572362",
        "channelBean": "PG",
        "gameName": "Gladiator's Glory",
        "fullGameImg": "https://file.ckgame.vip/master/0/72f26e0db4e944fd93672d593bf1de11.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1210,
        "categoryId": 554,
        "gameCode": "132",
        "channelBean": "PG",
        "gameName": "Wild Coaster",
        "fullGameImg": "https://file.ckgame.vip/master/0/dc670ae9a45040349e2c7aa2959be65b.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1198,
        "categoryId": 554,
        "gameCode": "119",
        "channelBean": "PG",
        "gameName": "Spirited Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/59cff85f9ca5488c9ea2964c9abdf8ed.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1174,
        "categoryId": 554,
        "gameCode": "93",
        "channelBean": "PG",
        "gameName": "Opera Dynasty",
        "fullGameImg": "https://file.ckgame.vip/master/0/4937b57c10c84522b9fbbd16e1c22c46.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1146,
        "categoryId": 554,
        "gameCode": "59",
        "channelBean": "PG",
        "gameName": "Ninja vs Samurai",
        "fullGameImg": "https://file.ckgame.vip/master/0/92bf62a8e8bc494e8c1a248e366c08c9.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1134,
        "categoryId": 554,
        "gameCode": "39",
        "channelBean": "PG",
        "gameName": "Piggy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d4a7d0e1e0474c40860cfe5f52d99b3c.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 30102,
        "categoryId": 710,
        "gameCode": "1432733",
        "channelBean": "PGSOFTPT",
        "gameName": "myst-spirits",
        "fullGameImg": "https://file.ckgame.vip/master/0/402de29bce36452297eea151a95e9339.png",
        "minBalanceEnter": 0,
        "sort": 15,
        "isMaintenance": false
      }, {
        "gameId": 1235,
        "categoryId": 70,
        "gameCode": "1580541",
        "channelBean": "PG",
        "gameName": "Mafia Mayhem",
        "fullGameImg": "https://file.ckgame.vip/master/0/fdea315a0891435988252aabed2d7cce.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1211,
        "categoryId": 70,
        "gameCode": "135",
        "channelBean": "PG",
        "gameName": "Wild Bounty Showdown",
        "fullGameImg": "https://file.ckgame.vip/master/0/cad57cb952fc4d8885db3cae1238b1af.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1199,
        "categoryId": 70,
        "gameCode": "120",
        "channelBean": "PG",
        "gameName": "The Queen's Banquet",
        "fullGameImg": "https://file.ckgame.vip/master/0/4ae3e95afec749608801c759fbe96521.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1175,
        "categoryId": 70,
        "gameCode": "94",
        "channelBean": "PG",
        "gameName": "Bali Vacation",
        "fullGameImg": "https://file.ckgame.vip/master/0/33e8172ac04e4a5aa1a12dc422ad58f1.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1147,
        "categoryId": 70,
        "gameCode": "60",
        "channelBean": "PG",
        "gameName": "Leprechaun Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/db52cfd5c09649888e5658a5a2872fbe.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1135,
        "categoryId": 70,
        "gameCode": "40",
        "channelBean": "PG",
        "gameName": "Jungle Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/5e86163b20ba4cba8728335d231b7fe5.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1235,
        "categoryId": 230,
        "gameCode": "1580541",
        "channelBean": "PG",
        "gameName": "Mafia Mayhem",
        "fullGameImg": "https://file.ckgame.vip/master/0/fdea315a0891435988252aabed2d7cce.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1211,
        "categoryId": 230,
        "gameCode": "135",
        "channelBean": "PG",
        "gameName": "Wild Bounty Showdown",
        "fullGameImg": "https://file.ckgame.vip/master/0/cad57cb952fc4d8885db3cae1238b1af.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1199,
        "categoryId": 230,
        "gameCode": "120",
        "channelBean": "PG",
        "gameName": "The Queen's Banquet",
        "fullGameImg": "https://file.ckgame.vip/master/0/4ae3e95afec749608801c759fbe96521.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1175,
        "categoryId": 230,
        "gameCode": "94",
        "channelBean": "PG",
        "gameName": "Bali Vacation",
        "fullGameImg": "https://file.ckgame.vip/master/0/33e8172ac04e4a5aa1a12dc422ad58f1.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1147,
        "categoryId": 230,
        "gameCode": "60",
        "channelBean": "PG",
        "gameName": "Leprechaun Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/db52cfd5c09649888e5658a5a2872fbe.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1135,
        "categoryId": 230,
        "gameCode": "40",
        "channelBean": "PG",
        "gameName": "Jungle Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/5e86163b20ba4cba8728335d231b7fe5.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1235,
        "categoryId": 19,
        "gameCode": "1580541",
        "channelBean": "PG",
        "gameName": "Mafia Mayhem",
        "fullGameImg": "https://file.ckgame.vip/master/0/fdea315a0891435988252aabed2d7cce.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1211,
        "categoryId": 19,
        "gameCode": "135",
        "channelBean": "PG",
        "gameName": "Wild Bounty Showdown",
        "fullGameImg": "https://file.ckgame.vip/master/0/cad57cb952fc4d8885db3cae1238b1af.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1182,
        "categoryId": 19,
        "gameCode": "103",
        "channelBean": "PG",
        "gameName": "Crypto Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/220898224c0a429a92d3deead202482b.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1175,
        "categoryId": 19,
        "gameCode": "94",
        "channelBean": "PG",
        "gameName": "Bali Vacation",
        "fullGameImg": "https://file.ckgame.vip/master/0/33e8172ac04e4a5aa1a12dc422ad58f1.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1147,
        "categoryId": 19,
        "gameCode": "60",
        "channelBean": "PG",
        "gameName": "Leprechaun Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/db52cfd5c09649888e5658a5a2872fbe.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1135,
        "categoryId": 19,
        "gameCode": "40",
        "channelBean": "PG",
        "gameName": "Jungle Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/5e86163b20ba4cba8728335d231b7fe5.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1235,
        "categoryId": 554,
        "gameCode": "1580541",
        "channelBean": "PG",
        "gameName": "Mafia Mayhem",
        "fullGameImg": "https://file.ckgame.vip/master/0/fdea315a0891435988252aabed2d7cce.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1211,
        "categoryId": 554,
        "gameCode": "135",
        "channelBean": "PG",
        "gameName": "Wild Bounty Showdown",
        "fullGameImg": "https://file.ckgame.vip/master/0/cad57cb952fc4d8885db3cae1238b1af.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1199,
        "categoryId": 554,
        "gameCode": "120",
        "channelBean": "PG",
        "gameName": "The Queen's Banquet",
        "fullGameImg": "https://file.ckgame.vip/master/0/4ae3e95afec749608801c759fbe96521.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1175,
        "categoryId": 554,
        "gameCode": "94",
        "channelBean": "PG",
        "gameName": "Bali Vacation",
        "fullGameImg": "https://file.ckgame.vip/master/0/33e8172ac04e4a5aa1a12dc422ad58f1.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1147,
        "categoryId": 554,
        "gameCode": "60",
        "channelBean": "PG",
        "gameName": "Leprechaun Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/db52cfd5c09649888e5658a5a2872fbe.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1135,
        "categoryId": 554,
        "gameCode": "40",
        "channelBean": "PG",
        "gameName": "Jungle Delight",
        "fullGameImg": "https://file.ckgame.vip/master/0/5e86163b20ba4cba8728335d231b7fe5.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 30103,
        "categoryId": 710,
        "gameCode": "1529867",
        "channelBean": "PGSOFTPT",
        "gameName": "ninja-raccoon",
        "fullGameImg": "https://file.ckgame.vip/master/0/0bc60d8bb8ac4dcea857b64dc53d131d.png",
        "minBalanceEnter": 0,
        "sort": 16,
        "isMaintenance": false
      }, {
        "gameId": 1236,
        "categoryId": 70,
        "gameCode": "1594259",
        "channelBean": "PG",
        "gameName": "Safari Wilds",
        "fullGameImg": "https://file.ckgame.vip/master/0/564fd63ed6ed4b9994b0356f3901f536.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1212,
        "categoryId": 70,
        "gameCode": "1312883",
        "channelBean": "PG",
        "gameName": "Prosperity Fortune Tree",
        "fullGameImg": "https://file.ckgame.vip/master/0/f01e7a4489894f5ea681d2ab600b3cb9.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1180,
        "categoryId": 70,
        "gameCode": "101",
        "channelBean": "PG",
        "gameName": "Rise of Apollo",
        "fullGameImg": "https://file.ckgame.vip/master/0/ca6d469320454954baa66b62e1e35179.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1176,
        "categoryId": 70,
        "gameCode": "95",
        "channelBean": "PG",
        "gameName": "Majestic Treasures",
        "fullGameImg": "https://file.ckgame.vip/master/0/a436fe47737f4130a02ea993b862fa39.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1148,
        "categoryId": 70,
        "gameCode": "61",
        "channelBean": "PG",
        "gameName": "Flirting Scholar",
        "fullGameImg": "https://file.ckgame.vip/master/0/705483efd8cd406a93d72469b497a3b1.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1136,
        "categoryId": 70,
        "gameCode": "41",
        "channelBean": "PG",
        "gameName": "Symbols Of Egypt",
        "fullGameImg": "https://file.ckgame.vip/master/0/bd0e934413e74c02bbf48a5cbb9bc60f.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1236,
        "categoryId": 230,
        "gameCode": "1594259",
        "channelBean": "PG",
        "gameName": "Safari Wilds",
        "fullGameImg": "https://file.ckgame.vip/master/0/564fd63ed6ed4b9994b0356f3901f536.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1212,
        "categoryId": 230,
        "gameCode": "1312883",
        "channelBean": "PG",
        "gameName": "Prosperity Fortune Tree",
        "fullGameImg": "https://file.ckgame.vip/master/0/f01e7a4489894f5ea681d2ab600b3cb9.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1180,
        "categoryId": 230,
        "gameCode": "101",
        "channelBean": "PG",
        "gameName": "Rise of Apollo",
        "fullGameImg": "https://file.ckgame.vip/master/0/ca6d469320454954baa66b62e1e35179.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1176,
        "categoryId": 230,
        "gameCode": "95",
        "channelBean": "PG",
        "gameName": "Majestic Treasures",
        "fullGameImg": "https://file.ckgame.vip/master/0/a436fe47737f4130a02ea993b862fa39.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1148,
        "categoryId": 230,
        "gameCode": "61",
        "channelBean": "PG",
        "gameName": "Flirting Scholar",
        "fullGameImg": "https://file.ckgame.vip/master/0/705483efd8cd406a93d72469b497a3b1.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1136,
        "categoryId": 230,
        "gameCode": "41",
        "channelBean": "PG",
        "gameName": "Symbols Of Egypt",
        "fullGameImg": "https://file.ckgame.vip/master/0/bd0e934413e74c02bbf48a5cbb9bc60f.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1236,
        "categoryId": 19,
        "gameCode": "1594259",
        "channelBean": "PG",
        "gameName": "Safari Wilds",
        "fullGameImg": "https://file.ckgame.vip/master/0/564fd63ed6ed4b9994b0356f3901f536.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1212,
        "categoryId": 19,
        "gameCode": "1312883",
        "channelBean": "PG",
        "gameName": "Prosperity Fortune Tree",
        "fullGameImg": "https://file.ckgame.vip/master/0/f01e7a4489894f5ea681d2ab600b3cb9.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1183,
        "categoryId": 19,
        "gameCode": "104",
        "channelBean": "PG",
        "gameName": "Wild Bandito",
        "fullGameImg": "https://file.ckgame.vip/master/0/a12b954f810c47dc85c6354bd77976d5.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1176,
        "categoryId": 19,
        "gameCode": "95",
        "channelBean": "PG",
        "gameName": "Majestic Treasures",
        "fullGameImg": "https://file.ckgame.vip/master/0/a436fe47737f4130a02ea993b862fa39.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1148,
        "categoryId": 19,
        "gameCode": "61",
        "channelBean": "PG",
        "gameName": "Flirting Scholar",
        "fullGameImg": "https://file.ckgame.vip/master/0/705483efd8cd406a93d72469b497a3b1.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1136,
        "categoryId": 19,
        "gameCode": "41",
        "channelBean": "PG",
        "gameName": "Symbols Of Egypt",
        "fullGameImg": "https://file.ckgame.vip/master/0/bd0e934413e74c02bbf48a5cbb9bc60f.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1236,
        "categoryId": 554,
        "gameCode": "1594259",
        "channelBean": "PG",
        "gameName": "Safari Wilds",
        "fullGameImg": "https://file.ckgame.vip/master/0/564fd63ed6ed4b9994b0356f3901f536.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1212,
        "categoryId": 554,
        "gameCode": "1312883",
        "channelBean": "PG",
        "gameName": "Prosperity Fortune Tree",
        "fullGameImg": "https://file.ckgame.vip/master/0/f01e7a4489894f5ea681d2ab600b3cb9.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1180,
        "categoryId": 554,
        "gameCode": "101",
        "channelBean": "PG",
        "gameName": "Rise of Apollo",
        "fullGameImg": "https://file.ckgame.vip/master/0/ca6d469320454954baa66b62e1e35179.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1176,
        "categoryId": 554,
        "gameCode": "95",
        "channelBean": "PG",
        "gameName": "Majestic Treasures",
        "fullGameImg": "https://file.ckgame.vip/master/0/a436fe47737f4130a02ea993b862fa39.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1148,
        "categoryId": 554,
        "gameCode": "61",
        "channelBean": "PG",
        "gameName": "Flirting Scholar",
        "fullGameImg": "https://file.ckgame.vip/master/0/705483efd8cd406a93d72469b497a3b1.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1136,
        "categoryId": 554,
        "gameCode": "41",
        "channelBean": "PG",
        "gameName": "Symbols Of Egypt",
        "fullGameImg": "https://file.ckgame.vip/master/0/bd0e934413e74c02bbf48a5cbb9bc60f.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 30104,
        "categoryId": 710,
        "gameCode": "1513328",
        "channelBean": "PGSOFTPT",
        "gameName": "spr-golf-drive",
        "fullGameImg": "https://file.ckgame.vip/master/0/832e8bc26e9e4af3a16567472cecb1dc.png",
        "minBalanceEnter": 0,
        "sort": 17,
        "isMaintenance": false
      }, {
        "gameId": 1213,
        "categoryId": 70,
        "gameCode": "1338274",
        "channelBean": "PG",
        "gameName": "Totem Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/1c054293ab6b45618fcc409b870af4c2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1181,
        "categoryId": 70,
        "gameCode": "102",
        "channelBean": "PG",
        "gameName": "Mermaid Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/162df376d35e4fd8a3234baaa7bf2832.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1177,
        "categoryId": 70,
        "gameCode": "97",
        "channelBean": "PG",
        "gameName": "Jack Frost's Winter",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e6218f8047349ca9d3d977253501c2e.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1149,
        "categoryId": 70,
        "gameCode": "62",
        "channelBean": "PG",
        "gameName": "Gem Saviour Conquest",
        "fullGameImg": "https://file.ckgame.vip/master/0/36697f5b10074e9fac79effa81ca9cd2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1137,
        "categoryId": 70,
        "gameCode": "42",
        "channelBean": "PG",
        "gameName": "Ganesha Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/a89aac192e9141658d4ac7036f992d65.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1237,
        "categoryId": 230,
        "gameCode": "1601012",
        "channelBean": "PG",
        "gameName": "Lucky Clover Lady",
        "fullGameImg": "https://file.ckgame.vip/master/0/c7328c1f6ec8425bb927a000596ef6e0.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1213,
        "categoryId": 230,
        "gameCode": "1338274",
        "channelBean": "PG",
        "gameName": "Totem Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/1c054293ab6b45618fcc409b870af4c2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1181,
        "categoryId": 230,
        "gameCode": "102",
        "channelBean": "PG",
        "gameName": "Mermaid Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/162df376d35e4fd8a3234baaa7bf2832.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1177,
        "categoryId": 230,
        "gameCode": "97",
        "channelBean": "PG",
        "gameName": "Jack Frost's Winter",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e6218f8047349ca9d3d977253501c2e.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1149,
        "categoryId": 230,
        "gameCode": "62",
        "channelBean": "PG",
        "gameName": "Gem Saviour Conquest",
        "fullGameImg": "https://file.ckgame.vip/master/0/36697f5b10074e9fac79effa81ca9cd2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1137,
        "categoryId": 230,
        "gameCode": "42",
        "channelBean": "PG",
        "gameName": "Ganesha Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/a89aac192e9141658d4ac7036f992d65.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1237,
        "categoryId": 19,
        "gameCode": "1601012",
        "channelBean": "PG",
        "gameName": "Lucky Clover Lady",
        "fullGameImg": "https://file.ckgame.vip/master/0/c7328c1f6ec8425bb927a000596ef6e0.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1213,
        "categoryId": 19,
        "gameCode": "1338274",
        "channelBean": "PG",
        "gameName": "Totem Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/1c054293ab6b45618fcc409b870af4c2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1177,
        "categoryId": 19,
        "gameCode": "97",
        "channelBean": "PG",
        "gameName": "Jack Frost's Winter",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e6218f8047349ca9d3d977253501c2e.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1149,
        "categoryId": 19,
        "gameCode": "62",
        "channelBean": "PG",
        "gameName": "Gem Saviour Conquest",
        "fullGameImg": "https://file.ckgame.vip/master/0/36697f5b10074e9fac79effa81ca9cd2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1137,
        "categoryId": 19,
        "gameCode": "42",
        "channelBean": "PG",
        "gameName": "Ganesha Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/a89aac192e9141658d4ac7036f992d65.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1237,
        "categoryId": 554,
        "gameCode": "1601012",
        "channelBean": "PG",
        "gameName": "Lucky Clover Lady",
        "fullGameImg": "https://file.ckgame.vip/master/0/c7328c1f6ec8425bb927a000596ef6e0.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1213,
        "categoryId": 554,
        "gameCode": "1338274",
        "channelBean": "PG",
        "gameName": "Totem Wonders",
        "fullGameImg": "https://file.ckgame.vip/master/0/1c054293ab6b45618fcc409b870af4c2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1181,
        "categoryId": 554,
        "gameCode": "102",
        "channelBean": "PG",
        "gameName": "Mermaid Riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/162df376d35e4fd8a3234baaa7bf2832.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1177,
        "categoryId": 554,
        "gameCode": "97",
        "channelBean": "PG",
        "gameName": "Jack Frost's Winter",
        "fullGameImg": "https://file.ckgame.vip/master/0/3e6218f8047349ca9d3d977253501c2e.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1149,
        "categoryId": 554,
        "gameCode": "62",
        "channelBean": "PG",
        "gameName": "Gem Saviour Conquest",
        "fullGameImg": "https://file.ckgame.vip/master/0/36697f5b10074e9fac79effa81ca9cd2.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1137,
        "categoryId": 554,
        "gameCode": "42",
        "channelBean": "PG",
        "gameName": "Ganesha Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/a89aac192e9141658d4ac7036f992d65.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 30105,
        "categoryId": 710,
        "gameCode": "112",
        "channelBean": "PGSOFTPT",
        "gameName": "oriental-pros",
        "fullGameImg": "https://file.ckgame.vip/master/0/59e41bdb3c864b96a665681d2b1f009f.png",
        "minBalanceEnter": 0,
        "sort": 18,
        "isMaintenance": false
      }, {
        "gameId": 1238,
        "categoryId": 70,
        "gameCode": "1671262",
        "channelBean": "PG",
        "gameName": "Gemstones Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1aaf6af74f44742ac7eb0ce7164b855.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1214,
        "categoryId": 70,
        "gameCode": "1340277",
        "channelBean": "PG",
        "gameName": "Asgardian Rising",
        "fullGameImg": "https://file.ckgame.vip/master/0/0cfee73e8ecd4fc8bc923fe300337155.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1182,
        "categoryId": 70,
        "gameCode": "103",
        "channelBean": "PG",
        "gameName": "Crypto Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/220898224c0a429a92d3deead202482b.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1178,
        "categoryId": 70,
        "gameCode": "98",
        "channelBean": "PG",
        "gameName": "Fortune Ox",
        "fullGameImg": "https://file.ckgame.vip/master/0/239d43ff6fda4747ae73adde6f3eedaf.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1150,
        "categoryId": 70,
        "gameCode": "63",
        "channelBean": "PG",
        "gameName": "Dragon Tiger Luck",
        "fullGameImg": "https://file.ckgame.vip/master/0/250e80db47af436f812f2c0c46901175.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1238,
        "categoryId": 230,
        "gameCode": "1671262",
        "channelBean": "PG",
        "gameName": "Gemstones Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1aaf6af74f44742ac7eb0ce7164b855.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1214,
        "categoryId": 230,
        "gameCode": "1340277",
        "channelBean": "PG",
        "gameName": "Asgardian Rising",
        "fullGameImg": "https://file.ckgame.vip/master/0/0cfee73e8ecd4fc8bc923fe300337155.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1182,
        "categoryId": 230,
        "gameCode": "103",
        "channelBean": "PG",
        "gameName": "Crypto Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/220898224c0a429a92d3deead202482b.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1178,
        "categoryId": 230,
        "gameCode": "98",
        "channelBean": "PG",
        "gameName": "Fortune Ox",
        "fullGameImg": "https://file.ckgame.vip/master/0/239d43ff6fda4747ae73adde6f3eedaf.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1150,
        "categoryId": 230,
        "gameCode": "63",
        "channelBean": "PG",
        "gameName": "Dragon Tiger Luck",
        "fullGameImg": "https://file.ckgame.vip/master/0/250e80db47af436f812f2c0c46901175.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1138,
        "categoryId": 230,
        "gameCode": "43",
        "channelBean": "PG",
        "gameName": "Three Monkeys",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1238,
        "categoryId": 19,
        "gameCode": "1671262",
        "channelBean": "PG",
        "gameName": "Gemstones Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1aaf6af74f44742ac7eb0ce7164b855.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1214,
        "categoryId": 19,
        "gameCode": "1340277",
        "channelBean": "PG",
        "gameName": "Asgardian Rising",
        "fullGameImg": "https://file.ckgame.vip/master/0/0cfee73e8ecd4fc8bc923fe300337155.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1178,
        "categoryId": 19,
        "gameCode": "98",
        "channelBean": "PG",
        "gameName": "Fortune Ox",
        "fullGameImg": "https://file.ckgame.vip/master/0/239d43ff6fda4747ae73adde6f3eedaf.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1150,
        "categoryId": 19,
        "gameCode": "63",
        "channelBean": "PG",
        "gameName": "Dragon Tiger Luck",
        "fullGameImg": "https://file.ckgame.vip/master/0/250e80db47af436f812f2c0c46901175.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1139,
        "categoryId": 19,
        "gameCode": "44",
        "channelBean": "PG",
        "gameName": "Emperor's Favour",
        "fullGameImg": "https://file.ckgame.vip/master/0/6b19f18ea46147aab7e64eda95097d4b.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1238,
        "categoryId": 554,
        "gameCode": "1671262",
        "channelBean": "PG",
        "gameName": "Gemstones Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/d1aaf6af74f44742ac7eb0ce7164b855.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1214,
        "categoryId": 554,
        "gameCode": "1340277",
        "channelBean": "PG",
        "gameName": "Asgardian Rising",
        "fullGameImg": "https://file.ckgame.vip/master/0/0cfee73e8ecd4fc8bc923fe300337155.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1182,
        "categoryId": 554,
        "gameCode": "103",
        "channelBean": "PG",
        "gameName": "Crypto Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/220898224c0a429a92d3deead202482b.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1178,
        "categoryId": 554,
        "gameCode": "98",
        "channelBean": "PG",
        "gameName": "Fortune Ox",
        "fullGameImg": "https://file.ckgame.vip/master/0/239d43ff6fda4747ae73adde6f3eedaf.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1150,
        "categoryId": 554,
        "gameCode": "63",
        "channelBean": "PG",
        "gameName": "Dragon Tiger Luck",
        "fullGameImg": "https://file.ckgame.vip/master/0/250e80db47af436f812f2c0c46901175.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 30106,
        "categoryId": 710,
        "gameCode": "114",
        "channelBean": "PGSOFTPT",
        "gameName": "emoji-riches",
        "fullGameImg": "https://file.ckgame.vip/master/0/747de9817ac74a919320297ff6d1afa6.png",
        "minBalanceEnter": 0,
        "sort": 19,
        "isMaintenance": false
      }, {
        "gameId": 1239,
        "categoryId": 70,
        "gameCode": "1682240",
        "channelBean": "PG",
        "gameName": "Cash Mania",
        "fullGameImg": "https://file.ckgame.vip/master/0/5063d07558e84b4db7cebaa074bb21ba.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1215,
        "categoryId": 70,
        "gameCode": "1368367",
        "channelBean": "PG",
        "gameName": "Alchemy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/e0e81ad700bd473490e317c45523aad0.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1183,
        "categoryId": 70,
        "gameCode": "104",
        "channelBean": "PG",
        "gameName": "Wild Bandito",
        "fullGameImg": "https://file.ckgame.vip/master/0/a12b954f810c47dc85c6354bd77976d5.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1179,
        "categoryId": 70,
        "gameCode": "100",
        "channelBean": "PG",
        "gameName": "Candy Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/4604a5cd80b9471ebce581033b0802cc.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1151,
        "categoryId": 70,
        "gameCode": "64",
        "channelBean": "PG",
        "gameName": "Muay Thai Champion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3c3b36dcfaec4dc6b25c8402b9a83740.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1139,
        "categoryId": 70,
        "gameCode": "44",
        "channelBean": "PG",
        "gameName": "Emperor's Favour",
        "fullGameImg": "https://file.ckgame.vip/master/0/6b19f18ea46147aab7e64eda95097d4b.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1239,
        "categoryId": 230,
        "gameCode": "1682240",
        "channelBean": "PG",
        "gameName": "Cash Mania",
        "fullGameImg": "https://file.ckgame.vip/master/0/5063d07558e84b4db7cebaa074bb21ba.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1215,
        "categoryId": 230,
        "gameCode": "1368367",
        "channelBean": "PG",
        "gameName": "Alchemy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/e0e81ad700bd473490e317c45523aad0.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1183,
        "categoryId": 230,
        "gameCode": "104",
        "channelBean": "PG",
        "gameName": "Wild Bandito",
        "fullGameImg": "https://file.ckgame.vip/master/0/a12b954f810c47dc85c6354bd77976d5.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1179,
        "categoryId": 230,
        "gameCode": "100",
        "channelBean": "PG",
        "gameName": "Candy Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/4604a5cd80b9471ebce581033b0802cc.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1151,
        "categoryId": 230,
        "gameCode": "64",
        "channelBean": "PG",
        "gameName": "Muay Thai Champion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3c3b36dcfaec4dc6b25c8402b9a83740.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1139,
        "categoryId": 230,
        "gameCode": "44",
        "channelBean": "PG",
        "gameName": "Emperor's Favour",
        "fullGameImg": "https://file.ckgame.vip/master/0/6b19f18ea46147aab7e64eda95097d4b.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1239,
        "categoryId": 19,
        "gameCode": "1682240",
        "channelBean": "PG",
        "gameName": "Cash Mania",
        "fullGameImg": "https://file.ckgame.vip/master/0/5063d07558e84b4db7cebaa074bb21ba.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1215,
        "categoryId": 19,
        "gameCode": "1368367",
        "channelBean": "PG",
        "gameName": "Alchemy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/e0e81ad700bd473490e317c45523aad0.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1179,
        "categoryId": 19,
        "gameCode": "100",
        "channelBean": "PG",
        "gameName": "Candy Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/4604a5cd80b9471ebce581033b0802cc.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1151,
        "categoryId": 19,
        "gameCode": "64",
        "channelBean": "PG",
        "gameName": "Muay Thai Champion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3c3b36dcfaec4dc6b25c8402b9a83740.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1239,
        "categoryId": 554,
        "gameCode": "1682240",
        "channelBean": "PG",
        "gameName": "Cash Mania",
        "fullGameImg": "https://file.ckgame.vip/master/0/5063d07558e84b4db7cebaa074bb21ba.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1215,
        "categoryId": 554,
        "gameCode": "1368367",
        "channelBean": "PG",
        "gameName": "Alchemy Gold",
        "fullGameImg": "https://file.ckgame.vip/master/0/e0e81ad700bd473490e317c45523aad0.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1183,
        "categoryId": 554,
        "gameCode": "104",
        "channelBean": "PG",
        "gameName": "Wild Bandito",
        "fullGameImg": "https://file.ckgame.vip/master/0/a12b954f810c47dc85c6354bd77976d5.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1179,
        "categoryId": 554,
        "gameCode": "100",
        "channelBean": "PG",
        "gameName": "Candy Bonanza",
        "fullGameImg": "https://file.ckgame.vip/master/0/4604a5cd80b9471ebce581033b0802cc.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1151,
        "categoryId": 554,
        "gameCode": "64",
        "channelBean": "PG",
        "gameName": "Muay Thai Champion",
        "fullGameImg": "https://file.ckgame.vip/master/0/3c3b36dcfaec4dc6b25c8402b9a83740.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1139,
        "categoryId": 554,
        "gameCode": "44",
        "channelBean": "PG",
        "gameName": "Emperor's Favour",
        "fullGameImg": "https://file.ckgame.vip/master/0/6b19f18ea46147aab7e64eda95097d4b.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 30107,
        "categoryId": 710,
        "gameCode": "1623475",
        "channelBean": "PGSOFTPT",
        "gameName": "anubis-wrath",
        "fullGameImg": "https://file.ckgame.vip/master/0/37a184e12ec6462f83bc10899b523e78.png",
        "minBalanceEnter": 0,
        "sort": 20,
        "isMaintenance": false
      }, {
        "gameId": 1263,
        "categoryId": 29,
        "gameCode": "74",
        "channelBean": "TADA",
        "gameName": "Mega Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/ee2cff65b14d47ce9f30932a0d11531e.png",
        "minBalanceEnter": 0,
        "sort": 90,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1269,
        "categoryId": 29,
        "gameCode": "82",
        "channelBean": "TADA",
        "gameName": "Happy Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/1013/75a835a8a50141209a5d4eee04efd54e.png",
        "minBalanceEnter": 0,
        "sort": 92,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1354,
        "categoryId": 29,
        "gameCode": "289",
        "channelBean": "TADA",
        "gameName": "Ocean King Jackpot",
        "fullGameImg": "https://file.ckgame.vip/master/0/6e1ebfd377f24ac496ac4ae5d00bad32.png",
        "minBalanceEnter": 0,
        "sort": 94,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1332,
        "categoryId": 29,
        "gameCode": "212",
        "channelBean": "TADA",
        "gameName": "Dinsaur Tycoon II",
        "fullGameImg": "https://file.ckgame.vip/master/0/8b019aa55a7740d381490d08f8d87b28.png",
        "minBalanceEnter": 0,
        "sort": 95,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1252,
        "categoryId": 29,
        "gameCode": "42",
        "channelBean": "TADA",
        "gameName": "Dinosaur Tycoon",
        "fullGameImg": "https://file.ckgame.vip/master/0/bbaabb30ca744331af43cdd51216f2e4.png",
        "minBalanceEnter": 0,
        "sort": 97,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1262,
        "categoryId": 29,
        "gameCode": "71",
        "channelBean": "TADA",
        "gameName": "Boom Lengend",
        "fullGameImg": "https://file.ckgame.vip/master/0/6456c83b81e5448c8179a90a3e5e3971.png",
        "minBalanceEnter": 0,
        "sort": 98,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }, {
        "gameId": 1244,
        "categoryId": 29,
        "gameCode": "20",
        "channelBean": "TADA",
        "gameName": "Bombing Fishing",
        "fullGameImg": "https://file.ckgame.vip/master/0/7a112eeed3b24a208971c05065530f65.png",
        "minBalanceEnter": 0,
        "sort": 99,
        "maintenanceStartTime": "1728226800000",
        "maintenanceEndTime": "1728255600000",
        "isMaintenance": false
      }],
      category: [{
        "categoryId": 11,
        "parentId": 0,
        "categoryUniqueId": "1826959635322298368",
        "categoryName": "Lobby",
        "categoryImg": "/master/1013/0893a21373fd4827abe21af4fff59ec9.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/0893a21373fd4827abe21af4fff59ec9.png",
        "sort": 1,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1724416094987",
        "children": [{
          "categoryId": 506,
          "parentId": 11,
          "categoryUniqueId": "1843696874148388864",
          "categoryName": "Hot",
          "categoryImg": "/master/1013/342fad16de9b43a8b345a13a1bec57d9.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/342fad16de9b43a8b345a13a1bec57d9.png",
          "sort": 1,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728406563687",
          "children": [],
          "verTudo": "/#/classification?id=70&name=PG%20Venues"
        }, {
          "categoryId": 514,
          "parentId": 11,
          "categoryUniqueId": "1843708939869151232",
          "categoryName": "Salão de Jogos",
          "categoryImg": "/master/1013/171b5006d2714ead928d1c703a551509.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/171b5006d2714ead928d1c703a551509.png",
          "sort": 2,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728409440378",
          "children": [{
            "categoryId": 12,
            "parentId": 514,
            "categoryUniqueId": "1826960701866696704",
            "categoryName": "PG Venues",
            "categoryImg": "/master/1005/ad7abaa8ecbf4b21b2539d6c3fd7b381.png",
            "fullCategoryImg": "https://file.ckgame.vip/master/1005/ad7abaa8ecbf4b21b2539d6c3fd7b381.png",
            "categoryBgImg": "/master/1013/79d61096f4fa4cdb84101a6bb57d5e85.png",
            "fullCategoryBgImg": "https://file.ckgame.vip/master/1013/79d61096f4fa4cdb84101a6bb57d5e85.png",
            "sort": 1,
            "status": 1,
            "categoryType": 2,
            "categoryTypeName": "Vendor",
            "extId": 1,
            "extUniqueId": "1776563982480453632",
            "createTime": "1724416349270",
            "children": []
          }, {
            "categoryId": 491,
            "parentId": 514,
            "categoryUniqueId": "1842566463993208832",
            "categoryName": "TaDa Venues",
            "categoryImg": "/master/1005/765759c1223e4598953acdb459b3b535.png",
            "fullCategoryImg": "https://file.ckgame.vip/master/1005/765759c1223e4598953acdb459b3b535.png",
            "categoryBgImg": "/master/1005/f0a2d9174eb244f9b88333b937bcd085.png",
            "fullCategoryBgImg": "https://file.ckgame.vip/master/1005/f0a2d9174eb244f9b88333b937bcd085.png",
            "sort": 1,
            "status": 1,
            "categoryType": 2,
            "categoryTypeName": "Vendor",
            "extId": 2,
            "extUniqueId": "1776565815189966848",
            "createTime": "1728137052907",
            "children": []
          }],
          "verTudo": "/#/classification?id=72&name=TaDa%20Venues"
        }, {
          "categoryId": 530,
          "parentId": 11,
          "categoryUniqueId": "1843947850411335680",
          "categoryName": "Fish",
          "categoryImg": "/master/1013/82d47895233844648ad5bc35f2648ec4.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/82d47895233844648ad5bc35f2648ec4.png",
          "sort": 3,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728466401089",
          "children": [],
          "verTudo": "/#/classification?id=72&name=TaDa%20Venues"
        }, {
          "categoryId": 540,
          "parentId": 11,
          "categoryUniqueId": "1843955562939473920",
          "categoryName": "Bingo",
          "categoryImg": "/master/1013/6c08d171d1e04af887d20919f9c2f222.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/6c08d171d1e04af887d20919f9c2f222.png",
          "sort": 4,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728468239899",
          "children": [],
          "verTudo": "/#/classification?id=72&name=TaDa%20Venues"
        }, {
          "categoryId": 544,
          "parentId": 11,
          "categoryUniqueId": "1843958172824166400",
          "categoryName": "Mini",
          "categoryImg": "/master/1013/3057efc410d2416b9308ca72445b001e.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/3057efc410d2416b9308ca72445b001e.png",
          "sort": 5,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728468862144",
          "children": [],
          "verTudo": "/#/classification?id=72&name=TaDa%20Venues"
        }]
      }, {
        "categoryId": 33,
        "parentId": 0,
        "categoryUniqueId": "1828451818940456960",
        "categoryName": "Slots",
        "categoryImg": "/master/1013/5320a09097b64f28980c6887aa4926c7.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/5320a09097b64f28980c6887aa4926c7.png",
        "sort": 9,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1724771859285",
        "children": [{
          "categoryId": 554,
          "parentId": 33,
          "categoryUniqueId": "1843966910872215552",
          "categoryName": "Slots",
          "categoryImg": "/master/1013/96ef3aabe09c4d5ab6d3b6a2918a9fae.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/96ef3aabe09c4d5ab6d3b6a2918a9fae.png",
          "sort": 1,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728470945457",
          "children": []
        }, {
          "categoryId": 685,
          "parentId": 33,
          "categoryUniqueId": "1855621000708399104",
          "categoryName": "HD",
          "categoryImg": "/master/1013/e6ccbff916fa435cad72c20a9500287b.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/e6ccbff916fa435cad72c20a9500287b.png",
          "sort": 1,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1731249496999",
          "children": []
        }, {
          "categoryId": 710,
          "parentId": 33,
          "categoryUniqueId": "1861791598771277824",
          "categoryName": "811-PG",
          "categoryImg": "/master/1013/1bcf3b2b15324a43973babe9db81a7ed.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/1bcf3b2b15324a43973babe9db81a7ed.png",
          "sort": 3,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1732720682222",
          "children": []
        }, {
          "categoryId": 713,
          "parentId": 33,
          "categoryUniqueId": "1861798022096195584",
          "categoryName": "811-PP",
          "categoryImg": "/master/1013/eecbd365b7f241668bd43a87bb485017.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/eecbd365b7f241668bd43a87bb485017.png",
          "sort": 4,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1732722213659",
          "children": []
        }]
      }, {
        "categoryId": 364,
        "parentId": 0,
        "categoryUniqueId": "1841033664689659904",
        "categoryName": "Favorite",
        "categoryImg": "/master/1013/eb908cc71d804a909c034da40abbf3a6.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/eb908cc71d804a909c034da40abbf3a6.png",
        "sort": 11,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1727771605071",
        "children": []
      }, {
        "categoryId": 1,
        "parentId": 0,
        "categoryUniqueId": "1826881904983203840",
        "categoryName": "Hot",
        "categoryImg": "/master/1013/782c8f58fb4140cdb094585d1a4eab27.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/782c8f58fb4140cdb094585d1a4eab27.png",
        "sort": 12,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1724397562633",
        "children": [{
          "categoryId": 2,
          "parentId": 1,
          "categoryUniqueId": "1826886884012122112",
          "categoryName": "Slot",
          "categoryImg": "/master/1013/102e65c084c74f75b040b9832bcb29e2.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/102e65c084c74f75b040b9832bcb29e2.png",
          "sort": 1,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1724398749722",
          "children": [{
            "categoryId": 70,
            "parentId": 2,
            "categoryUniqueId": "1831032042345521152",
            "categoryName": "PG Venues",
            "categoryImg": "/master/1005/c02a149af7eb4853b3ac2cd827ab3e51.png",
            "fullCategoryImg": "https://file.ckgame.vip/master/1005/c02a149af7eb4853b3ac2cd827ab3e51.png",
            "sort": 1,
            "status": 1,
            "categoryType": 1,
            "categoryTypeName": "Category",
            "createTime": "1725387032483",
            "children": []
          }, {
            "categoryId": 72,
            "parentId": 2,
            "categoryUniqueId": "1831032203033501696",
            "categoryName": "TaDa Venues",
            "categoryImg": "/master/1005/7ea07ac4638d40e1998ce0101691feca.png",
            "fullCategoryImg": "https://file.ckgame.vip/master/1005/7ea07ac4638d40e1998ce0101691feca.png",
            "sort": 3,
            "status": 1,
            "categoryType": 1,
            "categoryTypeName": "Category",
            "extId": 2,
            "extUniqueId": "1776565815189966848",
            "createTime": "1725387070794",
            "children": []
          }]
        }, {
          "categoryId": 19,
          "parentId": 1,
          "categoryUniqueId": "1828012649474744320",
          "categoryName": "PG",
          "categoryImg": "/master/1005/95bd492fb718499aab4dee40e57d047f.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1005/95bd492fb718499aab4dee40e57d047f.png",
          "sort": 2,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1724667153127",
          "children": []
        }, {
          "categoryId": 27,
          "parentId": 1,
          "categoryUniqueId": "1828013438947614720",
          "categoryName": "TADA",
          "categoryImg": "/master/1005/cd27f30548c94e0f9fe0736833e0e128.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1005/cd27f30548c94e0f9fe0736833e0e128.png",
          "sort": 5,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1724667341350",
          "children": []
        }]
      }, {
        "categoryId": 9,
        "parentId": 0,
        "categoryUniqueId": "1826957982175125504",
        "categoryName": "Mini",
        "categoryImg": "/master/1013/64782a5de2b14f4e95d42b842580079e.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/64782a5de2b14f4e95d42b842580079e.png",
        "sort": 40,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1724415700846",
        "children": [{
          "categoryId": 524,
          "parentId": 9,
          "categoryUniqueId": "1843928097168875520",
          "categoryName": "Mini",
          "categoryImg": "/master/1013/900ba2c3ef034a32be0bfbcd09b1a88a.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/900ba2c3ef034a32be0bfbcd09b1a88a.png",
          "sort": 1,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1728461691549",
          "children": []
        }]
      }, {
        "categoryId": 10,
        "parentId": 0,
        "categoryUniqueId": "1826958238191247360",
        "categoryName": "Fish",
        "categoryImg": "/master/1013/471bd266ef9b46ae8d7708b4eede114f.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/471bd266ef9b46ae8d7708b4eede114f.png",
        "sort": 50,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1724415761885",
        "children": [{
          "categoryId": 29,
          "parentId": 10,
          "categoryUniqueId": "1828016717228204032",
          "categoryName": "TaDa",
          "categoryImg": "/master/1005/7cc6cf20ce344dadbd072b0f0930a81e.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1005/7cc6cf20ce344dadbd072b0f0930a81e.png",
          "sort": 3,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1724668122953",
          "children": []
        }, {
          "categoryId": 357,
          "parentId": 10,
          "categoryUniqueId": "1833545454820581376",
          "categoryName": "Venues",
          "categoryImg": "/master/1013/edfe25494a75429b9287ab5b71f4fc87.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/edfe25494a75429b9287ab5b71f4fc87.png",
          "sort": 3,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1725986276713",
          "children": [{
            "categoryId": 230,
            "parentId": 357,
            "categoryUniqueId": "1833544458736295936",
            "categoryName": "PG Venues",
            "categoryImg": "/master/1005/30c125b0b1b443c4b853d0aa66ff9139.png",
            "fullCategoryImg": "https://file.ckgame.vip/master/1005/30c125b0b1b443c4b853d0aa66ff9139.png",
            "sort": 1,
            "status": 1,
            "categoryType": 1,
            "categoryTypeName": "Category",
            "createTime": "1725986039235",
            "children": []
          }]
        }]
      }, {
        "categoryId": 34,
        "parentId": 0,
        "categoryUniqueId": "1828451866071851008",
        "categoryName": "Bingo",
        "categoryImg": "/master/1013/d5385c2adc0b4eda8c5bddac9b5aba4f.png",
        "fullCategoryImg": "https://file.ckgame.vip/master/1013/d5385c2adc0b4eda8c5bddac9b5aba4f.png",
        "sort": 70,
        "status": 1,
        "categoryType": 0,
        "categoryTypeName": "Navigation",
        "createTime": "1724771870521",
        "children": [{
          "categoryId": 693,
          "parentId": 34,
          "categoryUniqueId": "1856720077168746496",
          "categoryName": "TADA",
          "categoryImg": "/master/1013/fa1c8c65260044c9b6c366d7ff0f4511.png",
          "fullCategoryImg": "https://file.ckgame.vip/master/1013/fa1c8c65260044c9b6c366d7ff0f4511.png",
          "sort": 1,
          "status": 1,
          "categoryType": 1,
          "categoryTypeName": "Category",
          "createTime": "1731511537246",
          "children": []
        }]
      }]
    },
  }),
  mutations: {
    set_home_active_type(state, val) {
      state.home_active_type = val
      let temp = []
      const child_category = state.game_list.category[val].children
      child_category.map(item => {
        const games = state.game_list.game.filter(items => {
          return items.categoryId == item.categoryId
        })
        temp.push({
          fullCategoryImg: item.fullCategoryImg,
          categoryName: item.categoryName,
          games: games.slice(0,6)
        })
      })
      state.current_game_list = temp
    },
    set_loading_modal(state, val) {
      state.loading_visible = val
    },
    set_tip_modal(state, val) {
      state.tip_visible = val
    },
    set_tip_type(state, val) {
      state.tip_type = val
    },
    set_tip_info(state, val) {
      state.tip_info = val
    },
    set_user_info(state, val) {
      state.user_info = val
    },
    set_game_list(state, val) {
      state.game_list = val
    },
    set_deposit_config(state, val) {
      state.deposit_config = val
    },
    set_invite_config(state, val) {
      state.invite_config = val
    },
    set_spin_config(state, val) {
      state.spin_config = val
    },
    set_global_config(state, val) {
      state.global_config = val
    },
    set_detail_loading(state, val) {
      state.detail_loading = val
    }
  },
  actions: {
    GET_USER_INFO(ctx) {
      if (ctx.state.detail_loading) return
      ctx.commit('set_detail_loading', true)
      getUserInfo.get("", {})
        .then(res => {
          if (res.code == 200) {
            ctx.commit('set_user_info', res.data)
          } else if (res.code == 2002) {
            ctx.commit('set_user_info', {})
            localStorage.removeItem('token')
            ctx.commit('set_tip_info', 'You have not logged in yet,please login.')
            ctx.commit("set_tip_type", 1);
            ctx.commit('set_tip_modal', true)
          }
          ctx.commit('set_detail_loading', false)
        })
    },
    GET_CONFIG(ctx) {
      getClassList().then(res => {
        console.log(res)
      })
      getStationImgList().then(res => {
        console.log(res)
      })
      // if (localStorage.getItem('spin_config') && (new Date().getTime() - Number(localStorage.getItem('l_expire_time'))) < 24 * 60 * 60 * 1000) {
      //   ctx.commit('set_spin_config', JSON.parse(localStorage.getItem('spin_config')))
      // } else {
      //   getSpinConfig.get("", {})
      //     .then(res => {
      //       if (res.code == 200) {
      //         const data = []
      //         for (let i in res.data.list) {
      //           res.data.list[i].reward = res.data.list[i].reward / 100
      //           res.data.list[i].pic = res.data.list[i].reward == 0 ? require("@/assets/images/client/spin/img_xiaolian.png") : res.data.list[i].reward == 1 ? require("../assets/images/client/spin/img_coins_1.png") : res.data.list[i].reward == 10 ? require("../assets/images/client/spin/img_coins_2.png") : res.data.list[i].reward == 100 ? require("../assets/images/client/spin/img_coins_3.png") : res.data.list[i].reward == 500 ? require("../assets/images/client/spin/img_coins_4.png") : res.data.list[i].reward == 1000 ? require("../assets/images/client/spin/img_coins_5.png") : ""
      //           if (i < 12) {
      //             data.unshift(res.data.list[i])
      //           }
      //         }
      //         ctx.commit("set_spin_config", data)
      //         localStorage.setItem("spin_config", JSON.stringify(data))
      //       }
      //     })
      // }

    },

  }
})

export default store


