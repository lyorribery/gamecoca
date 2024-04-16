<template>
  <div class="description-header">
    <div @click="goBack" class="arrow">
      <RectLeft color="#fff" width="13px" height="13px" /><span>Back</span>
    </div>
    <span>{{
      page_type == "1"
        ? "Privacy Policy"
        : page_type == "2"
        ? "About Us"
        : page_type == "3"
        ? "Terms & Conditions"
        : ""
    }}</span>
  </div>
  <div class="description" v-if="page_type == '1'">
    <div class="title">PRIVACY POLICY</div>
    <p>
      We do not collect and save from your social account in any form or sell any
      information to advertisers or other operators. Personal information When you share
      information through social accounts may be asked to enter the account and password,
      but that information is management by the system. App does not save account and
      password in any form or collect and save any personal information in any form on
      your social account. Privacy Policy Terms Use this App mean you agree to the terms
      and conditions of this Privacy Policy. If you do not agree to this policy, please do
      not use this App. We reserve the right, in our decision to change, modify, add or
      remove portions of this policy at any time. Please check this page periodically for
      any changes. Publish any changes to these terms if you continue to use our App
      future will mean that you have accepted these adjustments. E-Mail :
      gamecoca@outlook.com
    </p>
  </div>
  <div class="description" v-if="page_type == '2'">
    <img src="@/assets/images/logo.svg" width="130" style="margin: 20px 0" />
    <p class="des">
      GameCoca is licensed by the Gaming Commission of Ghana under the Gaming Act, 2006
      (Act, 721).
    </p>
  </div>
  <div class="description" v-if="page_type == '3'">
    <div class="title">TERMS & CONDITIONS</div>
    <p>
      Online terms and conditions are in addition to any general onsite service terms and
      conditions.
    </p>
    <p>
      All customers which may include (but not limited to) users and vendors agree that
      the terms listed below shall govern all service engagement with GameCoca APP, Our
      services will be conducted within the framework of the rules listed below plus any
      other provision that may be added from time to time.
    </p>
    <p>
      This User Agreement (hereinafter referred to as 'Terms and Conditions') is a
      contract playween GameCoca and the User and shall apply when you play any GameCoca
      Game via any media or electronic platform, including inter alia, mobile devices,
      tablets, laptops and computers. Each game may also have its own game-specific rules
      and procedures that apply and users are reminded that they will be deemed to have
      agreed to and be bound by such rules and procedures.
    </p>

    <p>
      You are required to read and accept all the terms and conditions contained in this
      Agreement, when interacting with the services offered by GameCoca. You are bound by
      these terms and conditions throughout the existence of the relationship.
    </p>

    <p>
      Due to the change of user requirements and market conditions, GameCoca reserves the
      right to change these terms and conditions at any time and without prior notice or
      consultation. However, best efforts will be made to inform users of the major
      modifications to these terms and conditions. Notwithstanding the same, it is the
      responsibility of the user to check for amendments and it shall be assumed that by
      playing, all users have read, understood, and agreed to the terms and conditions at
      the time of entry.
    </p>

    <p>
      These terms and conditions may be amended at any time by posting a revised version
      on the relevant GameCoca Games pages without issuing separate notices to its users.
      The revised version will be effective at the time of posting. If the user does not
      agree with the amended terms and conditions, they are at liberty to stop using the
      services offered by GameCoca games. Continued use of the services by the user, shall
      be deemed as acceptance of the amended terms and conditions.
    </p>

    <p>
      Your unique identifier is the mobile number registered on the GameCoca APP or
      website. E.g. 08090000000 The phone number (SIM Card) must be valid and registered
      to the user.
    </p>

    <p>
      All registration information provided by the user must be current, complete and
      accurate. We may decline from awarding a prize if a user's information is found to
      be inaccurate.
    </p>

    <p>
      Eligibility. the Services are offered and available to users who are 18 years of age
      and above. During their engagement period and for a period of 24 months thereafter,
      no officer, director, employee, consultant or agent of Company or any of its
      affiliated companies is permitted to use the Services directly or indirectly. By
      accessing and/or using the Services, you represent and warrant that you are of legal
      age to form a binding contract with Company and meet all of the eligibility
      requirements. Our service is available to users and residents in Ghana only. If you
      do not meet all of these requirements, you must not access or use the Services. We
      may require proof of your identity, age or eligibility at any time to use or
      continue to use a Service. Failure to provide evidence of identity or eligibility
      satisfactory, the Company, may at its sole discretion, suspension or termination
      user’s account and forfeiture of all funds in the account. Company reserves the
      right to monitor all activities on the Services, including without limitation, any
      effort to establish accounts in violation of these Terms of Use and to deny access
      to anyone, including, without limitation, those users who use proxy servers and/or
      IP addresses residing in certain geographical areas. You must notify us immediately
      of any change in your eligibility to use the Services (including any changes to or
      revocation of any licenses from state authorities). Eligibility decisions by the
      Company are final, binding and not subject to appeal.
    </p>
    <p>
      Users agree not to use any device, software or routine to interfere or attempt to
      interfere with the proper working of or any transaction being conducted on and
      during the auction sale.
    </p>
    <p>
      Access and use of any GameCoca site (on web or application); collectively the “Site”
      is subject to any and all specific terms and conditions set forth on any individual
      page within the Site and the terms and conditions of this User Agreement
      (collectively “Site User Agreement”) and all applicable laws and regulations in
      Ghana, including but not limited to copyright and trademark laws. BY ACCESSING THIS
      SITE, YOU AGREE TO ACCEPT, WITHOUT LIMITATION OR QUALIFICATION, ALL OF THE TERMS AND
      CONDITIONS OF THE SITE USER AGREEMENT and to comply with all applicable laws,
      statutes, ordinances and regulations regarding your use of this Site. Legal action
      will be taken against anyone violating the terms and conditions of the Site User
      Agreement or any other applicable law or regulation. GameCoca reserves the right to
      periodically change the terms and conditions of the User Site Agreement and it is
      the users’ responsibility to periodically review any and all changes made to these
      terms and conditions prior to each use of this Site. By using this Site, you agree
      in advance to accept any such changes.
    </p>
    <p>
      In order to qualify to play for an item, you must be a registered member of GameCoca
      or play under an accredited merchant. Your membership allows us to more accurately
      identify users and avoid the possibility of false entries. Users expressly authorize
      GameCoca to accept each game entered as an entry out of free will and such entry
      validated by your payment is not refundable.
    </p>
    <p>
      LUCKY PICK: A selection of numbers which are randomly selected by WIN-WIN’s computer
      system on the player’s behalf for the purposes of making a play.
    </p>
    <p>
      PLAYER: A user of WIN-WIN’s game services. It also means the holder of an account
      who is eligible to buy entries using that account, and whose account has not been
      terminated, cancelled, suspended or closed.
    </p>
    <p>
      PRIVACY POLICY: WIN-WIN’s policy relating to the use and storage of Your personal
      information (including but not limited to Games-Related Information), as amended
      from time to time.
    </p>
    <p>PRIZE: An award issued to the player for winning a play.</p>
    <p>
      PRIZE STRUCTURE: The value of prizes and odds of winning in an individual game as
      determined by GameCoca and set out in the game procedures for the relevant Game.
    </p>
    <p>
      PROCEDURES: A written document issued by GameCoca for a particular game played
      online in addition to these terms and conditions, that includes the game name, how
      to play, how a Prize is won, the dates and/or frequency of draws, the game prize
      structure, how prize winners are determined, and any other relevant information for
      the game played online.
    </p>
    <p>
      SELECTION: A set of numbers chosen by the player (whether chosen by the player or
      via Lucky Dip) for the purpose of playing.
    </p>
    <p>TICKET: The textual or graphical representation of Your play.</p>
    <p>
      TICKET NUMBER: The alphanumeric reference included as part of a ticket which
      identifies and is unique to a particular Game and which is recorded in WIN-WIN’s
      computer system and, for entries bought using your account, in your transaction
      history.
    </p>
    <p>USER: is used synonymously with “player”</p>
    <p>
      WINNING : A play which entitles the player to a prize and which meets all the
      validation requirements.
    </p>
    <p>
      You can enter a valid game by paying for your codes through your funded Wallet. You
      can top up your Wallet through Bank Transfer or Direct Debit Card Transactions.
    </p>
    <p>
      This Site User Agreement constitutes a binding agreement between the users, GameCoca
      App providers (Slot Gnana Limited) until terminated which we may do at any time,
      without notice, in our sole discretion.
    </p>
    <p>
      GameCoca cannot, and will not, be held responsible for any interruption in service,
      errors, and/or omissions, caused by any means; and does not guarantee continuous,
      uninterrupted or error free service or use of the Site. Users acknowledge that this
      game is conducted electronically and relies on hardware and software that may
      malfunction without warning. GameCoca in its sole discretion may void any win
      identified as rigged. GameCoca will suspend users who attempted/- manipulated the
      system to rig the games.
    </p>
    <p>
      GameCoca gathers information about Users and Owner/Sellers for the purposes of
      conducting online consumers sales promotion research & gaming. GameCoca does not
      sell or rent this information.
    </p>
    <p>You can only play and receive prizes in line with these Rules.</p>
    <p>
      There is no general right for a person to play. GameCoca can refuse to allow plays
      to anyone, and/or limit the number of plays you can place, without providing an
      explanation or reason.
    </p>
    <p>
      You agree that you will not use any robot, spider, other automatic devices, or
      manual process to monitor or copy the Site or the content contained herein without
      our prior, express written permission. You agree that you will not use any device,
      software or routine to interfere or attempt to interfere with the proper working of
      the Site or any activity being conducted on the Site. You agree that you will not
      take any action that imposes an unreasonable or disproportionately large load on our
      infrastructure. You agree that you will not copy, reproduce, alter, modify, create
      derivative works, or publicly display any content from the Site without prior,
      express written permission of GameCoca Ghana owners (Slot Ghana Ltd. THE SITE IS
      PROVIDED ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF
      MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OTHER THAN THOSE WARRANTIES
      WHICH ARE IMPOSED BY AND INCAPABLE OF EXCLUSION, RESTRICTION OR MODIFICATION UNDER
      THE LAWS OF GHANA APPLICABLE TO THIS AGREEMENT.
    </p>
    <p>
      No obligation, liability, responsibility, accountability or burden is undertaken,
      assumed or otherwise imposed by maintaining the Site.
    </p>
    <p>
      Any controversy or claim arising out of or relating to this Site User Agreement
      shall be referred to the customer support unit of the Company. If a user is not
      satisfied, he may report to the regulatory authority National Lottery Regulatory
      Commission for settlement. Arbitration in accordance with applicable commercial
      arbitration rules in Ghana shall be the last resort and binding. Any such
      controversy or claim shall be resolved on an individual basis and shall not be
      consolidated with any claim or controversy of any other party.
    </p>
    <p>
      GameCoca may seek any interim or preliminary relief from a court of competent
      jurisdiction in Ghana necessary to protect the rights or property of GameCoca
      pending the completion of arbitration. You and GameCoca are independent contractors,
      and no agency, partnership, joint venture, employee or franchiser-franchisee
      relationship is intended or created by this Agreement.
    </p>
    <p>
      The Site User Agreement and any disputes arising out of or related to the Site shall
      be governed by and construed and enforced in accordance with, the laws of the
      Federal Republic of Ghana applicable to contracts entered and to be performed
      entirely within the Ghana state. If any provision of this Site User Agreement is
      held to be invalid or unenforceable, such provision shall be struck and the
      remaining provisions shall be enforced.
    </p>
    <p>
      WIN-WIN’s failure to act with respect to a breach by you or others does not waive
      the right to act with respect to subsequent or similar breaches. This Site User
      Agreement sets forth the entire understanding and agreement between us with respect
      to the subject matter hereof. Your use of this gaming site marks your acceptance in
      full of these Terms and Conditions.
    </p>
    <p>
      Breaches of these terms and conditions : Without prejudice to our other rights under
      these terms and conditions, if you breach these terms and conditions in any way, or
      if we reasonably suspect that you have breached these terms and conditions in any
      way, we may: (a) Send you one or more formal warnings; (b) Temporarily suspend your
      access to our website; (c) Permanently prohibit you from accessing our website; (d)
      Commence legal action against you, whether for breach of contract or otherwise;
      and/or (e) Suspend or delete your account on our Platform.
    </p>
    <p>
      “Acceptance of the Prize gives the Company unrestricted and perpetual royalty free
      license on using the winner’s name, mobile number, picture, video, image or relevant
      quotes for the purpose of future promotions unless otherwise indicated by the
      winner.
    </p>
    <p>GLI certification standards.</p>
    <p>
      In the event that a user adds less than the minimum play, GameCoca shall hold the
      funds on account, notify the user of the same via SMS, and advise that upon adding
      the balance of a minimum play, the user shall be entered into the next relevant
      draw.
    </p>
    <p>
      In the absence of a confirmed opt-out, if a user attempts to play over the default
      maximum play, at WIN-WIN’s discretion, the play may be rejected or the User may be
      automatically refunded the difference less the cost of the mobile transaction.
    </p>
    <p>
      The Play will be displayed on the relevant game playing panel at the time the Game
      play is placed.
    </p>
    <p>There are many ways to win, as outlined in the Game Description above.</p>
    <p>
      Changes to the Terms of Use and Service. We may revise and update these Terms of
      Use, from time to time, in our sole discretion. All changes are effective
      immediately when we post them and apply to all access to and use of the Services
      thereafter. Your continued use of any Service following the posting of revised Terms
      of Use means that you accept and agree to the changes. You are expected to check
      this page from time to time so you are aware of any changes, as they are binding on
      you. We may update the content on the Services from time to time, but content is not
      necessarily complete or up to date. Any of the material on the Services, including,
      without limitation, questions and answers, may be out of date at any given time, and
      we are under no obligation to update such material. We reserve the right to withdraw
      or amend the Services, and any material we provide on the Services, in our sole
      discretion without notice. We will not be liable if for any reason all or any part
      of the Services is unavailable at any time or for any period. From time to time, we
      may restrict access to some or all parts of the Services to users, including
      registered users.
    </p>
    <p>
      In the set terms and conditions, ‘we’, ‘us’, ‘our’ and ‘Company’ all mean Slot Ghana
      Limited.
    </p>
    <p>
      Obligation of Prize winner. The Winner of any of the Prizes has the following
      obligations once notified of the prize. a) Identify himself and provide evidence
      that he owns the mobile number and code. b) Agree on the place of delivery/pick up
      of the Prize which is limited to locations provided by the Company nationwide. c)
      Collect the Prize within maximum 7 days from the day he is notified. Failure to
      claim the prize within 15 days from the draw will lead to forfeiture by the User and
      the prize re-entered for a subsequent draw. The Company is not responsible for any
      errors committed by the user during the registration or while using the service
      which may as a result prevent the grant of the prize.
    </p>
    <p>
      All prizes come inclusive of limited warranty. If the prize does not meet the
      expectations of the winner, then the winner should invoke the product warranty claim
      directly with the manufacturer/provider of the prize.
    </p>
    <p>
      Taxes. Each winner is solely responsible for payment of all federal, state, and/or
      local income, sales, or user taxes due to acceptance of any prize won through the
      promotion. For Prizes requiring ownership registration (e.g. Car, motorcycles), the
      winner is responsible for payment of applicable taxes, title documents, and
      licensing fees.
    </p>
    <p>
      That the company without notice in the event of a catastrophe, war, civil or
      military disturbance, Act of God or any actual or anticipated breach of any
      applicable law or regulation or any other event outside the company’s control. Any
      changes will be notified to users as soon as possible on the website and APP and it
      is up to users to accept change of the terms.
    </p>
    <p>
      GameCoca is an entertainment product and all users are enjoined to play responsibly.
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RectLeft } from "@nutui/icons-vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
const page_type = ref("");
onMounted(() => {
  page_type.value = route.query.type;
});
</script>

<style lang="scss" scoped>
.description {
  width: 100%;
  box-sizing: border-box;
  padding: calc(env(safe-area-inset-top) + 70px) 15px
    calc(env(safe-area-inset-bottom) + 15px) 15px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .des {
    width: 100%;
    text-align: center;
  }
  .title {
    text-align: left;
    width: 100%;
    font-size: 15px;
    margin-bottom: 30px;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    color:#CCC3E2;
  }
}
.description-header {
  z-index: 9;
  background: #19142b;
  position: fixed;
  width: 100%;
  top: env(safe-area-inset-top);
  left: 0;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 16.7px;
    color: #ffffff;
  }
  .arrow {
    position: fixed;
    left: 15px;
    top: calc(env(safe-area-inset-top + 21px));
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 13px;
      color: #ffffff;
      padding-left: 5px;
    }
  }
}
</style>
