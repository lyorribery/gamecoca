<template>
  <div class="setting">
    <div class="info-box">
      <div class="info">
        <div class="avatar">
          <img src="../assets/images/avatar/3.png" />
          <div class="level">{{ user_info.levelName }}</div>
        </div>
        <div class="info-user">
          <div class="val" style="margin-bottom: 0.138rem">
            {{ $t("main.Account") }}:{{ user_info.userName }}
          </div>
          <div class="val">ID:{{ user_info.userId }}</div>
        </div>
      </div>
    </div>
    <div class="info-form-box">
      <div class="ipt-box">
        <svg
          t="1738155690046"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2499"
          width="0.555rem"
          height="0.555rem"
        >
          <path
            d="M517.12 153.6c115.2 0 168.96 61.44 168.96 197.12 0 104.96-23.04 184.32-64 230.4l-25.6 28.16c-15.36 15.36-5.12 40.96 15.36 46.08l38.4 7.68c81.92 17.92 156.16 48.64 192 66.56 7.68 2.56 15.36 12.8 15.36 20.48l12.8 87.04c0 7.68 0 15.36-5.12 20.48-5.12 5.12-12.8 10.24-20.48 10.24h-652.8c-7.68 0-15.36-2.56-20.48-10.24-5.12-5.12-7.68-12.8-5.12-20.48l12.8-87.04c2.56-10.24 7.68-17.92 15.36-20.48 35.84-15.36 110.08-46.08 194.56-66.56l38.4-7.68c20.48-5.12 28.16-30.72 15.36-46.08l-25.6-28.16c-43.52-48.64-64-125.44-64-230.4-7.68-133.12 48.64-197.12 163.84-197.12m0-51.2c-99.84 0-220.16 43.52-220.16 248.32 0 135.68 35.84 217.6 76.8 263.68-84.48 20.48-161.28 51.2-202.24 69.12-25.6 10.24-40.96 33.28-46.08 58.88l-12.8 87.04c-2.56 23.04 2.56 46.08 17.92 61.44 15.36 17.92 35.84 28.16 58.88 28.16h652.8c23.04 0 43.52-10.24 58.88-28.16 15.36-17.92 20.48-40.96 17.92-61.44l-12.8-87.04c-2.56-25.6-20.48-48.64-46.08-61.44-40.96-17.92-117.76-48.64-202.24-69.12 40.96-46.08 76.8-128 76.8-263.68 2.56-202.24-117.76-245.76-217.6-245.76z"
            fill="#c4c3c8"
            p-id="2500"
          ></path>
        </svg>
        <span>{{ user_info.userName }}</span>
      </div>
      <div class="ipt-box">
        <svg
          t="1738155758740"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2752"
          width="0.555rem"
          height="0.555rem"
        >
          <path
            d="M699.129958 186.598862l229.264591 0c12.737092 0 25.474185 8.491395 25.474185 25.474185l0 0 0 590.143755c0 12.737092-12.737092 25.474185-25.474185 25.474185l0 0L699.129958 827.690986l0-50.947346 203.790406 0L902.920364 237.546208 699.129958 237.546208 699.129958 186.598862 699.129958 186.598862zM699.129958 657.864112l144.351666 0c12.737092 0 21.228487-8.491395 21.228487-16.98279 0-12.737092-8.491395-21.228487-21.228487-21.228487L699.129958 619.652835 699.129958 657.864112 699.129958 657.864112zM699.129958 534.740934l144.351666 0c12.737092 0 21.228487-8.491395 21.228487-21.228487 0-12.737092-8.491395-21.228487-21.228487-21.228487L699.129958 492.283959 699.129958 534.740934 699.129958 534.740934zM699.129958 407.372058l144.351666 0c12.737092 0 21.228487-8.491395 21.228487-21.228487s-8.491395-21.228487-21.228487-21.228487L699.129958 364.915084 699.129958 407.372058zM329.759399 186.598862l369.370559 0 0 50.947346L329.759399 237.546208 329.759399 186.598862 329.759399 186.598862zM699.129958 827.689962 329.759399 827.689962l0-50.947346 369.370559 0L699.129958 827.689962 699.129958 827.689962zM699.129958 364.915084l0 42.455951L554.778292 407.371034c-8.491395 0-16.98279-8.491395-16.98279-21.228487s8.491395-21.228487 16.98279-21.228487L699.129958 364.91406 699.129958 364.915084zM699.129958 492.284983l0 42.455951L554.778292 534.740934c-8.491395 0-16.98279-8.491395-16.98279-21.228487 0-12.737092 8.491395-21.228487 16.98279-21.228487L699.129958 492.283959 699.129958 492.284983zM699.129958 619.653859l0 38.211277L554.778292 657.865135c-8.491395 0-16.98279-8.491395-16.98279-16.98279 0-12.737092 8.491395-21.228487 16.98279-21.228487L699.129958 619.653859 699.129958 619.653859zM329.759399 662.10981l0-42.455951 97.650017 0 0-21.228487 0 0 0 0c0-8.491395-4.245697-16.98279-12.737092-21.228487-12.737092-8.491395-25.474185-12.737092-38.210253-12.737092l0 0 0 0-46.701648 0 0-46.701648 0 0 0 0c21.228487 0 38.211277-8.491395 55.193043-25.474185 12.737092-12.737092 21.228487-33.965579 21.228487-55.193043l0 0 0 0 0 0 0 0c0-21.228487-8.491395-42.455951-21.228487-55.193043-16.98279-12.737092-33.965579-21.228487-55.193043-21.228487l0 0 0 0 0-42.455951 0 0 0 0c29.719882 0 59.438741 12.737092 84.912925 33.965579 21.228487 21.228487 33.965579 50.947346 33.965579 84.912925l0 0 0 0 0 0 0 0c0 33.965579-12.737092 63.684438-33.965579 84.912925-4.245697 4.245697-4.245697 4.245697-8.491395 4.245697 12.737092 4.245697 25.474185 8.491395 33.965579 16.98279 16.98279 12.737092 25.474185 33.965579 29.719882 55.193043l0 0 0 0 0 42.456974 0 21.228487-21.228487 0L329.759399 662.111856zM92.003414 186.598862l237.755985 0 0 50.947346L117.476575 237.546208l0 539.196409 212.281801 0 0 50.947346L92.003414 827.689962c-12.737092 0-25.474185-12.737092-25.474185-25.474185L66.529229 212.072023C66.529229 195.089233 79.266321 186.598862 92.003414 186.598862L92.003414 186.598862zM329.759399 318.213435 329.759399 318.213435 329.759399 318.213435c-33.965579 0-63.684438 12.737092-84.912925 33.965579-25.474185 21.228487-38.210253 50.947346-38.210253 84.912925l0 0 0 0 0 0 0 0c0 33.965579 12.737092 63.684438 38.210253 84.912925 0 0 0 4.245697 4.245697 4.245697-12.737092 4.245697-21.228487 8.491395-33.965579 16.98279l4.245697 0c-21.228487 12.737092-29.719882 33.965579-29.719882 55.193043l0 0 0 0 0 42.456974 0 21.228487 21.228487 0 118.877481 0 0-42.455951L227.863684 619.655905l0-21.228487 0 0 0 0c0-8.491395 8.491395-16.98279 12.737092-21.228487l0 0c12.737092-8.491395 25.474185-12.737092 38.210253-12.737092l0 0 0 0 50.947346 0 0-46.701648 0 0 0 0c-25.474185 0-42.455951-8.491395-55.193043-25.474185-16.98279-12.737092-25.474185-33.965579-25.474185-55.193043l0 0 0 0 0 0 0 0c0-21.228487 8.491395-42.455951 25.474185-55.193043 12.737092-12.737092 29.719882-21.228487 55.193043-21.228487l0 0 0 0L329.758376 318.213435z"
            fill="#c4c3c8"
            p-id="2753"
          ></path>
        </svg>
        <span>{{ user_info.idcard }}</span>
      </div>
      <div class="ipt-box">
        <svg
          t="1738155787945"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2959"
          width="0.555rem"
          height="0.555rem"
        >
          <path
            d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z"
            fill="#c4c3c8"
            p-id="2960"
          ></path>
          <path
            d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z"
            fill="#c4c3c8"
            p-id="2961"
          ></path>
        </svg>
        <span>{{ user_info.phone }}</span>
      </div>
      <div class="update-box">
        <div class="item" @click="openModal('Change Password')">
          <div class="title">
            <svg
              t="1738155850224"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3167"
              width="0.555rem"
              height="0.555rem"
            >
              <path
                d="M854.109091 942.778182H144.290909c-25.6 0-46.545455-20.945455-46.545454-46.545455v-488.727272c0-25.6 20.945455-46.545455 46.545454-46.545455h709.818182c25.6 0 46.545455 20.945455 46.545454 46.545455v488.727272c0 25.6-20.945455 46.545455-46.545454 46.545455z m-709.818182-535.272727v488.727272h709.818182v-488.727272H144.290909z"
                fill="#FFC536"
                p-id="3168"
              ></path>
              <path
                d="M278.109091 392.843636c-12.8 0-23.272727-10.472727-23.272727-23.272727v-75.403636c0-134.749091 109.614545-244.363636 244.363636-244.363637s244.363636 109.614545 244.363636 244.363637c0 12.8-10.472727 23.272727-23.272727 23.272727s-23.272727-10.472727-23.272727-23.272727c0-109.149091-88.669091-197.818182-197.818182-197.818182s-197.818182 88.669091-197.818182 197.818182v75.403636c0 12.8-10.472727 23.272727-23.272727 23.272727zM499.2 817.803636c-57.716364 0-104.727273-47.010909-104.727273-104.727272 0-34.909091 17.92-67.490909 46.545455-86.807273v-81.92a58.181818 58.181818 0 0 1 116.363636 0v81.92c28.625455 19.316364 46.545455 51.898182 46.545455 86.807273 0 57.716364-47.010909 104.727273-104.727273 104.727272z m0-285.090909c-6.516364 0-11.636364 5.12-11.636364 11.636364v95.418182c0 9.076364-5.12 17.221818-13.265454 20.945454-20.48 9.774545-33.28 29.789091-33.28 52.363637a58.181818 58.181818 0 0 0 116.363636 0c0-22.341818-12.8-42.589091-33.28-52.363637-8.145455-3.956364-13.265455-12.101818-13.265454-20.945454v-95.418182c0-6.516364-5.352727-11.636364-11.636364-11.636364z"
                fill="#FFC536"
                p-id="3169"
              ></path>
            </svg>
            <span>{{ $t("setting.pass2") }}</span>
          </div>
          <div class="btn">{{ $t("setting.btn1") }}</div>
        </div>
        <div class="item" @click="openModal('Change transaction password')">
          <div class="title">
            <svg
              t="1738155850224"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3167"
              width="0.555rem"
              height="0.555rem"
            >
              <path
                d="M854.109091 942.778182H144.290909c-25.6 0-46.545455-20.945455-46.545454-46.545455v-488.727272c0-25.6 20.945455-46.545455 46.545454-46.545455h709.818182c25.6 0 46.545455 20.945455 46.545454 46.545455v488.727272c0 25.6-20.945455 46.545455-46.545454 46.545455z m-709.818182-535.272727v488.727272h709.818182v-488.727272H144.290909z"
                fill="#FFC536"
                p-id="3168"
              ></path>
              <path
                d="M278.109091 392.843636c-12.8 0-23.272727-10.472727-23.272727-23.272727v-75.403636c0-134.749091 109.614545-244.363636 244.363636-244.363637s244.363636 109.614545 244.363636 244.363637c0 12.8-10.472727 23.272727-23.272727 23.272727s-23.272727-10.472727-23.272727-23.272727c0-109.149091-88.669091-197.818182-197.818182-197.818182s-197.818182 88.669091-197.818182 197.818182v75.403636c0 12.8-10.472727 23.272727-23.272727 23.272727zM499.2 817.803636c-57.716364 0-104.727273-47.010909-104.727273-104.727272 0-34.909091 17.92-67.490909 46.545455-86.807273v-81.92a58.181818 58.181818 0 0 1 116.363636 0v81.92c28.625455 19.316364 46.545455 51.898182 46.545455 86.807273 0 57.716364-47.010909 104.727273-104.727273 104.727272z m0-285.090909c-6.516364 0-11.636364 5.12-11.636364 11.636364v95.418182c0 9.076364-5.12 17.221818-13.265454 20.945454-20.48 9.774545-33.28 29.789091-33.28 52.363637a58.181818 58.181818 0 0 0 116.363636 0c0-22.341818-12.8-42.589091-33.28-52.363637-8.145455-3.956364-13.265455-12.101818-13.265454-20.945454v-95.418182c0-6.516364-5.352727-11.636364-11.636364-11.636364z"
                fill="#FFC536"
                p-id="3169"
              ></path>
            </svg>
            <span>{{ $t("setting.pass1") }}</span>
          </div>
          <div class="btn">{{ $t("setting.btn1") }}</div>
        </div>
        <div class="item" @click="openModal('Inserir senha')">
          <div class="title">
            <svg
              t="1738155902551"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3375"
              width="0.555rem"
              height="0.555rem"
            >
              <path
                d="M893.842 217.557H130.159c-16.261 0-29.443 13.182-29.443 29.443v530c0 16.261 13.182 29.443 29.443 29.443h763.683c16.261 0 29.443-13.183 29.443-29.443V247c0-16.261-13.182-29.443-29.443-29.443z m-85.584 58.886L512 507.651 215.742 276.443h592.516zM159.602 747.557v-440.23l334.283 260.885A29.4 29.4 0 0 0 512 574.443a29.4 29.4 0 0 0 18.115-6.231l334.283-260.884v440.229H159.602z"
                fill="#FFC536"
                p-id="3376"
              ></path>
            </svg>
            <span>Email</span>
          </div>
          <div class="btn">{{ $t("setting.btn1") }}</div>
        </div>
      </div>
      <div class="ipt-box">
        <svg
          t="1738155942570"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3582"
          width="0.555rem"
          height="0.555rem"
        >
          <path
            d="M831.6 831H192c-24.8 0-45-20.2-45-45V458c0-24.8 20.2-45 45-45h639.6c24.8 0 45 20.2 45 45v328c0 24.8-20.2 45-45 45zM192 447c-6.1 0-11 4.9-11 11v328c0 6.1 4.9 11 11 11h639.6c6.1 0 11-4.9 11-11V458c0-6.1-4.9-11-11-11H192z"
            fill="#c4c3c8"
            p-id="3583"
          ></path>
          <path
            d="M148.127 585.754l87.88-157.772 29.702 16.544-87.88 157.772zM355.243 799.257l195.771-371.793 30.083 15.84-195.771 371.793zM671.796 801.211l173.01-345.826 30.406 15.212-173.01 345.826zM181.333 802.136L393.47 426.168l29.611 16.708-212.137 375.967zM516.792 806.18l190.416-378.712 30.375 15.273-190.416 378.712zM806.346 808.654l40.145-90.496 31.079 13.787-40.145 90.496z"
            fill="#c4c3c8"
            p-id="3584"
          ></path>
          <path
            d="M156.1 630.9h706.5v34H156.1zM361 429.6c-9.4 0-17-7.6-17-17v-94.7c0-9.4 7.6-17 17-17s17 7.6 17 17v94.7c0 9.4-7.6 17-17 17zM491 429.6c-9.4 0-17-7.6-17-17v-94.7c0-9.4 7.6-17 17-17s17 7.6 17 17v94.7c0 9.4-7.6 17-17 17zM498.4 288.6c-25.6-7.9-35.5-22.2-29.8-42.8 8.7-30.9 39.4-40.2 29.8-50s24.5 21 11.5 35.7c-13 14.7-16.7 16.2-19.6 24.4-2 5.6 0.7 16.5 8.1 32.7zM631 429.6c-9.4 0-17-7.6-17-17v-94.7c0-9.4 7.6-17 17-17s17 7.6 17 17v94.7c0 9.4-7.6 17-17 17zM638.4 288.6c-25.6-7.9-35.5-22.2-29.8-42.8 8.7-30.9 39.4-40.2 29.8-50s24.5 21 11.5 35.7c-13 14.7-16.7 16.2-19.6 24.4-2 5.6 0.7 16.5 8.1 32.7zM368.4 288.6c-25.7-7.9-35.6-22.2-29.8-42.8 8.7-30.9 39.4-40.2 29.8-50s24.5 21 11.5 35.7-16.8 16.2-19.7 24.5c-1.9 5.5 0.8 16.4 8.2 32.6z"
            fill="#c4c3c8"
            p-id="3585"
          ></path>
        </svg>
        <span>{{ user_info.birthday }}</span>
      </div>
      <div class="return" @click="goBack()">{{ $t("setting.btn2") }}</div>
    </div>
    <nut-overlay
      v-model:visible="modal"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="modal = false">
            <svg
              t="1737048406504"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2325"
              width="22"
              height="22"
            >
              <path
                d="M822.00345 776.822434l0.022513-0.022513L246.50423 201.317075c-5.78782-5.791913-13.785981-9.374508-22.621207-9.374508-17.662265 0-31.980365 14.3181-31.980365 31.980365 0 8.834202 3.582595 16.832364 9.373485 22.620184L776.11226 821.339324c5.838985 6.277984 14.166651 10.209526 23.416316 10.209526 17.662265 0 31.980365-14.3181 31.980365-31.980365C831.508941 790.667767 827.871087 782.620487 822.00345 776.822434z"
                p-id="2326"
                fill="#E6E6E6"
              ></path>
              <path
                d="M776.783549 201.448058l-0.022513-0.022513L201.278189 776.947278c-5.791913 5.78782-9.374508 13.785981-9.374508 22.621207 0 17.662265 14.3181 31.980365 31.980365 31.980365 8.834202 0 16.832364-3.582595 22.620184-9.373485l574.797231-574.836117c6.277984-5.838985 10.209526-14.166651 10.209526-23.416316 0-17.662265-14.3181-31.980365-31.980365-31.980365C790.628882 191.942567 782.580578 195.58042 776.783549 201.448058z"
                p-id="2327"
                fill="#E6E6E6"
              ></path>
            </svg>
          </div>

          <div class="title">
            {{ modal_type }}
            <div class="line"></div>
          </div>
          <div v-if="modal_type == 'Change Password'">
            <nut-form ref="passwordFormRef" :model-value="passwordForm">
              <nut-form-item
                prop="oldpassword"
                :rules="[{ validator: customValidatorPass }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <svg
                      t="1738156001474"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3791"
                      width="0.444rem"
                      height="0.444rem"
                    >
                      <path
                        d="M854.109091 942.778182H144.290909c-25.6 0-46.545455-20.945455-46.545454-46.545455v-488.727272c0-25.6 20.945455-46.545455 46.545454-46.545455h709.818182c25.6 0 46.545455 20.945455 46.545454 46.545455v488.727272c0 25.6-20.945455 46.545455-46.545454 46.545455z m-709.818182-535.272727v488.727272h709.818182v-488.727272H144.290909z"
                        fill="#808080"
                        p-id="3792"
                      ></path>
                      <path
                        d="M278.109091 392.843636c-12.8 0-23.272727-10.472727-23.272727-23.272727v-75.403636c0-134.749091 109.614545-244.363636 244.363636-244.363637s244.363636 109.614545 244.363636 244.363637c0 12.8-10.472727 23.272727-23.272727 23.272727s-23.272727-10.472727-23.272727-23.272727c0-109.149091-88.669091-197.818182-197.818182-197.818182s-197.818182 88.669091-197.818182 197.818182v75.403636c0 12.8-10.472727 23.272727-23.272727 23.272727zM499.2 817.803636c-57.716364 0-104.727273-47.010909-104.727273-104.727272 0-34.909091 17.92-67.490909 46.545455-86.807273v-81.92a58.181818 58.181818 0 0 1 116.363636 0v81.92c28.625455 19.316364 46.545455 51.898182 46.545455 86.807273 0 57.716364-47.010909 104.727273-104.727273 104.727272z m0-285.090909c-6.516364 0-11.636364 5.12-11.636364 11.636364v95.418182c0 9.076364-5.12 17.221818-13.265454 20.945454-20.48 9.774545-33.28 29.789091-33.28 52.363637a58.181818 58.181818 0 0 0 116.363636 0c0-22.341818-12.8-42.589091-33.28-52.363637-8.145455-3.956364-13.265455-12.101818-13.265454-20.945454v-95.418182c0-6.516364-5.352727-11.636364-11.636364-11.636364z"
                        fill="#808080"
                        p-id="3793"
                      ></path>
                    </svg>
                  </div>
                  <nut-input
                    v-model="passwordForm.oldpassword"
                    :placeholder="$t('setting.oldpassword')"
                    :type="showpass.old_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.old_pass = false"
                    v-if="showpass.old_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.old_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>
              <nut-form-item
                prop="newpassword"
                :rules="[{ validator: customValidatorPass }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <svg
                      t="1738156001474"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3791"
                      width="0.444rem"
                      height="0.444rem"
                    >
                      <path
                        d="M854.109091 942.778182H144.290909c-25.6 0-46.545455-20.945455-46.545454-46.545455v-488.727272c0-25.6 20.945455-46.545455 46.545454-46.545455h709.818182c25.6 0 46.545455 20.945455 46.545454 46.545455v488.727272c0 25.6-20.945455 46.545455-46.545454 46.545455z m-709.818182-535.272727v488.727272h709.818182v-488.727272H144.290909z"
                        fill="#808080"
                        p-id="3792"
                      ></path>
                      <path
                        d="M278.109091 392.843636c-12.8 0-23.272727-10.472727-23.272727-23.272727v-75.403636c0-134.749091 109.614545-244.363636 244.363636-244.363637s244.363636 109.614545 244.363636 244.363637c0 12.8-10.472727 23.272727-23.272727 23.272727s-23.272727-10.472727-23.272727-23.272727c0-109.149091-88.669091-197.818182-197.818182-197.818182s-197.818182 88.669091-197.818182 197.818182v75.403636c0 12.8-10.472727 23.272727-23.272727 23.272727zM499.2 817.803636c-57.716364 0-104.727273-47.010909-104.727273-104.727272 0-34.909091 17.92-67.490909 46.545455-86.807273v-81.92a58.181818 58.181818 0 0 1 116.363636 0v81.92c28.625455 19.316364 46.545455 51.898182 46.545455 86.807273 0 57.716364-47.010909 104.727273-104.727273 104.727272z m0-285.090909c-6.516364 0-11.636364 5.12-11.636364 11.636364v95.418182c0 9.076364-5.12 17.221818-13.265454 20.945454-20.48 9.774545-33.28 29.789091-33.28 52.363637a58.181818 58.181818 0 0 0 116.363636 0c0-22.341818-12.8-42.589091-33.28-52.363637-8.145455-3.956364-13.265455-12.101818-13.265454-20.945454v-95.418182c0-6.516364-5.352727-11.636364-11.636364-11.636364z"
                        fill="#808080"
                        p-id="3793"
                      ></path>
                    </svg>
                  </div>
                  <nut-input
                    v-model="passwordForm.newpassword"
                    :placeholder="$t('setting.newpassword')"
                    :type="showpass.new_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.new_pass = false"
                    v-if="showpass.new_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.new_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>

              <nut-form-item
                prop="repassword"
                :rules="[{ validator: customValidatorPassAgain }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <svg
                      t="1738156001474"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3791"
                      width="0.444rem"
                      height="0.444rem"
                    >
                      <path
                        d="M854.109091 942.778182H144.290909c-25.6 0-46.545455-20.945455-46.545454-46.545455v-488.727272c0-25.6 20.945455-46.545455 46.545454-46.545455h709.818182c25.6 0 46.545455 20.945455 46.545454 46.545455v488.727272c0 25.6-20.945455 46.545455-46.545454 46.545455z m-709.818182-535.272727v488.727272h709.818182v-488.727272H144.290909z"
                        fill="#808080"
                        p-id="3792"
                      ></path>
                      <path
                        d="M278.109091 392.843636c-12.8 0-23.272727-10.472727-23.272727-23.272727v-75.403636c0-134.749091 109.614545-244.363636 244.363636-244.363637s244.363636 109.614545 244.363636 244.363637c0 12.8-10.472727 23.272727-23.272727 23.272727s-23.272727-10.472727-23.272727-23.272727c0-109.149091-88.669091-197.818182-197.818182-197.818182s-197.818182 88.669091-197.818182 197.818182v75.403636c0 12.8-10.472727 23.272727-23.272727 23.272727zM499.2 817.803636c-57.716364 0-104.727273-47.010909-104.727273-104.727272 0-34.909091 17.92-67.490909 46.545455-86.807273v-81.92a58.181818 58.181818 0 0 1 116.363636 0v81.92c28.625455 19.316364 46.545455 51.898182 46.545455 86.807273 0 57.716364-47.010909 104.727273-104.727273 104.727272z m0-285.090909c-6.516364 0-11.636364 5.12-11.636364 11.636364v95.418182c0 9.076364-5.12 17.221818-13.265454 20.945454-20.48 9.774545-33.28 29.789091-33.28 52.363637a58.181818 58.181818 0 0 0 116.363636 0c0-22.341818-12.8-42.589091-33.28-52.363637-8.145455-3.956364-13.265455-12.101818-13.265454-20.945454v-95.418182c0-6.516364-5.352727-11.636364-11.636364-11.636364z"
                        fill="#808080"
                        p-id="3793"
                      ></path>
                    </svg>
                  </div>
                  <nut-input
                    v-model="passwordForm.repassword"
                    :placeholder="$t('setting.confirmnewpassword')"
                    :type="showpass.re_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.re_pass = false"
                    v-if="showpass.re_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.re_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>
            </nut-form>
          </div>
          <div v-if="modal_type == 'Change transaction password'">
            <nut-form ref="tranRef" :model-value="tranForm">
              <nut-form-item
                prop="oldpassword"
                :rules="[{ validator: customValidatorTransPass }]"
              >
                <modalCode :title="$t('setting.oldpassword')" @complete="onComplete" />
              </nut-form-item>
              <nut-form-item
                prop="newpassword"
                :rules="[{ validator: customValidatorTransPass }]"
              >
                <modalCode :title="$t('setting.newpassword')" @complete="onComplete2" />
              </nut-form-item>
              <nut-form-item
                prop="repassword"
                :rules="[{ validator: customValidatorTransPassAgain }]"
              >
                <modalCode
                  :title="$t('setting.confirmnewpassword')"
                  @complete="onComplete3"
                />
              </nut-form-item>
            </nut-form>

            <div class="tips">
              <div class="circle"></div>
              <span>{{ $t("setting.tip1") }}</span>
            </div>
            <div class="tips">
              <div class="circle"></div>
              <span>
                {{ $t("setting.tip2") }}
              </span>
            </div>
          </div>
          <div v-if="modal_type == 'Inserir senha'">
            <nut-form ref="emailRef" :model-value="emailForm">
              <nut-form-item prop="email" :rules="[{ validator: customValidatorEmail }]">
                <div class="ipt-box">
                  <div class="icon-box">
                    <svg
                      t="1738156058459"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3999"
                      width="0.444rem"
                      height="0.444rem"
                    >
                      <path
                        d="M893.842 217.557H130.159c-16.261 0-29.443 13.182-29.443 29.443v530c0 16.261 13.182 29.443 29.443 29.443h763.683c16.261 0 29.443-13.183 29.443-29.443V247c0-16.261-13.182-29.443-29.443-29.443z m-85.584 58.886L512 507.651 215.742 276.443h592.516zM159.602 747.557v-440.23l334.283 260.885A29.4 29.4 0 0 0 512 574.443a29.4 29.4 0 0 0 18.115-6.231l334.283-260.884v440.229H159.602z"
                        fill="#808080"
                        p-id="4000"
                      ></path>
                    </svg>
                  </div>
                  <nut-input
                    :clearable="true"
                    v-model="emailForm.email"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </nut-form-item>
              <nut-form-item
                prop="password"
                :rules="[{ validator: customValidatorPass }]"
              >
                <div class="ipt-box">
                  <div class="icon-box">
                    <svg
                      t="1738156001474"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3791"
                      width="0.444rem"
                      height="0.444rem"
                    >
                      <path
                        d="M854.109091 942.778182H144.290909c-25.6 0-46.545455-20.945455-46.545454-46.545455v-488.727272c0-25.6 20.945455-46.545455 46.545454-46.545455h709.818182c25.6 0 46.545455 20.945455 46.545454 46.545455v488.727272c0 25.6-20.945455 46.545455-46.545454 46.545455z m-709.818182-535.272727v488.727272h709.818182v-488.727272H144.290909z"
                        fill="#808080"
                        p-id="3792"
                      ></path>
                      <path
                        d="M278.109091 392.843636c-12.8 0-23.272727-10.472727-23.272727-23.272727v-75.403636c0-134.749091 109.614545-244.363636 244.363636-244.363637s244.363636 109.614545 244.363636 244.363637c0 12.8-10.472727 23.272727-23.272727 23.272727s-23.272727-10.472727-23.272727-23.272727c0-109.149091-88.669091-197.818182-197.818182-197.818182s-197.818182 88.669091-197.818182 197.818182v75.403636c0 12.8-10.472727 23.272727-23.272727 23.272727zM499.2 817.803636c-57.716364 0-104.727273-47.010909-104.727273-104.727272 0-34.909091 17.92-67.490909 46.545455-86.807273v-81.92a58.181818 58.181818 0 0 1 116.363636 0v81.92c28.625455 19.316364 46.545455 51.898182 46.545455 86.807273 0 57.716364-47.010909 104.727273-104.727273 104.727272z m0-285.090909c-6.516364 0-11.636364 5.12-11.636364 11.636364v95.418182c0 9.076364-5.12 17.221818-13.265454 20.945454-20.48 9.774545-33.28 29.789091-33.28 52.363637a58.181818 58.181818 0 0 0 116.363636 0c0-22.341818-12.8-42.589091-33.28-52.363637-8.145455-3.956364-13.265455-12.101818-13.265454-20.945454v-95.418182c0-6.516364-5.352727-11.636364-11.636364-11.636364z"
                        fill="#808080"
                        p-id="3793"
                      ></path>
                    </svg>
                  </div>
                  <nut-input
                    v-model="emailForm.password"
                    placeholder="Password"
                    :type="showpass.email_pass ? 'text' : 'password'"
                  />
                  <img
                    @click="showpass.email_pass = false"
                    v-if="showpass.email_pass"
                    class="pass-icon"
                    src="../assets/images/login/yanjingguan.png"
                  />
                  <img
                    @click="showpass.email_pass = true"
                    v-else
                    class="pass-icon"
                    src="../assets/images/login/yanjingkai.png"
                  />
                </div>
              </nut-form-item>
            </nut-form>
          </div>
          <div class="confirm-btn" @click="confirmPass()">
            {{ $t("button.confirm")
            }}<svg
              v-if="is_loading"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="22px"
              height="22px"
              viewBox="0 0 50 50"
              style="enable-background: new 0 0 50 50"
              xml:space="preserve"
            >
              <path
                fill="#181717"
                d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
                transform="rotate(275.098 25 25)"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"
                ></animateTransform>
              </path>
            </svg>
          </div>
        </div>
      </div>
    </nut-overlay>
  </div>
