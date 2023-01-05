// ==UserScript==
// @name         PainterServant
// @namespace    http://tampermonkey.net/
// @version      2023.0
// @description  Serve tokens for you.
// @author       Sukwants
// @match        https://segonoj.site/paintboard
// @match        https://segonoj.site/paintboard/*
// @icon         
// @grant        none
// @license      MIT
// ==/UserScript==


var TokenList = [
  ['193684', 'f7x0tT5Kh4SNBCem9YbWwS6GGdGnPMn1BxrS5Qtk5nT1FTnTJZ', 'Sukwants'],
  ['227723', 'b6itx1B0aCwdn1sDSDZsXeckAh1AbGiBFw4MXKXCcDtM54TFm1', 'syysongyuyang'],
  ['664441', 'iZAN46P53ttH1YtszzJzDhRdE09ajMn99bir0M7EJ7k7eZKjtj', 'JarRoute'],
  ['657410', 'ka5rpsfwZij9DC47bFsPCjcP4nd7zST213b07B4yz1HiAattfN', 'zz2745518585a'],
  ['302383', 'zXNpePWeXy0A4dBhY9brfZhY7etSKrerpwHKCSs8RycEXGmJmn', 'Feyn'],
  ['681598', 'zcc3SH7aeAT9cMiJA2FaD4KycxkeN9S0aZspBy3EwETxHyCi7T', 'story_about_past'],
  ['666632', 'TrKD3szETPmcwWA4CZrD6j11C9wiaxtN3nNA1xDt110WWADykf', 'zz2745518585b'],
  ['304338', 'HRt49EkdjQrysPbZdEbAfw3YSSxaDBtsBAn0jHhRTtn9JzHme3', 'Dscc'],
  ['719275', 'The0BB9NxjQCjaRmWzF0Gzr6n1tdAz8sFxm7A3AN1zmFbkRFzZ', 'Ancore'],
  ['307826', 'b96CRfaSGrzF3BmaQtJh186EG0x6eJWW5QwFEBK7zeezwcXSMP', 'Lamorak'],
  ['344416', 'fpbmdt8kWFHcphjFrR5ACzheF4tPCX7rfMxixHf7Jk7A523rt0', 'zsq147258369'],
  ['261046', 'Mx1wTXm72GkHsQYseB8j7ttdw6Tr8bSBJRbHGt9MZ6zwE1Whwt', 'cht_master'],
  ['388585', 'RF5DekxCYSTxQxK2ejAZBe0Me8HFf5nXKbMTJi7fQaJiPRnc7P', 'onlycreTakina'],
  ['253532', 'Y5ScPx3mWh0Jhfx51a4wiW6Q1B9TG4i9ctQsAeW3TTp8JaXer2', '_yolanda_'],
  ['127284', 'aSX556PDZ8iAm9JjszC3YKD8deKQ7wahScD6bkn59eD2YsFPTe', '我谔谔'],
  ['109660', 'Fk7jc5M4xK3RsNbZi0x2XpM8drcAxdcMeT4XiFcsEAxFEYydDA', '凌寒'],
  ['743214', '9BE5HFWr7TWfKZ494CmsJMthPGzxZ7EcFj4ciTkXY5ZM055QPy', 'zhang_yt'],
  ['666527', 'ewYNYrBm2RiwyGB77sP8j8n5Ci7KBi56MCaNFmJNw7Naetaf9e', '_Allure_'],
  ['758786', 'kHNy7YpSm0i6w1EYsjs069zFFFNP4WHz0ppxmybKt4srkkydZX', 'love_yyc'],
  ['823225', '0k6RSQSENymHQMcaQP8xpYsDNNiri2zxw9dR5Mtz9mA9Y24QMt', '_zzt_'],
  ['122037', 'QBmGHb8a6bwk4zPCcXmS6914n2RY1r5BsR4jdCAcTS8k6nasxH', 'AC_OIer'],
  // ['369904', 'PP3WjmtDyy07cWwwM4siRmQ3DjZkd9PihFMs4bmW5snTctFGeD', 'zplqwq'],
  ['425948', 'nhEGK93kKBBG7kX3iX08ETBfebC1EiSW8T1hFfXbWtS3txGx4n', '_rui_er'],
  ['442626', '27fN9ZhWk8j3JidBPczkSdc03NAxyNp7a0nwjwRCBJN3mykF5s', 'haoren258'],
  ['175458', 'bKeiPNtZR1bBr25r30rrGB3cW52frrcR90rQEF2ZjB56stPYtk', '_zplqwq_'],
  ['338341', 'zye2BiXGsf7WTahWPCD7eE2b6sh25dxihxiSssSe2aDC1DiTbJ', 'QZJR'],
  ['188716', '2KdE35MemjyRYYwBRaEwSHCc8mer2XytJ8nhs6XdNA5dxt1jPs', 'pokefunc'],
  ['753148', '3n7AHT2aPFrpRB9STxXx9cnwF5ieBNbtHdZ9esezcskW740n3p', 'fishmenomelon'],
  ['381566', 'E60m5HFNeJ3JySyCKFxSRMn2R0sBQCyHTFWwYhhdw3rXRzfFjQ', '_lzh_'],
  ['537687', 'eYhr0w21XXnmRxCPKf1APJJbCrmS1fNzmdN07C6Qb9eD38rGf8', '__include__'],
  ['689887', 'DKkMa9GQwTT8DCmx4mKmfRQftTHiXDJ8sdjwBCj36AS6asbd52', 'humiaoke'],
  ['363605', '92T7YhkRX2Yze96pwM6ZH5HEWeXXx5wfady7YYPcD5FASYJtck', 'Accelerator07'],
  ['569484', '0CWWSa1tSZp5ss5pc5DcEkp1tAKkpAsSSAHYZwJ5FnnMWhZbpG', 'eggome'],
  ['342873', 'pii693Yc3dQttTkKPpzmtb88fTpiYamd7YyeKp7HKm469payHt', '有趣的问题'],
  ['486187', '4WCBdiWpzN46rQ8BGcYXyd2tw6b9SZJ2GKnFe0mY55bJaf7MpM', 'Vvauted'],
  [ '86576', 'jnFYFrdcXNAN8r3PNGS80MBnCt3wPH2PdP7e16TXZiHh0NEKHs', 'zlxFTH'],
  ['225370', 'DJTJHh2C0wd8AeYY1Ds81PYYC3xbhnphymsbpSGtc4pbQ9x4dc', 'xby070301'],
  ['389985', 'AwmmT8fnsTNH59kjk2iheCS5JnExipwkNtfZNRCXNT0EWyyKHx', '最後の祈りを'],
  ['251324', 'D5mJ0WAz1KG3b9dxMnpfMQP71XKte6ZC951sXymaG48b1XcSeD', 'stntn'],
  ['597395', 'nRSP4y8BaJsHyJwZ9WzJ12DjdkH1jsdC2xrhdyHinHSC9emXJK', 'Pholsautte'],
  ['252093', 'W5i3Z51HRtCfP5PJEWp6HteHiRP8jkej21X3wwDNfhPyfwJNib', 'trh0630'],
  ['102541', '2aRc0ZY9yR95DeDfnxe2m38zTxFB2p8BcX1kPzW4wHFkSQjZyt', 'KING_OF_TURTLE'],
  [ '80679', 'ZkkYHE5xnFFwJT7YSdN1RJwcWxt6Tw6aCxPX0daArZmTryy5D0', 'Register'],
  ['787354', 'BDdMsCZ9DJpCsPkB6Br2ZTXn0HQjtwPrC5k5z7hnhp9ny33pXJ', 'Decatory'],
  ['312795', 'fcXDhPz6anbKaDND7kfWeKbEh8rNpkZXtA6pAZCdJZeBKJXHJ8', 'ZZP_AK_IOI'],
  ['715586', 'NXMtbx6xdCzpMTjtE1CGp0F468zQJ2tX8rXrEF7PrDwN0AwSnC', 'black_cake'],
  ['673614', 'dGPPbGXsmWbj9mMDA9CeNrCkAPJtfRRxENC3BcZsSpK01rPQJs', 'phigros_'],
  ['623675', '3Y5RWJzjWExp0hnCTFKnwsmciHHx8PxSFNXeGSyzFjd2R6sn4r', 'zzp_nb'],
  ['670355', 'QrDtTYndpTM9e89KJ0eEnbwNpXb1M2Ctt0WWND0yBNGP5zz70p', 'Caiyingqi_01'],
  ['538609', 'ydG4xYRjKdaXCtt3KB4M18xWiyD2DGd3DRM2eGb4Y6ZXwe632c', 'Neutralized'],
  [ '50606', '3dnYGEafkMnEMGzRsiTRb3EzQ6J6mkzrcFTyeQ6BM1j2BnXXKa', '言琢დ'],
  ['470469', 'bT3PFXTB0P3zWdm40DkpDeDjSj2dz3m9c0s8Dd4aFKW8zWMWyJ', 'little_princess'],
  ['553419', 'rMhehy3hw8w0NKkwtasY6RdcW6dfAC77WRssc7mTQ80wddrfGD', 'Light_Raphael'],
  ['308133', 'pD3ezS17fBDkKpK3MCysyAffwejrECZ9nKNRtNX54t48ecajjX', '_Petarl_'],
  ['229119', 'dMxe1rm1eEmnRjZhScHf16Y4Rnw1iXrBRadiinQPDBStjFapcb', 'dengtingyu'],
  ['341110', 'Ci9yJBfNKbFZ1JCWddKdNXjayAD8hbTZDW0sQWpADCCJmzBQ7T', 'starry_lasky'],
  [ '90027', 'zz65PBKXGyHrzhk0RWE3pa3YQ1Edr0bE8iW4r4d3a5jyzzZaPG', 'GG_jok_er'],
];

var now = 0;

function updateToken() {
  document.getElementById('uid').value = TokenList[now % TokenList.length][0];
  document.getElementById('token').value = TokenList[now % TokenList.length][1];
  console.log(TokenList[now % TokenList.length][2]);
  lasttime = 0;
  ++now;
}
updateToken();

$('#mycanvas').bind('click', function(event) {
  setTimeout(updateToken, 100);
});