<template>
  <div class="deposit">
    <div class="close">
      <Close color="#CCC3E2" width=".361rem" height=".361rem" @click="back" />
    </div>
    <div class="form-type">
      <div
        class="item item-left"
        :class="mode == 'deposit' ? 'active' : 'unactive'"
        @click="changeTab('deposit')"
      >
        {{ $t('deposit.Deposit') }}
      </div>
      <div
        class="item item-right"
        :class="mode == 'withdraw' ? 'active' : 'unactive'"
        @click="changeTab('withdraw')"
      >
      {{ $t('deposit.Withdraw') }}
      </div>
    </div>
    <div class="form-box" v-if="mode == 'deposit'">
      <div class="title-row">{{ $t('deposit.selecttype') }}</div>
      <div class="form-row">
        <div
          class="type-item"
          :class="item.methodId == type_id ? 'active-type' : ''"
          v-for="(item, index) in pay_method"
          :key="index"
        >
          <img :src="item.fullMethodIcon" />
          <span>{{ item.methodName }}</span>
        </div>
      </div>
      <div class="title-row">{{ $t('deposit.selectchannel') }}</div>
      <div class="form-row">
        <div
          @click="changeChannel(item.channelId)"
          class="type-item"
          :class="item.channelId == deposit_form.channelId ? 'active-type' : ''"
          v-for="(item, index) in channel_list"
          :key="index"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="title-row">{{ $t('deposit.amountoption') }}</div>
      <div class="form-row">
        <div
          :class="
            item.basicValue == deposit_form.basicValue ? 'active-amount' : 'amount-item'
          "
          v-for="(item, index) in amount_list"
          :key="index"
          @click="changeAmount(item)"
        >
          <div class="basic">{{ item.basicValue }}</div>
          <div class="prize" v-if="item.prize">+{{ item.prize }}</div>
        </div>
      </div>
      <div class="title-row">{{ $t('deposit.enteryouramount') }}</div>
      <div class="form-row">
        <div class="ipt-box">
          <div class="unit">
            <span>R$</span>
          </div>
          <nut-input
            v-model="deposit_form.basicValue"
            :placeholder="$t('deposit.enteryouramount')"
            type="number"
          />
          <div class="promotion-des" v-if="deposit_form.prize">
            Extra+R${{ deposit_form.prize }}
          </div>
        </div>
      </div>

      <div class="bonus-list" v-for="(item, index) in active_list" :key="index">
        <span>{{ item.title }}</span>
        <svg
          @click="changeActive(item)"
          v-if="deposit_form.activityId == item.activityId"
          t="1737204345774"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6149"
          width="13"
          height="13"
        >
          <path
            d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"
            fill="#FFC02E"
            p-id="6150"
          ></path>
        </svg>
        <svg
          @click="changeActive(item)"
          v-else
          t="1737204345774"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6149"
          width="13"
          height="13"
        >
          <path
            d="M511.974401 0c-282.75527 0-511.974401 229.219131-511.974401 511.974401 0 282.757318 229.219131 511.974401 511.974401 511.974401 282.757318 0 511.974401-229.217083 511.974401-511.974401C1023.948803 229.219131 794.729672 0 511.974401 0zM805.63063 379.174385 474.510162 710.296901c0 0-0.004096 0.004096-0.010239 0.010239-15.265029 15.269125-38.541433 17.652877-56.31104 7.157402-3.290971-1.945503-6.393536-4.333351-9.219635-7.157402-0.002048-0.004096-0.006144-0.006144-0.006144-0.006144l-190.642884-190.642884c-18.095223-18.095223-18.095223-47.4375 0-65.536819 18.095223-18.095223 47.4375-18.095223 65.532723 0l157.884714 157.884714 298.362298-298.362298c18.097271-18.095223 47.439548-18.095223 65.534771 0C823.725854 331.738933 823.725854 361.079162 805.63063 379.174385z"
            fill="#999999"
            p-id="6150"
          ></path>
        </svg>
      </div>
      <div class="confirm-btn" @click="depositSubmit()">
        Pay
        <svg
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
    <div class="rule" v-if="mode == 'deposit'" v-html="deposit_rule"></div>

    <div class="form-box" v-if="mode == 'withdraw'">
      <div class="withdraw-able">
        <div class="name">{{ $t('deposit.Withdrawable') }}</div>
        <div class="able-amount">
          <span>
            {{ withdraw_info.balance ? withdraw_info.balance.toFixed(2) : "0.00" }}
          </span>
          <svg
            @click="showIns = true"
            t="1737227137216"
            class="icon"
            viewBox="0 0 1030 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7183"
            width="20"
            height="20"
          >
            <path
              d="M512 0C228.969 0 0 228.969 0 512s228.969 512 512 512 512-228.969 512-512C1022.41 228.969 793.441 0 512 0z m30.211 812.522h-90.633v-90.634h90.633v90.634z m106.534-357.764c-9.54 17.49-28.62 38.161-55.652 65.192-28.62 27.031-46.112 47.702-50.882 58.833-4.77 11.13-7.95 30.21-7.95 60.422l7.95 23.85h-90.633l-1.59-25.44c1.59-30.211 6.36-57.242 14.31-77.913 9.54-22.261 28.621-47.702 57.242-77.913 27.031-27.031 42.932-47.702 49.292-57.242 4.77-9.54 7.95-20.671 7.95-36.572 0-22.26-6.36-39.751-20.67-52.472-14.31-12.72-33.392-20.67-58.832-20.67-54.063 0-73.143 38.16-77.914 106.533h-90.633v-9.54c1.59-31.801 4.77-55.652 12.72-74.733 7.95-19.08 19.081-36.571 36.572-52.472 17.49-15.9 36.571-27.03 57.242-33.391 20.67-6.36 41.342-11.13 63.603-11.13 46.111 0 85.863 14.31 116.074 41.341s46.112 65.193 46.112 111.304c0 23.851-4.77 44.522-14.31 62.013z"
              p-id="7184"
              fill="#666666"
            ></path>
          </svg>
        </div>
        <div class="title-row">{{ $t('deposit.enteryouramount') }}</div>
        <div class="form-row">
          <div class="ipt-box">
            <div class="unit">
              <span>R$</span>
            </div>
            <nut-input
              v-model="withdraw_form.withdrawAmount"
              :placeholder="$t('deposit.enteryouramount')"
              type="number"
            />
          </div>
        </div>
        <div class="tax-row">
          <div class="item">
            {{ $t('deposit.WithdrawFee') }}:<span>R${{ withdraw_form.withdrawAmount }}</span>
          </div>
          <div class="item">
            {{ $t('deposit.HandingFee') }}:<span>R${{ withdraw_form.bonus }}</span>
          </div>
        </div>
        <div class="title-row">{{ $t('deposit.title1') }}</div>
        <div class="withdraw-box">
          <div
            class="item"
            v-for="(item, index) in trans_info.withdrawalAccounts"
            :key="index"
            @click="changeWithdrawAccountType(item)"
          >
            <div class="left">
              <img :src="pay_method[0].fullMethodIcon" />
              <div class="item-info">
                <div class="type">
                  PIX<span>({{ item.accountType }})</span>
                </div>
                <div class="pix-account">{{ item.account }}</div>
              </div>
            </div>
            <i
              class="iconfont"
              :class="
                item.id == withdraw_form.id ? 'icon-xuanzhong' : 'icon-weixuanzhong'
              "
            ></i>
          </div>
          <div class="add-pix" @click="show_check_pass = true">
            <div class="left">
              <svg
                t="1737228926918"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="16142"
                width="21"
                height="21"
              >
                <path
                  d="M1024 1024H0V234.666667h1024v789.333333zM85.333333 938.666667h853.333334V320H85.333333v618.666667z"
                  p-id="16143"
                  fill="#999999"
                ></path>
                <path
                  d="M768 320H0V0h768v320zM85.333333 234.666667h597.333334V85.333333H85.333333v149.333334z"
                  p-id="16144"
                  fill="#999999"
                ></path>
                <path
                  d="M778.666667 629.333333m-74.666667 0a74.666667 74.666667 0 1 0 149.333333 0 74.666667 74.666667 0 1 0-149.333333 0Z"
                  p-id="16145"
                  fill="#999999"
                ></path>
              </svg>
              <span>Add PIX</span>
            </div>
            <svg
              t="1737229102401"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3136"
              width="15"
              height="15"
            >
              <path
                d="M372.679931 191.690834c8.782014 0 17.565051 3.235694 24.26873 9.708106l297.484322 287.175535c13.408381 12.932544 13.408381 33.9226 0 46.855144l-297.485345 287.172465c-13.408381 12.9438-35.130102 12.9438-48.53746 0-13.408381-12.932544-13.408381-33.9226 0-46.855144l273.215592-263.744893L348.411201 248.25306c-13.408381-12.932544-13.408381-33.9226 0-46.855144C355.11488 194.926528 363.897917 191.68981 372.679931 191.690834z"
                p-id="3137"
                fill="#E6E6E6"
              ></path>
            </svg>
          </div>
        </div>

        <div class="form-row">
          <modalCode
            :titleTrans="true"
            :title="$t('deposit.TransficationPassword')"
            @complete="onComplete"
          />
        </div>
        <div class="confirm-btn" style="margin-top: 1.111rem" @click="withdrawSubmit()">
          Pay
          <svg
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

    <div class="rule" v-if="mode == 'withdraw'" v-html="withdraw_rule"></div>

    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="deposit-page" v-if="show_deposit_page">
        <div class="deposit-close">
          <Close
            color="#CCC3E2"
            width=".361rem"
            height=".361rem"
            @click="show_deposit_page = false"
          />
        </div>
        <iframe
          :src="depositUrl"
          width="100%"
          :style="{ height: iframeHeight + 'px' }"
          frameborder="0"
          loading="lazy"
        ></iframe>
      </div>
    </transition>

    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="deposit-page" v-if="show_deposit_page_qr">
        <div class="deposit-close">
          <Close
            color="#CCC3E2"
            width=".361rem"
            height=".361rem"
            @click="show_deposit_page_qr = false"
          />
        </div>
        <div class="qr-box">
          <div class="amount">
            <img :src="pay_method[0].fullMethodIcon" />
            <span>R${{ deposit_form.basicValue }}</span>
          </div>
          <div class="des">{{ $t('deposit.title2') }}</div>
          <img style="margin: 1.111rem 0 0.555rem 0" :src="qrCodeSrc" />
          <div class="count-down">
            <nut-countdown :start-time="nowtime" :end-time="countdown"></nut-countdown>
          </div>
          <div class="copy-qr-btn" @click="copyPix()">Copy PIX Code</div>
          <div class="des-copy">
            {{ $t('deposit.title3') }}
          </div>
        </div>
      </div>
    </transition>

    <nut-overlay
      v-model:visible="trans_visible"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="trans_visible = false">
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
            {{ $t('deposit.ChangePassword') }}
            <div class="line"></div>
          </div>

          <div>
            <nut-form ref="tranRef" :model-value="trans_Form">
              <nut-form-item
                prop="newPassword"
                :rules="[{ validator: customValidatorTransPass }]"
              >
                <modalCode
                  :titleTrans="true"
                  :title="$t('deposit.NewWithdrawalPassword')"
                  @complete="onComplete2"
                />
              </nut-form-item>
              <nut-form-item
                prop="rePassword"
                :rules="[{ validator: customValidatorTransPassAgain }]"
              >
                <modalCode
                  :titleTrans="true"
                  :title="$t('deposit.ConfirmPassword')"
                  @complete="onComplete3"
                />
              </nut-form-item>
            </nut-form>

            <div class="tips">
              <div class="circle"></div>
              <span
                >{{ $t('deposit.tip1') }}</span
              >
            </div>
            <div class="tips">
              <div class="circle"></div>
              <span>
                {{ $t('deposit.tip2') }}</span
              >
            </div>
          </div>

          <div class="confirm-btn" @click="confirmWithdrawPass()">
            {{ $t('button.confirm') }}<svg
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

    <nut-overlay
      v-model:visible="show_check_pass"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="show_check_pass = false">
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
            {{ $t('deposit.EnterPassword') }}
            <div class="line"></div>
          </div>

          <div>
            <nut-form ref="checkPassRef" :model-value="checkPass_Form">
              <nut-form-item
                prop="transactionPassword"
                :rules="[{ validator: customValidatorTransPass }]"
              >
                <modalCode
                  :titleTrans="true"
                  :title="$t('deposit.ConfirmPassword')"
                  @complete="onComplete4"
                />
              </nut-form-item>
            </nut-form>

            <div class="tips">
              <div class="circle"></div>
              <span>{{ $t('deposit.title4') }}</span>
            </div>
          </div>

          <div class="confirm-btn" @click="confirmTransactionPassword()">
            {{ $t('button.confirm') }}<svg
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

    <nut-overlay
      v-model:visible="add_pix_visible"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="add_pix_visible = false">
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
            Add PIX
            <div class="line"></div>
          </div>

          <nut-form ref="pixRef" :model-value="pixForm">
            <nut-form-item
              prop="realName"
              :rules="[{ validator: customValidatorRealName }]"
            >
              <div class="ipt-box">
                <div class="icon-box">
                  <i class="iconfont icon-shenfenzheng"></i>
                </div>
                <nut-input
                  :clearable="true"
                  v-model="pixForm.realName"
                  :placeholder="$t('deposit.Enteryourrealname')"
                  type="text"
                />
              </div>
            </nut-form-item>
            <nut-form-item prop="accountType">
              <div class="ipt-box">
                <div class="icon-box">
                  <i class="iconfont icon-geren"></i>
                </div>
                <div class="options-box" @click="showPixType = !showPixType">
                  <span>{{ pixType_name }}</span>
                  <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
                <div class="pix-type-box" v-if="showPixType">
                  <div
                    class="item"
                    :style="{ color: item.name == pixType_name ? '#fff' : '#999' }"
                    v-for="(item, index) in pixType"
                    :key="index"
                    @click="changePIXType(item)"
                  >
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </nut-form-item>
            <nut-form-item
              v-if="pixForm.accountType != 'cpf'"
              prop="account"
              :rules="[{ validator: customValidatorAccount }]"
            >
              <div class="ipt-box">
                <div class="icon-box">
                  <i class="iconfont icon-mima"></i>
                </div>
                <nut-input
                  :clearable="true"
                  v-model="pixForm.account"
                  :placeholder="$t('deposit.EnteryourPIXaccount')"
                  type="text"
                />
              </div>
            </nut-form-item>
            <nut-form-item prop="cpf" :rules="[{ validator: customValidatorCPF }]">
              <div class="ipt-box">
                <div class="icon-box">
                  <i class="iconfont icon-shenfenzheng"></i>
                </div>
                <nut-input
                  :clearable="true"
                  v-model="pixForm.cpf"
                  :placeholder="$t('deposit.Enterthe11digitCPFnumber')"
                  type="text"
                />
              </div>
            </nut-form-item>
          </nut-form>

          <div class="confirm-btn" @click="confirmAddPix()">
            {{ $t('button.confirm') }}<svg
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

    <nut-overlay
      v-model:visible="showIns"
      :lock-scroll="true"
      :close-on-click-overlay="false"
    >
      <div class="overlay-body">
        <div class="overlay-content">
          <div class="close" @click="showIns = false">
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
            {{ $t('deposit.Withdrawalnstructions') }}
            <div class="line"></div>
          </div>
          <div class="ins-box">
            <div class="title1">{{$t('deposit.MontanteSaqueavel')}}(R$)</div>
            <div class="able-amount">{{ withdraw_info.balance }}</div>
            <div class="total-amount">
              {{ $t('deposit.Montanteasedesbloqueado') }}:<span>{{
                withdraw_info.sumCompletedAmount
              }}</span>
            </div>
            <div class="title1" style="margin: 0.222rem 0">
              {{ $t('deposit.tip3') }}
            </div>
            <nut-progress
              :percentage="
                (withdraw_info.sumCompletedAmount / withdraw_info.sumTargetTurnover) *
                  100 || 0
              "
              stroke-color="linear-gradient(270deg,#FFC02E  0%,#F36655 100%)"
            />
            <div class="progress-text">
              <span> {{ withdraw_info.sumCompletedAmount }}</span
              >/{{ withdraw_info.sumTargetTurnover }}
            </div>
            <div class="tip">
              {{ $t('deposit.tip4') }}
            </div>
            <div class="tip">
              {{ $t('deposit.tip5') }}
            </div>
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
import QRCode from "qrcode";
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Close } from "@nutui/icons-vue";
import {
  WithdrawalInfo,
  GetRechargeActivity,
  GetTranscationInfo,
  GetRechargeActivityMoneyList,
  RechargeRule,
  WithdrawRule,
  RechargeActivityParticipation,
  PayOrderCreate,
  SetTranscationPassword,
  CheckTranscationPassword,
  AddTranscationInfo,
  GetAccountType,
  WithdrawAdd,
  PayMethod,
} from "@/apis/deposit";

