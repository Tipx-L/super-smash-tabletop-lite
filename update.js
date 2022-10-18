// @ts-check
var data = {
	// 扩展版本
	version: "2.1",
	// 扩展的上一个版本
	oldversion: "2",
	// 更新内容汇总
	changeLog: `
		1. 新增在线更新功能，自动在线检查扩展更新（感谢诗笺提供的在线更新代码）
		2. 修复了诸多bug
	`,
	// 本次更新的所有文件(不包括文件夹)
	updateFiles: [
		"extension.js"
	],
	// 扩展内所有文件(不包括文件夹)
	allFiles: [
		"extension/大乱桌斗/extension.css",
		"extension/大乱桌斗/extension.js",
		"extension/大乱桌斗/super_smash_tabletop.png",
		"extension/大乱桌斗/update.js",
		"extension/大乱桌斗/card/sst_standard.js",
		"extension/大乱桌斗/character/sst_extra.js",
		"extension/大乱桌斗/character/sst_standard.js",
		"extension/大乱桌斗/image/card/group_sst_dark.png",
		"extension/大乱桌斗/image/card/group_sst_light.png",
		"extension/大乱桌斗/image/card/group_sst_reality.png",
		"extension/大乱桌斗/image/card/group_sst_smash.png",
		"extension/大乱桌斗/image/card/group_sst_spirit.png",
		"extension/大乱桌斗/image/card/sst_aegises.png",
		"extension/大乱桌斗/image/card/sst_ink.png",
		"extension/大乱桌斗/image/card/sst_spear_thrust.png",
		"extension/大乱桌斗/image/character/shibing1.png",
		"extension/大乱桌斗/image/character/shibing1sst_dark.png",
		"extension/大乱桌斗/image/character/shibing1sst_light.png",
		"extension/大乱桌斗/image/character/shibing1sst_reality.png",
		"extension/大乱桌斗/image/character/shibing1sst_smash.png",
		"extension/大乱桌斗/image/character/shibing1sst_spirit.png",
		"extension/大乱桌斗/image/character/shibing2.png",
		"extension/大乱桌斗/image/character/shibing2sst_dark.png",
		"extension/大乱桌斗/image/character/shibing2sst_light.png",
		"extension/大乱桌斗/image/character/shibing2sst_reality.png",
		"extension/大乱桌斗/image/character/shibing2sst_smash.png",
		"extension/大乱桌斗/image/character/shibing2sst_spirit.png",
		"extension/大乱桌斗/image/character/sst_9_volt_18_volt.png",
		"extension/大乱桌斗/image/character/sst_alex.png",
		"extension/大乱桌斗/image/character/sst_bandana_waddle_dee.png",
		"extension/大乱桌斗/image/character/sst_bayonetta.png",
		"extension/大乱桌斗/image/character/sst_bowser.png",
		"extension/大乱桌斗/image/character/sst_bowser_jr.png",
		"extension/大乱桌斗/image/character/sst_byleth_female.png",
		"extension/大乱桌斗/image/character/sst_byleth_male.png",
		"extension/大乱桌斗/image/character/sst_captain_falcon.png",
		"extension/大乱桌斗/image/character/sst_chrom.png",
		"extension/大乱桌斗/image/character/sst_claude.png",
		"extension/大乱桌斗/image/character/sst_corrin.png",
		"extension/大乱桌斗/image/character/sst_corrin_female.png",
		"extension/大乱桌斗/image/character/sst_corrin_male.png",
		"extension/大乱桌斗/image/character/sst_cuphead_mugman.png",
		"extension/大乱桌斗/image/character/sst_daisy.png",
		"extension/大乱桌斗/image/character/sst_dark_link.png",
		"extension/大乱桌斗/image/character/sst_dark_samus.png",
		"extension/大乱桌斗/image/character/sst_donkey_kong.png",
		"extension/大乱桌斗/image/character/sst_dr_mario.png",
		"extension/大乱桌斗/image/character/sst_dr_wily.png",
		"extension/大乱桌斗/image/character/sst_duck_hunt.png",
		"extension/大乱桌斗/image/character/sst_enderman.png",
		"extension/大乱桌斗/image/character/sst_falco.png",
		"extension/大乱桌斗/image/character/sst_feiji.png",
		"extension/大乱桌斗/image/character/sst_fox.png",
		"extension/大乱桌斗/image/character/sst_ganondorf.png",
		"extension/大乱桌斗/image/character/sst_geno.png",
		"extension/大乱桌斗/image/character/sst_greninja.png",
		"extension/大乱桌斗/image/character/sst_haine.png",
		"extension/大乱桌斗/image/character/sst_hero.png",
		"extension/大乱桌斗/image/character/sst_ike.png",
		"extension/大乱桌斗/image/character/sst_incineroar.png",
		"extension/大乱桌斗/image/character/sst_inkling.png",
		"extension/大乱桌斗/image/character/sst_inkling_female.png",
		"extension/大乱桌斗/image/character/sst_inkling_male.png",
		"extension/大乱桌斗/image/character/sst_isabelle.png",
		"extension/大乱桌斗/image/character/sst_jigglypuff.png",
		"extension/大乱桌斗/image/character/sst_joker.png",
		"extension/大乱桌斗/image/character/sst_kazuya.png",
		"extension/大乱桌斗/image/character/sst_ken.png",
		"extension/大乱桌斗/image/character/sst_king_dedede.png",
		"extension/大乱桌斗/image/character/sst_king_k_rool.png",
		"extension/大乱桌斗/image/character/sst_kirby.png",
		"extension/大乱桌斗/image/character/sst_koopalings.png",
		"extension/大乱桌斗/image/character/sst_kraid.png",
		"extension/大乱桌斗/image/character/sst_krystal.png",
		"extension/大乱桌斗/image/character/sst_kyo_kusanagi.png",
		"extension/大乱桌斗/image/character/sst_kyuukou.png",
		"extension/大乱桌斗/image/character/sst_link.png",
		"extension/大乱桌斗/image/character/sst_little_mac.png",
		"extension/大乱桌斗/image/character/sst_lucario.png",
		"extension/大乱桌斗/image/character/sst_lucina.png",
		"extension/大乱桌斗/image/character/sst_luigi.png",
		"extension/大乱桌斗/image/character/sst_ma.png",
		"extension/大乱桌斗/image/character/sst_magolor.png",
		"extension/大乱桌斗/image/character/sst_mario.png",
		"extension/大乱桌斗/image/character/sst_marioraz.png",
		"extension/大乱桌斗/image/character/sst_mario_not_mary.png",
		"extension/大乱桌斗/image/character/sst_marth.png",
		"extension/大乱桌斗/image/character/sst_massy.png",
		"extension/大乱桌斗/image/character/sst_master_hand.png",
		"extension/大乱桌斗/image/character/sst_mega_man.png",
		"extension/大乱桌斗/image/character/sst_meta_knight.png",
		"extension/大乱桌斗/image/character/sst_mewtwo.png",
		"extension/大乱桌斗/image/character/sst_mii_fighters.png",
		"extension/大乱桌斗/image/character/sst_min_min.png",
		"extension/大乱桌斗/image/character/sst_miumiu.png",
		"extension/大乱桌斗/image/character/sst_mr_8.png",
		"extension/大乱桌斗/image/character/sst_mr_game_watch.png",
		"extension/大乱桌斗/image/character/sst_ness.png",
		"extension/大乱桌斗/image/character/sst_oc.png",
		"extension/大乱桌斗/image/character/sst_ocarina_of_time_link.png",
		"extension/大乱桌斗/image/character/sst_olimar.png",
		"extension/大乱桌斗/image/character/sst_pac_man.png",
		"extension/大乱桌斗/image/character/sst_paipai.png",
		"extension/大乱桌斗/image/character/sst_palutena.png",
		"extension/大乱桌斗/image/character/sst_pauline.png",
		"extension/大乱桌斗/image/character/sst_peach.png",
		"extension/大乱桌斗/image/character/sst_pichu.png",
		"extension/大乱桌斗/image/character/sst_pikachu.png",
		"extension/大乱桌斗/image/character/sst_piranha_plant.png",
		"extension/大乱桌斗/image/character/sst_pokemon_trainer_leaf.png",
		"extension/大乱桌斗/image/character/sst_pokemon_trainer_red.png",
		"extension/大乱桌斗/image/character/sst_pyra_mythra.png",
		"extension/大乱桌斗/image/character/sst_rentianshu.png",
		"extension/大乱桌斗/image/character/sst_rex.png",
		"extension/大乱桌斗/image/character/sst_richter.png",
		"extension/大乱桌斗/image/character/sst_ridley.png",
		"extension/大乱桌斗/image/character/sst_robin.png",
		"extension/大乱桌斗/image/character/sst_robin_female.png",
		"extension/大乱桌斗/image/character/sst_robin_male.png",
		"extension/大乱桌斗/image/character/sst_rosalina.png",
		"extension/大乱桌斗/image/character/sst_roy.png",
		"extension/大乱桌斗/image/character/sst_ryu.png",
		"extension/大乱桌斗/image/character/sst_r_o_b.png",
		"extension/大乱桌斗/image/character/sst_samus.png",
		"extension/大乱桌斗/image/character/sst_sans.png",
		"extension/大乱桌斗/image/character/sst_sephiroth.png",
		"extension/大乱桌斗/image/character/sst_sheik.png",
		"extension/大乱桌斗/image/character/sst_simon.png",
		"extension/大乱桌斗/image/character/sst_snake.png",
		"extension/大乱桌斗/image/character/sst_sonic.png",
		"extension/大乱桌斗/image/character/sst_sora.png",
		"extension/大乱桌斗/image/character/sst_spring_man.png",
		"extension/大乱桌斗/image/character/sst_srf.png",
		"extension/大乱桌斗/image/character/sst_steve.png",
		"extension/大乱桌斗/image/character/sst_terry.png",
		"extension/大乱桌斗/image/character/sst_toon_link.png",
		"extension/大乱桌斗/image/character/sst_villager.png",
		"extension/大乱桌斗/image/character/sst_waluigi.png",
		"extension/大乱桌斗/image/character/sst_wario.png",
		"extension/大乱桌斗/image/character/sst_wii_fit_trainer.png",
		"extension/大乱桌斗/image/character/sst_windier.png",
		"extension/大乱桌斗/image/character/sst_wolf.png",
		"extension/大乱桌斗/image/character/sst_yoshi.png",
		"extension/大乱桌斗/image/character/sst_young_link.png",
		"extension/大乱桌斗/image/character/sst_yumikohimi.png",
		"extension/大乱桌斗/image/character/sst_zelda.png",
		"extension/大乱桌斗/image/character/sst_zero_suit_samus.png",
		"extension/大乱桌斗/image/decade_extGroupImage/name_sst_dark.png",
		"extension/大乱桌斗/image/decade_extGroupImage/name_sst_light.png",
		"extension/大乱桌斗/image/decade_extGroupImage/name_sst_reality.png",
		"extension/大乱桌斗/image/decade_extGroupImage/name_sst_smash.png",
		"extension/大乱桌斗/image/decade_extGroupImage/name_sst_spirit.png"
	]
};

data;