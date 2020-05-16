const defaultDataset = {
	"first": {
		options: [
			{content: "ラボメンナンバー004 クリスティーーナ!!", nextId: "second"},
			{content: "弱冠18歳にして『サイエンス』に論文が制裁された天才….. 衆人観衆の中で男をいじめるドS女………. そしてまたの名を蘇りしもの(ザ　ゾンビ)", nextId: "third"},
			{content: "きさま、腹が減っているようだな。そんなに腹が減って位いるならばバナナ1本ぐらいめぐんでやろう", nextId: "fourth"},
			{content: "握手しようと試みる(結果できない)", nextId: "fifth"},
		],
		question: "初めまして 牧瀬紅莉栖です。どうぞよろしく"
	},
	"second": {
		options: [
			{content: "ジュースをあげてみる。", nextId: "sixth"},
			{content: "マイフォークをプレゼントする。", nextId: "Happy"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "ティーナてつけるな!"
	},
	"third":{
		options: [
			{content: "だまれ、助手", nextId: "seventh"},
			{content: "すまない、セレセブ", nextId: "eighth"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "誰がゾンビよだれが!!"
	},
	"fourth": {
		options: [
			{content: "牧瀬氏、牧瀬氏。今のもう一度お願いできる? できれば悔しそうな顔でよろ",nextId: "ninth"},
			{content: "エル・プサイ・コングルゥ", nextId: "thirteenth"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}

		],
		question: "HENTAIのバナナなんて誰が食べるもんですか"
	},
	"fifth": {
		options: [
			{content: "大和魂に火がついた! 続けて握手を試みる。(手が震えてる)", nextId: "fourteenth"},
			{content: "黙れ、助手!",nextId: "seventh"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "握手もできないの? 日本の男の人って常識が足りてないじゃない。"
	},
	"Happy": {
		options: [
			{content: "牧瀬紅莉栖のフィギュアが欲しい", nextId: "https://www.amazon.co.jp/%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%A4%E3%83%B3%E3%82%BA%E3%83%BB%E3%82%B2%E3%83%BC%E3%83%88-%E7%89%A7%E7%80%AC%E7%B4%85%E8%8E%89%E6%A0%96-1-8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB-PVC%E8%A3%BD%E5%A1%97%E8%A3%85%E6%B8%88%E3%81%BF%E5%AE%8C%E6%88%90%E5%93%81/dp/B005O65LYA"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "あ、ありがとう...別にあんたに感謝しているわけではない。これは形式的な礼というか何というか..."
	},
	"sixth": {
		options: [
			{content: "あいかわずの@channelぶり", nextId: "tenth"},
			{content: "ぬるぽ ", nextId: "eleventh"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "どもども"
	},
	"seventh": {
		options: [
			{content: "この助手はツンデレである", nextId: "twelfth"},
			{content: "すまない。セレブセブンティーン", nextId: "eighth"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "だから私は助手でもクリスティーナでもない!"
	},
	"eighth": {
		options: [
			{content: "すまない。クリスティーナよ！", nextId: "second"},
			{content: "悪かったな。蘇りしもの(ザ　ゾンビ)", nextId: "third"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "セレセブ言うな"
	},
	"ninth": {
		options: [
			{content: "この助手はツンデレである", nextId: "twelfth"},
			{content: "HENTAIな想像をしたほいが変態だろ？ このHENTAI天才少女よ!", nextId: "thirteenth" },
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "悔しそうな? はぁ!! このHENTAI!!"
	},
	"tenth": {
		options: [
			{content: "はじめの選択に戻る", nextId: "first"},	
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "うっさい!"
	},
	"eleventh": {
		options: [
			{content: "あいかわずの@channelぶり", nextId: "tenth"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "ガッ"
	},
	"twelfth": {
		options: [
			{content: "牧瀬氏、ツンデレの意味わかるーん？", nextId: "tenth"},
			{content: "あいかわずの@channelぶり", nextId: "tenth"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "だれがツンデレだ!"
	},
	"thirteenth": {
		options: [
			{content: "すまないセレブセブンティーンよ！", nextId: "eighth"},
			{content: "すまない。クリスティーナよ！", nextId: "second"},
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}

		],
		question: "馬鹿じゃないの。はいはい、ワロスワロス"
	},
	"fourteenth": {
		options: [
			{content: "はじめの選択に戻る", nextId: "first"},
			{content: "開発者に問い合わせ", nextId: "contactToDeveloper"}
		],
		question: "ビビリすぎ"
	},
}

export default defaultDataset;