const { state, dispatch, commit } = useStore();
const route = useRoute();
const router = useRouter();

const showIns = ref(false);
const showPixType = ref(false);
const pixType = ref([
  {
    name: "PIX-TELEFONE",
    type: "phone",
  },
  {
    name: "PIX-EMAIL",
    type: "email",
  },
  {
    name: "PIX-CPF",
    type: "cpf",
  },
]);
const pixType_name = ref("");
const changePIXType = (data) => {
  pixForm.value.accountType = data.type;
  pixType_name.value = data.name;
  showPixType.value = false;
};
const pixRef = ref(null);
const add_pix_visible = ref(false);
const pixForm = ref({
  transactionPassword: "", // 交易密码
  realName: "", // 真实姓名
  account: "", // 本次添加的账号
  accountType: "", // 账户类型
  cpf: "", //CPF号码
});
const confirmAddPix = () => {
  if (is_loading.value) return;

  pixRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      is_loading.value = true;
      AddTranscationInfo(pixForm.value)
        .then((res) => {
          if (res.code == 200) {
            add_pix_visible.value = false;
            getTransInfo();
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
};
const customValidatorRealName = (val) => {
  if (val) {
    return Promise.resolve();
  } else {
    return Promise.reject("please enter your real name");
  }
};
const customValidatorAccount = (val) => {
  if (pixForm.value.accountType == "cpf") return Promise.resolve();
  if (val.length == 10) {
    return Promise.resolve();
  } else {
    return Promise.reject("please enter your PIX account");
  }
};
const customValidatorCPF = (val) => {
  if (val.length == 11) {
    return Promise.resolve();
  } else {
    return Promise.reject("please enter the 11-digit CPF number");
  }
};

const checkPassRef = ref(null);
const checkPass_Form = ref({
  transactionPassword: "",
});
const show_check_pass = ref(false);
const confirmTransactionPassword = () => {
  if (is_loading.value) return;
  checkPassRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      is_loading.value = true;
      const pram = {
        transactionPassword: checkPass_Form.value.transactionPassword.join(""),
      };
      CheckTranscationPassword(pram)
        .then((res) => {
          if (res.code == 200) {
            show_check_pass.value = false;
            add_pix_visible.value = true;
            pixForm.value.transactionPassword = pram.transactionPassword;
            pixForm.value.accountType = "phone";
            pixType_name.value = "PIX-TELEFONE";
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
};

const tranRef = ref(null);
const trans_visible = ref(false);
const trans_Form = ref({
  newPassword: "",
  rePassword: "",
});
const onComplete2 = (val) => {
  trans_Form.value.newPassword = val;
};

const onComplete3 = (val) => {
  trans_Form.value.rePassword = val;
};

const onComplete4 = (val) => {
  checkPass_Form.value.transactionPassword = val;
};

const confirmWithdrawPass = () => {
  if (is_loading.value) return;

  tranRef.value.validate().then(({ valid, errors }) => {
    if (valid) {
      is_loading.value = true;
      const pram = {
        newPassword: trans_Form.value.newPassword.join(""),
      };
      SetTranscationPassword(pram)
        .then((res) => {
          if (res.code == 200) {
            commit("set_show_tip", {
              type: 1,
              msg: "success",
            });
            getTransInfo();
          } else {
            commit("set_show_tip", {
              type: 0,
              msg: res.msg,
            });
          }
        })
        .finally(() => {
          is_loading.value = false;
          trans_visible.value = false;
        });
    } else {
      console.warn("error:", errors);
    }
  });
};

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
      trans_Form.value.newPassword.filter(
        (item) => item !== undefined && item !== null && item !== ""
      )
  ) {
    return Promise.resolve();
  } else {
    return Promise.reject("please Enter Correct Password");
  }
};

const withdrawSubmit = () => {
  if (is_loading.value) return;
  if (!withdraw_info.value.isWithdrawal) return;
  if (!withdraw_form.value.withdrawAmount) return;
  if (!withdraw_form.value.id) return;
  if (!withdraw_form.value.transactionPassword) return;
  if (withdraw_info.value.balance < Number(withdraw_form.value.withdrawAmount)) return;
  is_loading.value = true;

  WithdrawAdd({
    ...withdraw_form.value,
    withdrawAmount: Number(withdraw_form.value.withdrawAmount),
    transactionPassword: withdraw_form.value.transactionPassword.join(""),
  })
    .then((res) => {
      if (res.code == 200) {
        getWithdrawInfo();
        getTransInfo();
        commit("set_show_tip", { type: 1, msg: "Application is under review" });
      } else {
        commit("set_show_tip", { type: 0, msg: res.msg });
      }
    })
    .finally(() => {
      is_loading.value = false;
    });
};
const onComplete = (val) => {
  withdraw_form.value.transactionPassword = val;
};
const changeWithdrawAccountType = (data) => {
  if (data.id == withdraw_form.value.id) return;
  withdraw_form.value.id = data.id;
  // withdraw_form.value.accountType = data.accountType;
};
const withdraw_form = ref({
  id: "",
  transactionPassword: "", // 交易密码
  // account: "", // 本次提现收款账号
  // accountType: "", //  账户类型
  withdrawAmount: "", // 提现金额
  // payCategory: "BANK", // WALLET 电子钱包,BANK 银行转账,CARD 信用卡
  bonus: 1,
});
const copyPix = async () => {
  try {
    await navigator.clipboard.writeText(pix_no.value);
    commit("set_show_tip", { type: 1, msg: "copied" });
  } catch (err) {
    console.error("复制到剪贴板失败", err);
  }
};
const nowtime = ref(Date.now());
const pix_no = ref("");
const trade_no = ref("");
const countdown = ref(0);
const qrCodeSrc = ref("");
const iframeHeight = ref(0);
const depositUrl = ref("");
const show_deposit_page = ref(false);
const show_deposit_page_qr = ref(false);
const amount_list = ref([
  {
    basicValue: "100",
    prize: "",
  },
  {
    basicValue: "200",
    prize: "",
  },
  {
    basicValue: "300",
    prize: "",
  },
  {
    basicValue: "500",
    prize: "",
  },
  {
    basicValue: "1000",
    prize: "",
  },
  {
    basicValue: "2000",
    prize: "",
  },
  {
    basicValue: "5000",
    prize: "",
  },
]);

const is_loading = ref(false);
const depositSubmit = () => {
  if (is_loading.value) return;

  if (deposit_form.value.basicValue) is_loading.value = true;
  if (deposit_form.value.activityId != "") {
    RechargeActivityParticipation(deposit_form.value).then((res) => {
      if (res.code == 200) {
        if (res.data.type == "http") {
          depositUrl.value = res.data.content;
          show_deposit_page.value = true;
        } else {
          trade_no.value = res.data.outTradeNo;
          nowtime.value = Date.now();
          countdown.value = new Date().getTime() + res.data.timeExpire * 1000;
          pix_no.value = res.data.content;
          QRCode.toDataURL(res.data.content).then((url) => {
            qrCodeSrc.value = url;
            show_deposit_page_qr.value = true;
          });
        }
      } else {
        commit("set_show_tip", { type: 0, msg: res.msg });
      }
      is_loading.value = false;
    });
  } else {
    PayOrderCreate({
      rechargeAmount: deposit_form.value.basicValue,
      channelId: deposit_form.value.channelId,
      max: 10000,
      min: 10,
    }).then((res) => {
      if (res.code == 200) {
        if (res.data.type == "http") {
          depositUrl.value = res.data.content;
          show_deposit_page.value = true;
        } else {
          trade_no.value = res.data.outTradeNo;
          nowtime.value = Date.now();
          countdown.value = new Date().getTime() + res.data.timeExpire * 1000;
          pix_no.value = res.data.content;
          QRCode.toDataURL(res.data.content).then((url) => {
            qrCodeSrc.value = url;
            show_deposit_page_qr.value = true;
          });
        }
      } else {
        commit("set_show_tip", { type: 0, msg: res.msg });
      }
      is_loading.value = false;
    });
  }
};

const getRule = () => {
  RechargeRule().then((res) => {
    if (res.code == 200) deposit_rule.value = res.data.content;
  });
  WithdrawRule().then((res) => {
    if (res.code == 200) withdraw_rule.value = res.data.content;
  });
};
const getTransInfo = () => {
  GetTranscationInfo().then((res) => {
    if (res.code == 200) {
      trans_info.value = res.data;
      if (trans_info.value.withdrawalAccounts.length > 0) {
        withdraw_form.value.id = trans_info.value.withdrawalAccounts[0].id;
      }
      if (!trans_info.value.hasSetTransactionPassword && mode.value == "withdraw")
        trans_visible.value = true;
    }
  });
};
const getDepositActive = () => {
  GetRechargeActivity().then((res) => {
    if (res.code == 200 && res.data) {
      GetRechargeActivityMoneyList({ activityId: res.data.activityId }).then((result) => {
        if (result.code == 200) {
          active_list.value = result.data;
          const list = amount_list.value;
          list.map((item) => {
            item.prize = (active_list.value[0].prizeValue / 100) * item.basicValue;
          });
          amount_list.value = list;
          deposit_form.value.activityId = active_list.value[0].activityId;
          deposit_form.value.prize =
            (active_list.value[0].prizeValue / 100) * deposit_form.value.basicValue;
        }
      });
    }
  });
};
const getWithdrawInfo = () => {
  WithdrawalInfo().then((res) => {
    if (res.code == 200) withdraw_info.value = res.data;
  });
};

const active_list = ref([]);
const current_active_list = ref({});
const trans_info = ref({});
const withdraw_info = ref({});
const withdraw_rule = ref("");
const deposit_rule = ref("");
const mode = ref("deposit");
const type_id = ref("");
const channel_list = ref([]);
const deposit_form = ref({
  activityId: "",
  basicValue: "100",
  channelId: "",
  prize: "",
});
const pay_method = ref([]);

const changeTab = (type) => {
  mode.value = type;
};
const changeChannel = (id) => {
  deposit_form.value.channelId = id;
};
const changeAmount = (data) => {
  deposit_form.value.basicValue = data.basicValue;
};
const changeActive = (data) => {
  if (deposit_form.value.activityId != "") {
    deposit_form.value.activityId = "";
    deposit_form.value.prize = "";
    amount_list.value.map((item) => {
      item.prize = "";
    });
  } else {
    deposit_form.value.activityId = data.activityId;
    deposit_form.value.prize = (data.prizeValue / 100) * deposit_form.value.basicValue;
    amount_list.value.map((item) => {
      item.prize = (item.basicValue * data.prizeValue) / 100;
    });
  }
};
const back = () => {
  router.go(-1);
};
watch(
  () => deposit_form.value.basicValue,
  (val) => {
    if (Number(val) < 10) deposit_form.value.basicValue = "10";
    if (active_list.value.length > 0)
      deposit_form.value.prize = (val * active_list.value[0].prizeValue) / 100;
  }
);
watch(
  () => withdraw_form.value.withdrawAmount,
  (val) => {
    if (Number(val) < withdraw_method.value.minAmount)
      withdraw_form.value.withdrawAmount = withdraw_method.value.minAmount.toString();
    if (Number(val) > withdraw_method.value.maxAmount)
      withdraw_form.value.withdrawAmount = withdraw_method.value.maxAmount.toString();
    if (withdraw_method.value.feeRole) {
      withdraw_form.value.bonus = 0;
    } else {
      const fee =
        withdraw_method.value.feeFix +
        Number(withdraw_form.value.withdrawAmount) * withdraw_method.value.feePercent;
      if (fee > withdraw_method.value.feeMax) {
        withdraw_form.value.bonus = withdraw_method.value.feeMax;
      } else if (fee < withdraw_method.value.feeMin) {
        withdraw_form.value.bonus = withdraw_method.value.feeMin;
      } else {
        withdraw_form.value.bonus = fee;
      }
    }
  }
);
watch(
  () => mode.value,
  (val) => {
    if (
      val == "withdraw" &&
      JSON.stringify(trans_info.value) != "{}" &&
      !trans_info.value.hasSetTransactionPassword
    ) {
      trans_visible.value = true;
    }
  }
);
const getAccountType = () => {
  GetAccountType().then((res) => {
    if (res.code == 200) {
      console.log(res.data);
    }
  });
};
const withdraw_method = ref({});
const GetWithdrawlMethod = () => {
  PayMethod({ channelType: 1 }).then((res) => {
    if (res.code == 200) {
      withdraw_method.value = res.data[0].payChannels[0].payConfig;
      withdraw_form.value.withdrawAmount = withdraw_method.value.minAmount.toString();
    }
  });
};
onBeforeUnmount(() => {
  dispatch("GET_USER_BALANCE");
});
onMounted(() => {
  getRule();
  getDepositActive();
  getTransInfo();
  getWithdrawInfo();
  GetWithdrawlMethod();
  //   getAccountType()
  pay_method.value = state.pay_method;
  type_id.value = pay_method.value[0].methodId;
  channel_list.value = pay_method.value[0].payChannels;
  deposit_form.value.channelId = channel_list.value[0].channelId;

  if (route.query.mode) mode.value = route.query.mode;

  iframeHeight.value = window.innerHeight - 40;
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.pix-type-box {
  z-index: 3;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -3rem;
  background: rgba(15, 15, 15, 1);
  border-radius: 0.194rem;
  .item {
    width: 100%;
    height: 0.972rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.305rem;
    font-weight: bold;
    box-sizing: border-box;
    padding: 0 0.416rem;
  }
}
.options-box {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.277rem;
  span {
    color: $color-white;
    font-size: 0.305rem;
    font-weight: bold;
  }
  i {
    color: $color-white;
    font-size: 0.333rem;
    font-weight: bold;
  }
}
.overlay-body {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .overlay-content {
    width: calc(100% - 0.833rem);
    background: #1f1e1e;
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;
    box-sizing: border-box;
    padding: 0 0.416rem 0.555rem 0.416rem;
    .ins-box {
      width: 100%;
      box-sizing: border-box;
      padding: 0.277rem 0;
      .tip {
        margin-top: 0.277rem;
        font-weight: 400;
        font-size: 0.305rem;
        color: #cccccc;
      }
      .progress-text {
        width: 100%;
        text-align: center;
        margin: 0.138rem 0 0.277rem 0;
        font-weight: 400;
        font-size: 0.305rem;
        color: $color-white;
        span {
          font-weight: 400;
          font-size: 0.305rem;
          color: $primary-color;
        }
      }
      .title1 {
        font-weight: 400;
        font-size: 0.305rem;
        color: #999797;
      }
      .able-amount {
        color: $primary-color;
        font-weight: bold;
        font-size: 0.638rem;
        margin: 0.222rem 0;
      }
      .total-amount {
        font-weight: 400;
        font-size: 0.395rem;
        color: #999797;
        span {
          padding-left: 0.416rem;
          font-weight: bold;
          font-size: 17px;
          color: #ffc02e;
        }
      }
    }
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
        i {
          font-size: 0.444rem;
          font-weight: bold;
          color: #808080;
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

.deposit {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.277rem 0.277rem 0.277rem;
  position: relative;
  .deposit-page {
    z-index: 3;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: $bg-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .qr-box {
      width: 100%;
      background: #222222;
      height: calc(100vh - 1.111rem);
      box-sizing: border-box;
      padding: 0.555rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .des-copy {
        width: 90%;
        font-size: 0.277rem;
        color: #cccccc;
      }
      .copy-qr-btn {
        margin: 0.416rem 0;
        width: 90%;
        height: 1.111rem;
        background: #ffc02e;
        border-radius: 0.555rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.361rem;
        color: #181717;
      }
      .count-down {
        color: $color-white;
        font-size: 0.416rem;
        font-weight: bold;
      }
      .des {
        width: 80%;
        background: #333333;
        color: $color-sub-text;
        font-size: 0.277rem;
        border-radius: 0.277rem;
        box-sizing: border-box;
        padding: 0.138rem 0.277rem;
      }
      .amount {
        width: 100%;
        margin-bottom: 0.416rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0.555rem;
          margin-right: 0.277rem;
        }
        span {
          color: $color-white;
          font-size: 0.555rem;
          font-weight: bold;
        }
      }
      img {
        width: 4.166rem;
      }
    }
    .deposit-close {
      width: 100%;
      height: 1.111rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      box-sizing: border-box;
      padding: 0 0.694rem;
    }
  }
  .form-box {
    margin: 0.416rem 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.416rem;
    background: linear-gradient(135deg, #1f1e1e 0%, #1f1e1e 75%, #413825 100%);
    border-radius: 0.555rem;

    .withdraw-box {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      background: #0f0f0f;
      border-radius: 0.555rem;
      .add-pix {
        width: 100%;
        height: 1.111rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.416rem;
        .left {
          display: flex;
          align-items: center;
          span {
            padding-left: 0.416rem;
            font-weight: 400;
            font-size: 0.361rem;
            color: #e6e6e6;
          }
        }
      }
      .item {
        width: 100%;
        height: 1.111rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.416rem;
        i {
          font-size: 0.333rem;
          font-weight: bold;
          color: $primary-color;
        }
        .left {
          display: flex;
          align-items: center;
          img {
            width: 0.472rem;
            margin-right: 0.222rem;
          }
          .item-info {
            display: flex;
            align-items: center;
            .pix-account {
              color: $color-white;
              font-size: 0.305rem;
              padding-left: 0.277rem;
            }
            .type {
              font-size: 0.305rem;
              color: #e6e6e6;
              span {
                color: #e6e6e6;
                font-size: 0.25rem;
              }
            }
          }
        }
      }
    }
    .tax-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.138rem;
      .item {
        font-weight: 400;
        font-size: 0.277rem;
        color: #e5e5e5;
        margin-right: 0.277rem;
        span {
          color: $primary-color2;
          font-size: 0.361rem;
          font-weight: 600;
        }
      }
    }
    .withdraw-able {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0.555rem 0 0.277rem 0;
      .name {
        font-weight: 400;
        font-size: 0.361rem;
        color: #e5e5e5;
        margin-bottom: 0.277rem;
      }
      .able-amount {
        position: relative;
        height: 0.916rem;
        svg {
          position: absolute;
          right: -0.8rem;
          bottom: 0.12rem;
        }
        span {
          font-weight: 400;
          font-size: 0.916rem;
          color: $primary-color;
        }
      }
    }
    .confirm-btn {
      margin: 0.416rem 0;
      width: 100%;
      height: 1.111rem;
      background: #ffc02e;
      border-radius: 0.555rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
      color: #181717;
    }

    .bonus-list {
      margin-top: 0.277rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        font-weight: 400;
        font-size: 0.361rem;
        color: #ffc02e;
        padding-right: 0.277rem;
      }
    }
    .form-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      .ipt-box {
        width: 100%;
        height: 1.111rem;
        background: rgba(15, 15, 15, 1);
        border-radius: 0.555rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0.416rem;
        position: relative;

        .promotion-des {
          font-weight: 400;
          font-size: 0.361rem;
          color: #21f52b;
        }
        .unit {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-right: 0.416rem;
          border-right: 0.054rem solid #e5e5e5;
          span {
            font-weight: bold;
            font-size: 0.361rem;
            color: #e5e5e5;
          }
        }
      }
      .active-amount {
        margin-right: 0.277rem;
        margin-bottom: 0.277rem;
        width: calc((100% - 0.554rem) / 3);
        height: 1.472rem;
        box-sizing: border-box;
        border-radius: 0.277rem;
        border: 0.027rem solid #ffc02e;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(77, 60, 21, 0.3);
        .basic {
          font-weight: bold;
          font-size: 0.444rem;
          color: #ffc02e;
        }
        .prize {
          margin-top: 0.138rem;
          font-weight: bold;
          font-size: 0.361rem;
          color: #21f52b;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      .amount-item {
        margin-right: 0.277rem;
        margin-bottom: 0.277rem;
        width: calc((100% - 0.554rem) / 3);
        height: 1.472rem;
        box-sizing: border-box;
        background: rgba(15, 15, 15, 0.3);
        border-radius: 0.277rem;
        border: 0.027rem solid #3d3d3d;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .basic {
          font-weight: 400;
          font-size: 0.444rem;
          color: #cccccc;
        }
        .prize {
          margin-top: 0.138rem;
          font-weight: 400;
          font-size: 0.361rem;
          color: #ffcb78;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      .type-item {
        width: 2.777rem;
        height: 0.916rem;
        border-radius: 0.472rem;
        border: 0.027rem solid #808080;
        font-weight: bold;
        font-size: 0.361rem;
        color: #808080;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.277rem;
        img {
          width: 0.472rem;
          margin-right: 0.277rem;
        }
      }
      .active-type {
        border: 0.027rem solid $primary-color;
        color: #181717;
        background: $primary-color;
      }
    }
    .title-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      padding: 0.416rem 0 0.222rem 0;
      font-weight: bold;
      font-size: 0.361rem;
      color: #999999;
    }
  }
  .form-type {
    display: flex;
    align-items: center;
    .item {
      width: 3.222rem;
      height: 0.916rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 0.361rem;
    }
    .item-left {
      border-radius: 0.472rem 0px 0px 0.472rem;
    }
    .item-right {
      border-radius: 0px 0.472rem 0.472rem 0px;
    }
    .active {
      background: $primary-color;
      color: $color-black;
    }
    .unactive {
      background: #0d0d0d;
      color: #808080;
    }
  }

  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0.416rem 0.694rem;
  }
}
</style>