</template>

<script>
import modalCode from "@/components/modalCode.vue";
export default {
  components: {
    modalCode,
  },
};
</script>

<script setup>
import { SetEmail } from "@/apis/setting";
import { ChangeTranscationPassword } from "@/apis/deposit";
import { _validpassword, _validemail } from "@/utils/utils";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const { state, commit } = useStore();
const router = useRouter();

const showpass = ref({
  email_pass: false,
  re_pass: false,
  old_pass: false,
  new_pass: false,
});
const tranRef = ref(null);
const tranForm = ref({
  oldpassword: "",
  newpassword: "",
  repassword: "",
});
const emailRef = ref(null);
const emailForm = ref({
  email: "",
  password: "",
});
const passwordFormRef = ref(null);
const customValidatorTransPass = (val) => {
  let code = val.filter((item) => item !== undefined && item !== null && item !== "");
  if (code.length == 6) {
    return Promise.resolve();
  } else {
    return Promise.reject("please Enter Correct Password");
  }
};
const customValidatorTransPassAgain = (val) => {
  let code = val.filter((item) => item !== undefined && item !== null && item !== "");
  if (
    code.length == 6 &&
    code !=
      tranForm.value.newpassword.filter(
        (item) => item !== undefined && item !== null && item !== ""
      )
  ) {
    return Promise.resolve();
  } else {
    return Promise.reject("please Enter Correct Password");
  }
};
const customValidatorEmail = (val) => {
  if (_validemail(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter correct email.");
  }
};
const customValidatorPass = (val) => {
  if (_validpassword(val)) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-20 digit password.");
  }
};
const customValidatorPassAgain = (val) => {
  if (_validpassword(val) && val == passwordForm.value.newpassword) {
    return Promise.resolve();
  } else {
    return Promise.reject("Please enter a 6-16 digit password.");
  }
};

