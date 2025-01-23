<template>
  <div class="report">
    <div class="date-box">
      <div class="date-container" @click="show = true">
        <span>{{ date[0] }} - {{ date[1] }}</span>
      </div>
    
        <div class="search-btn" @click="getData()">
          <span v-if="!is_loading">{{ $t('report.Procurar') }}</span>
          <svg
            v-if="is_loading"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20px"
            height="20px"
            viewBox="0 0 50 50"
            style="enable-background: new 0 0 50 50"
            xml:space="preserve"
          >
            <path
              fill="#ffffff"
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

      <div class="game-type-option" v-if="type == 'Bets'" @click="showType = true">
        <div class="game-name">{{ game_type_name }}</div>
        <i
          class="iconfont"
          :class="showType ? 'icon-xiangshangjiantou' : 'icon-xiangxiajiantou'"
        ></i>
      </div>
    </div>
    <div class="tab-box">
      <div
        class="item"
        @click="changeType('Account')"
        :style="{ color: type == 'Account' ? '#fdc24a' : '' }"
      >
        {{ $t('report.Account') }}
        <div class="active" v-if="type == 'Account'"></div>
      </div>
      <div
        class="item"
        @click="changeType('Deposit')"
        :style="{ color: type == 'Deposit' ? '#fdc24a' : '' }"
      >
        {{ $t('report.Deposit') }}
        <div class="active" v-if="type == 'Deposit'"></div>
      </div>
      <div
        class="item"
        @click="changeType('Withdraw')"
        :style="{ color: type == 'Withdraw' ? '#fdc24a' : '' }"
      >
        {{ $t('report.Withdraw') }}
        <div class="active" v-if="type == 'Withdraw'"></div>
      </div>
      <div
        class="item"
        @click="changeType('Bets')"
        :style="{ color: type == 'Bets' ? '#fdc24a' : '' }"
      >
        {{ $t('report.Bets') }}
        <div class="active" v-if="type == 'Bets'"></div>
      </div>
      <div
        class="item"
        @click="changeType('Bonus')"
        :style="{ color: type == 'Bonus' ? '#fdc24a' : '' }"
      >
        {{ $t('report.Bonus') }}
        <div class="active" v-if="type == 'Bonus'"></div>
      </div>
      <div
        class="item"
        @click="changeType('Promotion')"
        :style="{ color: type == 'Promotion' ? '#fdc24a' : '' }"
      >
        {{ $t('report.Promotion') }}
        <div class="active" v-if="type == 'Promotion'"></div>
      </div>
    </div>

    <div class="table-box" v-if="type == 'Account'">
      <div class="table-header">
        <div class="table-col-copy"></div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">ID</div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">{{ $t('report.Date') }}</div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">{{ $t('report.Type') }}</div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">{{ $t('report.Amount') }}</div>
      </div>
      <div class="table-row" v-for="(item, index) in account_data" :key="index">
        <div class="table-col-copy">
          <div class="copy-btn" @click="copyId(item.id)">
            <svg
              t="1736770609856"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4316"
              width="16"
              height="16"
            >
              <path
                d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                fill="#FFC536"
                p-id="4317"
              ></path>
            </svg>
          </div>
        </div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">
          {{ item.id }}
        </div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">
          {{ item.changeTime }}
        </div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">
          {{ item.optTypeName }}
        </div>
        <div class="table-col" style="width: calc((100% - 0.555rem) / 4)">
          {{ item.changeAmount }}
        </div>
      </div>
    </div>

    <div class="table-box" v-if="type == 'Deposit'">
      <div class="table-header">
        <div class="table-col-copy"></div>
        <div class="table-col">ID</div>
        <div class="table-col">{{$t('report.Date')}}</div>
        <div class="table-col">{{ $t('report.Deposit') }}</div>
        <div class="table-col">{{ $t('report.Bonus') }}</div>
        <div class="table-col">{{ $t('report.Status') }}</div>
      </div>
      <div class="table-row" v-for="(item, index) in deposit_data" :key="index">
        <div class="table-col-copy">
          <div class="copy-btn" @click="copyId(item.orderNum)">
            <svg
              t="1736770609856"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4316"
              width="16"
              height="16"
            >
              <path
                d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                fill="#FFC536"
                p-id="4317"
              ></path>
            </svg>
          </div>
        </div>
        <div class="table-col">{{ item.orderNum }}</div>
        <div class="table-col">{{ item.createTime }}</div>
        <div class="table-col">{{ item.rechargeAmount }}</div>
        <div class="table-col">{{ item.cashBonus }}</div>
        <div
          class="table-col"
          :style="{
            color:
              item.status == 1 ? '#06a950' : item.status == 2 ? '#999999' : '#eb3323',
          }"
        >
          {{
            item.status == 1
              ? "success"
              : item.status == 2
              ? "expired"
              : item.status == 0
              ? "Not Paid"
              : ""
          }}
        </div>
      </div>
    </div>

    <div class="table-box" v-if="type == 'Withdraw'">
      <div class="table-header">
        <div class="table-col-copy"></div>
        <div class="table-col">ID</div>
        <div class="table-col">{{ $t('report.Date') }}</div>
        <div class="table-col">{{ $t('report.Amount') }}</div>
        <div class="table-col">{{ $t('report.Fee') }}</div>
        <div class="table-col">{{ $t('report.Status') }}</div>
      </div>
      <div class="table-row" v-for="(item, index) in withdraw_data" :key="index">
        <div class="table-col-copy">
          <div class="copy-btn" @click="copyId(item.accountNo)">
            <svg
              t="1736770609856"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4316"
              width="16"
              height="16"
            >
              <path
                d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                fill="#FFC536"
                p-id="4317"
              ></path>
            </svg>
          </div>
        </div>
        <div class="table-col">{{ item.accountNo }}</div>
        <div class="table-col">{{ item.createTime }}</div>
        <div class="table-col">{{ item.withdrawAmount }}</div>
        <div class="table-col">{{ item.bonus }}</div>
        <div
          class="table-col"
          :style="{
            color:
              item.status == 1 ? '#06a950' : item.status == 4 ? '#eb3323' : '#999999',
          }"
        >
          {{
            item.status == 0
              ? "Submitted"
              : item.status == 4
              ? "Rejected"
              : item.status == 1
              ? "Success"
              : item.status == 3
              ? "Failure"
              : ""
          }}
        </div>
      </div>
    </div>

    <div class="table-box" v-if="type == 'Bets'">
      <div class="table-header">
        <div class="table-col-copy"></div>
        <div class="table-col">ID</div>
        <div class="table-col">{{ $t('report.Date') }}</div>
        <div class="table-col">{{ $t('report.Type') }}</div>
        <div class="table-col">{{ $t('report.Bets') }}</div>
        <div class="table-col">{{ $t('report.Bonus') }}</div>
      </div>
      <div class="table-row" v-for="(item, index) in bet_data" :key="index">
        <div class="table-col-copy">
          <div class="copy-btn" @click="copyId(item.id)">
            <svg
              t="1736770609856"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4316"
              width="16"
              height="16"
            >
              <path
                d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                fill="#FFC536"
                p-id="4317"
              ></path>
            </svg>
          </div>
        </div>
        <div class="table-col">{{ item.id }}</div>
        <div class="table-col">{{ item.changeTime }}</div>
        <div class="table-col">{{ item.gameTypeLabel }}</div>
        <div class="table-col">{{ item.bet }}</div>
        <div class="table-col">{{ item.winAmount }}</div>
      </div>
    </div>

    <div class="table-box" v-if="type == 'Bonus'">
      <div class="table-header">
        <div class="table-col-copy"></div>
        <div class="table-col">ID</div>
        <div class="table-col">{{ $t('report.Date') }}</div>
        <div class="table-col">{{ $t('report.Origin') }}</div>
        <div class="table-col">{{ $t('report.Bonus') }}</div>
        <div class="table-col">{{ $t('report.Status') }}</div>
      </div>
      <div class="table-row" v-for="(item, index) in bonus_data" :key="index">
        <div class="table-col-copy">
          <div class="copy-btn" @click="copyId(item.taskId)">
            <svg
              t="1736770609856"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4316"
              width="16"
              height="16"
            >
              <path
                d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                fill="#FFC536"
                p-id="4317"
              ></path>
            </svg>
          </div>
        </div>
        <div class="table-col">{{ item.taskId }}</div>
        <div class="table-col">{{ item.createTime }}</div>
        <div class="table-col">{{ item.taskName }}</div>
        <div class="table-col">{{ item.rewardAmount }}</div>
        <div
          class="table-col"
          :style="{
            color: item.status == 1 ? '#06a950' : '#eb3323',
          }"
        >
          {{ item.status == 1 ? "success" : "expired" }}
        </div>
      </div>
    </div>

    <div class="table-box" v-if="type == 'Promotion'">
      <div class="table-header">
        <div class="table-col-copy"></div>
        <div class="table-col">ID</div>
        <div class="table-col">{{ $t('report.Date') }}</div>
        <div class="table-col">{{ $t('report.Type') }}</div>
        <div class="table-col">{{ $t('report.Bonus') }}</div>
        <div class="table-col">{{ $t('report.Details') }}</div>
      </div>
      <div class="table-row" v-for="(item, index) in promotion_data" :key="index">
        <div class="table-col-copy">
          <div class="copy-btn" @click="copyId(item.taskId)">
            <svg
              t="1736770609856"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4316"
              width="16"
              height="16"
            >
              <path
                d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z"
                fill="#FFC536"
                p-id="4317"
              ></path>
            </svg>
          </div>
        </div>
        <div class="table-col">{{ item.taskId }}</div>
        <div class="table-col">{{ item.createTime }}</div>
        <div class="table-col">{{ item.taskName }}</div>
        <div class="table-col">{{ item.rewardAmount }}</div>
        <div class="table-col">
          <div class="progress-detail">
            {{ item.completedAmount }} / {{ item.targetTurnover }}
          </div>
        </div>
      </div>
    </div>

    <div class="no-data" v-if="is_no_data">
      <svg
        t="1736940845642"
        class="icon"
        viewBox="0 0 1127 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5364"
        width="64"
        height="64"
      >
        <path
          d="M944.3 565.594L821.966 367.53c-2.33-4.66-6.408-7.574-11.068-7.574h-506.23c-4.66 0-8.737 2.33-11.068 7.574L171.267 565.594c-1.166 1.165-1.166 2.33-1.166 4.66v242.338c0 7.573 4.66 12.233 12.234 12.233h751.48c7.572 0 12.233-4.66 12.233-12.233V570.254c-0.583-1.747-0.583-2.912-1.748-4.66zM312.242 385.006h491.665l110.1 173.597H643.709c-7.573 0-12.233 4.66-12.233 12.234 0 40.195-33.205 73.4-73.4 73.4-40.196 0-73.4-33.205-73.4-73.4 0-7.573-4.661-12.234-12.234-12.234H201.559l110.683-173.597zM920.998 800.94h-726.43V583.07h266.805c6.408 47.768 47.768 85.633 96.702 85.633s90.876-37.865 96.702-85.634H921.58v217.87zM113.595 685.598v-13.399c0-3.495-2.913-6.408-6.408-6.408-3.495 0-6.408 2.913-6.408 6.408v13.399H87.38c-3.495 0-6.408 2.912-6.408 6.408 0 3.495 2.913 6.408 6.408 6.408H100.78v13.398c0 3.495 2.913 6.408 6.408 6.408 3.495 0 6.408-2.913 6.408-6.408v-13.398h13.398c3.496 0 6.408-2.913 6.408-6.408 0-3.496-2.912-6.408-6.408-6.408H113.595zM992.069 420.54h20.389c5.242 0 9.903 4.66 9.903 9.903 0 5.826-4.078 9.903-9.903 9.903h-20.39v20.39c0 5.242-4.66 9.903-9.903 9.903s-9.903-4.078-9.903-9.904v-20.389h-20.389c-5.243 0-9.903-4.66-9.903-9.903 0-5.825 4.078-9.903 9.903-9.903h20.39v-20.39c0-5.242 4.66-9.902 9.902-9.902 5.826 0 9.904 4.077 9.904 9.903v20.389z m71.652 86.799h12.816c3.495 0 6.408 2.912 6.408 6.408 0 3.495-2.913 6.408-6.408 6.408h-12.816v12.816c0 3.495-2.912 6.407-6.408 6.407-3.495 0-6.408-2.912-6.408-5.825v-12.816H1038.09c-3.495 0-6.408-2.913-6.408-6.408 0-3.495 2.913-6.408 6.408-6.408h12.816v-13.398c0-3.496 2.913-6.408 6.408-6.408 3.496 0 6.408 2.912 6.408 6.408v12.816zM130.49 404.23v-20.39c0-5.825-4.66-9.903-9.904-9.903-5.825 0-9.903 4.66-9.903 9.904v19.806H90.876c-5.826 0-9.904 4.66-9.904 9.903 0 5.826 4.66 9.904 9.904 9.904h19.806v19.806c0 5.825 4.66 9.903 9.903 9.903 5.826 0 9.904-4.66 9.904-9.903v-19.806h19.806c5.825 0 9.903-4.66 9.903-9.904 0-5.825-4.66-9.903-9.903-9.903 0 0.583-19.806 0.583-19.806 0.583z m-90.294 198.647c-22.137 0-40.196-18.06-40.196-40.196s18.059-40.195 40.196-40.195c22.136 0 40.195 18.059 40.195 40.195 0 22.72-18.059 40.196-40.195 40.196z m0-19.807c11.068 0 19.806-8.738 19.806-19.806s-8.738-19.807-19.806-19.807-19.807 8.738-19.807 19.807 8.738 19.806 19.807 19.806zM1109.16 471.805c-9.904 0-18.642-8.156-18.642-18.642s8.156-18.641 18.642-18.641c9.903 0 18.64 8.155 18.64 18.641 0 10.486-8.155 18.642-18.64 18.642z m0-8.739c5.242 0 9.32-4.077 9.32-9.32s-4.078-9.32-9.32-9.32c-5.243 0-9.321 4.077-9.321 9.32s4.66 9.32 9.32 9.32zM298.843 170.048c8.156-8.156 21.554-8.156 29.71 0l74.565 73.983c8.156 8.155 8.156 21.554 0 29.71-8.155 8.155-21.554 8.155-29.71 0l-74.565-73.984c-8.155-8.155-8.155-21.554 0-29.71z m259.232-37.283c11.65 0 20.971 9.32 20.971 20.972v104.857c0 11.651-9.32 20.972-20.971 20.972s-20.972-9.321-20.972-20.972V153.737c-0.582-11.069 9.32-20.972 20.972-20.972-0.583 0 0 0 0 0z m259.813 32.04c8.156 8.155 8.156 21.554 0 29.71l-73.982 73.982c-8.156 8.156-21.555 8.156-29.71 0-8.156-8.155-8.156-21.554 0-29.71l73.983-73.982c8.155-8.156 21.554-8.156 29.71 0z"
          p-id="5365"
          fill="#999999"
        ></path>
      </svg>
    </div>

    <nut-calendar
      v-model:visible="show"
      :default-value="date"
      type="range"
      start-date="2025-01-01"
      end-date="2025-01-15"
      @close="show = false"
      @choose="choose"
      @select="select"
    >
    </nut-calendar>

    <nut-popup v-model:visible="showType" position="bottom">
      <nut-picker
        v-model="game_type"
        :columns="game_type_list"
        title=""
        @confirm="confirm"
        @cancel="showType = false"
      />
    </nut-popup>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { orderPage, withdrawalPage } from "@/apis/user";