const passwordForm = ref({
  oldpassword: "",
  newpassword: "",
  repassword: "",
});

const onComplete = (val) => {
  console.log("complete", val);
  tranForm.value.oldpassword = val;
};

const onComplete2 = (val) => {
  tranForm.value.newpassword = val;
};

const onComplete3 = (val) => {
  tranForm.value.repassword = val;
};

const user_info = computed(() => {
  return state.user_info;
});
const modal = ref(false);
const modal_type = ref("");
const openModal = (type) => {
  modal_type.value = type;
  modal.value = true;
};
const is_loading = ref(false);
const confirmPass = () => {
  if (is_loading.value) return;
  if (modal_type.value == "Change Password") {
    passwordFormRef.value.validate().then(({ valid, errors }) => {
      if (valid) {
        is_loading.value = true;
        modal.value = false;
      } else {
        console.warn("error:", errors);
      }
    });
  } else if (modal_type.value == "Change transaction password") {
    tranRef.value.validate().then(({ valid, errors }) => {
      if (valid) {
        is_loading.value = true;

        const pram = {
          oldPassword: tranForm.value.oldpassword.join(""),
          newPassword: tranForm.value.newpassword.join(""),
        };

        ChangeTranscationPassword(pram)
          .then((res) => {
            if (res.code == 200) {
              commit("set_show_tip", {
                type: 1,
                msg: "success",
              });
            } else {
              commit("set_show_tip", {
                type: 0,
                msg: res.msg,
              });
            }
          })
          .finally(() => {
            is_loading.value = false;
          });
      } else {
        console.warn("error:", errors);
      }
    });
  } else if (modal_type.value == "Inserir senha") {
    emailRef.value.validate().then(({ valid, errors }) => {
      if (valid) {
        is_loading.value = true;
        SetEmail(emailForm.value)
          .then((res) => {
            if (res.code == 200) {
              commit("set_show_tip", {
                type: 1,
                msg: "success",
              });
            } else {
              commit("set_show_tip", {
                type: 0,
                msg: res.msg,
              });
            }
          })
          .finally(() => {
            is_loading.value = false;
          });
      } else {
        console.warn("error:", errors);
      }
    });
  }
};
const closeModal = () => {
  console.log(456456);
};
const goBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.pass-icon {
  position: absolute;
  right: 0.416rem;
  bottom: 0.333rem;
  width: 0.444rem;
}
.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .overlay-content {
    width: calc(100% - 0.833rem);
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;
    box-sizing: border-box;
    padding: 0 0.416rem 0.555rem 0.416rem;
    .ipt-box {
      width: 100%;
      height: 1.111rem;
      background: #0f0f0f;
      border-radius: 0.555rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.416rem;
      position: relative;
      .icon-box {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-right: 0.416rem;
        span {
          font-size: 0.305rem;
          color: #808080;
          padding-left: 0.138rem;
        }
      }
    }
    .confirm-btn {
      width: 100%;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.555rem;
    }
    .tips {
      margin-top: 0.555rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      .circle {
        width: 0.138rem;
        height: 0.138rem;
        background: #ff0707;
        border-radius: 50%;
        position: absolute;
        top: 0.058rem;
        left: 0;
      }
      span {
        padding-left: 0.305rem;
        color: $color-white;
        font-size: 0.277rem;
      }
    }
    .title {
      width: 100%;
      height: 1.188rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 0.027rem solid #383838;
      position: relative;
      font-weight: bold;
      font-size: 0.461rem;
      color: #e6e6e6;
      .line {
        position: absolute;
        bottom: 0;
        left: calc((100% - 1.861rem) / 2);
        width: 1.861rem;
        height: 0.055rem;
        background: #ffcb78;
        border-radius: 0.027rem;
      }
    }
    .close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      box-sizing: border-box;
      padding: 0.416rem 0 0 0;
    }
  }
}
.setting {
  width: 100%;
  .info-form-box {
    background: #212020;
    width: 100%;
    border-radius: 0.361rem;
    box-sizing: border-box;
    padding: 0.555rem 0.416rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .return {
      width: 8.611rem;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.555rem 0;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
    }
    .update-box {
      margin-bottom: 0.461rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        width: 2.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .btn {
          width: 100%;
          height: 0.694rem;
          background: #ffc02e;
          border-radius: 0px 0px 0.361rem 0.361rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 0.305rem;
          color: #181717;
        }
        .title {
          width: 100%;
          height: 2.305rem;
          background: #303030;
          border-radius: 0.361rem 0.361rem 0px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          span {
            padding-top: 0.277rem;
            font-size: 0.277rem;
            color: #e6e6e6;
          }
        }
      }
    }
    .ipt-box {
      width: 100%;
      height: 1.027rem;
      background: $bg-color;
      border-radius: 0.277rem;
      margin-bottom: 0.416rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.416rem;
      span {
        font-weight: bold;
        font-size: 0.416rem;
        color: #e6e6e6;
        padding-left: 0.416rem;
      }
    }
  }
  .info-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.555rem 0.416rem;
    background: $bg-color;
    .info {
      display: flex;
      align-items: center;

      .avatar {
        width: 1.583rem;
        height: 1.583rem;
        border: 0.055rem solid $primary-color;
        border-radius: 50%;
        position: relative;
        img {
          width: 1.583rem;
        }
        .level {
          position: absolute;
          bottom: -0.1rem;
          left: 0.3rem;
          background-image: url("../assets/images/vip_di.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 1.1rem;
          height: 0.35rem;
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
          padding-right: 0.277rem;
          align-items: center;
          font-size: 0.222rem;
          font-weight: bold;
          color: #1c1f24;
          font-style: italic;
        }
      }
      .info-user {
        margin-left: 0.277rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .val {
          font-weight: bold;
          font-size: 0.388rem;
          color: $color-sub-text;
          display: flex;
          align-items: center;
          .copy-btn {
            margin-left: 0.277rem;
          }
        }
      }
    }
  }
}
</style>