import { BalanceChangeList, GameRecordList, BonusRecord } from "@/apis/report";
import { UserTaskInfo } from "@/apis/deposit";
import { getGameType } from "@/apis/game";

const { commit } = useStore();
const route = useRoute();
const showType = ref(false);
const confirm = ({ selectedValue, selectedOptions }) => {
  showType.value = false;
  game_type.value = [selectedOptions[0].value];
  game_type_name.value = selectedOptions[0].text;
  getData();
};
const game_type_list = ref([]);
const is_no_data = ref(true);
const show = ref(false);
const date = ref(["0000-00-00", "0000-00-00"]);
const choose = (param) => {
  date.value = [param[0][3], param[1][3]];
};
const select = (param) => {
  console.log(param);
};
const is_loading = ref(false);
const type = ref("Deposit");
const changeType = (data) => {
  type.value = data;
  getData();
};
const game_type = ref([1]);
const game_type_name = ref("Slots");
const deposit_data = ref([]);
const account_data = ref([]);
const withdraw_data = ref([]);
const bet_data = ref([]);
const bonus_data = ref([]);
const promotion_data = ref([]);
const getData = () => {
  is_loading.value = true;
  is_no_data.value = true;
  const param = {
    currentPage: 1,
    pageSize: 50,
    "createTime[0]": date.value[0] != "0000-00-00" ? `${date.value[0]} 00:00:00` : "",
    "createTime[1]": date.value[1] != "0000-00-00" ? `${date.value[1]} 00:00:00` : "",
  };
  if (type.value == "Deposit") {
    deposit_data.value = [];
    orderPage(param).then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        deposit_data.value = res.data.records;
        if (deposit_data.value.length > 0) is_no_data.value = false;
      }
    });
  } else if (type.value == "Account") {
    account_data.value = [];
    BalanceChangeList(param).then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        account_data.value = res.data.records;
        if (account_data.value.length > 0) is_no_data.value = false;
      }
    });
  } else if (type.value == "Withdraw") {
    withdraw_data.value = [];
    withdrawalPage(param).then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        withdraw_data.value = res.data.records;
        if (withdraw_data.value.length > 0) is_no_data.value = false;
      }
    });
  } else if (type.value == "Bets") {
    bet_data.value = [];
    param.gameType = game_type.value[0];
    GameRecordList(param).then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        res.data.records.map((item) => {
          game_type_list.value.map((items) => {
            if (item.gameType == items.value) item.gameTypeLabel = items.label;
          });
        });
        bet_data.value = res.data.records;
        if (bet_data.value.length > 0) is_no_data.value = false;
      }
    });
  } else if (type.value == "Bonus") {
    bonus_data.value = [];
    BonusRecord(param).then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        bonus_data.value = res.data.records;
        if (bonus_data.value.length > 0) is_no_data.value = false;
      }
    });
  } else if (type.value == "Promotion") {
    promotion_data.value = [];
    UserTaskInfo(param).then((res) => {
      is_loading.value = false;
      if (res.code == 200) {
        promotion_data.value = res.data.records;
        if (promotion_data.value.length > 0) is_no_data.value = false;
      }
    });
  }
};
const copyId = async (data) => {
  try {
    commit("set_show_tip", { type: 1, msg: "copied" });
    await navigator.clipboard.writeText(data);
    console.log("文本已复制到剪贴板");
  } catch (err) {
    console.error("复制到剪贴板失败", err);
  }
};
onMounted(() => {
  if (route.query.type) {
    type.value = route.query.type;
  }
  getGameType().then((res) => {
    if (res.code == 200) {
      res.data.map((item) => {
        item.text = item.label;
      });
      game_type_list.value = res.data;
    }
  });
  getData();
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.report {
  width: 100%;
  box-sizing: border-box;
  padding: 0.277rem;
  .no-data {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.555rem 0;
  }
  .table-box {
    width: 100%;
    margin-bottom: 0.416rem;
    .table-row {
      width: 100%;
      height: 1.111rem;
      display: flex;
      align-items: center;
      border-bottom: 0.027rem solid #666666;
      .table-col-copy {
        width: 0.555rem;
        text-align: left;
      }
      .table-col {
        width: calc((100% - 0.555rem) / 5);
        box-sizing: border-box;
        padding: 0 0.138rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: #e4e4e4;
        font-weight: bold;
        font-size: 0.277rem;
        .progress-detail {
          width: 100%;
          box-sizing: border-box;
          padding: 0.027rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.222rem;
          background: $bg-color2;
          color: #e4e4e4;
          font-weight: bold;
          font-size: 0.277rem;
        }
      }
    }
    .table-header {
      width: 100%;
      height: 0.972rem;
      display: flex;
      align-items: center;
      .table-col-copy {
        width: 0.555rem;
        text-align: left;
      }
      .table-col {
        width: calc((100% - 0.555rem) / 5);
        text-align: center;
        color: #999999;
        font-weight: bold;
        font-size: 0.277rem;
      }
    }
  }
  .tab-box {
    width: 100%;
    height: 1.111rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.416rem 0;
    border-bottom: 0.027rem solid #cccccc;

    .item {
      width: calc(100% / 6);
      height: 1.111rem;
      font-weight: bold;
      font-size: 0.277rem;
      color: #727272;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .active {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.055rem;
        background: #fdc24a;
        box-shadow: 0px -0.083rem 0.305rem 0px #ffd200;
        border-radius: 0.027rem;
      }
    }
  }
  .date-box {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top:0.138rem;
    .game-type-option {
      margin-left: 0.138rem;
      border-radius: 0.194rem;
      border: 0.027rem solid #323136;
      width: 2rem;
      height: 0.638rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.027rem solid #323136;
      background: #0d0d0d;
      .game-name {
        width: calc((100% - 0.415rem));
        font-weight: 400;
        font-size: 0.277rem;
        color: #666666;
        box-sizing: border-box;
        padding-right: 0.138rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      i {
        font-size: 0.277rem;
        color: #666666;
      }
    }
    .date-container {
      width: 4.805rem;
      height: 0.638rem;
      border-radius: 0.194rem;
      border: 0.027rem solid #323136;
      background: #0d0d0d;
      box-sizing: border-box;
      padding: 0 0.277rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.416rem;
      span {
        font-weight: 400;
        font-size: 0.277rem;
        color: #666666;
      }
    }
    .search-btn {
      width: 1.666rem;
      height: 0.638rem;
      background: $primary-color2;
      border-radius: 0.194rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 0.25rem;
      color: $color-white;
    }
  }
}
</style>
