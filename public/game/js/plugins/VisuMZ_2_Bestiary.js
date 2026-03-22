//=============================================================================
// VisuStella MZ - Bestiary
// VisuMZ_2_Bestiary.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_Bestiary = true;

var VisuMZ = VisuMZ || {};
VisuMZ.Bestiary = VisuMZ.Bestiary || {};
VisuMZ.Bestiary.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [Bestiary]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Bestiary_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a new scene accessible through (but not limited to) the
 * Main Menu, the Bestiary. The Bestiary is a monster book/encyclopedia that
 * will update as the player plays the game. When an enemy is defeated, the
 * player can view that enemy through the Bestiary to see the enemy's stats,
 * elemental resistances and weaknesses, skills, rewards, and more.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Access the Bestiary through the Main Menu or through Plugin Commands.
 * * Enemies will automatically populate the Bestiary as they are seen in
 *   battle and defeated.
 * * The player can access the full information of an enemy after defeating it.
 * * Full information found in the bestiary includes the basic stats, elemental
 *   weaknesses and resistances, skills, rewards (EXP, Gold, Drops, etc.), and
 *   any added Lore.
 * * If the VisuStella MZ Elements and Status Menu Core is added, Traits are
 *   also added to the Bestiary.
 * * The VisuStella MZ Enemy Levels plugin gives functionality to view enemy
 *   stats at different levels.
 * * The VisuStella MZ Extra Enemy Drops will show any and all additional drops
 *   including conditional drops.
 * * The VisuStella MZ Class Change Core and Skill Learn System will show any
 *   AP, CP, JP, and SP rewards, too.
 * * Selected skills found in the Bestiary will have a help window appear that
 *   will also list what the skill does.
 * * The game dev can add in custom lore to an enemy's entry through notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_ElementStatusCore
 * 
 * When this plugin is used together with VisuStella MZ's Elements and Status
 * Menu Core plugin, the "Traits" data page becomes available. It lets the
 * player adjust the trait properties for the enemy being viewed so that the
 * player can view the changes when different traits are applied.
 * 
 * ---
 *
 * VisuMZ_3_EnemyLevels
 *
 * When used together in the same project as VisuStella MZ's Enemy Levels
 * plugin, new commands will appear under the "Basic" parameters window,
 * allowing the player to adjust the level of the currently viewed enemy in
 * order to see their parameters across different levels.
 *
 * ---
 *
 * VisuMZ_4_ExtraEnemyDrops
 *
 * When used together in the same project as VisuStella MZ's Extra Enemy Drops
 * plugin, extended drops will be listed as well as conditional drops (although
 * the conditional drops will not display how they are acquired).
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_0_CoreEngine
 * 
 * When used together in the same project as VisuStella MZ's Core Engine, this
 * plugin will display the Extended Parameters dictated by the Core Engine. The
 * icons assigned by the Core Engine will also be utilized, too.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * When used together in the same project as VisuStella MZ's Battle Core, the
 * notetags <Display Icon: x> and <Display Text: string> will be used on top of
 * displayed enemy skills to portray their displayed appearances.
 * 
 * ---
 * 
 * VisuMZ_1_ElementStatusCore
 * 
 * When used together in the same project as VisuStella MZ's Elements and
 * Status Menu Core, any excluded elements found in that plugin's Plugin
 * Parameters will also be used here to exclude certain elements, too.
 * 
 * ---
 * 
 * VisuMZ_2_ClassChangeSystem
 * 
 * When used together in the same project as VisuStella MZ's Class Change
 * System plugin, the CP and JP gains from enemies can be displayed under the
 * "Rewards" page as long as the rewards are intended to be shown in the
 * victory reward gains.
 * 
 * ---
 * 
 * VisuMZ_2_SkillLearnSystem
 * 
 * When used together in the same project as VisuStella MZ's Skill Learn System
 * plugin, the AP and SP gains from enemies can be displayed under the"Rewards"
 * page as long as the rewards are intended to be shown in the victory reward
 * gains.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Bestiary-Related Notetags ===
 * 
 * ---
 *
 * <Bestiary Category: x>
 * <Bestiary Categories: x, x, x>
 *
 * - Used for: Enemy Notetags
 * - Displays this enemy in the Bestiary category(ies) 'x'.
 * - Replace 'x' with the ID Key of the category or categories found in the
 *   Plugin Parameters.
 * - If this notetag is not used, use the default category determined by the
 *   Plugin Parameters.
 *
 * ---
 * 
 * <Hide in Bestiary>
 * 
 * - Used for: Enemy Notetags
 * - Prevents this enemy from being listed in the Bestiary.
 * 
 * ---
 * 
 * <Bestiary Custom Picture: filename>
 * 
 * - Used for: Enemy Notetags
 * - Makes this enemy display a custom picture in the Bestiary instead of the
 *   battler graphic used in-game.
 * - Replace 'filename' with the name of the image file to pick from the game
 *   project's /img/pictures/ folder.
 *   - Filenames are case sensitive.
 *   - Leave out the filename extension from the notetag.
 * 
 * ---
 * 
 * <Bestiary Battleback 1: filename>
 * <Bestiary Battleback 2: filename>
 * 
 * - Used for: Enemy Notetags
 * - Makes this enemy display a custom battleback background in the Bestiary
 *   instead of the default graphic determined by the Plugin Parameters.
 * - Replace 'filename' with the name of the image file to pick from the game
 *   project's /img/battlebacks1/ and /img/battlebacks2/ folders.
 *   - Filenames are case sensitive.
 *   - Leave out the filename extension from the notetag.
 * - If these notetags are not used, use the default settings found in the
 *   Plugin Parameters instead.
 * 
 * ---
 *
 * <Bestiary Lore>
 *  text
 *  text
 *  text
 * </Bestiary Lore>
 *
 * - Used for: Enemy Notetags
 * - Inserts the written 'text' as the enemy's lore in the Bestiary.
 * - Replace 'text' with whatever you want as the enemy's lore.
 * - If this notetag is not used, then the text displayed will be the default
 *   settings found in the Plugin Parameters.
 * 
 * ---
 * 
 * <Hide Skill in Bestiary>
 * 
 * - Used for: Skill Notetags
 * - Prevents this skill from being listed in the Bestiary.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 *
 * Debug: Full Bestiary?
 * - For playtest only! Allows you to fully view Bestiary.
 * - Resets when the game client is closed.
 *
 *   Reveal?:
 *   - Fully reveals Bestiary for playtesting.
 *   - Resets when the game client is closed.
 *
 * ---
 * 
 * === Scene Plugin Commands ===
 * 
 * ---
 *
 * Scene: Open Bestiary
 * - Opens the Bestiary scene.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: Enable Bestiary in Menu?
 * - Enables/disables Bestiary menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Bestiary menu inside the main menu.
 *
 * ---
 *
 * System: Show Bestiary in Menu?
 * - Shows/hides Bestiary menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Bestiary menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Enemy Categories List Settings
 * ============================================================================
 *
 * List of categories that are used for the bestiary.
 * 
 * By default, categories are hidden away until one enemy in that category has
 * been seen (not necessarily defeated). Once seen, the category is visible for
 * the player to browser through. This is to prevent spoilers based on the
 * category name (in case the game developer decides to name categories based
 * on regions for example).
 * 
 * The "Default Category", however, will always be visible to the player
 * regardless of whether or not an enemy has been seen inside of it. Therefore,
 * it's best to use the "Default Category" as a category for commonly seen
 * enemies in the game.
 *
 * ---
 *
 * Category
 * 
 *   ID Key:
 *   - This category's identification key.
 *   - Categories require unique keys for the plugin to differentiate them.
 *   - Used with <Bestiary Category: x> notetag.
 * 
 *   Title:
 *   - This category's title.
 *   - You may use text codes.
 *
 * ---
 *
 * Plugin Parameters
 * 
 *   Default Category:
 *   - Default enemy category when no notetag is used.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Set up the main menu defaults.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'Bestiary' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Bestiary' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Bestiary' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Bestiary.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * Button Assist Window
 * 
 *   Collapse:
 *   - Text used to collapse a category.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Expand:
 *   - Text used to expand a category.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Scroll Fast:
 *   - Text used to scroll enemy lore quickly.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Scroll Slow:
 *   - Text used to scroll enemy lore slowly.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Switch Enemy:
 *   - Text used to switch an enemy.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   View:
 *   - Text used to view an enemy.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 * ---
 * 
 * Main Windows > List Window
 * 
 *   Category (Closed):
 *   Category (Opened):
 *   - Text format used for closed/open categories.
 *   - %1 - Category Name, %2 - Percent Complete
 * 
 *     Decimal Places:
 *     - Decimal places for completion percentages.
 * 
 *   Mask Character:
 *   - Text character used to mask unknown enemy names.
 *
 * ---
 * 
 * Main Windows > Name Window
 * 
 *   Category Text:
 *   - Text used when selecting an enemy.
 * 
 * ---
 * 
 * Main Windows > Sub Window
 * 
 *   Completion Rate:
 *   - Text used to announce completion rate.
 *   - %1 - Percentage, %2 - Defeated, %3 - Total
 * 
 *     Decimal Places:
 *     - Decimal places for completion percentage.
 * 
 *   Defeated:
 *   - Text used to announce defeated monsters.
 *   - %1 - Defeated Number
 * 
 *   Encountered:
 *   - Text used to announce encountered monsters.
 *   - %1 - Encountered Number
 *
 * ---
 *
 * Data Windows > Category Window
 * 
 *   Basic Text:
 *   Elements Text:
 *   Skills Text:
 *   Rewards Text:
 *   Traits Text:
 *   Lore Text:
 *   - Text used for this command.
 * 
 *     Icon:
 *     - Icon used for this command.
 * 
 * ---
 * 
 * Data Windows > Basic Window
 * 
 *   Level Up To Max:
 *   Level Up By One:
 *   Level Down By One:
 *   Level Down To Min:
 *   - Text used for leveling.
 *   - Text codes allowed.
 *   - Requires VisuMZ_3_EnemyLevels!
 *   - %1 - Level Name
 * 
 * ---
 * 
 * Data Windows > Elements Window
 * 
 *   Weak to Element:
 *   Neutral to Element:
 *   Resistant to Element:
 *   Immune to Element:
 *   Absorbs Element:
 *   - Text used with this elemental affinity.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Data Windows > Rewards Window
 * 
 *   Drop Rate 100%:
 *   Drop Rate >= 50%:
 *   Drop Rate >= 20%:
 *   Drop Rate >= 10%:
 *   Drop Rate < 10%:
 *   Conditional Rate:
 *   - Text used for this kind of drop rate.
 *   - Text codes allowed.
 * 
 * ---
 * 
 * Data Windows > Traits Window
 * 
 *   Category (Closed):
 *   Category (Opened):
 *   - Text format used for closed/open categories.
 *   - Text codes allowed.
 *   - %1 - Category Name
 * 
 *   Help Description:
 *   - Help description used for trait categories.
 *   - Text codes allowed.
 * 
 *   Null Help:
 *   - Help description used for no traits.
 *   - Text codes allowed.
 *
 * ---
 *
 * Data Windows > Lore Window
 * 
 *   Default Lore:
 *   - Text when no lore is found.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you adjust the windows displayed for this plugin.
 *
 * ---
 *
 * Help Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Scale Window:
 *   - Scale the help window to fit with the enemy preview window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > Image Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Blur Strength:
 *   - What is the blur strength used for unknown enemies?
 * 
 *   Default Battleback 1:
 *   Default Battleback 2:
 *   - Default battleback 1 image used for enemies without
 *     <Bestiary Battleback 1: filename> and <Bestiary Battleback 2: filename>
 *     notetags.
 * 
 *   Padding:
 *   - What is the padding value used for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes.
 * 
 *   Mask Unknown Enemies:
 *   - Apply a character mask to unknown enemies?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > Name Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Main Windows > Sub Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 * ---
 * 
 * Data Windows
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for all data windows.
 * 
 * ---
 * 
 * Data Windows > Category Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Category Order:
 *   - What order do you want the commands to appear in?
 * 
 *   Style:
 *   - How do you wish to draw commands for this window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Data Windows > Basic Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show Level Change:
 *   - Show level change commands?
 *   - Requires VisuMZ_3_EnemyLevels!
 * 
 * ---
 * 
 * Data Windows > Elements Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 * ---
 * 
 * Data Windows > Skills Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 * ---
 * 
 * Data Windows > Rewards Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Rewards Order:
 *   - What order do you want the rewards to appear in?
 * 
 *   Reward EXP Icon:
 *   - Icon used for EXP reward.
 * 
 *   Reward Gold Icon:
 *   - Icon used for Gold reward.
 * 
 * ---
 * 
 * Data Windows > Traits Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Show All Traits:
 *   - Show all traits? Including unused ones?
 *   - Requires VisuMZ_1_ElementStatusCore!
 *
 * ---
 *
 * Data Windows > Lore Window
 * 
 *   Auto Word Wrap?:
 *   - Automatically enable word wrap?
 *   - Requires VisuMZ_1_MessageCore!
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Font Size:
 *   - Font size used for Lore Window.
 * 
 *   Scrolling > Slow:
 * 
 *     Scroll Speed:
 *     - What speed will Up/Down scroll the window at?
 *     - Lower is slower. Higher is faster.
 * 
 *     Sound Frequency:
 *     - How frequent will Up/Down scrolling make sounds?
 *     - Lower is quicker. Higher is later.
 * 
 *   Scrolling > Fast:
 * 
 *     Scroll Speed:
 *     - What speed will Up/Down scroll the window at?
 *     - Lower is slower. Higher is faster.
 * 
 *     Sound Frequency:
 *     - How frequent will Up/Down scrolling make sounds?
 *     - Lower is quicker. Higher is later.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented the vocabulary for "Lower Level" from
 *    reflecting the changes found in the Plugin Parameters. Fix by Olivia.
 * 
 * Version 1.01: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that allowed players to scroll to unrevealed enemies. Fix
 *    made by Irina.
 * 
 * Version 1.00 Official Release Date: April 3, 2023
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugFullBestiary
 * @text Debug: Full Bestiary?
 * @desc For playtest only! Allows you to fully view Bestiary.
 * Resets when the game client is closed.
 *
 * @arg Reveal:eval
 * @text Reveal?
 * @type boolean
 * @on Reveal
 * @off Normal
 * @desc Fully reveals Bestiary for playtesting.
 * Resets when the game client is closed.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scene
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SceneOpenBestiary
 * @text Scene: Open Bestiary
 * @desc Opens the Bestiary scene.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableBestiaryMenu
 * @text System: Enable Bestiary in Menu?
 * @desc Enables/disables Bestiary menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Bestiary menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowBestiaryMenu
 * @text System: Show Bestiary in Menu?
 * @desc Shows/hides Bestiary menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Bestiary menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Bestiary
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Categories:arraystruct
 * @text Enemy Categories List
 * @type struct<Category>[]
 * @desc List of categories that are used for the bestiary.
 * @default ["{\"Key:str\":\"Common\",\"Title:str\":\"\\\\C[6]Common Monsters\"}","{\"Key:str\":\"Elite\",\"Title:str\":\"\\\\C[4]Elite Monsters\"}","{\"Key:str\":\"MiniBoss\",\"Title:str\":\"\\\\C[5]Mini-Bosses\"}","{\"Key:str\":\"Boss\",\"Title:str\":\"\\\\C[2]Bosses\"}"]
 *
 * @param DefaultCategory:str
 * @text Default Category
 * @parent Categories:arraystruct
 * @desc Default enemy category when no notetag is used.
 * @default Common
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Bestiary.
 * @default {"Name:str":"Bestiary","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Bestiary.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"ButtonAssist":"","buttonAssist_Collapse:str":"Collapse","buttonAssist_Expand:str":"Expand","buttonAssist_FastScroll:str":"Fast Scroll","buttonAssist_SlowScroll:str":"Scroll","buttonAssist_Switch:str":"Switch Monster","buttonAssist_View:str":"View","MainWindows":"","CategoryWindow":"","CategoryWindow_ClosedCategory:str":"+ %1 (%2%)","CategoryWindow_OpenCategory:str":"- %1 (%2%)","CategoryPercentFixedDigits:num":"2","CategoryWindow_MaskChar:str":"?","NameWindow":"","NameWindow_CategoryText:str":"Please select a monster to view.","SubWindow":"","SubWindow_Completion:str":"Bestiary Completion Rate: %1% (%2/%3 Monsters)","SubWindowCompleteFixedDigits:num":"2","SubWindow_Defeated:str":"Defeated: %1","SubWindow_Encountered:str":"Encountered: %1","DataWindows":"","DataCategoryWindow":"","BasicText:str":"Base","BasicIcon:str":"84","ElementsText:str":"Elements","ElementsIcon:str":"64","SkillsText:str":"Skills","SkillsIcon:str":"79","RewardsText:str":"Rewards","RewardsIcon:str":"87","TraitsText:str":"Properties","TraitsIcon:str":"83","LoreText:str":"Lore","LoreIcon:str":"80","BasicWindow":"","BasicWindow_LevelUpToMax:str":"\\I[73]Raise %1 Up to Maximum","BasicWindow_LevelUpByOne:str":"\\I[73]Raise %1 Up","BasicWindow_LevelDownByOne:str":"\\I[74]Lower %1 Down","BasicWindow_LevelDownToMin:str":"\\I[74]Lower %1 Down to Minimum","ElementsWindow":"","ElementsWindow_Weak:str":"\\C[24]Weak","ElementsWindow_Neutral:str":"\\C[0]Normal","ElementsWindow_Resist:str":"\\C[25]Resist","ElementsWindow_Immune:str":"\\C[7]Immune","ElementsWindow_Absorb:str":"\\C[27]Absorb","RewardsWindow":"","RewardsWindow_Chance100:str":"\\C[24]Guaranteed","RewardsWindow_Chance50:str":"\\C[21]Common","RewardsWindow_Chance20:str":"\\C[4]Uncommon","RewardsWindow_Chance10:str":"\\C[5]Rare","RewardsWindow_Chance0:str":"\\C[27]Super Rare","RewardsWindow_Conditional:str":"\\C[17]Conditional","TraitsWindow":"","TraitsWindow_ClosedCategory:str":"+ \\C[16]%1","TraitsWindow_OpenCategory:str":"- \\C[16]%1","TraitsWindow_CategoryHelpDesc:json":"\"This is the property type.\"","TraitsWindow_NullHelpDesc:json":"\"This monster has no special properties.\"","LoreWindow":"","LoreWindow_Default:json":"\"Little is known about this monster.\""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you adjust the windows displayed for this plugin.
 * @default {"HelpWindow":"","HelpWindow_BgType:num":"0","HelpWindow_ScaleRatio:eval":"true","HelpWindow_RectJS:func":"\"const imgRect = this.imageWindowRect();\\nconst ratio = this.helpWindowRatio();\\n\\nconst ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(2, false);\\nconst wx = imgRect.x;\\nconst wy = imgRect.y + (this.isBottomHelpMode() ? (imgRect.height - (wh * ratio)) : 0);\\nreturn new Rectangle(wx, wy, ww, wh);\"","MainWindows":"","ImageWindow":"","ImageWindow_BgType:num":"0","ImageWindow_BlurStrength:num":"8","ImageWindow_Battleback1:str":"Grassland","ImageWindow_Battleback2:str":"Grassland","ImageWindow_Padding:num":"4","ImageWindow_RectJS:func":"\"const ww = Graphics.boxWidth - Math.ceil(Graphics.boxWidth * 4/10);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ListWindow":"","ListWindow_BgType:num":"0","ListWindowDelayMS:num":"240","ListWindow_MaskUnknown:eval":"true","ListWindow_RectJS:func":"\"const ww = Math.ceil(Graphics.boxWidth * 4/10);\\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","NameWindow":"","NameWindow_BgType:num":"0","NameWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","SubWindow":"","SubWindow_BgType:num":"0","SubWindow_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = 0;\\nconst wy = this.mainAreaBottom() - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\"","DataWindows":"","DataWindow_RectJS:func":"\"const ww = this.listWindowRect().width;\\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true) - (this.calcWindowHeight(1, false) * 2);\\nconst wx = this.listWindowRect().x;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false) + this.calcWindowHeight(1, true);\\nreturn new Rectangle(wx, wy, ww, wh);\"","CategoryWindow":"","CategoryWindow_BgType:num":"0","CategoryWindow_CommandOrder:arraystr":"[\"basic\",\"elements\",\"skills\",\"rewards\",\"traits\",\"lore\"]","CategoryWindow_Style:str":"auto","DataCategoriesWindow_RectJS:func":"\"const ww = this.listWindowRect().width;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = this.listWindowRect().x;\\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","BasicWindow":"","BasicWindow_BgType:num":"0","BasicWindow_ShowLevelChange:eval":"true","ElementsWindow":"","ElementsWindow_BgType:num":"0","SkillsWindow":"","SkillsWindow_BgType:num":"0","RewardsWindow":"","RewardsWindow_BgType:num":"0","RewardsWindow_RewardsOrder:arraystr":"[\"exp\",\"ap\",\"cp\",\"jp\",\"sp\",\"gold\",\"items\"]","EXP_Icon:num":"87","Gold_Icon:num":"314","TraitsWindow":"","TraitsWindow_BgType:num":"0","TraitsWindow_ShowAllTraits:eval":"false","LoreWindow":"","LoreWindow_AutoWordWrap:eval":"false","LoreWindow_BgType:num":"0","LoreWindow_FontSize:num":"22","Scrolling":"","Slow":"","SlowScrollSpeed:num":"8","SlowSoundFreq:num":"8","Fast":"","FastScrollSpeed:num":"32","FastSoundFreq:num":"4"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Category List Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Key:str
 * @text ID Key
 * @desc This category's identification key. Categories require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Title:str
 * @text Title
 * @desc This category's title.
 * You may use text codes.
 * @default Untitled
 * 
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Bestiary' option in the Main Menu.
 * @default Bestiary
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Bestiary' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Bestiary' option to the Main Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssist_Collapse:str
 * @text Collapse
 * @parent ButtonAssist
 * @desc Text used to collapse a category.
 * Requires VisuMZ_0_CoreEngine!
 * @default Collapse
 *
 * @param buttonAssist_Expand:str
 * @text Expand
 * @parent ButtonAssist
 * @desc Text used to expand a category.
 * Requires VisuMZ_0_CoreEngine!
 * @default Expand
 *
 * @param buttonAssist_FastScroll:str
 * @text Scroll Fast
 * @parent ButtonAssist
 * @desc Text used to scroll enemy lore quickly.
 * Requires VisuMZ_0_CoreEngine!
 * @default Fast Scroll
 *
 * @param buttonAssist_SlowScroll:str
 * @text Scroll Slow
 * @parent ButtonAssist
 * @desc Text used to scroll enemy lore slowly.
 * Requires VisuMZ_0_CoreEngine!
 * @default Scroll
 *
 * @param buttonAssist_Switch:str
 * @text Switch Enemy
 * @parent ButtonAssist
 * @desc Text used to switch an enemy.
 * Requires VisuMZ_0_CoreEngine!
 * @default Switch Monster
 *
 * @param buttonAssist_View:str
 * @text View
 * @parent ButtonAssist
 * @desc Text used to view an enemy.
 * Requires VisuMZ_0_CoreEngine!
 * @default View
 *
 * @param MainWindows
 * @text Main Windows
 *
 * @param CategoryWindow
 * @text List Window
 * @parent MainWindows
 *
 * @param CategoryWindow_ClosedCategory:str
 * @text Category (Closed)
 * @parent CategoryWindow
 * @desc Text format used for closed categories.
 * %1 - Category Name, %2 - Percent Complete
 * @default + %1 (%2%)
 *
 * @param CategoryWindow_OpenCategory:str
 * @text Category (Opened)
 * @parent CategoryWindow
 * @desc Text format used for opened categories.
 * %1 - Category Name, %2 - Percent Complete
 * @default - %1 (%2%)
 *
 * @param CategoryPercentFixedDigits:num
 * @text Decimal Places
 * @parent CategoryWindow_OpenCategory:str
 * @type number
 * @desc Decimal places for completion percentages.
 * @default 2
 *
 * @param CategoryWindow_MaskChar:str
 * @text Mask Character
 * @parent CategoryWindow
 * @desc Text character used to mask unknown enemy names.
 * @default ?
 *
 * @param NameWindow
 * @text Name Window
 * @parent MainWindows
 *
 * @param NameWindow_CategoryText:str
 * @text Category Text
 * @parent NameWindow
 * @desc Text used when selecting an enemy.
 * @default Please select a monster to view.
 *
 * @param SubWindow
 * @text Sub Window
 * @parent MainWindows
 *
 * @param SubWindow_Completion:str
 * @text Completion Rate
 * @parent SubWindow
 * @desc Text used to announce completion rate.
 * %1 - Percentage, %2 - Defeated, %3 - Total
 * @default Bestiary Completion Rate: %1% (%2/%3 Monsters)
 *
 * @param SubWindowCompleteFixedDigits:num
 * @text Decimal Places
 * @parent SubWindow_Completion:str
 * @type number
 * @desc Decimal places for completion percentage.
 * @default 2
 *
 * @param SubWindow_Defeated:str
 * @text Defeated
 * @parent SubWindow
 * @desc Text used to announce defeated monsters.
 * %1 - Defeated Number
 * @default Defeated: %1
 *
 * @param SubWindow_Encountered:str
 * @text Encountered
 * @parent SubWindow
 * @desc Text used to announce encountered monsters.
 * %1 - Encountered Number
 * @default Encountered: %1
 *
 * @param DataWindows
 * @text Data Windows
 *
 * @param DataCategoryWindow
 * @text Category Window
 * @parent DataWindows
 *
 * @param BasicText:str
 * @text Basic Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Base
 *
 * @param BasicIcon:str
 * @text Icon
 * @parent BasicText:str
 * @desc Icon used for this command.
 * @default 84
 *
 * @param ElementsText:str
 * @text Elements Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Elements
 *
 * @param ElementsIcon:str
 * @text Icon
 * @parent ElementsText:str
 * @desc Icon used for this command.
 * @default 64
 *
 * @param SkillsText:str
 * @text Skills Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Skills
 *
 * @param SkillsIcon:str
 * @text Icon
 * @parent SkillsText:str
 * @desc Icon used for this command.
 * @default 79
 *
 * @param RewardsText:str
 * @text Rewards Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Rewards
 *
 * @param RewardsIcon:str
 * @text Icon
 * @parent RewardsText:str
 * @desc Icon used for this command.
 * @default 87
 *
 * @param TraitsText:str
 * @text Traits Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Properties
 *
 * @param TraitsIcon:str
 * @text Icon
 * @parent TraitsText:str
 * @desc Icon used for this command.
 * @default 83
 *
 * @param LoreText:str
 * @text Lore Text
 * @parent DataCategoryWindow
 * @desc Text used for this command.
 * @default Lore
 *
 * @param LoreIcon:str
 * @text Icon
 * @parent LoreText:str
 * @desc Icon used for this command.
 * @default 80
 *
 * @param BasicWindow
 * @text Basic Window
 * @parent DataWindows
 *
 * @param BasicWindow_LevelUpToMax:str
 * @text Level Up To Max
 * @parent BasicWindow
 * @desc Text used for leveling to max. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[73]Raise %1 Up to Maximum
 *
 * @param BasicWindow_LevelUpByOne:str
 * @text Level Up By One
 * @parent BasicWindow
 * @desc Text used for leveling by one. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[73]Raise %1 Up
 *
 * @param BasicWindow_LevelDownByOne:str
 * @text Level Down By One
 * @parent BasicWindow
 * @desc Text used for deleveling by one. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[74]Lower %1 Down
 *
 * @param BasicWindow_LevelDownToMin:str
 * @text Level Down To Min
 * @parent BasicWindow
 * @desc Text used for deleveling to min. Text codes allowed.
 * Requires VisuMZ_3_EnemyLevels! %1 - Level Name
 * @default \I[74]Lower %1 Down to Minimum
 *
 * @param ElementsWindow
 * @text Elements Window
 * @parent DataWindows
 *
 * @param ElementsWindow_Weak:str
 * @text Weak to Element
 * @parent ElementsWindow
 * @desc Text used when weak to element.
 * Text codes allowed.
 * @default \C[24]Weak
 *
 * @param ElementsWindow_Neutral:str
 * @text Neutral to Element
 * @parent ElementsWindow
 * @desc Text used when neutral to element.
 * Text codes allowed.
 * @default \C[0]Normal
 *
 * @param ElementsWindow_Resist:str
 * @text Resistant to Element
 * @parent ElementsWindow
 * @desc Text used when resistant to element.
 * Text codes allowed.
 * @default \C[25]Resist
 *
 * @param ElementsWindow_Immune:str
 * @text Immune to Element
 * @parent ElementsWindow
 * @desc Text used when immune to element.
 * Text codes allowed.
 * @default \C[7]Immune
 *
 * @param ElementsWindow_Absorb:str
 * @text Absorbs Element
 * @parent ElementsWindow
 * @desc Text used when absorbs element.
 * Text codes allowed.
 * @default \C[27]Absorb
 *
 * @param RewardsWindow
 * @text Rewards Window
 * @parent DataWindows
 *
 * @param RewardsWindow_Chance100:str
 * @text Drop Rate 100%
 * @parent RewardsWindow
 * @desc Text used for 100% drop rates.
 * Text codes allowed.
 * @default \C[24]Guaranteed
 *
 * @param RewardsWindow_Chance50:str
 * @text Drop Rate >= 50%
 * @parent RewardsWindow
 * @desc Text used for greater than 50% drop rates.
 * Text codes allowed.
 * @default \C[21]Common
 *
 * @param RewardsWindow_Chance20:str
 * @text Drop Rate >= 20%
 * @parent RewardsWindow
 * @desc Text used for greater than 20% drop rates.
 * Text codes allowed.
 * @default \C[4]Uncommon
 *
 * @param RewardsWindow_Chance10:str
 * @text Drop Rate >= 10%
 * @parent RewardsWindow
 * @desc Text used for greater than 10% drop rates.
 * Text codes allowed.
 * @default \C[5]Rare
 *
 * @param RewardsWindow_Chance0:str
 * @text Drop Rate < 10%
 * @parent RewardsWindow
 * @desc Text used for less than 10% drop rates.
 * Text codes allowed.
 * @default \C[27]Super Rare
 *
 * @param RewardsWindow_Conditional:str
 * @text Conditional Rate
 * @parent RewardsWindow
 * @desc Text used for conditional drop rates.
 * Requires VisuMZ_4_ExtraEnemyDrops! Text codes allowed.
 * @default \C[17]Conditional
 *
 * @param TraitsWindow
 * @text Traits Window
 * @parent DataWindows
 *
 * @param TraitsWindow_ClosedCategory:str
 * @text Category (Closed)
 * @parent TraitsWindow
 * @desc Text format used for closed categories.
 * Text codes allowed. %1 - Category Name
 * @default + \C[16]%1
 *
 * @param TraitsWindow_OpenCategory:str
 * @text Category (Opened)
 * @parent TraitsWindow
 * @desc Text format used for opened categories.
 * Text codes allowed. %1 - Category Name
 * @default - \C[16]%1
 *
 * @param TraitsWindow_CategoryHelpDesc:json
 * @text Help Description
 * @parent TraitsWindow_OpenCategory:str
 * @type note
 * @desc Help description used for trait categories.
 * Text codes allowed.
 * @default "This is the property type."
 *
 * @param TraitsWindow_NullHelpDesc:json
 * @text Null Help
 * @parent TraitsWindow
 * @type note
 * @desc Help description used for no traits.
 * Text codes allowed.
 * @default "This monster has no special properties."
 *
 * @param LoreWindow
 * @text Lore Window
 * @parent DataWindows
 *
 * @param LoreWindow_Default:json
 * @text Default Lore
 * @parent LoreWindow
 * @type note
 * @desc Text when no lore is found.
 * Text codes allowed.
 * @default "Little is known about this monster."
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpWindow_ScaleRatio:eval
 * @text Scale Window
 * @parent HelpWindow
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Scale the help window to fit with the enemy preview window?
 * @default true
 *
 * @param HelpWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(2, false);\nconst wx = this.imageWindowRect().x;\nconst wy = this.imageWindowRect().y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param MainWindows
 * @text Main Windows
 *
 * @param ImageWindow
 * @text Image Window
 * @parent MainWindows
 *
 * @param ImageWindow_BgType:num
 * @text Background Type
 * @parent ImageWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ImageWindow_BlurStrength:num
 * @text Blur Strength
 * @parent ImageWindow
 * @type number
 * @desc What is the blur strength used for unknown enemies?
 * @default 8
 *
 * @param ImageWindow_Battleback1:str
 * @text Default Battleback 1
 * @parent ImageWindow
 * @type file
 * @dir img/battlebacks1/
 * @require 1
 * @desc Default battleback 1 image used for enemies
 * without <Bestiary Battleback 1: filename> notetag.
 * @default Grassland
 *
 * @param ImageWindow_Battleback2:str
 * @text Default Battleback 2
 * @parent ImageWindow
 * @type file
 * @dir img/battlebacks2/
 * @require 1
 * @desc Default battleback 2 image used for enemies
 * without <Bestiary Battleback 2: filename> notetag.
 * @default Grassland
 *
 * @param ImageWindow_Padding:num
 * @text Padding
 * @parent ImageWindow
 * @type number
 * @desc What is the padding value used for this window?
 * @default 4
 *
 * @param ImageWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ImageWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - Math.ceil(Graphics.boxWidth * 4/10);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ListWindow
 * @text List Window
 * @parent MainWindows
 *
 * @param ListWindow_BgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListWindowDelayMS:num
 * @text Delay MS
 * @parent ListWindow
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes.
 * @default 240
 *
 * @param ListWindow_MaskUnknown:eval
 * @text Mask Unknown Enemies
 * @parent ListWindow
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Apply a character mask to unknown enemies?
 * @default true
 *
 * @param ListWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.ceil(Graphics.boxWidth * 4/10);\nconst wh = this.mainAreaHeight() - (this.calcWindowHeight(1, false) * 2);\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param NameWindow
 * @text Name Window
 * @parent MainWindows
 *
 * @param NameWindow_BgType:num
 * @text Background Type
 * @parent NameWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NameWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent NameWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SubWindow
 * @text Sub Window
 * @parent MainWindows
 *
 * @param SubWindow_BgType:num
 * @text Background Type
 * @parent SubWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SubWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent SubWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, false);\nconst wx = 0;\nconst wy = this.mainAreaBottom() - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param DataWindows
 * @text Data Window
 *
 * @param DataWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DataWindows
 * @type note
 * @desc Code used to determine the dimensions for all data windows.
 * @default "const ww = this.listWindowRect().width;\nconst wh = this.mainAreaHeight() - this.calcWindowHeight(1, true) - (this.calcWindowHeight(1, false) * 2);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false) + this.calcWindowHeight(1, true);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CategoryWindow
 * @text Category Window
 * @parent DataWindows
 *
 * @param CategoryWindow_BgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryWindow_CommandOrder:arraystr
 * @text Command Order
 * @parent CategoryWindow
 * @type select[]
 * @option Basic - Basic parameter data
 * @value basic
 * @option Elements - Elemental resistances and weaknesses
 * @value elements
 * @option Skills - Usable skills in-battle
 * @value skills
 * @option Rewards - EXP, Gold, Drop Items
 * @value rewards
 * @option Traits - For VisuMZ_1_ElementStatusCore.js
 * @value traits
 * @option Lore - Background Information
 * @value lore
 * @desc What order do you want the commands to appear in?
 * @default ["basic","elements","skills","rewards","traits","lore"]
 *
 * @param CategoryWindow_Style:str
 * @text Style
 * @parent CategoryWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands for this window?
 * @default auto
 *
 * @param DataCategoriesWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.listWindowRect().width;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = 0;\nconst wy = this.mainAreaTop() + this.calcWindowHeight(1, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BasicWindow
 * @text Basic Window
 * @parent DataWindows
 *
 * @param BasicWindow_BgType:num
 * @text Background Type
 * @parent BasicWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BasicWindow_ShowLevelChange:eval
 * @text Show Level Change
 * @parent BasicWindow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show level change commands?
 * Requires VisuMZ_3_EnemyLevels!
 * @default true
 *
 * @param ElementsWindow
 * @text Elements Window
 * @parent DataWindows
 *
 * @param ElementsWindow_BgType:num
 * @text Background Type
 * @parent ElementsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillsWindow
 * @text Skills Window
 * @parent DataWindows
 *
 * @param SkillsWindow_BgType:num
 * @text Background Type
 * @parent SkillsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param RewardsWindow
 * @text Rewards Window
 * @parent DataWindows
 *
 * @param RewardsWindow_BgType:num
 * @text Background Type
 * @parent RewardsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param RewardsWindow_RewardsOrder:arraystr
 * @text Rewards Order
 * @parent RewardsWindow
 * @type select[]
 * @option EXP - Experience Points
 * @value exp
 * @option Gold - Gold Currency
 * @value gold
 * @option Drop Items - Enemy Drop Items
 * @value items
 * @option AP - For VisuMZ_2_SkillLearnSystem.js
 * @value ap
 * @option CP - For VisuMZ_2_ClassChangeSystem.js
 * @value cp
 * @option JP - For VisuMZ_2_ClassChangeSystem.js
 * @value jp
 * @option SP - For VisuMZ_2_SkillLearnSystem.js
 * @value sp
 * @desc What order do you want the rewards to appear in?
 * @default ["exp","ap","cp","jp","sp","gold","items"]
 *
 * @param EXP_Icon:num
 * @text Reward EXP Icon
 * @parent RewardsWindow
 * @desc Icon used for EXP reward.
 * @default 87
 *
 * @param Gold_Icon:num
 * @text Reward Gold Icon
 * @parent RewardsWindow
 * @desc Icon used for Gold reward.
 * @default 314
 *
 * @param TraitsWindow
 * @text Traits Window
 * @parent DataWindows
 *
 * @param TraitsWindow_BgType:num
 * @text Background Type
 * @parent TraitsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param TraitsWindow_ShowAllTraits:eval
 * @text Show All Traits
 * @parent TraitsWindow
 * @type boolean
 * @on Include Unused
 * @off Show Only Used
 * @desc Show all traits? Including unused ones?
 * Requires VisuMZ_1_ElementStatusCore!
 * @default false
 *
 * @param LoreWindow
 * @text Lore Window
 * @parent DataWindows
 *
 * @param LoreWindow_AutoWordWrap:eval
 * @text Auto Word Wrap?
 * @parent LoreWindow
 * @type boolean
 * @on Word Wrap
 * @off Normal
 * @desc Automatically enable word wrap?
 * Requires VisuMZ_1_MessageCore!
 * @default false
 *
 * @param LoreWindow_BgType:num
 * @text Background Type
 * @parent LoreWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param LoreWindow_FontSize:num
 * @text Font Size
 * @parent LoreWindow
 * @desc Font size used for Lore Window.
 * @default 22
 *
 * @param Scrolling
 * @parent LoreWindow
 *
 * @param Slow
 * @parent Scrolling
 *
 * @param SlowScrollSpeed:num
 * @text Scroll Speed
 * @parent Slow
 * @type number
 * @min 1
 * @desc What speed will Up/Down scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 8
 *
 * @param SlowSoundFreq:num
 * @text Sound Frequency
 * @parent Slow
 * @type number
 * @min 1
 * @desc How frequent will Up/Down scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 8
 *
 * @param Fast
 * @parent Scrolling
 *
 * @param FastScrollSpeed:num
 * @text Scroll Speed
 * @parent Fast
 * @type number
 * @min 1
 * @desc What speed will PageUp/PageDn scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 32
 *
 * @param FastSoundFreq:num
 * @text Sound Frequency
 * @parent Fast
 * @type number
 * @min 1
 * @desc How frequent will PageUp/PageDn scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 4
 *
 */
//=============================================================================

const _0x2c82ec=_0x21c0;(function(_0x32d129,_0x25afe5){const _0x1100eb=_0x21c0,_0x4996c7=_0x32d129();while(!![]){try{const _0x12ced1=-parseInt(_0x1100eb(0x28c))/0x1+-parseInt(_0x1100eb(0x34e))/0x2*(parseInt(_0x1100eb(0x306))/0x3)+-parseInt(_0x1100eb(0x2a9))/0x4*(parseInt(_0x1100eb(0x1ba))/0x5)+parseInt(_0x1100eb(0x11a))/0x6+parseInt(_0x1100eb(0x2e7))/0x7+-parseInt(_0x1100eb(0x34a))/0x8*(parseInt(_0x1100eb(0x2de))/0x9)+-parseInt(_0x1100eb(0x25f))/0xa*(-parseInt(_0x1100eb(0x2c2))/0xb);if(_0x12ced1===_0x25afe5)break;else _0x4996c7['push'](_0x4996c7['shift']());}catch(_0x5c0d3a){_0x4996c7['push'](_0x4996c7['shift']());}}}(_0x3e5f,0xcc95c));var label='Bestiary',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2c82ec(0x356)](function(_0xca275d){const _0x125aab=_0x2c82ec;return _0xca275d[_0x125aab(0x90)]&&_0xca275d['description'][_0x125aab(0x2a5)]('['+label+']');})[0x0];VisuMZ[label][_0x2c82ec(0x13c)]=VisuMZ[label][_0x2c82ec(0x13c)]||{},VisuMZ[_0x2c82ec(0xdf)]=function(_0x21a7f6,_0x367804){const _0x924da=_0x2c82ec;for(const _0x4ce8c0 in _0x367804){if(_0x4ce8c0[_0x924da(0x126)](/(.*):(.*)/i)){const _0x3dca97=String(RegExp['$1']),_0x1385e0=String(RegExp['$2'])[_0x924da(0x273)]()[_0x924da(0x1ad)]();let _0x4c8132,_0x1acd1f,_0x3be516;switch(_0x1385e0){case _0x924da(0x7a):_0x4c8132=_0x367804[_0x4ce8c0]!==''?Number(_0x367804[_0x4ce8c0]):0x0;break;case _0x924da(0x21e):_0x1acd1f=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):[],_0x4c8132=_0x1acd1f[_0x924da(0x218)](_0x2d3bdd=>Number(_0x2d3bdd));break;case _0x924da(0x151):_0x4c8132=_0x367804[_0x4ce8c0]!==''?eval(_0x367804[_0x4ce8c0]):null;break;case _0x924da(0xda):_0x1acd1f=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):[],_0x4c8132=_0x1acd1f[_0x924da(0x218)](_0x294192=>eval(_0x294192));break;case _0x924da(0xa2):_0x4c8132=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):'';break;case _0x924da(0x168):_0x1acd1f=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):[],_0x4c8132=_0x1acd1f[_0x924da(0x218)](_0x550687=>JSON['parse'](_0x550687));break;case _0x924da(0x2ba):_0x4c8132=_0x367804[_0x4ce8c0]!==''?new Function(JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0])):new Function('return\x200');break;case'ARRAYFUNC':_0x1acd1f=_0x367804[_0x4ce8c0]!==''?JSON['parse'](_0x367804[_0x4ce8c0]):[],_0x4c8132=_0x1acd1f['map'](_0x14a1c0=>new Function(JSON[_0x924da(0x2e9)](_0x14a1c0)));break;case _0x924da(0x15c):_0x4c8132=_0x367804[_0x4ce8c0]!==''?String(_0x367804[_0x4ce8c0]):'';break;case _0x924da(0x2ad):_0x1acd1f=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):[],_0x4c8132=_0x1acd1f[_0x924da(0x218)](_0x2c6c48=>String(_0x2c6c48));break;case _0x924da(0x30b):_0x3be516=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):{},_0x4c8132=VisuMZ['ConvertParams']({},_0x3be516);break;case _0x924da(0xb2):_0x1acd1f=_0x367804[_0x4ce8c0]!==''?JSON[_0x924da(0x2e9)](_0x367804[_0x4ce8c0]):[],_0x4c8132=_0x1acd1f[_0x924da(0x218)](_0x4de4ee=>VisuMZ[_0x924da(0xdf)]({},JSON['parse'](_0x4de4ee)));break;default:continue;}_0x21a7f6[_0x3dca97]=_0x4c8132;}}return _0x21a7f6;},(_0x167c62=>{const _0x344f16=_0x2c82ec,_0x1ebc0a=_0x167c62[_0x344f16(0x10c)];for(const _0x6787dc of dependencies){if(!Imported[_0x6787dc]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x344f16(0x191)](_0x1ebc0a,_0x6787dc)),SceneManager[_0x344f16(0x180)]();break;}}const _0xb8b7bc=_0x167c62[_0x344f16(0x272)];if(_0xb8b7bc[_0x344f16(0x126)](/\[Version[ ](.*?)\]/i)){const _0x5eb766=Number(RegExp['$1']);_0x5eb766!==VisuMZ[label]['version']&&(alert(_0x344f16(0x25d)[_0x344f16(0x191)](_0x1ebc0a,_0x5eb766)),SceneManager[_0x344f16(0x180)]());}if(_0xb8b7bc[_0x344f16(0x126)](/\[Tier[ ](\d+)\]/i)){if(_0x344f16(0x1da)!=='tmPTK'){const _0x1f8f06=Number(RegExp['$1']);if(_0x1f8f06<tier)'IkUfo'!==_0x344f16(0x342)?this['addCustomCommand'](_0x25af1b):(alert(_0x344f16(0x37e)[_0x344f16(0x191)](_0x1ebc0a,_0x1f8f06,tier)),SceneManager[_0x344f16(0x180)]());else{if(_0x344f16(0x316)!=='usjoc'){if(this[_0x344f16(0x2bc)]===_0x48a363)this[_0x344f16(0x1cb)]();return this[_0x344f16(0x2bc)]['shown'];}else tier=Math[_0x344f16(0x1f5)](_0x1f8f06,tier);}}else _0x5a64a1===this[_0x344f16(0x17f)]()?(this[_0x344f16(0x327)][_0x1946f5][_0x344f16(0x2fc)](),this[_0x344f16(0x327)][_0x109b6f][_0x344f16(0x18d)](),this[_0x344f16(0x327)][_0xc3ddf0][_0x344f16(0x1ef)]()):this[_0x344f16(0x327)][_0x4685dd]['hide']();}VisuMZ[_0x344f16(0xdf)](VisuMZ[label][_0x344f16(0x13c)],_0x167c62[_0x344f16(0x188)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x2c82ec(0x10c)],'DebugFullBestiary',_0x29da4f=>{const _0xc99086=_0x2c82ec;if(!$gameTemp[_0xc99086(0x18e)]())return;VisuMZ['ConvertParams'](_0x29da4f,_0x29da4f),$gameTemp[_0xc99086(0x238)](_0x29da4f['Reveal']);}),PluginManager['registerCommand'](pluginData['name'],_0x2c82ec(0x204),_0x3e6f73=>{const _0x13aba5=_0x2c82ec;if($gameParty[_0x13aba5(0x26f)]())return;if(SceneManager[_0x13aba5(0x2f0)]())return;SceneManager[_0x13aba5(0x155)](Scene_Bestiary);}),PluginManager[_0x2c82ec(0x1e5)](pluginData[_0x2c82ec(0x10c)],_0x2c82ec(0x2f1),_0x32b2bf=>{const _0x1fde1d=_0x2c82ec;VisuMZ['ConvertParams'](_0x32b2bf,_0x32b2bf),$gameSystem[_0x1fde1d(0x366)](_0x32b2bf['Enable']);}),PluginManager[_0x2c82ec(0x1e5)](pluginData['name'],_0x2c82ec(0x34f),_0x52c667=>{const _0x33a34b=_0x2c82ec;VisuMZ[_0x33a34b(0xdf)](_0x52c667,_0x52c667),$gameSystem[_0x33a34b(0x181)](_0x52c667[_0x33a34b(0x367)]);}),VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x14f)]={'category':/<BESTIARY (?:CATEGORY|CATEGORIES):[ ](.*)>/i,'hideInBestiary':/<HIDE IN BESTIARY>/i,'customPicture':/<BESTIARY CUSTOM (?:IMAGE|PICTURE):[ ](.*)>/i,'battleback1':/<BESTIARY (?:BATTLEBACK|BACKGROUND) 1:[ ](.*)>/i,'battleback2':/<BESTIARY (?:BATTLEBACK|BACKGROUND) 2:[ ](.*)>/i,'lore':/<(?:BESTIARY |)LORE>\s*([\s\S]*)\s*<\/(?:BESTIARY |)LORE>/i,'hideSkill':/<HIDE SKILL IN BESTIARY>/i},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x207)]=Scene_Boot[_0x2c82ec(0x1a3)][_0x2c82ec(0xdb)],Scene_Boot[_0x2c82ec(0x1a3)]['onDatabaseLoaded']=function(){const _0x57382d=_0x2c82ec;VisuMZ[_0x57382d(0x33e)]['Scene_Boot_onDatabaseLoaded']['call'](this),this['process_VisuMZ_Bestiary']();},Scene_Boot[_0x2c82ec(0x1a3)][_0x2c82ec(0x2b3)]=function(){const _0x499181=_0x2c82ec;this[_0x499181(0x1a8)]();},Scene_Boot[_0x2c82ec(0x1a3)]['process_VisuMZ_Bestiary_Categories']=function(){const _0x129b76=_0x2c82ec;VisuMZ['Bestiary'][_0x129b76(0x7e)]=[],VisuMZ['Bestiary'][_0x129b76(0x2e4)]={};const _0x58d3f8=VisuMZ[_0x129b76(0x33e)][_0x129b76(0x13c)][_0x129b76(0x29f)];for(const _0xd69615 of _0x58d3f8){const _0x13f0c6=(_0xd69615[_0x129b76(0x2d4)]||'')[_0x129b76(0x2e0)]()[_0x129b76(0x1ad)]();if(_0x13f0c6==='')continue;if(_0x13f0c6===_0x129b76(0x14b))continue;VisuMZ[_0x129b76(0x33e)][_0x129b76(0x7e)]['push'](_0x13f0c6),VisuMZ[_0x129b76(0x33e)][_0x129b76(0x2e4)][_0x13f0c6]=_0xd69615;}},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x230)]=Math[_0x2c82ec(0x1ac)],Math[_0x2c82ec(0x1ac)]=function(){const _0x51d395=_0x2c82ec;if(this[_0x51d395(0x156)])return 0.5;return VisuMZ['Bestiary']['Math_random'][_0x51d395(0x27e)](this,arguments);},DataManager['enemyBestiaryCategories']=function(_0xa250eb){const _0x1e0997=_0x2c82ec;if(!_0xa250eb)return[];const _0x2bf805=_0xa250eb['id'];this[_0x1e0997(0x12e)]=this[_0x1e0997(0x12e)]||{};if(this[_0x1e0997(0x12e)][_0x2bf805]!==undefined)return this[_0x1e0997(0x12e)][_0x2bf805];this[_0x1e0997(0x12e)][_0x2bf805]=[];const _0x53da05=VisuMZ[_0x1e0997(0x33e)][_0x1e0997(0x14f)],_0x89019b=_0xa250eb[_0x1e0997(0x239)]||'';return _0x89019b[_0x1e0997(0x126)](_0x53da05['category'])&&(this[_0x1e0997(0x12e)][_0x2bf805]=RegExp['$1'][_0x1e0997(0x2a6)](',')['map'](_0x43095c=>_0x43095c[_0x1e0997(0x2e0)]()[_0x1e0997(0x1ad)]())),this[_0x1e0997(0x12e)][_0x2bf805][_0x1e0997(0x277)]<=0x0&&(this[_0x1e0997(0x12e)][_0x2bf805]=[Game_Enemy[_0x1e0997(0x257)][_0x1e0997(0x344)]['toLowerCase']()[_0x1e0997(0x1ad)]()]),this[_0x1e0997(0x12e)][_0x2bf805];},DataManager[_0x2c82ec(0x8b)]=function(_0x403b62){const _0x2babce=_0x2c82ec;if(!_0x403b62)return![];if(_0x403b62['name']['trim']()==='')return![];if(_0x403b62[_0x2babce(0x10c)][_0x2babce(0x2a5)](_0x2babce(0x92)))return![];const _0x2f5d56=_0x403b62['id'];this[_0x2babce(0x36a)]=this['_showEnemyInBestiary']||{};if(this[_0x2babce(0x36a)][_0x2f5d56]!==undefined)return this['_showEnemyInBestiary'][_0x2f5d56];let _0x5aa61b=!![];const _0x368a15=VisuMZ[_0x2babce(0x33e)][_0x2babce(0x14f)],_0x37c412=_0x403b62[_0x2babce(0x239)]||'';if(_0x37c412[_0x2babce(0x126)](_0x368a15[_0x2babce(0x2f3)]))_0x5aa61b=![];else _0x37c412['match'](/<SWAP ENEMIES>\s*([\s\S]*)\s*<\/SWAP ENEMIES>/i)&&(_0x5aa61b=![]);return this[_0x2babce(0x36a)][_0x2f5d56]=_0x5aa61b,this[_0x2babce(0x36a)][_0x2f5d56];},DataManager[_0x2c82ec(0x219)]=function(_0x290707){const _0x209c10=_0x2c82ec,_0x322e98=this[_0x209c10(0x20d)](_0x290707);return _0x322e98['map'](_0x46cc1d=>$dataEnemies[_0x46cc1d])[_0x209c10(0x249)](undefined)[_0x209c10(0x249)](null);},DataManager['categoryEnemyIDs']=function(_0x3d7ff2){const _0x4fd5f1=_0x2c82ec;this[_0x4fd5f1(0x1c8)]=this[_0x4fd5f1(0x1c8)]||{};if(this['_categoryEnemyIDs'][_0x3d7ff2]!==undefined)return this['_categoryEnemyIDs'][_0x3d7ff2];for(const _0x411b09 of VisuMZ[_0x4fd5f1(0x33e)]['CategoryOrder']){this[_0x4fd5f1(0x1c8)][_0x411b09]=[];}for(const _0x3734ac of $dataEnemies){if(!_0x3734ac)continue;if(!this[_0x4fd5f1(0x8b)](_0x3734ac))continue;const _0x443d48=this[_0x4fd5f1(0x1cc)](_0x3734ac);for(const _0x5411de of _0x443d48){this[_0x4fd5f1(0x1c8)][_0x5411de]=this[_0x4fd5f1(0x1c8)][_0x5411de]||[],this[_0x4fd5f1(0x1c8)][_0x5411de][_0x4fd5f1(0x155)](_0x3734ac['id']);}}for(const _0x4f76a2 in this[_0x4fd5f1(0x1c8)]){this['_categoryEnemyIDs'][_0x4f76a2][_0x4fd5f1(0x265)]((_0x50dc02,_0x174eb0)=>_0x50dc02-_0x174eb0);}return this[_0x4fd5f1(0x1c8)][_0x3d7ff2];},DataManager['bestiaryTotalEnemies']=function(){const _0x121971=_0x2c82ec;if(this[_0x121971(0x2ca)]!==undefined)return this[_0x121971(0x2ca)];let _0x3a9683=[];for(const _0x3b1c16 of VisuMZ[_0x121971(0x33e)]['CategoryOrder']){const _0x4b0ce6=this['categoryEnemyIDs'](_0x3b1c16);_0x3a9683=_0x3a9683['concat'](_0x4b0ce6);}return this[_0x121971(0x2ca)]=_0x3a9683[_0x121971(0x356)]((_0x2c5327,_0x5f2f8d,_0x35277a)=>_0x35277a[_0x121971(0xc0)](_0x2c5327)===_0x5f2f8d)[_0x121971(0x277)],this[_0x121971(0x2ca)];},ImageManager[_0x2c82ec(0x131)]=ImageManager[_0x2c82ec(0x131)]||0x9,ImageManager[_0x2c82ec(0x9a)]=ImageManager['svActorVertCells']||0x6,ImageManager[_0x2c82ec(0x12a)]=function(_0x4ab233){const _0x2feda7=_0x2c82ec,_0x2d4407=this[_0x2feda7(0x360)](_0x4ab233)[0x0];return _0x2d4407===''?new Bitmap(0x1,0x1):_0x2feda7(0x322)===_0x2feda7(0x383)?_0x29e1b9[_0x2feda7(0x319)]:this[_0x2feda7(0xa6)](_0x2d4407);},ImageManager[_0x2c82ec(0x27f)]=function(_0x510249){const _0x468a58=_0x2c82ec,_0x41a58f=this[_0x468a58(0x360)](_0x510249)[0x1];return _0x41a58f===''?new Bitmap(0x1,0x1):this[_0x468a58(0x266)](_0x41a58f);},ImageManager[_0x2c82ec(0x360)]=function(_0x34bab4){const _0x42e9b8=_0x2c82ec,_0x5a618f=$dataEnemies[_0x34bab4];if(!_0x5a618f)return['',''];this[_0x42e9b8(0x174)]=this[_0x42e9b8(0x174)]||{};if(this[_0x42e9b8(0x174)][_0x34bab4]!==undefined)return this[_0x42e9b8(0x174)][_0x34bab4];this[_0x42e9b8(0x174)][_0x34bab4]=['',''];const _0x411ac7=VisuMZ[_0x42e9b8(0x33e)][_0x42e9b8(0x14f)],_0x3bc9a6=_0x5a618f['note']||'';if(_0x3bc9a6[_0x42e9b8(0x126)](_0x411ac7['battleback1'])){if(_0x42e9b8(0x17b)===_0x42e9b8(0x17b))this['_bestiaryEnemyBattlebackData'][_0x34bab4][0x0]=String(RegExp['$1'])[_0x42e9b8(0x1ad)]();else{const _0x229050=_0x40464d[_0x42e9b8(0x1f4)](_0x435b36[_0x42e9b8(0x248)]());_0x229050[_0x42e9b8(0x37f)](this['processFullEnemyImage'][_0x42e9b8(0x285)](this,_0x229050,_0x327b0a));}}return _0x3bc9a6[_0x42e9b8(0x126)](_0x411ac7['battleback2'])&&(this[_0x42e9b8(0x174)][_0x34bab4][0x1]=String(RegExp['$1'])[_0x42e9b8(0x1ad)]()),this[_0x42e9b8(0x174)][_0x34bab4][0x0]===''&&this[_0x42e9b8(0x174)][_0x34bab4][0x1]===''&&(this[_0x42e9b8(0x174)][_0x34bab4]=[Window_BestiaryEnemyImage['SETTINGS'][_0x42e9b8(0x21d)],Window_BestiaryEnemyImage[_0x42e9b8(0x2c8)]['defaultBattleback2']]),this['_bestiaryEnemyBattlebackData'][_0x34bab4];},ImageManager['bestiaryEnemyCustomImageFilename']=function(_0x32fcb0){const _0x3c0f27=_0x2c82ec,_0xe212f2=$dataEnemies[_0x32fcb0];if(!_0xe212f2)return'';this['_bestiaryEnemyCustomImageFilename']=this[_0x3c0f27(0x123)]||{};if(this[_0x3c0f27(0x123)][_0x32fcb0]!==undefined)return this['_bestiaryEnemyCustomImageFilename'][_0x32fcb0];this[_0x3c0f27(0x123)][_0x32fcb0]='';const _0x3f668c=VisuMZ[_0x3c0f27(0x33e)][_0x3c0f27(0x14f)],_0x4fe520=_0xe212f2[_0x3c0f27(0x239)]||'';return _0x4fe520[_0x3c0f27(0x126)](_0x3f668c[_0x3c0f27(0x94)])&&(this[_0x3c0f27(0x123)][_0x32fcb0]=String(RegExp['$1'])['trim']()),this[_0x3c0f27(0x123)][_0x32fcb0];},TextManager[_0x2c82ec(0x240)]=VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x335)]['Name'],TextManager[_0x2c82ec(0x33e)]={'buttonAssist':{'view':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0x368)]??_0x2c82ec(0x2d5),'expand':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x235)]??'Expand','collapse':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)]['buttonAssist_Collapse']??'Collapse','switch':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x147)]??'Switch\x20Monster','fastScrollLore':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)]['buttonAssist_FastScroll']??_0x2c82ec(0x34c),'slowScrollLore':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)]['buttonAssist_SlowScroll']??_0x2c82ec(0x296)},'categoryWindow':{'maskChar':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab']['CategoryWindow_MaskChar']??'?','openCategoriesFmt':VisuMZ['Bestiary']['Settings']['Vocab'][_0x2c82ec(0x30d)]??'-\x20%1\x20(%2%)','closedCategoriesFmt':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)]['CategoryWindow_ClosedCategory']??_0x2c82ec(0x21f),'fixedPercentage':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x20f)]??0x2},'nameWindow':{'category':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x1db)]??'Please\x20select\x20a\x20monster\x20to\x20view.'},'subWindow':{'defeatedFmt':VisuMZ['Bestiary']['Settings'][_0x2c82ec(0x14c)]['SubWindow_Defeated']??'Defeated:\x20%1','seenFmt':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0x259)]??_0x2c82ec(0xfa),'completionFmt':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x1a2)]??_0x2c82ec(0x280),'fixedPercentage':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0x1ce)]??0x2},'basicWindow':{'levelUpToMax':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0x18c)]??_0x2c82ec(0x337),'levelUp':VisuMZ['Bestiary']['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0x1a9)]??_0x2c82ec(0x2db),'levelDown':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0xcb)]??_0x2c82ec(0x12f),'levelDownToMin':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0x95)]??_0x2c82ec(0x187)},'elementsWindow':{'weak':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)]['ElementsWindow_Weak']??_0x2c82ec(0x307),'neutral':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x2cc)]??_0x2c82ec(0x2d6),'resist':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)]['ElementsWindow_Resist']??_0x2c82ec(0x2bf),'immune':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x2dc)]??_0x2c82ec(0x1c4),'absorb':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)]['ElementsWindow_Absorb']??_0x2c82ec(0x10a)},'rewardsWindow':{'chance100':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x22b)]??'\x5cC[24]Guaranteed','chance50':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x17e)]??_0x2c82ec(0x371),'chance20':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x312)]??_0x2c82ec(0x2a3),'chance10':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x28d)]??'\x5cC[5]Rare','chance0':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x1eb)]??'\x5cC[27]Super\x20Rare','conditional':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0xdd)]??_0x2c82ec(0x20e)},'traitsWindow':{'openCategoriesFmt':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0xa5)]??_0x2c82ec(0x1d3),'closedCategoriesFmt':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0xf3)]??_0x2c82ec(0x357),'traitHelp':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab']['TraitsWindow_CategoryHelpDesc']??'This\x20is\x20the\x20property\x20type.','nullHelp':VisuMZ['Bestiary'][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0x2a1)]??_0x2c82ec(0x23b)},'loreWindow':{'defaultLoreFmt':VisuMZ[_0x2c82ec(0x33e)]['Settings']['Vocab'][_0x2c82ec(0x1cf)]??'Little\x20is\x20known\x20about\x20this\x20monster.'}},TextManager[_0x2c82ec(0x2b9)]=function(_0x2f57c8){const _0x52f754=_0x2c82ec;if(!_0x2f57c8)return'';const _0x2d33c1=_0x2f57c8[_0x52f754(0x1c6)]()['id'];this[_0x52f754(0x19e)]=this['_getBestiaryLore']||{};if(this[_0x52f754(0x19e)][_0x2d33c1]!==undefined){if(_0x52f754(0x21c)!=='KvagJ'){if(!_0x3b0468[_0x52f754(0xd7)])return![];const _0x4ab7cb=_0x4539d0[_0x52f754(0x387)][_0x52f754(0x1c6)]();return _0x4ab7cb[_0x52f754(0x27c)]()[_0x52f754(0xfe)]!==''?(this[_0x52f754(0x329)]=_0x4ab7cb['dragonbonesData'](),!![]):![];}else return this[_0x52f754(0x19e)][_0x2d33c1];}this[_0x52f754(0x19e)][_0x2d33c1]=TextManager[_0x52f754(0x33e)][_0x52f754(0x26a)][_0x52f754(0x373)][_0x52f754(0x191)](_0x2f57c8[_0x52f754(0x369)]());const _0x443085=VisuMZ[_0x52f754(0x33e)]['RegExp'],_0x328019=_0x2f57c8[_0x52f754(0x1c6)]()['note']||'';return _0x328019['match'](_0x443085[_0x52f754(0x2f5)])&&(this[_0x52f754(0x19e)][_0x2d33c1]=String(RegExp['$1'])['trim']()),this['_getBestiaryLore'][_0x2d33c1];},ColorManager['getColor']=function(_0x4f2adb){const _0x45cf47=_0x2c82ec;return _0x4f2adb=String(_0x4f2adb),_0x4f2adb[_0x45cf47(0x126)](/#(.*)/i)?_0x45cf47(0x15f)[_0x45cf47(0x191)](String(RegExp['$1'])):this[_0x45cf47(0x330)](Number(_0x4f2adb));},SceneManager['isSceneBattle']=function(){const _0x44311a=_0x2c82ec;return this[_0x44311a(0x387)]&&this[_0x44311a(0x387)][_0x44311a(0x2f7)]===Scene_Battle;},Game_Temp['prototype']['canDebugViewBestiary']=function(){const _0x1577ca=_0x2c82ec;return this[_0x1577ca(0x18e)]()&&this[_0x1577ca(0x31c)];},Game_Temp[_0x2c82ec(0x1a3)]['setDebugViewBestiary']=function(_0x219af6){const _0x2ad944=_0x2c82ec;this[_0x2ad944(0x31c)]=_0x219af6;},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x1e0)]=Game_System[_0x2c82ec(0x1a3)]['initialize'],Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b6)]=function(){const _0x82ae9e=_0x2c82ec;VisuMZ[_0x82ae9e(0x33e)][_0x82ae9e(0x1e0)][_0x82ae9e(0x2cd)](this),this[_0x82ae9e(0x1cb)](),this[_0x82ae9e(0xa8)]();},Game_System['prototype']['initBestiaryMainMenu']=function(){const _0x3e227d=_0x2c82ec;this['_Bestiary_MainMenu']={'shown':VisuMZ[_0x3e227d(0x33e)][_0x3e227d(0x13c)][_0x3e227d(0x335)][_0x3e227d(0xa9)],'enabled':VisuMZ[_0x3e227d(0x33e)][_0x3e227d(0x13c)][_0x3e227d(0x335)][_0x3e227d(0x1dd)]};},Game_System[_0x2c82ec(0x1a3)]['isMainMenuBestiaryVisible']=function(){const _0x514e80=_0x2c82ec;if(this['_Bestiary_MainMenu']===undefined)this['initBestiaryMainMenu']();return this[_0x514e80(0x2bc)]['shown'];},Game_System[_0x2c82ec(0x1a3)]['setMainMenuBestiaryVisible']=function(_0x25cb5e){const _0x50023b=_0x2c82ec;if(this[_0x50023b(0x2bc)]===undefined)this[_0x50023b(0x1cb)]();this['_Bestiary_MainMenu'][_0x50023b(0x384)]=_0x25cb5e;},Game_System['prototype'][_0x2c82ec(0x216)]=function(){const _0x4614b0=_0x2c82ec;if(this[_0x4614b0(0x2bc)]===undefined)this[_0x4614b0(0x1cb)]();return this[_0x4614b0(0x2bc)][_0x4614b0(0x183)];},Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0x366)]=function(_0x3cb146){const _0x5bf127=_0x2c82ec;if(this[_0x5bf127(0x2bc)]===undefined)this['initBestiaryMainMenu']();this['_Bestiary_MainMenu'][_0x5bf127(0x183)]=_0x3cb146;},Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0x341)]=function(_0x5b8fba){const _0x38ca8c=_0x2c82ec;if(Imported[_0x38ca8c(0x205)])return this[_0x38ca8c(0xf9)]()[_0x38ca8c(0x2a5)](_0x5b8fba);else{if(_0x38ca8c(0x29e)!==_0x38ca8c(0x37b))return this[_0x38ca8c(0x1b1)](_0x5b8fba)>0x0;else{if(this[_0x38ca8c(0x2bc)]===_0x352b97)this[_0x38ca8c(0x1cb)]();this[_0x38ca8c(0x2bc)]['shown']=_0x117635;}}},Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0xa8)]=function(){const _0x1f9c91=_0x2c82ec;this['_timesEnemyDefeated']=this[_0x1f9c91(0x75)]||{},this[_0x1f9c91(0x87)]=this['_timesEnemySeen']||{};},Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b1)]=function(_0x1fa3ba){const _0x2636a5=_0x2c82ec;if(this[_0x2636a5(0x75)]===undefined)this['initBestiarySettings']();return this[_0x2636a5(0x75)][_0x1fa3ba]=this[_0x2636a5(0x75)][_0x1fa3ba]||0x0,this[_0x2636a5(0x75)][_0x1fa3ba];},Game_System['prototype'][_0x2c82ec(0x30c)]=function(_0x2df80c,_0x14d89d){const _0x36ffd6=_0x2c82ec;if(this['_timesEnemyDefeated']===undefined)this[_0x36ffd6(0xa8)]();this[_0x36ffd6(0x75)][_0x2df80c]=this[_0x36ffd6(0x75)][_0x2df80c]||0x0,this[_0x36ffd6(0x75)][_0x2df80c]+=_0x14d89d||0x1;},Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0xcc)]=function(){const _0x2932cc=_0x2c82ec;let _0x51ba78=0x0;for(const _0x5adc82 of $dataEnemies){if(!_0x5adc82)continue;if(DataManager[_0x2932cc(0x8b)](_0x5adc82)&&this['timesEnemyDefeated'](_0x5adc82['id'])>0x0){if(_0x2932cc(0x22a)===_0x2932cc(0x22a))_0x51ba78++;else{const _0x3ca505=_0x3d1377[_0x2932cc(0x1bb)](_0x56e31e);if(!_0x3ca505)return![];if(!_0x3ca505['Visible'])return![];return _0x4b4f2e[_0x2932cc(0x2c8)][_0x2932cc(0x146)]?!![]:_0x4328db&&_0x11a375['getTraitSet'](_0x5da69b)!=='';}}}return _0x51ba78;},VisuMZ[_0x2c82ec(0x33e)]['Game_BattlerBase_addNewState']=Game_BattlerBase[_0x2c82ec(0x1a3)][_0x2c82ec(0x336)],Game_BattlerBase[_0x2c82ec(0x1a3)][_0x2c82ec(0x336)]=function(_0x1beedb){const _0x56e613=_0x2c82ec,_0x5d9a82=this[_0x56e613(0x34d)]();VisuMZ[_0x56e613(0x33e)][_0x56e613(0x23c)][_0x56e613(0x2cd)](this,_0x1beedb),this[_0x56e613(0x1b8)]()&&_0x5d9a82&&this['isDead']()&&$gameSystem['addTimesEnemyDefeated'](this[_0x56e613(0x119)](),0x1);},Game_System[_0x2c82ec(0x1a3)]['timesEnemySeen']=function(_0x275c83){const _0x9541d0=_0x2c82ec;if(this['_timesEnemyDefeated']===undefined)this[_0x9541d0(0xa8)]();return this[_0x9541d0(0x75)][_0x275c83]=this[_0x9541d0(0x75)][_0x275c83]||0x0,this[_0x9541d0(0x75)][_0x275c83];},Game_System[_0x2c82ec(0x1a3)][_0x2c82ec(0x15d)]=function(_0xbdd533,_0x4e1ba6){const _0x2e9de3=_0x2c82ec;if(this[_0x2e9de3(0x87)]===undefined)this[_0x2e9de3(0xa8)]();this[_0x2e9de3(0x87)][_0xbdd533]=this[_0x2e9de3(0x87)][_0xbdd533]||0x0,this[_0x2e9de3(0x87)][_0xbdd533]+=_0x4e1ba6||0x1;},VisuMZ['Bestiary'][_0x2c82ec(0x21a)]=BattleManager[_0x2c82ec(0x1f9)],BattleManager[_0x2c82ec(0x1f9)]=function(_0x52ebb3,_0x476c42,_0x70851f){const _0x497bdf=_0x2c82ec;VisuMZ[_0x497bdf(0x33e)][_0x497bdf(0x21a)][_0x497bdf(0x2cd)](this,_0x52ebb3,_0x476c42,_0x70851f);for(const _0x51a17c of $gameTroop['members']()){if(_0x497bdf(0x221)===_0x497bdf(0x313)){const _0x23f865=_0x4f9b0b(_0x1a3a34['$2'])[_0x497bdf(0x2a6)](',');_0x4caf1d=_0x375a3e['concat'](_0x23f865);}else $gameSystem[_0x497bdf(0x15d)](_0x51a17c[_0x497bdf(0x119)](),0x1);}},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x24d)]=Game_BattlerBase[_0x2c82ec(0x1a3)][_0x2c82ec(0x18d)],Game_BattlerBase[_0x2c82ec(0x1a3)]['refresh']=function(){const _0x45e4ca=_0x2c82ec;this['_cache']={},this['_tp']=this[_0x45e4ca(0x17d)][_0x45e4ca(0x32f)](0x0,this[_0x45e4ca(0xb4)]()),VisuMZ[_0x45e4ca(0x33e)][_0x45e4ca(0x24d)][_0x45e4ca(0x2cd)](this);},Game_Enemy[_0x2c82ec(0x257)]={'defaultCategory':VisuMZ[_0x2c82ec(0x33e)]['Settings']['DefaultCategory']??'Common'},Game_Enemy[_0x2c82ec(0x1a3)][_0x2c82ec(0x314)]=function(){const _0x1c8e42=_0x2c82ec,_0x457a19=[];for(const _0x2b4f9b of this[_0x1c8e42(0x1c6)]()[_0x1c8e42(0x14a)]){const _0x38fa18=$dataSkills[_0x2b4f9b[_0x1c8e42(0xb5)]];if(_0x38fa18&&!_0x457a19['includes'](_0x38fa18))_0x457a19[_0x1c8e42(0x155)](_0x38fa18);}return _0x457a19;},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x31e)]=function(_0x3cc2ec,_0x3a9ee0){const _0x3dd568=_0x2c82ec;let _0x52a79d=[];const _0x29e1fa=_0x3a9ee0[_0x3dd568(0x1c6)]()[_0x3dd568(0x239)]||'';this[_0x3dd568(0x173)](_0x52a79d,_0x3cc2ec,_0x29e1fa),this[_0x3dd568(0x163)](_0x52a79d,_0x3cc2ec,_0x29e1fa),this[_0x3dd568(0x184)](_0x52a79d,_0x3cc2ec,_0x29e1fa);if(_0x52a79d[_0x3dd568(0x277)]<=0x0){const _0x4ed3b2=DataManager[_0x3dd568(0x1bb)](_0x3cc2ec);if(_0x4ed3b2['RandomizeEnemy']){_0x4ed3b2['Default'][_0x3dd568(0x25c)]&&_0x52a79d[_0x3dd568(0x155)](_0x4ed3b2[_0x3dd568(0x149)][_0x3dd568(0x1c3)]);for(const _0x10fbc0 in _0x4ed3b2[_0x3dd568(0x347)]){if('UJMeT'===_0x3dd568(0xbb))_0x52a79d[_0x3dd568(0x155)](_0x4ed3b2['List'][_0x10fbc0][_0x3dd568(0x1c3)]);else{this[_0x3dd568(0x327)]=this[_0x3dd568(0x327)]||{};for(const _0x12961d in this['_symbolWindows']){this[_0x3dd568(0x327)][_0x12961d]['hide']();}}}return _0x52a79d[_0x3dd568(0x218)](_0x4b335d=>String(_0x4b335d)['toUpperCase']()[_0x3dd568(0x1ad)]());}}return _0x52a79d[_0x3dd568(0x218)](_0x214672=>String(_0x214672)[_0x3dd568(0x273)]()['trim']());},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x173)]=function(_0x2ee976,_0x30d6af,_0x287e3c){const _0x3cf03d=_0x2c82ec,_0x12413e={'ELEMENT':'Element','SUBELEMENT':_0x3cf03d(0x11c),'GENDER':_0x3cf03d(0x1e2),'RACE':_0x3cf03d(0x309),'NATURE':'Nature','ALIGNMENT':_0x3cf03d(0xd0),'BLESSING':_0x3cf03d(0x227),'CURSE':_0x3cf03d(0x138),'ZODIAC':_0x3cf03d(0xfb),'VARIANT':'Variant'};if(_0x287e3c[_0x3cf03d(0x126)](/<TRAIT SETS>\s*([\s\S]*)\s*<\/TRAIT SETS>/i)){if('CnEuC'!==_0x3cf03d(0x2f9)){if(!_0x559e11)return;const _0x3e29c0=_0x40f8fa['Bestiary'][_0x3cf03d(0x340)],_0x225ec5=[_0x3cf03d(0x378),_0x3cf03d(0x319),'chance20',_0x3cf03d(0x256),_0x3cf03d(0x18b),_0x3cf03d(0x2f2)];let _0x25d351='';for(const _0x2601f1 of _0x225ec5){if(_0x32dc38===_0x3e29c0[_0x2601f1])_0x25d351=_0x2601f1;}let _0x1a5a01='';if(_0x1f677e['isItem'](_0x2d7439))_0x1a5a01='items';if(_0x5de695['isWeapon'](_0x1d9fe0))_0x1a5a01=_0x3cf03d(0x2d9);if(_0x581b7a[_0x3cf03d(0x1fc)](_0x262643))_0x1a5a01='armors';this[_0x3cf03d(0x14d)][_0x25d351][_0x1a5a01][_0x3cf03d(0x155)](_0x2b7282);}else{const _0x112d90=String(RegExp['$1'])[_0x3cf03d(0x2a6)](/[\r\n]+/);for(const _0x47ea2e of _0x112d90){if(_0x47ea2e[_0x3cf03d(0x126)](/(.*):[ ](.*)/i)){if(_0x3cf03d(0x177)==='Ldqou')_0x1b8dab[_0x3cf03d(0x126)](/(.*):[ ](.*)/i)&&_0x2f8b18[_0x3cf03d(0x155)](_0x5addc8['$1']['trim']());else{const _0x4054ae=String(RegExp['$1'])[_0x3cf03d(0x273)]()['trim'](),_0x4f2fbf=String(RegExp['$2'])[_0x3cf03d(0x2a6)](','),_0xc4d02c=_0x12413e[_0x4054ae];_0xc4d02c&&_0xc4d02c===_0x30d6af&&(_0x2ee976=_0x2ee976[_0x3cf03d(0x35c)](_0x4f2fbf));}}}}}},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x163)]=function(_0x4b0a55,_0x4d2e95,_0x1b6a1d){const _0x4d2594=_0x2c82ec,_0x540e8e={'Element':/<ELEMENT:[ ](.*)>/i,'SubElement':/<SUBELEMENT:[ ](.*)>/i,'Gender':/<GENDER:[ ](.*)>/i,'Race':/<RACE:[ ](.*)>/i,'Nature':/<NATURE:[ ](.*)>/i,'Alignment':/<ALIGNMENT:[ ](.*)>/i,'Blessing':/<BLESSING:[ ](.*)>/i,'Curse':/<CURSE:[ ](.*)>/i,'Zodiac':/<ZODIAC:[ ](.*)>/i,'Variant':/<VARIANT:[ ](.*)>/i},_0x3d7a0d=_0x540e8e[_0x4d2e95];if(!_0x3d7a0d)return;if(_0x1b6a1d[_0x4d2594(0x126)](/<ELEMENT:[ ](.*)\/(.*)>/i)){if(_0x4d2e95===_0x4d2594(0x35e))_0x4b0a55[_0x4d2594(0x155)](String(RegExp['$1'])[_0x4d2594(0x1ad)]());if(_0x4d2e95==='SubElement')_0x4b0a55['push'](String(RegExp['$2'])['trim']());}else{if(_0x1b6a1d[_0x4d2594(0x126)](_0x3d7a0d)){const _0x48e1bd=String(RegExp['$2'])[_0x4d2594(0x2a6)](',');_0x4b0a55=_0x4b0a55[_0x4d2594(0x35c)](_0x48e1bd);}}},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x184)]=function(_0x312c2f,_0x59924c,_0xe62ac4){const _0x4d4dc2=_0x2c82ec,_0x403534={'Element':/<RANDOM ELEMENT>\s*([\s\S]*)\s*<\/RANDOM ELEMENT>/i,'SubElement':/<RANDOM SUBELEMENT>\s*([\s\S]*)\s*<\/RANDOM SUBELEMENT>/i,'Gender':/<RANDOM GENDER>\s*([\s\S]*)\s*<\/RANDOM GENDER>/i,'Race':/<RANDOM RACE>\s*([\s\S]*)\s*<\/RANDOM RACE>/i,'Nature':/<RANDOM NATURE>\s*([\s\S]*)\s*<\/RANDOM NATURE>/i,'Alignment':/<RANDOM ALIGNMENT>\s*([\s\S]*)\s*<\/RANDOM ALIGNMENT>/i,'Blessing':/<RANDOM BLESSING>\s*([\s\S]*)\s*<\/RANDOM BLESSING>/i,'Curse':/<RANDOM CURSE>\s*([\s\S]*)\s*<\/RANDOM CURSE>/i,'Zodiac':/<RANDOM ZODIAC>\s*([\s\S]*)\s*<\/RANDOM ZODIAC>/i,'Variant':/<RANDOM VARIANT>\s*([\s\S]*)\s*<\/RANDOM VARIANT>/i},_0x41cb9f=_0x403534[_0x59924c];if(!_0x41cb9f)return;if(_0xe62ac4[_0x4d4dc2(0x126)](_0x41cb9f)){if(_0x4d4dc2(0x34b)!==_0x4d4dc2(0x34b)){if(_0x2fecab['Bestiary'][_0x4d4dc2(0x13c)][_0x4d4dc2(0x2fb)][_0x4d4dc2(0xc7)])return _0x5071f5[_0x4d4dc2(0x33e)][_0x4d4dc2(0x13c)][_0x4d4dc2(0x2fb)][_0x4d4dc2(0xc7)][_0x4d4dc2(0x2cd)](this);const _0x444d39=_0x2a32d9[_0x4d4dc2(0x24c)]-_0x51f45d[_0x4d4dc2(0x349)](_0x27fc0e['boxWidth']*0x4/0xa),_0x5b4f11=this['mainAreaHeight']()-this['calcWindowHeight'](0x1,![])*0x2,_0x52a39b=this[_0x4d4dc2(0x262)]()?0x0:_0x3cce72['boxWidth']-_0x444d39,_0x43d6de=this[_0x4d4dc2(0x154)]()+this[_0x4d4dc2(0x2e2)](0x1,![]);return new _0x56d2ae(_0x52a39b,_0x43d6de,_0x444d39,_0x5b4f11);}else{const _0x38e6de=String(RegExp['$1'])[_0x4d4dc2(0x2a6)](/[\r\n]+/)[_0x4d4dc2(0x249)]('');for(const _0x466a29 of _0x38e6de){_0x466a29[_0x4d4dc2(0x126)](/(.*):[ ](.*)/i)&&_0x312c2f[_0x4d4dc2(0x155)](RegExp['$1'][_0x4d4dc2(0x1ad)]());}}}},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x10e)]=Scene_Menu[_0x2c82ec(0x1a3)]['createCommandWindow'],Scene_Menu[_0x2c82ec(0x1a3)][_0x2c82ec(0x225)]=function(){const _0x29633a=_0x2c82ec;VisuMZ[_0x29633a(0x33e)]['Scene_Menu_createCommandWindow']['call'](this);const _0x5426c3=this[_0x29633a(0x1e1)];_0x5426c3['setHandler']('bestiary',this[_0x29633a(0x1f2)][_0x29633a(0x285)](this));},Scene_Menu[_0x2c82ec(0x1a3)][_0x2c82ec(0x1f2)]=function(){const _0x477761=_0x2c82ec;SceneManager[_0x477761(0x155)](Scene_Bestiary);};function Scene_Bestiary(){const _0x5677fa=_0x2c82ec;this[_0x5677fa(0x1b6)](...arguments);}Scene_Bestiary[_0x2c82ec(0x1a3)]=Object['create'](Scene_MenuBase['prototype']),Scene_Bestiary['prototype']['constructor']=Scene_Bestiary,Scene_Bestiary[_0x2c82ec(0x2c8)]={'helpWindow_BgType':VisuMZ['Bestiary'][_0x2c82ec(0x13c)]['Window']['HelpWindow_BgType']??0x0,'scaleHelpWindow':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x120)]??!![]},Scene_Bestiary[_0x2c82ec(0x1a3)]['initialize']=function(){const _0x2adbd8=_0x2c82ec;Scene_MenuBase[_0x2adbd8(0x1a3)][_0x2adbd8(0x1b6)][_0x2adbd8(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x304)]=function(){return 0x0;},Scene_Bestiary['prototype']['needsPageButtons']=function(){return!![];},Scene_Bestiary['prototype'][_0x2c82ec(0x111)]=function(){const _0x20321e=_0x2c82ec;Scene_MenuBase[_0x20321e(0x1a3)]['createPageButtons'][_0x20321e(0x2cd)](this),this[_0x20321e(0x105)][_0x20321e(0x311)](this[_0x20321e(0x104)][_0x20321e(0x285)](this)),this[_0x20321e(0x254)][_0x20321e(0x311)](this[_0x20321e(0xf1)][_0x20321e(0x285)](this));},Scene_Bestiary['prototype'][_0x2c82ec(0x178)]=function(){const _0x49f05c=_0x2c82ec;return this['_dataCategoriesWindow']&&this[_0x49f05c(0x364)][_0x49f05c(0x1cd)];},Scene_Bestiary['prototype']['create']=function(){const _0x49dfbc=_0x2c82ec;Scene_MenuBase['prototype'][_0x49dfbc(0x15a)][_0x49dfbc(0x2cd)](this),this[_0x49dfbc(0x355)](),this['createAllWindows'](),this[_0x49dfbc(0x72)]();},Scene_Bestiary[_0x2c82ec(0x1a3)]['isBottomHelpMode']=function(){const _0x464701=_0x2c82ec;if(ConfigManager[_0x464701(0x2cf)]!==undefined){if(ConfigManager[_0x464701(0x2cf)]){if(_0x464701(0x89)!==_0x464701(0x89)){this[_0x464701(0x293)]['y']+=_0x12302d;let _0x5480f0=_0x5f58fa[_0x464701(0x1f5)](0x0,this['_allTextHeight']-this[_0x464701(0x179)]);this[_0x464701(0x293)]['y']=this[_0x464701(0x293)]['y'][_0x464701(0x32f)](0x0,_0x5480f0);}else return ConfigManager['uiHelpPosition'];}}return Scene_MenuBase[_0x464701(0x1a3)][_0x464701(0x1fd)][_0x464701(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x262)]=function(){const _0x1aa06c=_0x2c82ec;if(ConfigManager['uiMenuStyle']!==undefined){if(ConfigManager['uiMenuStyle'])return ConfigManager[_0x1aa06c(0x2eb)];}return Scene_MenuBase[_0x1aa06c(0x1a3)][_0x1aa06c(0x262)]['call'](this);},Scene_Bestiary[_0x2c82ec(0x1a3)]['createEnemy']=function(){const _0x44b4d8=_0x2c82ec;this[_0x44b4d8(0x374)]=new Game_Enemy(0x1,0x0,0x0);},Scene_Bestiary['prototype'][_0x2c82ec(0x1c6)]=function(){return this['_enemy'];},Scene_Bestiary[_0x2c82ec(0x1a3)]['updateEnemyID']=function(_0x141190){const _0x11af83=_0x2c82ec;Math['_noRandom']=!![],this[_0x11af83(0x1c6)]()[_0x11af83(0x1f9)](_0x141190,0x0,0x0),Math[_0x11af83(0x156)]=![];},Scene_Bestiary['prototype'][_0x2c82ec(0x2f6)]=function(){const _0x195527=_0x2c82ec;this[_0x195527(0xb3)](),this[_0x195527(0x2af)](),this[_0x195527(0x135)](),this[_0x195527(0x2d3)](),this[_0x195527(0xee)](),this[_0x195527(0x1e7)](),this[_0x195527(0x8c)](),this[_0x195527(0x291)](),this[_0x195527(0x362)](),this[_0x195527(0x209)](),this[_0x195527(0xa4)](),this[_0x195527(0x22d)]();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x1e7)]=function(){const _0x293194=_0x2c82ec;Scene_MenuBase[_0x293194(0x1a3)][_0x293194(0x1e7)][_0x293194(0x2cd)](this);if(Scene_Bestiary[_0x293194(0x2c8)][_0x293194(0x2c0)]){if('iiheH'===_0x293194(0x320)){const _0x467979=this[_0x293194(0x1f6)]();this['_helpWindow'][_0x293194(0x164)]['x']=this['_helpWindow'][_0x293194(0x164)]['y']=_0x467979;}else{const _0x3788b8=this[_0x293194(0x24e)];this['_allTextHeight']=0x0,this[_0x293194(0x231)]=this[_0x293194(0x10f)](_0x3788b8)[_0x293194(0x346)];}}this[_0x293194(0x11f)][_0x293194(0x260)](Scene_Bestiary[_0x293194(0x2c8)][_0x293194(0x9b)]),this[_0x293194(0x11f)][_0x293194(0x243)]();},Scene_Bestiary['prototype'][_0x2c82ec(0x1f6)]=function(){const _0x48ecca=_0x2c82ec;if(!Scene_Bestiary[_0x48ecca(0x2c8)][_0x48ecca(0x2c0)])return 0x1;return this[_0x48ecca(0x2d1)]()[_0x48ecca(0x70)]/Graphics[_0x48ecca(0x24c)];},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x36c)]=function(){const _0x38e68c=_0x2c82ec;if(VisuMZ[_0x38e68c(0x33e)][_0x38e68c(0x13c)][_0x38e68c(0x2fb)]['HelpWindow_RectJS'])return VisuMZ['Bestiary'][_0x38e68c(0x13c)][_0x38e68c(0x2fb)][_0x38e68c(0x1e3)][_0x38e68c(0x2cd)](this);const _0x487947=this[_0x38e68c(0x2d1)](),_0x59b443=this['helpWindowRatio'](),_0x19eac3=Graphics[_0x38e68c(0x24c)],_0x4d84c7=this[_0x38e68c(0x2e2)](0x2,![]),_0x113ca1=_0x487947['x'],_0x1d826d=_0x487947['y']+(this[_0x38e68c(0x1fd)]()?_0x487947[_0x38e68c(0x346)]-_0x4d84c7*_0x59b443:0x0);return new Rectangle(_0x113ca1,_0x1d826d,_0x19eac3,_0x4d84c7);},Scene_Bestiary['prototype'][_0x2c82ec(0xb3)]=function(){const _0x4c4f2f=_0x2c82ec,_0x4aba46=this[_0x4c4f2f(0x270)](),_0x54903e=new Window_BestiaryName(_0x4aba46);_0x54903e[_0x4c4f2f(0x1c0)](),this[_0x4c4f2f(0x33b)](_0x54903e),this[_0x4c4f2f(0x85)]=_0x54903e,_0x54903e[_0x4c4f2f(0x260)](Window_BestiaryName[_0x4c4f2f(0x2c8)][_0x4c4f2f(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x270)]=function(){const _0x3743c9=_0x2c82ec;if(VisuMZ[_0x3743c9(0x33e)]['Settings'][_0x3743c9(0x2fb)][_0x3743c9(0x170)])return VisuMZ[_0x3743c9(0x33e)][_0x3743c9(0x13c)][_0x3743c9(0x2fb)][_0x3743c9(0x170)][_0x3743c9(0x2cd)](this);const _0x32437d=Graphics['boxWidth'],_0x28232e=this[_0x3743c9(0x2e2)](0x1,![]),_0x26caf2=0x0,_0x3b7e09=this['mainAreaTop']();return new Rectangle(_0x26caf2,_0x3b7e09,_0x32437d,_0x28232e);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x2af)]=function(){const _0x4c8595=_0x2c82ec,_0x515e6b=this[_0x4c8595(0x282)](),_0x12419d=new Window_BestiarySub(_0x515e6b);this[_0x4c8595(0x33b)](_0x12419d),this[_0x4c8595(0x287)]=_0x12419d,_0x12419d[_0x4c8595(0x260)](Window_BestiarySub[_0x4c8595(0x2c8)]['bgType']);},Scene_Bestiary['prototype'][_0x2c82ec(0x282)]=function(){const _0x2d1fb0=_0x2c82ec;if(VisuMZ['Bestiary'][_0x2d1fb0(0x13c)][_0x2d1fb0(0x2fb)]['SubWindow_RectJS']){if('MYEUH'==='vmtLq')this[_0x2d1fb0(0x29c)](_0x34f284);else return VisuMZ[_0x2d1fb0(0x33e)][_0x2d1fb0(0x13c)][_0x2d1fb0(0x2fb)][_0x2d1fb0(0x324)][_0x2d1fb0(0x2cd)](this);}const _0x46d5d0=Graphics['boxWidth'],_0x578a53=this[_0x2d1fb0(0x2e2)](0x1,![]),_0x4f9a64=0x0,_0x120180=this[_0x2d1fb0(0x79)]()-_0x578a53;return new Rectangle(_0x4f9a64,_0x120180,_0x46d5d0,_0x578a53);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x135)]=function(){const _0x1962f9=_0x2c82ec,_0xada4a4=this[_0x1962f9(0x16d)](),_0x115210=new Window_BestiaryEnemyList(_0xada4a4);_0x115210[_0x1962f9(0x133)](this[_0x1962f9(0x287)]),_0x115210['setHandler'](_0x1962f9(0x23a),this['toggleEnemyCategory']['bind'](this)),_0x115210['setHandler'](_0x1962f9(0x1c6),this[_0x1962f9(0xad)][_0x1962f9(0x285)](this)),_0x115210[_0x1962f9(0x198)](_0x1962f9(0x10d),this[_0x1962f9(0x301)][_0x1962f9(0x285)](this)),this[_0x1962f9(0x33b)](_0x115210),this[_0x1962f9(0x1de)]=_0x115210,_0x115210[_0x1962f9(0x260)](Window_BestiaryEnemyList[_0x1962f9(0x2c8)][_0x1962f9(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x16d)]=function(){const _0x301978=_0x2c82ec;if(VisuMZ['Bestiary'][_0x301978(0x13c)]['Window'][_0x301978(0x127)]){if(_0x301978(0x24a)==='qOMVf')this[_0x301978(0x11f)][_0x301978(0x2fc)]();else return VisuMZ[_0x301978(0x33e)]['Settings'][_0x301978(0x2fb)]['ListWindow_RectJS'][_0x301978(0x2cd)](this);}const _0x5390d6=Math['ceil'](Graphics[_0x301978(0x24c)]*0x4/0xa),_0x39dd79=this[_0x301978(0x7c)]()-this['calcWindowHeight'](0x1,![])*0x2,_0x1a9697=this['isRightInputMode']()?Graphics[_0x301978(0x24c)]-_0x5390d6:0x0,_0x3ec55d=this[_0x301978(0x154)]()+this[_0x301978(0x2e2)](0x1,![]);return new Rectangle(_0x1a9697,_0x3ec55d,_0x5390d6,_0x39dd79);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x2d3)]=function(){const _0x5e4e37=_0x2c82ec,_0x4483f8=this['imageWindowRect'](),_0x5f4a8c=new Window_BestiaryEnemyImage(_0x4483f8);this[_0x5e4e37(0x1de)][_0x5e4e37(0x325)](_0x5f4a8c),this[_0x5e4e37(0x33b)](_0x5f4a8c),this[_0x5e4e37(0x1bf)]=_0x5f4a8c,_0x5f4a8c[_0x5e4e37(0x260)](Window_BestiaryEnemyImage[_0x5e4e37(0x2c8)][_0x5e4e37(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x2d1)]=function(){const _0x42d78a=_0x2c82ec;if(VisuMZ[_0x42d78a(0x33e)]['Settings'][_0x42d78a(0x2fb)][_0x42d78a(0xc7)])return VisuMZ['Bestiary'][_0x42d78a(0x13c)][_0x42d78a(0x2fb)][_0x42d78a(0xc7)][_0x42d78a(0x2cd)](this);const _0x19542a=Graphics[_0x42d78a(0x24c)]-Math[_0x42d78a(0x349)](Graphics[_0x42d78a(0x24c)]*0x4/0xa),_0x1b8092=this[_0x42d78a(0x7c)]()-this['calcWindowHeight'](0x1,![])*0x2,_0x6d69d4=this[_0x42d78a(0x262)]()?0x0:Graphics[_0x42d78a(0x24c)]-_0x19542a,_0x169efa=this[_0x42d78a(0x154)]()+this[_0x42d78a(0x2e2)](0x1,![]);return new Rectangle(_0x6d69d4,_0x169efa,_0x19542a,_0x1b8092);},Scene_Bestiary['prototype']['createDataCategoriesWindow']=function(){const _0x3c6d59=_0x2c82ec,_0x16b291=this['dataCategoriesWindowRect'](),_0x2e9fe0=new Window_BestiaryDataCategories(_0x16b291);_0x2e9fe0[_0x3c6d59(0x198)](_0x3c6d59(0x244),this[_0x3c6d59(0xeb)][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)](_0x3c6d59(0x113),this['onDataCategoriesOpen'][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)](_0x3c6d59(0x314),this['onDataCategoriesOpen'][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)]('rewards',this[_0x3c6d59(0xeb)][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)](_0x3c6d59(0x283),this['onDataCategoriesOpen'][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)]('lore',this[_0x3c6d59(0xeb)][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)]('pageup',this[_0x3c6d59(0x104)][_0x3c6d59(0x285)](this)),_0x2e9fe0[_0x3c6d59(0x198)](_0x3c6d59(0x331),this['nextEnemy']['bind'](this)),_0x2e9fe0[_0x3c6d59(0x198)](_0x3c6d59(0x10d),this[_0x3c6d59(0x24f)][_0x3c6d59(0x285)](this)),this[_0x3c6d59(0x33b)](_0x2e9fe0),this[_0x3c6d59(0x364)]=_0x2e9fe0,_0x2e9fe0['setBackgroundType'](Window_BestiaryDataCategories[_0x3c6d59(0x2c8)]['bgType']);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x380)]=function(){const _0xf99e31=_0x2c82ec;if(VisuMZ[_0xf99e31(0x33e)][_0xf99e31(0x13c)][_0xf99e31(0x2fb)][_0xf99e31(0x160)]){if('tRIJj'!=='tRIJj'){const _0x52086f=this[_0xf99e31(0x270)](),_0x53be7d=new _0x196966(_0x52086f);_0x53be7d[_0xf99e31(0x1c0)](),this[_0xf99e31(0x33b)](_0x53be7d),this[_0xf99e31(0x85)]=_0x53be7d,_0x53be7d[_0xf99e31(0x260)](_0x363131[_0xf99e31(0x2c8)][_0xf99e31(0x157)]);}else return VisuMZ['Bestiary'][_0xf99e31(0x13c)][_0xf99e31(0x2fb)][_0xf99e31(0x160)][_0xf99e31(0x2cd)](this);}const _0x57fc3f=this[_0xf99e31(0x16d)]()['width'],_0x23ee42=this[_0xf99e31(0x2e2)](0x1,!![]),_0x57a0fd=this[_0xf99e31(0x16d)]()['x'],_0x58ca7f=this[_0xf99e31(0x154)]()+this['calcWindowHeight'](0x1,![]);return new Rectangle(_0x57a0fd,_0x58ca7f,_0x57fc3f,_0x23ee42);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x27d)]=function(){const _0x3f4f4a=_0x2c82ec;if(VisuMZ[_0x3f4f4a(0x33e)][_0x3f4f4a(0x13c)][_0x3f4f4a(0x2fb)][_0x3f4f4a(0x295)]){if(_0x3f4f4a(0x2d0)===_0x3f4f4a(0x2d0))return VisuMZ[_0x3f4f4a(0x33e)][_0x3f4f4a(0x13c)]['Window'][_0x3f4f4a(0x295)][_0x3f4f4a(0x2cd)](this);else{let _0x143c68=this['origin']['y'],_0x5629a4=_0x4b5ca9['max'](0x0,this[_0x3f4f4a(0x231)]-this['innerHeight']);this[_0x3f4f4a(0x293)]['y']=_0x5629a4;if(_0x219652&&_0x143c68!==this[_0x3f4f4a(0x293)]['y'])this[_0x3f4f4a(0x2b0)]();}}const _0x15c34f=this[_0x3f4f4a(0x16d)]()[_0x3f4f4a(0x70)],_0x2e7b92=this[_0x3f4f4a(0x7c)]()-this[_0x3f4f4a(0x2e2)](0x1,!![])-this['calcWindowHeight'](0x1,![])*0x2,_0x1786e8=this['listWindowRect']()['x'],_0xe7de4a=this[_0x3f4f4a(0x154)]()+this[_0x3f4f4a(0x2e2)](0x1,![])+this[_0x3f4f4a(0x2e2)](0x1,!![]);return new Rectangle(_0x1786e8,_0xe7de4a,_0x15c34f,_0x2e7b92);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x8c)]=function(){const _0x45e588=_0x2c82ec,_0x503bc5=this[_0x45e588(0x27d)](),_0x2a517b=new Window_BestiaryBasic(_0x503bc5);this['_dataCategoriesWindow'][_0x45e588(0x1dc)](_0x2a517b,_0x45e588(0x244)),_0x2a517b[_0x45e588(0x198)](_0x45e588(0x32b),this[_0x45e588(0x323)]['bind'](this,'max')),_0x2a517b['setHandler'](_0x45e588(0x2df),this[_0x45e588(0x323)][_0x45e588(0x285)](this,'up')),_0x2a517b[_0x45e588(0x198)](_0x45e588(0x2ef),this[_0x45e588(0x323)]['bind'](this,_0x45e588(0x271))),_0x2a517b[_0x45e588(0x198)](_0x45e588(0xf6),this['onBasicDataLevelChange'][_0x45e588(0x285)](this,_0x45e588(0x2ee))),_0x2a517b[_0x45e588(0x198)](_0x45e588(0x10d),this['onSymbolWindowCancel'][_0x45e588(0x285)](this)),this[_0x45e588(0x33b)](_0x2a517b),this[_0x45e588(0x78)]=_0x2a517b,_0x2a517b[_0x45e588(0x260)](Window_BestiaryBasic[_0x45e588(0x2c8)][_0x45e588(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)]['createElementsDataWindow']=function(){const _0x529c22=_0x2c82ec,_0xe08ed5=this[_0x529c22(0x27d)](),_0x56743b=new Window_BestiaryElements(_0xe08ed5);this[_0x529c22(0x364)][_0x529c22(0x1dc)](_0x56743b,_0x529c22(0x113)),_0x56743b[_0x529c22(0x198)](_0x529c22(0x10d),this['onSymbolWindowCancel'][_0x529c22(0x285)](this)),this[_0x529c22(0x33b)](_0x56743b),this[_0x529c22(0x279)]=_0x56743b,_0x56743b[_0x529c22(0x260)](Window_BestiaryElements[_0x529c22(0x2c8)][_0x529c22(0x157)]);},Scene_Bestiary['prototype'][_0x2c82ec(0x362)]=function(){const _0x437d4c=_0x2c82ec,_0x2f002a=this[_0x437d4c(0x27d)](),_0x27f6bf=new Window_BestiarySkills(_0x2f002a);_0x27f6bf[_0x437d4c(0x29a)](this['_helpWindow']),this['_dataCategoriesWindow'][_0x437d4c(0x1dc)](_0x27f6bf,'skills'),_0x27f6bf[_0x437d4c(0x198)](_0x437d4c(0x10d),this[_0x437d4c(0x274)]['bind'](this)),this[_0x437d4c(0x33b)](_0x27f6bf),this[_0x437d4c(0xf4)]=_0x27f6bf,_0x27f6bf['setBackgroundType'](Window_BestiarySkills[_0x437d4c(0x2c8)][_0x437d4c(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x209)]=function(){const _0x44002e=_0x2c82ec,_0x1ae855=this[_0x44002e(0x27d)](),_0x22eee9=new Window_BestiaryRewards(_0x1ae855);this[_0x44002e(0x364)][_0x44002e(0x1dc)](_0x22eee9,_0x44002e(0x206)),_0x22eee9[_0x44002e(0x198)](_0x44002e(0x10d),this[_0x44002e(0x274)][_0x44002e(0x285)](this)),this[_0x44002e(0x33b)](_0x22eee9),this[_0x44002e(0x35d)]=_0x22eee9,_0x22eee9['setBackgroundType'](Window_BestiaryRewards[_0x44002e(0x2c8)][_0x44002e(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0xa4)]=function(){const _0x454221=_0x2c82ec;if(!Imported['VisuMZ_1_ElementStatusCore'])return;const _0x3596a7=this[_0x454221(0x27d)](),_0x2b92bd=new Window_BestiaryTraits(_0x3596a7);_0x2b92bd[_0x454221(0x29a)](this[_0x454221(0x11f)]),this[_0x454221(0x364)]['setSymbolWindow'](_0x2b92bd,_0x454221(0x283)),_0x2b92bd[_0x454221(0x198)](_0x454221(0x23a),this[_0x454221(0x109)][_0x454221(0x285)](this)),_0x2b92bd[_0x454221(0x198)](_0x454221(0x288),this[_0x454221(0x1df)]['bind'](this)),_0x2b92bd[_0x454221(0x198)](_0x454221(0x10d),this['onSymbolWindowCancel'][_0x454221(0x285)](this)),this[_0x454221(0x33b)](_0x2b92bd),this['_traitsDataWindow']=_0x2b92bd,_0x2b92bd['setBackgroundType'](Window_BestiaryTraits[_0x454221(0x2c8)][_0x454221(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)]['createLoreDataWindow']=function(){const _0x499f33=_0x2c82ec,_0x3dd59b=this[_0x499f33(0x27d)](),_0x4d3d0f=new Window_BestiaryLore(_0x3dd59b);this[_0x499f33(0x364)][_0x499f33(0x1dc)](_0x4d3d0f,_0x499f33(0x2f5)),_0x4d3d0f[_0x499f33(0x198)](_0x499f33(0x10d),this[_0x499f33(0x274)][_0x499f33(0x285)](this)),this['addWindow'](_0x4d3d0f),this[_0x499f33(0x16e)]=_0x4d3d0f,_0x4d3d0f[_0x499f33(0x260)](Window_BestiaryLore[_0x499f33(0x2c8)][_0x499f33(0x157)]);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x32e)]=function(){const _0x31dea1=_0x2c82ec;this[_0x31dea1(0x1de)]['openCloseCurrentCategory'](),this[_0x31dea1(0x1de)][_0x31dea1(0x286)]();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0xad)]=function(){const _0x41517b=_0x2c82ec;this[_0x41517b(0x1de)][_0x41517b(0x224)](this[_0x41517b(0x1de)]['index']()),this[_0x41517b(0x1de)][_0x41517b(0x243)](),this[_0x41517b(0x364)][_0x41517b(0x2fc)](),this['_dataCategoriesWindow'][_0x41517b(0x286)]();const _0x97eaf9=this[_0x41517b(0x1de)]['currentExt'](),_0x4864ec=this['enemy']();this['_nameWindow'][_0x41517b(0x167)](_0x4864ec),this['_subWindow'][_0x41517b(0x353)](_0x97eaf9);},Scene_Bestiary['prototype'][_0x2c82ec(0xeb)]=function(){const _0x1b67fe=_0x2c82ec;this[_0x1b67fe(0x364)][_0x1b67fe(0x2c4)]();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0xf1)]=function(){const _0x9589b3=_0x2c82ec;let _0x2ef09f=this[_0x9589b3(0x1de)][_0x9589b3(0xf8)]();const _0x11b723=this[_0x9589b3(0x1de)][_0x9589b3(0x150)]();for(;;){if(_0x2ef09f>=this[_0x9589b3(0x1de)]['maxItems']()-0x1){if(_0x9589b3(0x29d)==='Eshui'){if(this[_0x9589b3(0x75)]===_0x8238a6)this[_0x9589b3(0xa8)]();this['_timesEnemyDefeated'][_0x16416b]=this['_timesEnemyDefeated'][_0x651d60]||0x0,this['_timesEnemyDefeated'][_0x4cb18c]+=_0x2d5917||0x1;}else _0x2ef09f=0x0;}else _0x2ef09f+=0x1;if(this[_0x9589b3(0x1de)][_0x9589b3(0x269)](_0x2ef09f)&&this[_0x9589b3(0x1de)][_0x9589b3(0x125)](_0x2ef09f)===_0x9589b3(0x1c6)){this[_0x9589b3(0x1de)]['smoothSelect'](_0x2ef09f),this[_0x9589b3(0x31f)](this[_0x9589b3(0x1de)]['currentExt']()),this[_0x9589b3(0x1de)][_0x9589b3(0x224)](this[_0x9589b3(0x1de)][_0x9589b3(0xf8)]());break;}}SoundManager[_0x9589b3(0x2ec)]();if(_0x11b723!==this['_listWindow'][_0x9589b3(0x150)]())this[_0x9589b3(0x148)]();this[_0x9589b3(0x364)][_0x9589b3(0x286)]();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x104)]=function(){const _0x10f653=_0x2c82ec;let _0x184281=this[_0x10f653(0x1de)]['index']();const _0x5f49f8=this[_0x10f653(0x1de)]['currentExt']();for(;;){if(_0x184281<=0x0)_0x184281=this[_0x10f653(0x1de)][_0x10f653(0x1f8)]()-0x1;else{if(_0x10f653(0x100)!==_0x10f653(0x100)){let _0x11e2f1=this[_0x10f653(0x293)]['y'];this[_0x10f653(0x293)]['y']=0x0;if(_0x2460e9&&_0x11e2f1!==this[_0x10f653(0x293)]['y'])this[_0x10f653(0x2b0)]();}else _0x184281-=0x1;}if(this['_listWindow'][_0x10f653(0x269)](_0x184281)&&this[_0x10f653(0x1de)][_0x10f653(0x125)](_0x184281)==='enemy'){if(_0x10f653(0x124)===_0x10f653(0x190))return _0x5c03fc[_0x10f653(0x28e)]?_0x2ce92b[_0x10f653(0xed)][_0x10f653(0x13c)][_0x10f653(0x27a)]['ExtDisplayedParams']:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];else{this[_0x10f653(0x1de)][_0x10f653(0x22e)](_0x184281),this['updateEnemyID'](this['_listWindow'][_0x10f653(0x150)]()),this[_0x10f653(0x1de)][_0x10f653(0x224)](this[_0x10f653(0x1de)][_0x10f653(0xf8)]());break;}}}SoundManager[_0x10f653(0x2ec)]();if(_0x5f49f8!==this[_0x10f653(0x1de)][_0x10f653(0x150)]())this[_0x10f653(0x148)]();this['_dataCategoriesWindow']['activate']();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x148)]=function(){const _0x77af51=_0x2c82ec;this['_nameWindow'][_0x77af51(0x167)](this['enemy']()),this[_0x77af51(0x287)]['setEnemy'](this[_0x77af51(0x1c6)]());},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x24f)]=function(){const _0x5bd574=_0x2c82ec;this[_0x5bd574(0x364)]['hide'](),this[_0x5bd574(0x1de)][_0x5bd574(0x2fc)](),this[_0x5bd574(0x1de)][_0x5bd574(0x286)](),this[_0x5bd574(0x85)][_0x5bd574(0x1c0)](),this[_0x5bd574(0x287)][_0x5bd574(0x353)](0x0);},Scene_Bestiary[_0x2c82ec(0x1a3)]['onSymbolWindowCancel']=function(){const _0x4e35a5=_0x2c82ec;this[_0x4e35a5(0x364)][_0x4e35a5(0x286)](),this[_0x4e35a5(0x364)]['deactivateSymbolWindow'](),this[_0x4e35a5(0x11f)][_0x4e35a5(0x243)]();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x323)]=function(_0x58860d){const _0x3302a8=_0x2c82ec;if(_0x58860d===_0x3302a8(0x1f5))this[_0x3302a8(0x1c6)]()[_0x3302a8(0x19c)](this[_0x3302a8(0x1c6)]()[_0x3302a8(0x32a)]());else{if(_0x58860d==='up')this[_0x3302a8(0x1c6)]()[_0x3302a8(0x348)](0x1);else{if(_0x58860d===_0x3302a8(0x271))this[_0x3302a8(0x1c6)]()['gainLevel'](-0x1);else{if(_0x58860d===_0x3302a8(0x2ee)){if(_0x3302a8(0x2e8)==='wpYOQ')this[_0x3302a8(0x1c6)]()[_0x3302a8(0x19c)](this[_0x3302a8(0x1c6)]()['minLevel']());else return _0x23e3c9[_0x3302a8(0x33e)][_0x3302a8(0x99)][_0x3302a8(0x1e9)];}}}}this[_0x3302a8(0x85)][_0x3302a8(0x167)](this['enemy']()),this[_0x3302a8(0x78)]['refresh'](),this[_0x3302a8(0x78)]['activate']();},Scene_Bestiary['prototype'][_0x2c82ec(0x109)]=function(){const _0x2762e5=_0x2c82ec;this['_traitsDataWindow'][_0x2762e5(0x26d)](),this['_traitsDataWindow']['activate']();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x1df)]=function(){const _0x5854cb=_0x2c82ec,_0x3f59bd=this[_0x5854cb(0x1d0)][_0x5854cb(0x150)]();this[_0x5854cb(0x1c6)]()[_0x5854cb(0xf5)](_0x3f59bd[0x0],_0x3f59bd[0x1]),this[_0x5854cb(0x148)](),this[_0x5854cb(0x1c6)]()[_0x5854cb(0x139)](),this['_imageWindow']['refresh'](),this[_0x5854cb(0x1d0)][_0x5854cb(0x18d)](),this['_traitsDataWindow'][_0x5854cb(0x286)]();},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x171)]=function(){const _0x5b5134=_0x2c82ec;return Scene_MenuBase['prototype'][_0x5b5134(0x171)][_0x5b5134(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x161)]=function(){const _0x25b1e5=_0x2c82ec;return Scene_MenuBase[_0x25b1e5(0x1a3)]['buttonAssistKey2'][_0x25b1e5(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x192)]=function(){const _0xba1322=_0x2c82ec;if(this[_0xba1322(0x16e)]&&this[_0xba1322(0x16e)][_0xba1322(0x1cd)])return TextManager[_0xba1322(0x12c)]('up',_0xba1322(0x271));return Scene_MenuBase[_0xba1322(0x1a3)]['buttonAssistKey3'][_0xba1322(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)]['buttonAssistKey4']=function(){const _0x46dad0=_0x2c82ec;return Scene_MenuBase[_0x46dad0(0x1a3)][_0x46dad0(0x82)]['call'](this);},Scene_Bestiary[_0x2c82ec(0x1a3)]['buttonAssistKey5']=function(){const _0x2e662d=_0x2c82ec;return Scene_MenuBase['prototype'][_0x2e662d(0x13e)][_0x2e662d(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)]['buttonAssistText1']=function(){const _0x281bb4=_0x2c82ec;if(this[_0x281bb4(0x105)]&&this[_0x281bb4(0x105)][_0x281bb4(0xe7)]){if(this[_0x281bb4(0x364)]&&this[_0x281bb4(0x364)][_0x281bb4(0x1cd)]){if('ynKwS'===_0x281bb4(0xce)){const _0x3e5426=this[_0x281bb4(0x1d0)][_0x281bb4(0x150)]();this[_0x281bb4(0x1c6)]()[_0x281bb4(0xf5)](_0x3e5426[0x0],_0x3e5426[0x1]),this[_0x281bb4(0x148)](),this[_0x281bb4(0x1c6)]()[_0x281bb4(0x139)](),this['_imageWindow'][_0x281bb4(0x18d)](),this[_0x281bb4(0x1d0)][_0x281bb4(0x18d)](),this[_0x281bb4(0x1d0)][_0x281bb4(0x286)]();}else return TextManager['Bestiary'][_0x281bb4(0x99)][_0x281bb4(0x359)];}}else{if(this['_loreDataWindow']&&this['_loreDataWindow'][_0x281bb4(0x1cd)])return TextManager['Bestiary'][_0x281bb4(0x99)][_0x281bb4(0x1e9)];}return Scene_MenuBase[_0x281bb4(0x1a3)]['buttonAssistText1'][_0x281bb4(0x2cd)](this);},Scene_Bestiary['prototype'][_0x2c82ec(0x31a)]=function(){const _0x27c9b4=_0x2c82ec;return Scene_MenuBase[_0x27c9b4(0x1a3)][_0x27c9b4(0x31a)]['call'](this);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x140)]=function(){const _0x5218f8=_0x2c82ec;if(this[_0x5218f8(0x16e)]&&this['_loreDataWindow'][_0x5218f8(0x1cd)]){if(_0x5218f8(0x338)===_0x5218f8(0x338))return TextManager['Bestiary'][_0x5218f8(0x99)]['slowScrollLore'];else _0x215702[_0x5218f8(0x1a3)][_0x5218f8(0x2fc)][_0x5218f8(0x2cd)](this),this[_0x5218f8(0x172)]();}return Scene_MenuBase[_0x5218f8(0x1a3)][_0x5218f8(0x140)]['call'](this);},Scene_Bestiary['prototype'][_0x2c82ec(0x19a)]=function(){const _0x21d188=_0x2c82ec;if(this[_0x21d188(0x1de)]&&this[_0x21d188(0x1de)][_0x21d188(0x1cd)]){if(_0x21d188(0x129)!=='mBSxE'){const _0x4ba2d5=this[_0x21d188(0x294)](this['index']());let _0xb7eac5=this[_0x21d188(0xd4)](this['index']());_0xb7eac5=_0xb7eac5[_0x21d188(0x300)](/\\I\[(\d+)\]/gi,''),_0x5a3077['resetFontSettings'](),this[_0x21d188(0x22f)](_0xb7eac5,_0x4ba2d5),this[_0x21d188(0x382)](_0xb7eac5,_0x4ba2d5),this[_0x21d188(0x1f7)](_0xb7eac5,_0x4ba2d5);}else{const _0x1eb2c6=this[_0x21d188(0x1de)][_0x21d188(0x17f)]();if(_0x1eb2c6===_0x21d188(0x1c6))return TextManager[_0x21d188(0x33e)][_0x21d188(0x99)][_0x21d188(0x247)];else{if(_0x1eb2c6==='category'){const _0x29ca40=this[_0x21d188(0x1de)][_0x21d188(0x150)]();if(this['_listWindow'][_0x21d188(0x141)](_0x29ca40)){if(_0x21d188(0x229)===_0x21d188(0x255)){const _0x3bb074=this[_0x21d188(0x27d)](),_0x550076=new _0x175c12(_0x3bb074);this[_0x21d188(0x364)][_0x21d188(0x1dc)](_0x550076,'lore'),_0x550076[_0x21d188(0x198)](_0x21d188(0x10d),this[_0x21d188(0x274)]['bind'](this)),this[_0x21d188(0x33b)](_0x550076),this[_0x21d188(0x16e)]=_0x550076,_0x550076[_0x21d188(0x260)](_0x3bdcc5[_0x21d188(0x2c8)][_0x21d188(0x157)]);}else return TextManager[_0x21d188(0x33e)]['buttonAssist']['collapse'];}else{if(_0x21d188(0x114)!==_0x21d188(0x1be))return TextManager[_0x21d188(0x33e)][_0x21d188(0x99)][_0x21d188(0xd8)];else{const _0x458291=_0x43eda6[_0x21d188(0x2ef)],_0x429e6e=_0x458291[_0x21d188(0x191)](_0x4cbfd2[_0x21d188(0x13a)]),_0x454ee9=_0xb20058['level']>_0x434ff6[_0x21d188(0x2c5)]();this['addCommand'](_0x429e6e,_0x21d188(0x2ef),_0x454ee9);}}}}}}else{if(this['_basicDataWindow']&&this[_0x21d188(0x78)][_0x21d188(0x1cd)]){const _0x1e7862=this[_0x21d188(0x78)][_0x21d188(0x17f)]();if(_0x1e7862!==_0x21d188(0x377))return Scene_MenuBase[_0x21d188(0x1a3)][_0x21d188(0x19a)][_0x21d188(0x2cd)](this);}}return'';},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x15e)]=function(){const _0x55070d=_0x2c82ec;return Scene_MenuBase[_0x55070d(0x1a3)]['buttonAssistText5'][_0x55070d(0x2cd)](this);},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0x71)]=function(){const _0x25ab5b=_0x2c82ec;Scene_MenuBase[_0x25ab5b(0x1a3)][_0x25ab5b(0x71)][_0x25ab5b(0x2cd)](this),this[_0x25ab5b(0x15b)](this[_0x25ab5b(0x142)]()),this[_0x25ab5b(0x213)]();},Scene_Bestiary[_0x2c82ec(0x1a3)]['getBackgroundOpacity']=function(){const _0x4ed5fa=_0x2c82ec;return VisuMZ[_0x4ed5fa(0x33e)]['Settings'][_0x4ed5fa(0x7d)][_0x4ed5fa(0x358)];},Scene_Bestiary['prototype'][_0x2c82ec(0x213)]=function(){const _0x5939da=_0x2c82ec,_0x28793a=VisuMZ[_0x5939da(0x33e)][_0x5939da(0x13c)][_0x5939da(0x7d)];_0x28793a&&(_0x28793a[_0x5939da(0x128)]!==''||_0x28793a[_0x5939da(0x1a7)]!=='')&&(this[_0x5939da(0xab)]=new Sprite(ImageManager[_0x5939da(0x16b)](_0x28793a[_0x5939da(0x128)])),this[_0x5939da(0x16a)]=new Sprite(ImageManager['loadTitle2'](_0x28793a['BgFilename2'])),this[_0x5939da(0x275)](this[_0x5939da(0xab)]),this[_0x5939da(0x275)](this[_0x5939da(0x16a)]),this[_0x5939da(0xab)][_0x5939da(0x372)]['addLoadListener'](this[_0x5939da(0xb0)][_0x5939da(0x285)](this,this[_0x5939da(0xab)])),this['_backSprite2'][_0x5939da(0x372)][_0x5939da(0x37f)](this[_0x5939da(0xb0)][_0x5939da(0x285)](this,this[_0x5939da(0x16a)])));},Scene_Bestiary[_0x2c82ec(0x1a3)][_0x2c82ec(0xb0)]=function(_0x30446d){const _0x2b2912=_0x2c82ec;this[_0x2b2912(0x352)](_0x30446d),this['centerSprite'](_0x30446d);},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x1ae)]=Window_MenuCommand[_0x2c82ec(0x1a3)][_0x2c82ec(0xf7)],Window_MenuCommand[_0x2c82ec(0x1a3)][_0x2c82ec(0xf7)]=function(){const _0x36eb62=_0x2c82ec;VisuMZ[_0x36eb62(0x33e)][_0x36eb62(0x1ae)][_0x36eb62(0x2cd)](this),this[_0x36eb62(0x84)]();},Window_MenuCommand['prototype'][_0x2c82ec(0x84)]=function(){const _0x332630=_0x2c82ec;if(!this[_0x332630(0xc4)]())return;if(!this['isBestiaryCommandVisible']())return;const _0x35df39=TextManager[_0x332630(0x240)],_0x246242=this[_0x332630(0x16c)]();this[_0x332630(0x1f3)](_0x35df39,_0x332630(0xd6),_0x246242);},Window_MenuCommand[_0x2c82ec(0x1a3)]['addBestiaryCommandAutomatically']=function(){const _0x3f8e30=_0x2c82ec;return Imported[_0x3f8e30(0x2c7)]?![]:!![];},Window_MenuCommand['prototype'][_0x2c82ec(0x28a)]=function(){const _0x4e293a=_0x2c82ec;return $gameSystem[_0x4e293a(0x232)]();},Window_MenuCommand[_0x2c82ec(0x1a3)]['isBestiaryCommandEnabled']=function(){return $gameSystem['isMainMenuBestiaryEnabled']();};function Window_BestiaryName(){const _0x3621be=_0x2c82ec;this[_0x3621be(0x1b6)](...arguments);}function _0x21c0(_0x1edafc,_0x31afd8){const _0x3e5f78=_0x3e5f();return _0x21c0=function(_0x21c036,_0x4a0a7b){_0x21c036=_0x21c036-0x70;let _0x593a5b=_0x3e5f78[_0x21c036];return _0x593a5b;},_0x21c0(_0x1edafc,_0x31afd8);}Window_BestiaryName[_0x2c82ec(0x1a3)]=Object[_0x2c82ec(0x15a)](Window_Base['prototype']),Window_BestiaryName['prototype'][_0x2c82ec(0x2f7)]=Window_BestiaryName,Window_BestiaryName[_0x2c82ec(0x2c8)]={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0xbe)]??0x0},Window_BestiaryName['prototype']['initialize']=function(_0x17091d){const _0x170904=_0x2c82ec;Window_Base[_0x170904(0x1a3)][_0x170904(0x1b6)][_0x170904(0x2cd)](this,_0x17091d),this[_0x170904(0x24e)]='';},Window_BestiaryName[_0x2c82ec(0x1a3)][_0x2c82ec(0x2fa)]=function(_0x19a343){const _0x334404=_0x2c82ec;this[_0x334404(0x24e)]!==_0x19a343&&(this[_0x334404(0x24e)]=_0x19a343,this['refresh']());},Window_BestiaryName[_0x2c82ec(0x1a3)][_0x2c82ec(0x167)]=function(_0x38bb26){const _0x21e6b8=_0x2c82ec;this[_0x21e6b8(0x2fa)](_0x38bb26[_0x21e6b8(0x10c)]());},Window_BestiaryName[_0x2c82ec(0x1a3)][_0x2c82ec(0x1c0)]=function(){const _0x42321e=_0x2c82ec;this[_0x42321e(0x2fa)](TextManager[_0x42321e(0x33e)]['nameWindow'][_0x42321e(0x23a)]);},Window_BestiaryName[_0x2c82ec(0x1a3)][_0x2c82ec(0x1aa)]=function(){return![];},Window_BestiaryName[_0x2c82ec(0x1a3)][_0x2c82ec(0x18d)]=function(){const _0x1141ae=_0x2c82ec;this[_0x1141ae(0x112)][_0x1141ae(0x132)]();if(this[_0x1141ae(0x24e)]==='')return;const _0x16b601=this['baseTextRect'](),_0xd85a69=this[_0x1141ae(0x10f)](this['_text'])[_0x1141ae(0x70)],_0x4a08d4=_0x16b601['x']+Math[_0x1141ae(0x2b6)]((_0x16b601['width']-_0xd85a69)/0x2);this[_0x1141ae(0x2bb)](this[_0x1141ae(0x24e)],_0x4a08d4,_0x16b601['y'],_0x16b601[_0x1141ae(0x70)]);};function Window_BestiarySub(){const _0x2ef1e4=_0x2c82ec;this[_0x2ef1e4(0x1b6)](...arguments);}Window_BestiarySub['prototype']=Object[_0x2c82ec(0x15a)](Window_Base[_0x2c82ec(0x1a3)]),Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0x2f7)]=Window_BestiarySub,Window_BestiarySub['SETTINGS']={'bgType':VisuMZ['Bestiary']['Settings'][_0x2c82ec(0x2fb)][_0x2c82ec(0x107)]??0x0},Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b6)]=function(_0xf8b7ba){const _0x16f92e=_0x2c82ec;Window_Base[_0x16f92e(0x1a3)][_0x16f92e(0x1b6)][_0x16f92e(0x2cd)](this,_0xf8b7ba),this[_0x16f92e(0x33a)]=null,this[_0x16f92e(0x18d)]();},Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0x353)]=function(_0x3983f3){const _0x4a93c5=_0x2c82ec;if(this['_enemyID']!==_0x3983f3){if(_0x4a93c5(0xd9)===_0x4a93c5(0xd9))this[_0x4a93c5(0x33a)]=_0x3983f3,this[_0x4a93c5(0x18d)]();else{if(_0x1c0aca<=0x0)return!![];if(_0x26335a['VisuMZ_1_ElementStatusCore']){if(_0x1fed2b[_0x4a93c5(0x233)][_0x4a93c5(0x13c)]['StatusMenu'][_0x4a93c5(0x375)][_0x4a93c5(0x2a5)](_0x9ff2c6))return!![];}return![];}}},Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0x1aa)]=function(){return![];},Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0x18d)]=function(){const _0x2c300e=_0x2c82ec;this[_0x2c300e(0x112)]['clear']();if(this[_0x2c300e(0x33a)]){if(_0x2c300e(0x2f4)!==_0x2c300e(0x1e8))this['drawEncounterData']();else{const _0x73795e=this['subWindowRect'](),_0x4d5db5=new _0x220b82(_0x73795e);this[_0x2c300e(0x33b)](_0x4d5db5),this[_0x2c300e(0x287)]=_0x4d5db5,_0x4d5db5[_0x2c300e(0x260)](_0x3ef9e7['SETTINGS'][_0x2c300e(0x157)]);}}else'tqIgq'==='tqIgq'?this['drawBestiaryCompletionRate']():(_0x17d416[_0x2c300e(0x1a3)]['resetFontSettings'][_0x2c300e(0x2cd)](this),this[_0x2c300e(0x112)][_0x2c300e(0x33c)]=_0xe50769['SETTINGS']['fontSize']);},Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0x196)]=function(){const _0x416084=_0x2c82ec,_0x558cc3=TextManager[_0x416084(0x33e)][_0x416084(0x2ac)],_0xda51a2=this[_0x416084(0x8e)]()*0x10,_0x217575=this['innerWidth']-_0xda51a2*0x2,_0x48114e=_0x558cc3['seenFmt'],_0x25ed88=$gameSystem['timesEnemySeen'](this[_0x416084(0x33a)]),_0x480832=_0x48114e['format'](_0x25ed88);this[_0x416084(0x289)](_0x480832,_0xda51a2,0x0,_0x217575,_0x416084(0x194));const _0x4dc23a=_0x558cc3[_0x416084(0x333)],_0x572695=$gameSystem['timesEnemyDefeated'](this['_enemyID']),_0x181944=_0x4dc23a[_0x416084(0x191)](_0x572695);this[_0x416084(0x289)](_0x181944,_0xda51a2,0x0,_0x217575,_0x416084(0x1c2));},Window_BestiarySub[_0x2c82ec(0x1a3)][_0x2c82ec(0xfc)]=function(){const _0x104e7d=_0x2c82ec,_0x2b2e3c=TextManager['Bestiary']['subWindow'],_0x5e8575=this['itemPadding']()*0x10,_0x46addb=this[_0x104e7d(0x376)]-_0x5e8575*0x2,_0x18b38b=_0x2b2e3c['completionFmt'],_0xddf8a4=DataManager[_0x104e7d(0x200)](),_0x4a0ecb=$gameSystem[_0x104e7d(0xcc)](),_0x2113d9=(_0x4a0ecb/_0xddf8a4*0x64)[_0x104e7d(0x23f)](_0x2b2e3c[_0x104e7d(0xc6)]),_0x137f55=_0x18b38b['format'](_0x2113d9,_0x4a0ecb,_0xddf8a4);this[_0x104e7d(0x289)](_0x137f55,_0x5e8575,0x0,_0x46addb,_0x104e7d(0x7f));};function Window_BestiaryEnemyList(){this['initialize'](...arguments);}function _0x3e5f(){const _0x23da4b=['setNoEnemyText','IJPEn','right','Name','\x5cC[7]Immune','drawIcon','enemy','home','_categoryEnemyIDs','update','setHue','initBestiaryMainMenu','enemyBestiaryCategories','active','SubWindowCompleteFixedDigits','LoreWindow_Default','_traitsDataWindow','gold','onLoadDragonbones','-\x20\x5cC[16]%1','Lore','becomeActive','maxCols','makeEmptyGroups','loadArmature','nullHelp','GFirU','NameWindow_CategoryText','setSymbolWindow','EnableMainMenu','_listWindow','changeEnemyTrait','Game_System_initialize','_commandWindow','Gender','HelpWindow_RectJS','SkillsWindow_BgType','registerCommand','maskUndefeatedEnemyNames','createHelpWindow','kJtBP','fastScrollLore','makeCommandList','RewardsWindow_Chance0','expIcon','nKNoK','isWeapon','deactivate','updateSpriteVisibility','hKdvV','commandBestiary','addCommand','loadSvEnemy','max','helpWindowRatio','commandNameWindowCenter','maxItems','setup','skillPoints','addCpCommand','isArmor','isBottomHelpMode','addEnemyDatabaseDrops','TraitsWindow_BgType','bestiaryTotalEnemies','createBattlebackSprites','SkillsIcon','addLevelChangeCommands','SceneOpenBestiary','VisuMZ_1_BattleCore','rewards','Scene_Boot_onDatabaseLoaded','ClassPoints','createRewardsDataWindow','_svBattlerName','pageup','ztgXI','categoryEnemyIDs','\x5cC[17]Conditional','CategoryPercentFixedDigits','scaleY','isCustomCommandEnabled','skill','createCustomBackgroundImages','processEnemyLore','nIhqS','isMainMenuBestiaryEnabled','AnRZi','map','categoryEnemies','BattleManager_setup','closedCategoriesFmt','KvagJ','defaultBattleback1','ARRAYNUM','+\x20%1\x20(%2%)','drawRegularItem','cKqTK','iconHeight','Kucgu','callUpdateImage','createCommandWindow','rewardsOrder','Blessing','processSlowScroll','hfwEZ','pEGTv','RewardsWindow_Chance100','iaSua','createLoreDataWindow','smoothSelect','commandNameWindowDrawBackground','Math_random','_allTextHeight','isMainMenuBestiaryVisible','ElementStatusCore','playEquip','buttonAssist_Expand','categoryWindow','iconWidth','setDebugViewBestiary','note','category','This\x20monster\x20has\x20no\x20special\x20properties.','Game_BattlerBase_addNewState','kind','CMvrx','toFixed','BestiaryMenuCommand','processDragonbones','playDragonbonesIdleAnimation','hide','basic','BasicWindow_ShowLevelChange','disposeDragonbones','view','battlerName','remove','ZamoM','icon','boxWidth','Game_BattlerBase_refresh','_text','onDataCategoriesCancel','callUpdateSubWindow','resetFontSettings','expA','deactivateSymbolWindow','_pagedownButton','uXzEM','chance10','BESTIARY','absorb','SubWindow_Encountered','MouXF','baseParams','RandomValid','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','SlowSoundFreq','59970LzSfPj','setBackgroundType','drawItem','isRightInputMode','createContents','gLjSu','sort','loadBattleback2','fqUGw','nClmb','isCommandEnabled','loreWindow','deselect','maskChar','openCloseCurrentCategory','Title','inBattle','nameWindowRect','down','description','toUpperCase','onSymbolWindowCancel','addChild','ImageWindow_Battleback2','length','CategoryWindow_Style','_elementsDataWindow','Param','createDragonbonesSprite','dragonbonesData','dataWindowRect','apply','bestiaryEnemyBattleback2','Bestiary\x20Completion\x20Rate:\x20%1%\x20(%2/%3\x20Monsters)','setScrollAccel','subWindowRect','traits','setColorTone','bind','activate','_subWindow','trait','drawText','isBestiaryCommandVisible','GetDropRateText','853843AOTjFW','RewardsWindow_Chance10','VisuMZ_0_CoreEngine','paramValueByName','VisuMZ_4_ExtraEnemyDrops','createElementsDataWindow','LoreWindow_FontSize','origin','itemLineRect','DataWindow_RectJS','Scroll','Description','scrollToTop','scrollToBottom','setHelpWindow','elementsWindow','drawItemStyleIcon','AomDj','lRtai','Categories','RewardsText','TraitsWindow_NullHelpDesc','Variant','\x5cC[4]Uncommon','AbilityPoints','includes','split','xTDNO','wbUWt','403076NUKYof','canAddLevelChange','ImageWindow_Battleback1','subWindow','ARRAYSTR','isEnemyFullyVisible','createSubWindow','playCursorSound','traitsWindow','shouldDrawIcons','process_VisuMZ_Bestiary','isPressed','smoothScrollBy','floor','VisuMZ_1_MessageCore','changePaintOpacity','getBestiaryLore','FUNC','drawTextEx','_Bestiary_MainMenu','oHHhn','blurFilterStrength','\x5cC[25]Resist','scaleHelpWindow','VisuMZ_1_ElementStatusCore','6457rVLWZk','ListWindowDelayMS','activateSymbolWindow','minLevel','hideAllSymbolWindows','VisuMZ_1_MainMenuCore','SETTINGS','ext','_bestiaryTotalEnemies','updateEnemyImage','ElementsWindow_Neutral','call','padding','uiMenuStyle','oRvhy','imageWindowRect','abilityPointsAbbr','createImageWindow','Key','View','\x5cC[0]Normal','neutral','updatePadding','weapons','frameCount','\x5cI[73]Raise\x20%1\x20Up','ElementsWindow_Immune','ORDFp','17793SdCfAX','levelUp','toLowerCase','CategoryWindow_CommandOrder','calcWindowHeight','weak','CategoryData','callUpdateSymbolWindow','addTraitCommand','1001875qCqWyX','wpYOQ','parse','LoreWindow_BgType','uiButtonPosition','playCursor','TraitsIcon','min','levelDown','isSceneBattle','SystemEnableBestiaryMenu','conditional','hideInBestiary','SQYuS','lore','createAllWindows','constructor','addCategory','CnEuC','setText','Window','show','drawMessageText','downArrowVisible','heMDc','replace','popScene','_list','exp','helpAreaHeight','getTraitSetKeys','2403OcvRUv','\x5cC[24]Weak','getDatabase','Race','makeTraitCommand','STRUCT','addTimesEnemyDefeated','CategoryWindow_OpenCategory','updateHelp','GTReC','EXP_Icon','setClickHandler','RewardsWindow_Chance20','ygvkL','skills','HxsVT','usjoc','jobPointsAbbr','isCustomCommandVisible','chance50','buttonAssistText2','timesEnemySeen','_debugViewBestiary','StatusMenu','PossibleEnemyTraits','updateEnemyID','iiheH','text','BxRpz','onBasicDataLevelChange','SubWindow_RectJS','setImageWindow','levelDownToMin','_symbolWindows','createCommandNameWindow','_dragonbonesBattlerData','maxLevel','levelMax','commandOrder','LTuvN','toggleEnemyCategory','clamp','textColor','pagedown','bestiaryEnemyCustomImageFilename','defeatedFmt','ListWindow_BgType','MainMenu','addNewState','\x5cI[73]Raise\x20%1\x20Up\x20to\x20Maximum','nVOzh','opacity','_enemyID','addWindow','fontSize','_blurFilter','Bestiary','Nature','rewardsWindow','isEnemyDefeated','IkUfo','BlurFilter','defaultCategory','changeTextColor','height','List','gainLevel','ceil','1928OeIIJc','jXuaA','Fast\x20Scroll','isAlive','4052roItSM','SystemShowBestiaryMenu','RFbov','commandStyleCheck','scaleSprite','setEnemy','addApCommand','createEnemy','filter','+\x20\x5cC[16]%1','SnapshotOpacity','switch','RTUGj','TraitsText','concat','_rewardsDataWindow','Element','openCategoriesFmt','bestiaryEnemyBattlebackData','BasicText','createSkillsDataWindow','GHrqr','_dataCategoriesWindow','drawParamItem','setMainMenuBestiaryEnabled','Show','buttonAssist_View','originalName','_showEnemyInBestiary','normalColor','helpWindowRect','BasicIcon','_battlebackSprite1','_dragonbonesSpriteContainer','lFjDV','\x5cC[21]Common','bitmap','defaultLoreFmt','_enemy','ExcludeElements','innerWidth','param','chance100','basicWindow','dataId','kLnEd','hasDragonbonesBattler','hasAnimatedSvActorBattler','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','addLoadListener','dataCategoriesWindowRect','commands','commandNameWindowDrawText','lAJRY','shown','addExpCommand','_dragonbonesName','_scene','calculateTextHeight','width','createBackground','updatePageButtons','addEnemyConditionalDrops','hyTWY','_timesEnemyDefeated','itemTextAlign','addJpCommand','_basicDataWindow','mainAreaBottom','NUM','traitSet','mainAreaHeight','BgSettings','CategoryOrder','center','NVcjq','iconIndex','buttonAssistKey4','scrollTo','addBestiaryCommand','_nameWindow','isSideView','_timesEnemySeen','forceSelect','TJJKK','drawAllText','showEnemyInBestiary','createBasicDataWindow','abs','itemPadding','HCrqG','status','addItemDropCommand','-----','ImageWindow_BlurStrength','customPicture','BasicWindow_LevelDownToMin','pDUAH','ShowVictory','\x5cI[%1]%2','buttonAssist','svActorVertCells','helpWindow_BgType','isElementIDExcluded','FjjcF','commandStyle','Grassland','getDatabaseItem','traitHelp','JSON','isTriggered','createTraitsDataWindow','TraitsWindow_OpenCategory','loadBattleback1','classPoints','initBestiarySettings','ShowMainMenu','gGVuF','_backSprite1','processCursorMove','viewEnemy','filters','ClassChangeSystem','adjustSprite','fastSoundFrequency','ARRAYSTRUCT','createNameWindow','maxTp','skillId','Visible','canDebugViewBestiary','currencyUnit','isEnabledEnemy','addInnerChild','UJMeT','addEnemy','<WordWrap>','NameWindow_BgType','LoreIcon','indexOf','RLOLb','XnvMM','_enemySprite','addBestiaryCommandAutomatically','JYeVV','fixedPercentage','ImageWindow_RectJS','chance20','items','iconText','BasicWindow_LevelDownByOne','totalDefeatedEnemies','drawItemStyleIconText','oFvjw','RewardsWindow_BgType','Alignment','showLevelChange','elementRate','play','commandName','makeTraitList','bestiary','VisuMZ_2_DragonbonesUnion','expand','LqlXM','ARRAYEVAL','onDatabaseLoaded','addSpCommand','RewardsWindow_Conditional','addCustomCommand','ConvertParams','initCategoryStatus','animation','isSkillHidden','TGSjl','_dragonbones','ThJTp','ElementsIcon','visible','offsetY','_battlebackSprite2','includesTrait','onDataCategoriesOpen','updateArrows','CoreEngine','createDataCategoriesWindow','SkillsText','levelUpToMax','nextEnemy','addSortedEnemyDrops','TraitsWindow_ClosedCategory','_skillsDataWindow','setTraitSet','levelMin','addOriginalCommands','index','getDefeatedEnemies','Encountered:\x20%1','Zodiac','drawBestiaryCompletionRate','auto','battler','FJHqc','zFWfG','uAEzR','\x5cI[%2]%1','_cache','prevEnemy','_pageupButton','currentCategory','SubWindow_BgType','sOUjR','toggleTraitsCategory','\x5cC[27]Absorb','processFullEnemyImage','name','cancel','Scene_Menu_createCommandWindow','textSizeEx','LoreText','createPageButtons','contents','elements','KZqwy','VisuMZ_2_SkillLearnSystem','windowPadding','UEitD','playOkSound','enemyId','2580294lIpBZm','jobPoints','SubElement','loadTitle2','VisuMZ_3_EnemyLevels','_helpWindow','HelpWindow_ScaleRatio','getTraitSet','TiHmo','_bestiaryEnemyCustomImageFilename','KrlaZ','commandSymbol','match','ListWindow_RectJS','BgFilename1','mBSxE','bestiaryEnemyBattleback1','loadSvActor','getInputMultiButtonStrings','anchor','_enemyBestiaryCategories','\x5cI[74]Lower\x20%1\x20Down','some','svActorHorzCells','clear','setSubWindow','Sicvo','createListWindow','wait','_commandNameWindow','Curse','createSpecialBattlers','level','nOsLj','Settings','DrawIcons','buttonAssistKey5','VFspr','buttonAssistText3','isCategoryOpen','getBackgroundOpacity','FastSoundFreq','processSvActorImage','addGoldCommand','displayAllTraitTypes','buttonAssist_Switch','updateEnemy','Default','actions','(needs\x20key)','Vocab','_enemyDrops','GToeZ','RegExp','currentExt','EVAL','qYkdU','removeChild','mainAreaTop','push','_noRandom','bgType','join','GetItemObj','create','setBackgroundOpacity','STR','addTimesEnemySeen','buttonAssistText5','#%1','DataCategoriesWindow_RectJS','buttonAssistKey2','animations','PossibleSingularTraitsFromNotetags','scale','JHtFH','abilityPoints','setEnemyName','ARRAYJSON','processFastScroll','_backSprite2','loadTitle1','isBestiaryCommandEnabled','listWindowRect','_loreDataWindow','setEnemyID','NameWindow_RectJS','buttonAssistKey1','callUpdateHelp','PossibleMassTraitsFromNotetags','_bestiaryEnemyBattlebackData','Label','createFilters','wjLhg','arePageButtonsEnabled','innerHeight','SkillPoints','XFUmC','addItemToGroup','_tp','RewardsWindow_Chance50','currentSymbol','exit','setMainMenuBestiaryVisible','setItem','enabled','PossibleRandomSingularTraitsFromNotetags','KAHev','nUiyX','\x5cI[74]Lower\x20%1\x20Down\x20to\x20Minimum','parameters','dispose','ElementsWindow_BgType','chance0','BasicWindow_LevelUpToMax','refresh','isPlaytest','includeCategory','KKrkY','format','buttonAssistKey3','getSkillName','left','BasicWindow_BgType','drawEncounterData','mDbOg','setHandler','fqdLr','buttonAssistText4','offsetX','setLevel','updateFilters','_getBestiaryLore','CategoryWindow_BgType','updateBattlebackImages','ImageWindow_BgType','SubWindow_Completion','prototype','idYrq','ExtDisplayedParams','addItemsCommand','BgFilename2','process_VisuMZ_Bestiary_Categories','BasicWindow_LevelUpByOne','isAutoColorAffected','VisuMZ_2_ClassChangeSystem','random','trim','Window_MenuCommand_addOriginalCommands','tfWaU','_lastIndex','timesEnemyDefeated','updateCommandNameWindow','round','_visualDrops','ExtraEnemyDrops','initialize','SkillLearnSystem','isEnemy','isEnemyNameMasked','15wJZsQn','traitSetType','uMdEw','_categoryStatus','mQTws','_imageWindow'];_0x3e5f=function(){return _0x23da4b;};return _0x3e5f();}Window_BestiaryEnemyList['prototype']=Object[_0x2c82ec(0x15a)](Window_Command[_0x2c82ec(0x1a3)]),Window_BestiaryEnemyList['prototype'][_0x2c82ec(0x2f7)]=Window_BestiaryEnemyList,Window_BestiaryEnemyList['SETTINGS']={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x334)]??0x0,'delayMs':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x2c3)]??0xf0,'maskUndefeatedEnemyNames':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)]['ListWindow_MaskUnknown']??!![]},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b6)]=function(_0x16777e){const _0x479f1b=_0x2c82ec;this[_0x479f1b(0xe0)](),Window_Command[_0x479f1b(0x1a3)]['initialize']['call'](this,_0x16777e);},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0xe0)]=function(){const _0x430c6f=_0x2c82ec;this[_0x430c6f(0x1bd)]={};const _0x7d738a=VisuMZ[_0x430c6f(0x33e)]['CategoryOrder'];for(const _0x315abf of _0x7d738a){if(_0x430c6f(0x350)===_0x430c6f(0x165))this[_0x430c6f(0x228)](!![]);else{if(!this[_0x430c6f(0x18f)](_0x315abf))continue;this['_categoryStatus'][_0x315abf['toLowerCase']()['trim']()]=!![];}}},Window_BestiaryEnemyList['prototype'][_0x2c82ec(0x1aa)]=function(){return![];},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x1ea)]=function(){const _0x58c845=_0x2c82ec,_0x302799=VisuMZ[_0x58c845(0x33e)][_0x58c845(0x7e)];for(const _0x32c92c of _0x302799){if(!this[_0x58c845(0x18f)](_0x32c92c))continue;this[_0x58c845(0x2f8)](_0x32c92c);}},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x18f)]=function(_0x14cc41){const _0x3ae30f=_0x2c82ec;_0x14cc41=_0x14cc41['toLowerCase']()[_0x3ae30f(0x1ad)]();const _0x1e411a=DataManager[_0x3ae30f(0x219)](_0x14cc41);if(_0x1e411a[_0x3ae30f(0x277)]<=0x0)return![];if($gameTemp[_0x3ae30f(0xb7)]())return!![];if(Game_Enemy['BESTIARY'][_0x3ae30f(0x344)][_0x3ae30f(0x2e0)]()===_0x14cc41)return!![];return _0x1e411a[_0x3ae30f(0x130)](_0x45dff9=>$gameSystem['timesEnemySeen'](_0x45dff9['id'])>0x0);},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x141)]=function(_0x21f1ee){const _0x2e46f0=_0x2c82ec;return _0x21f1ee=_0x21f1ee[_0x2e46f0(0x2e0)]()[_0x2e46f0(0x1ad)](),this['_categoryStatus'][_0x21f1ee];},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x2f8)]=function(_0x4f545d){const _0x5e050b=_0x2c82ec;_0x4f545d=_0x4f545d[_0x5e050b(0x2e0)]()[_0x5e050b(0x1ad)]();const _0x59bf2f=VisuMZ[_0x5e050b(0x33e)][_0x5e050b(0x2e4)][_0x4f545d];if(!_0x59bf2f)return;const _0x4ea41d=this[_0x5e050b(0x141)](_0x4f545d)?TextManager[_0x5e050b(0x33e)][_0x5e050b(0x236)][_0x5e050b(0x35f)]:TextManager['Bestiary'][_0x5e050b(0x236)]['closedCategoriesFmt'],_0x11058a=DataManager[_0x5e050b(0x219)](_0x4f545d),_0x1b8112=_0x11058a[_0x5e050b(0x277)],_0x317930=_0x11058a[_0x5e050b(0x356)](_0x49a8ec=>$gameSystem['isEnemyDefeated'](_0x49a8ec['id']))['length'],_0x5c14d8=(_0x317930/_0x1b8112*0x64)[_0x5e050b(0x32f)](0x0,0x64)[_0x5e050b(0x23f)](TextManager[_0x5e050b(0x33e)]['categoryWindow'][_0x5e050b(0xc6)]),_0x178db2=_0x4ea41d['format'](_0x59bf2f[_0x5e050b(0x26e)],_0x5c14d8);this[_0x5e050b(0x1f3)](_0x178db2,_0x5e050b(0x23a),!![],_0x4f545d),this['makeEnemyList'](_0x4f545d);},Window_BestiaryEnemyList['prototype'][_0x2c82ec(0x26d)]=function(){const _0x3aa475=_0x2c82ec,_0x3bae79=this['currentCategory']();this[_0x3aa475(0x1bd)][_0x3bae79]=!this['_categoryStatus'][_0x3bae79],this['refresh']();},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x106)]=function(){const _0x1be8e2=_0x2c82ec;return this[_0x1be8e2(0x17f)]()===_0x1be8e2(0x23a)?this[_0x1be8e2(0x150)]():null;},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)]['makeEnemyList']=function(_0x51a917){const _0x36955f=_0x2c82ec;if(!this[_0x36955f(0x141)](_0x51a917))return;const _0xecba9e=DataManager['categoryEnemies'](_0x51a917);for(const _0x4e4e13 of _0xecba9e){if('LrcoA'==='jvYXp')_0x42d416=_0x392e12(_0x461cda[_0x36955f(0x10c)][_0x36955f(0x277)]+0x1)[_0x36955f(0x158)](_0x3fa108['Bestiary']['categoryWindow'][_0x36955f(0x26c)]);else{if(!this['includeEnemy'](_0x4e4e13))continue;this[_0x36955f(0xbc)](_0x4e4e13);}}},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)]['includeEnemy']=function(_0x405fff){const _0x5d80c8=_0x2c82ec;return DataManager[_0x5d80c8(0x8b)](_0x405fff);},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0xb9)]=function(_0x2abccb){const _0x5ce78a=_0x2c82ec;if($gameTemp['canDebugViewBestiary']())return!![];return $gameSystem[_0x5ce78a(0x341)](_0x2abccb['id']);},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0xbc)]=function(_0x3388cd){const _0x43bbc9=_0x2c82ec;let _0x4bd52c=_0x3388cd['name'];this[_0x43bbc9(0x1b9)](_0x3388cd)&&(_0x4bd52c=Array(_0x3388cd[_0x43bbc9(0x10c)]['length']+0x1)['join'](TextManager['Bestiary'][_0x43bbc9(0x236)][_0x43bbc9(0x26c)])),this['addCommand']('\x20\x20'+_0x4bd52c,_0x43bbc9(0x1c6),this['isEnabledEnemy'](_0x3388cd),_0x3388cd['id']);},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)]['isEnemyNameMasked']=function(_0x531423){const _0x5d8f3c=_0x2c82ec;if($gameTemp[_0x5d8f3c(0xb7)]())return![];if($gameSystem['isEnemyDefeated'](_0x531423['id']))return![];if($gameSystem[_0x5d8f3c(0x31b)](_0x531423['id'])>0x0)return![];return Window_BestiaryEnemyList[_0x5d8f3c(0x2c8)][_0x5d8f3c(0x1e6)];},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x76)]=function(){const _0x394dc7=_0x2c82ec;return _0x394dc7(0x194);},Window_BestiaryEnemyList['prototype']['drawItem']=function(_0x2b8888){const _0x177312=_0x2c82ec,_0x8cd0ec=this['itemLineRect'](_0x2b8888),_0x36d2b2=this['commandName'](_0x2b8888),_0x344f18=this[_0x177312(0x10f)](_0x36d2b2)['width'];this['changePaintOpacity'](this[_0x177312(0x269)](_0x2b8888));const _0x5b0ff6=this[_0x177312(0x76)]();if(_0x5b0ff6==='right'){if('lORws'==='lORws')this['drawTextEx'](_0x36d2b2,_0x8cd0ec['x']+_0x8cd0ec['width']-_0x344f18,_0x8cd0ec['y'],_0x344f18);else{const _0x2946ec=_0x138090[_0x177312(0x2c8)][_0x177312(0x2be)];this[_0x177312(0x33d)]=new _0x1b8b3f[(_0x177312(0xae))][(_0x177312(0x343))](_0x2946ec),this[_0x177312(0xc3)][_0x177312(0xae)]=[this[_0x177312(0x33d)]],this[_0x177312(0x36f)]&&(this[_0x177312(0x36f)][_0x177312(0xae)]=[this[_0x177312(0x33d)]]);}}else{if(_0x5b0ff6==='center'){const _0x26abd8=_0x8cd0ec['x']+Math[_0x177312(0x2b6)]((_0x8cd0ec[_0x177312(0x70)]-_0x344f18)/0x2);this[_0x177312(0x2bb)](_0x36d2b2,_0x26abd8,_0x8cd0ec['y'],_0x344f18);}else this[_0x177312(0x2bb)](_0x36d2b2,_0x8cd0ec['x'],_0x8cd0ec['y'],_0x344f18);}},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x325)]=function(_0x3ef8ba){const _0x4e8eed=_0x2c82ec;this[_0x4e8eed(0x1bf)]=_0x3ef8ba,this['callUpdateHelp']();},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x133)]=function(_0x49ed7f){this['_subWindow']=_0x49ed7f,this['callUpdateHelp']();},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x172)]=function(){const _0x1457ce=_0x2c82ec;Window_Command[_0x1457ce(0x1a3)]['callUpdateHelp'][_0x1457ce(0x2cd)](this);const _0x8c949d=this[_0x1457ce(0xf8)](),_0x29fdb0=Window_BestiaryEnemyList[_0x1457ce(0x2c8)]['delayMs'];this['_imageWindow']&&setTimeout(this[_0x1457ce(0x224)]['bind'](this,_0x8c949d),_0x29fdb0);if(this[_0x1457ce(0x287)]){if(_0x1457ce(0x22c)===_0x1457ce(0x2a8)){const _0xe143fa=_0x31289f['x']+_0x43fb2d[_0x1457ce(0x2b6)]((_0x36019b[_0x1457ce(0x70)]-_0x46def6)/0x2);this[_0x1457ce(0x2bb)](_0x2ccfb3,_0xe143fa,_0xd8b1f4['y'],_0x2a768b);}else setTimeout(this[_0x1457ce(0x250)][_0x1457ce(0x285)](this,_0x8c949d),_0x29fdb0);}},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x224)]=function(_0x34aa2a){const _0x22f9e9=_0x2c82ec;if(_0x34aa2a!==this[_0x22f9e9(0xf8)]())return;if(this[_0x22f9e9(0x1b0)]===_0x34aa2a)return;this[_0x22f9e9(0x1b0)]=_0x34aa2a;const _0x26c17a=this[_0x22f9e9(0x17f)]();_0x26c17a===_0x22f9e9(0x1c6)?this[_0x22f9e9(0x1bf)][_0x22f9e9(0x16f)](this[_0x22f9e9(0x150)]()):this[_0x22f9e9(0x1bf)][_0x22f9e9(0x16f)](0x0);},Window_BestiaryEnemyList[_0x2c82ec(0x1a3)][_0x2c82ec(0x250)]=function(_0x435996){const _0x4e18a4=_0x2c82ec;if(_0x435996!==this[_0x4e18a4(0xf8)]())return;const _0x1f5d62=this[_0x4e18a4(0x17f)]();if(_0x1f5d62==='enemy'){if(_0x4e18a4(0x13f)!==_0x4e18a4(0x14e))this[_0x4e18a4(0x287)][_0x4e18a4(0x353)](this[_0x4e18a4(0x150)]());else{if(!_0x558505)return[];const _0x134914=_0xe485eb['id'];this['_enemyBestiaryCategories']=this[_0x4e18a4(0x12e)]||{};if(this[_0x4e18a4(0x12e)][_0x134914]!==_0x4d357d)return this['_enemyBestiaryCategories'][_0x134914];this[_0x4e18a4(0x12e)][_0x134914]=[];const _0x19b9cc=_0x2f0f60[_0x4e18a4(0x33e)][_0x4e18a4(0x14f)],_0x564797=_0xd3abb8['note']||'';return _0x564797[_0x4e18a4(0x126)](_0x19b9cc[_0x4e18a4(0x23a)])&&(this['_enemyBestiaryCategories'][_0x134914]=_0x357e13['$1'][_0x4e18a4(0x2a6)](',')[_0x4e18a4(0x218)](_0x426f8a=>_0x426f8a[_0x4e18a4(0x2e0)]()[_0x4e18a4(0x1ad)]())),this[_0x4e18a4(0x12e)][_0x134914][_0x4e18a4(0x277)]<=0x0&&(this[_0x4e18a4(0x12e)][_0x134914]=[_0x55ba31[_0x4e18a4(0x257)][_0x4e18a4(0x344)]['toLowerCase']()[_0x4e18a4(0x1ad)]()]),this[_0x4e18a4(0x12e)][_0x134914];}}else this['_subWindow'][_0x4e18a4(0x353)](0x0);};function Window_BestiaryEnemyImage(){this['initialize'](...arguments);}Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)]=Object[_0x2c82ec(0x15a)](Window_Base[_0x2c82ec(0x1a3)]),Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x2f7)]=Window_BestiaryEnemyImage,Window_BestiaryEnemyImage['SETTINGS']={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x1a1)]??0x0,'blurFilterStrength':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x93)]??0x8,'defaultBattleback1':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Window'][_0x2c82ec(0x2ab)]??_0x2c82ec(0x9f),'defaultBattleback2':VisuMZ['Bestiary'][_0x2c82ec(0x13c)]['Window'][_0x2c82ec(0x276)]??'Grassland','padding':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)]['ImageWindow_Padding']??0x4},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)]['initialize']=function(_0x6f4c25){const _0x233a42=_0x2c82ec;Window_Base[_0x233a42(0x1a3)]['initialize'][_0x233a42(0x2cd)](this,_0x6f4c25),this['createBattlebackSprites'](),this['createEnemySprite'](),this[_0x233a42(0x27b)](),this['createFilters']();},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x2d8)]=function(){const _0x1b1189=_0x2c82ec;this[_0x1b1189(0x2ce)]=Window_BestiaryEnemyImage['SETTINGS'][_0x1b1189(0x2ce)];},Window_BestiaryEnemyImage['prototype'][_0x2c82ec(0x201)]=function(){const _0x375f0c=_0x2c82ec;this[_0x375f0c(0x36e)]=new Sprite(),this['_battlebackSprite2']=new Sprite(),this[_0x375f0c(0xba)](this[_0x375f0c(0x36e)]),this[_0x375f0c(0xba)](this['_battlebackSprite2']),this[_0x375f0c(0x36e)][_0x375f0c(0x12d)]['x']=this[_0x375f0c(0x36e)][_0x375f0c(0x12d)]['y']=0.5,this[_0x375f0c(0xe9)]['anchor']['x']=this[_0x375f0c(0xe9)][_0x375f0c(0x12d)]['y']=0.5;},Window_BestiaryEnemyImage['prototype']['createEnemySprite']=function(){const _0x12eb31=_0x2c82ec;this[_0x12eb31(0xc3)]=new Sprite(),this['addInnerChild'](this[_0x12eb31(0xc3)]),this[_0x12eb31(0xc3)][_0x12eb31(0x12d)]['x']=this[_0x12eb31(0xc3)][_0x12eb31(0x12d)]['y']=0.5;},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x27b)]=function(){const _0x210085=_0x2c82ec;if(!Imported[_0x210085(0xd7)])return;this[_0x210085(0xe4)]=null,this[_0x210085(0x36f)]=new Sprite(),this[_0x210085(0xba)](this[_0x210085(0x36f)]);},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x176)]=function(){const _0x44ed4e=_0x2c82ec,_0x4aa965=Window_BestiaryEnemyImage[_0x44ed4e(0x2c8)][_0x44ed4e(0x2be)];this['_blurFilter']=new PIXI[(_0x44ed4e(0xae))]['BlurFilter'](_0x4aa965),this[_0x44ed4e(0xc3)]['filters']=[this['_blurFilter']],this[_0x44ed4e(0x36f)]&&(this[_0x44ed4e(0x36f)][_0x44ed4e(0xae)]=[this[_0x44ed4e(0x33d)]]);},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x16f)]=function(_0xc62d1b){const _0x5fee27=_0x2c82ec;if(!SceneManager[_0x5fee27(0x387)][_0x5fee27(0x31f)])return;if(this[_0x5fee27(0x33a)]!==_0xc62d1b){if('nNsAJ'!=='nNsAJ')return![];else{if(_0xc62d1b>0x0)SceneManager[_0x5fee27(0x387)][_0x5fee27(0x31f)](_0xc62d1b);this[_0x5fee27(0x33a)]=_0xc62d1b,this['refresh']();}}},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x18d)]=function(){const _0x40b2d4=_0x2c82ec;this['updateSpriteVisibility']();if(this[_0x40b2d4(0x33a)]<=0x0)return;this['updateBattlebackImages'](),this[_0x40b2d4(0x2cb)]();},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)]['updateSpriteVisibility']=function(){const _0x4aa440=_0x2c82ec;this['_enemySprite']['visible']=this['_enemyID']>0x0,this[_0x4aa440(0x36e)][_0x4aa440(0xe7)]=this['_enemyID']>0x0,this[_0x4aa440(0xe9)][_0x4aa440(0xe7)]=this['_enemyID']>0x0,this[_0x4aa440(0xc3)]['x']=Math[_0x4aa440(0x1b3)](this[_0x4aa440(0x376)]/0x2),this['_enemySprite']['y']=Math[_0x4aa440(0x1b3)](this['innerHeight']/0x2),this[_0x4aa440(0xc3)][_0x4aa440(0x164)]['x']=Math['abs'](this[_0x4aa440(0xc3)][_0x4aa440(0x164)]['x']),this[_0x4aa440(0x36e)]['x']=this[_0x4aa440(0xe9)]['x']=Math[_0x4aa440(0x1b3)](this['innerWidth']/0x2),this[_0x4aa440(0x36e)]['y']=this['_battlebackSprite2']['y']=Math[_0x4aa440(0x1b3)](this[_0x4aa440(0x179)]/0x2);},Window_BestiaryEnemyImage['prototype'][_0x2c82ec(0x1a0)]=function(){const _0x4bcb81=_0x2c82ec;this['_battlebackSprite1'][_0x4bcb81(0x372)]=ImageManager[_0x4bcb81(0x12a)](this[_0x4bcb81(0x33a)]),this['_battlebackSprite2'][_0x4bcb81(0x372)]=ImageManager[_0x4bcb81(0x27f)](this[_0x4bcb81(0x33a)]);},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x2cb)]=function(){const _0x383598=_0x2c82ec,_0x3d12da=SceneManager['_scene'][_0x383598(0x1c6)](),_0x2b1d32=_0x3d12da['battlerHue']();this['disposeDragonbones']();if(ImageManager['bestiaryEnemyCustomImageFilename'](this[_0x383598(0x33a)])!==''){const _0x330ad3=ImageManager[_0x383598(0x332)](this['_enemyID']);_0x330ad3[_0x383598(0x37f)](this['processFullEnemyImage'][_0x383598(0x285)](this,_0x330ad3,0x0));}else{if(this[_0x383598(0x37c)]()){const _0x568e4b=new Bitmap(0x1,0x1);this[_0x383598(0x241)](),this['processFullEnemyImage'](_0x568e4b,0x0);}else{if(this[_0x383598(0x37d)]()){const _0x472282=this[_0x383598(0x20a)],_0x361518=ImageManager[_0x383598(0x12b)](_0x472282);_0x361518['addLoadListener'](this[_0x383598(0x144)]['bind'](this,_0x472282,_0x361518,0x0));}else{if($gameSystem[_0x383598(0x86)]()){if(_0x383598(0x1c1)==='XBPew')this['_categoryStatus'][_0x4dbcde[_0x383598(0x2e0)]()['trim']()]=!![];else{const _0x4809ec=ImageManager[_0x383598(0x1f4)](_0x3d12da[_0x383598(0x248)]());_0x4809ec[_0x383598(0x37f)](this[_0x383598(0x10b)]['bind'](this,_0x4809ec,_0x2b1d32));}}else{const _0x459151=ImageManager['loadEnemy'](_0x3d12da['battlerName']());_0x459151[_0x383598(0x37f)](this[_0x383598(0x10b)][_0x383598(0x285)](this,_0x459151,_0x2b1d32));}}}}},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x37c)]=function(){const _0x2446df=_0x2c82ec;if(!Imported['VisuMZ_2_DragonbonesUnion'])return![];const _0x4ee5f6=SceneManager[_0x2446df(0x387)][_0x2446df(0x1c6)]();if(_0x4ee5f6[_0x2446df(0x27c)]()[_0x2446df(0xfe)]!==''){if(_0x2446df(0xaa)==='WbChU'){const _0x5ed14d=_0x14b909['x']+_0x3fcdc6[_0x2446df(0x2b6)]((_0x10798d[_0x2446df(0x70)]-_0x5a4a13)/0x2);this[_0x2446df(0x2bb)](_0x1037a7,_0x5ed14d,_0x3ffa71['y'],_0x598691);}else return this[_0x2446df(0x329)]=_0x4ee5f6[_0x2446df(0x27c)](),!![];}else return![];},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x37d)]=function(){const _0x97a1d5=_0x2c82ec;if(!Imported[_0x97a1d5(0x205)])return![];const _0x4330e8=SceneManager[_0x97a1d5(0x387)][_0x97a1d5(0x1c6)]();if(_0x4330e8['hasSvBattler']())return this[_0x97a1d5(0x20a)]=_0x4330e8['svBattlerData']()[_0x97a1d5(0x10c)],!![];else{if('LXHvA'!==_0x97a1d5(0x9d))return![];else{const _0x24e7eb=_0x4248dd[_0x97a1d5(0x332)](this[_0x97a1d5(0x33a)]);_0x24e7eb[_0x97a1d5(0x37f)](this[_0x97a1d5(0x10b)][_0x97a1d5(0x285)](this,_0x24e7eb,0x0));}}},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x10b)]=function(_0x234d24,_0x308226){const _0x3f2780=_0x2c82ec;this[_0x3f2780(0xc3)]['bitmap']=_0x234d24,this[_0x3f2780(0xc3)][_0x3f2780(0x1ca)](_0x308226),this[_0x3f2780(0xc3)]['setFrame'](0x0,0x0,_0x234d24[_0x3f2780(0x70)],_0x234d24['height']),this[_0x3f2780(0x19d)](),this[_0x3f2780(0xc3)][_0x3f2780(0x1c9)]();},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)]['processSvActorImage']=function(_0x58dd93,_0x5f166c,_0x231244){const _0x1e9237=_0x2c82ec;this[_0x1e9237(0xc3)][_0x1e9237(0x372)]=_0x5f166c,this[_0x1e9237(0xc3)][_0x1e9237(0x1ca)](_0x231244);const _0x27bb4d=Math[_0x1e9237(0x2b6)](_0x5f166c['width']/ImageManager['svActorHorzCells']),_0x4a8419=Math[_0x1e9237(0x2b6)](_0x5f166c[_0x1e9237(0x346)]/ImageManager[_0x1e9237(0x9a)]);this[_0x1e9237(0xc3)]['setFrame'](0x0,0x0,_0x27bb4d,_0x4a8419),this['_enemySprite'][_0x1e9237(0x164)]['x']*=-0x1,this['updateFilters'](),this[_0x1e9237(0xc3)]['update']();},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x241)]=function(){const _0x1d4230=_0x2c82ec;this[_0x1d4230(0x246)]();const _0x1f0880=this[_0x1d4230(0x329)];this['_dragonbonesName']=_0x1f0880[_0x1d4230(0xfe)],armatureName=_0x1f0880[_0x1d4230(0xfe)],DragonbonesManager[_0x1d4230(0x1d8)](armatureName,this['onLoadDragonbones'][_0x1d4230(0x285)](this));const _0x35d98d=this[_0x1d4230(0x36f)];_0x35d98d&&(_0x35d98d['x']=Math[_0x1d4230(0x1b3)](this[_0x1d4230(0x376)]/0x2),_0x35d98d['y']=Math[_0x1d4230(0x1b3)](this['innerHeight']/0x2),_0x35d98d['y']+=Math[_0x1d4230(0x1b3)](_0x1f0880[_0x1d4230(0x346)]/0x2));},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x246)]=function(){const _0x26bcff=_0x2c82ec;this[_0x26bcff(0xe4)]&&(_0x26bcff(0x32d)!=='LTuvN'?this[_0x26bcff(0x1b6)](...arguments):(this[_0x26bcff(0x36f)]&&this[_0x26bcff(0x36f)][_0x26bcff(0x153)](this[_0x26bcff(0xe4)]),this[_0x26bcff(0x153)](this[_0x26bcff(0xe4)]),this['_dragonbones'][_0x26bcff(0x189)](),delete this[_0x26bcff(0xe4)],delete this[_0x26bcff(0x386)]));},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d2)]=function(){const _0x483334=_0x2c82ec,_0x3bf62e=this['_dragonbonesBattlerData'];this[_0x483334(0xe4)]=DragonbonesManager['createArmature'](_0x3bf62e[_0x483334(0xfe)]);if(!this[_0x483334(0x36f)]){if(_0x483334(0x1af)!==_0x483334(0x1af))return this['currentSymbol']()===_0x483334(0x23a)?this['currentExt']():null;else this[_0x483334(0x36f)]=new Sprite(),this[_0x483334(0x36f)][_0x483334(0xae)]=[this[_0x483334(0x33d)]];}this[_0x483334(0x36f)]['addChild'](this[_0x483334(0xe4)]),this[_0x483334(0x242)](),this[_0x483334(0xe4)]['x']=_0x3bf62e[_0x483334(0x19b)],this[_0x483334(0xe4)]['y']=_0x3bf62e[_0x483334(0xe8)],this[_0x483334(0xe4)][_0x483334(0x164)]['x']=_0x3bf62e['scaleX'],this[_0x483334(0xe4)][_0x483334(0x164)]['y']=_0x3bf62e[_0x483334(0x210)];},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)]['playDragonbonesIdleAnimation']=function(){const _0x2fee55=_0x2c82ec,_0x583cef=_0x2fee55(0x136),_0x424173=this['_dragonbones'][_0x2fee55(0xe1)];_0x424173[_0x2fee55(0x162)][_0x583cef]&&_0x424173[_0x2fee55(0xd3)](_0x583cef);},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x19d)]=function(){const _0x16790a=_0x2c82ec;if(this[_0x16790a(0x2ae)]())this['_blurFilter'][_0x16790a(0x183)]=![],this[_0x16790a(0xc3)][_0x16790a(0x284)]([0x0,0x0,0x0,0x0]),this[_0x16790a(0x36f)]&&(_0x16790a(0x117)===_0x16790a(0x264)?(this['_enemySprite'][_0x16790a(0xe7)]=this[_0x16790a(0x33a)]>0x0,this[_0x16790a(0x36e)][_0x16790a(0xe7)]=this[_0x16790a(0x33a)]>0x0,this['_battlebackSprite2'][_0x16790a(0xe7)]=this[_0x16790a(0x33a)]>0x0,this['_enemySprite']['x']=_0x5af097['round'](this[_0x16790a(0x376)]/0x2),this[_0x16790a(0xc3)]['y']=_0x5b1558[_0x16790a(0x1b3)](this[_0x16790a(0x179)]/0x2),this[_0x16790a(0xc3)][_0x16790a(0x164)]['x']=_0x285cfa[_0x16790a(0x8d)](this[_0x16790a(0xc3)]['scale']['x']),this[_0x16790a(0x36e)]['x']=this[_0x16790a(0xe9)]['x']=_0x37b063[_0x16790a(0x1b3)](this[_0x16790a(0x376)]/0x2),this[_0x16790a(0x36e)]['y']=this[_0x16790a(0xe9)]['y']=_0x9d16df[_0x16790a(0x1b3)](this['innerHeight']/0x2)):this[_0x16790a(0x36f)][_0x16790a(0x284)]([0x0,0x0,0x0,0x0]));else{if(_0x16790a(0x23e)===_0x16790a(0xff))return _0x5ebddd['Bestiary'][_0x16790a(0x99)][_0x16790a(0x359)];else{this[_0x16790a(0x33d)]['enabled']=!![],this[_0x16790a(0xc3)][_0x16790a(0x284)]([-0xff,-0xff,-0xff,0x0]);if(this[_0x16790a(0x36f)]){if(_0x16790a(0x122)!==_0x16790a(0x268))this[_0x16790a(0x36f)]['setColorTone']([-0xff,-0xff,-0xff,0x0]);else{if(!_0x4c7c15['VisuMZ_1_ElementStatusCore'])return;const _0x380c7d=this[_0x16790a(0x27d)](),_0x3395d0=new _0x36df85(_0x380c7d);_0x3395d0[_0x16790a(0x29a)](this['_helpWindow']),this['_dataCategoriesWindow'][_0x16790a(0x1dc)](_0x3395d0,_0x16790a(0x283)),_0x3395d0[_0x16790a(0x198)](_0x16790a(0x23a),this['toggleTraitsCategory'][_0x16790a(0x285)](this)),_0x3395d0[_0x16790a(0x198)](_0x16790a(0x288),this[_0x16790a(0x1df)][_0x16790a(0x285)](this)),_0x3395d0[_0x16790a(0x198)]('cancel',this[_0x16790a(0x274)][_0x16790a(0x285)](this)),this[_0x16790a(0x33b)](_0x3395d0),this[_0x16790a(0x1d0)]=_0x3395d0,_0x3395d0[_0x16790a(0x260)](_0x5bd0ec[_0x16790a(0x2c8)][_0x16790a(0x157)]);}}}}},Window_BestiaryEnemyImage[_0x2c82ec(0x1a3)][_0x2c82ec(0x2ae)]=function(){const _0x77d013=_0x2c82ec;if($gameTemp[_0x77d013(0xb7)]())return!![];if($gameSystem[_0x77d013(0x341)](this['_enemyID']))return!![];if($gameSystem[_0x77d013(0x31b)](this[_0x77d013(0x33a)])>0x0)return!![];return![];};function Window_BestiaryDataCategories(){const _0x39eb45=_0x2c82ec;this[_0x39eb45(0x1b6)](...arguments);}Window_BestiaryDataCategories[_0x2c82ec(0x1a3)]=Object[_0x2c82ec(0x15a)](Window_HorzCommand[_0x2c82ec(0x1a3)]),Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x2f7)]=Window_BestiaryDataCategories,Window_BestiaryDataCategories['SETTINGS']={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Window'][_0x2c82ec(0x19f)]??0x0,'commandStyle':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x2fb)][_0x2c82ec(0x278)]??_0x2c82ec(0xfd),'commandOrder':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x2e1)]??[_0x2c82ec(0x244),_0x2c82ec(0x113),_0x2c82ec(0x314),'rewards',_0x2c82ec(0x283),'lore'],'commands':{'basic':{'show':!![],'text':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0x361)]??'Base','icon':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x36d)]??0x54},'elements':{'show':!![],'text':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)]['ElementsText']??'Elements','icon':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0xe6)]??0x40},'skills':{'show':!![],'text':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0xef)]??'Skills','icon':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0x202)]??0x4f},'rewards':{'show':!![],'text':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0x2a0)]??'Rewards','icon':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)]['RewardsIcon']??0x57},'traits':{'show':!![],'text':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x14c)][_0x2c82ec(0x35b)]??'Properties','icon':VisuMZ['Bestiary'][_0x2c82ec(0x13c)]['Vocab'][_0x2c82ec(0x2ed)]??0x53},'lore':{'show':!![],'text':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0x110)]??_0x2c82ec(0x1d4),'icon':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x14c)][_0x2c82ec(0xbf)]??0x50}}},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b6)]=function(_0x3b8739){const _0x159607=_0x2c82ec;Window_HorzCommand[_0x159607(0x1a3)]['initialize'][_0x159607(0x2cd)](this,_0x3b8739),this[_0x159607(0x328)](_0x3b8739),this[_0x159607(0x1ef)](),this[_0x159607(0x243)]();},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d6)]=function(){const _0x47c29a=_0x2c82ec;return this['_list']?this[_0x47c29a(0x302)][_0x47c29a(0x277)]:0x1;},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x172)]=function(){const _0x25052f=_0x2c82ec;Window_HorzCommand['prototype'][_0x25052f(0x172)][_0x25052f(0x2cd)](this),this['_commandNameWindow']&&this[_0x25052f(0x1b2)](),this['active']&&this[_0x25052f(0x327)]&&this['callUpdateSymbolWindow']();},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x2fc)]=function(){const _0x19edf5=_0x2c82ec;Window_HorzCommand['prototype'][_0x19edf5(0x2fc)][_0x19edf5(0x2cd)](this),this[_0x19edf5(0x172)]();},Window_BestiaryDataCategories['prototype'][_0x2c82ec(0x243)]=function(){const _0x51c158=_0x2c82ec;Window_HorzCommand['prototype'][_0x51c158(0x243)][_0x51c158(0x2cd)](this),this[_0x51c158(0x2c6)]();},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)]['isUseModernControls']=function(){return![];},Window_BestiaryDataCategories['prototype'][_0x2c82ec(0x1dc)]=function(_0x279920,_0x4131a6){const _0x5ceb16=_0x2c82ec;this['_symbolWindows']=this['_symbolWindows']||{},this[_0x5ceb16(0x327)][_0x4131a6]=_0x279920,this[_0x5ceb16(0x172)]();},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x2e5)]=function(){const _0x3a7467=_0x2c82ec;this['_symbolWindows']=this[_0x3a7467(0x327)]||{};for(const _0x56b147 in this[_0x3a7467(0x327)]){if(_0x3a7467(0x315)==='HxsVT'){if(_0x56b147===this[_0x3a7467(0x17f)]()){if(_0x3a7467(0x80)===_0x3a7467(0x80))this[_0x3a7467(0x327)][_0x56b147][_0x3a7467(0x2fc)](),this['_symbolWindows'][_0x56b147][_0x3a7467(0x18d)](),this[_0x3a7467(0x327)][_0x56b147]['deactivate']();else{let _0x1a0c80=this['_enemyDrops'][_0x1eb8fc][_0x45e7cd];_0x1a0c80=_0x1a0c80[_0x3a7467(0x265)]((_0x4f1a1a,_0xba48d1)=>_0x4f1a1a['id']-_0xba48d1['id']);for(const _0x47c734 of _0x1a0c80){const _0x2a58fd=_0x529600['Bestiary'][_0x3a7467(0x340)][_0x3a6bab];this[_0x3a7467(0x91)](_0x47c734,_0x2a58fd);}}}else{if(_0x3a7467(0x2a7)!==_0x3a7467(0x2a7)){this[_0x3a7467(0x14d)]={};const _0x54982c=[_0x3a7467(0x378),_0x3a7467(0x319),_0x3a7467(0xc8),_0x3a7467(0x256),_0x3a7467(0x18b),_0x3a7467(0x2f2)],_0x2071f5=['items',_0x3a7467(0x2d9),'armors'];for(const _0x29bfbc of _0x54982c){for(const _0x102f2e of _0x2071f5){this[_0x3a7467(0x14d)][_0x29bfbc]=this[_0x3a7467(0x14d)][_0x29bfbc]||{},this[_0x3a7467(0x14d)][_0x29bfbc][_0x102f2e]=this[_0x3a7467(0x14d)][_0x29bfbc][_0x102f2e]||[];}}}else this[_0x3a7467(0x327)][_0x56b147][_0x3a7467(0x243)]();}}else{const _0x11eebc=this[_0x3a7467(0x27d)](),_0x496580=new _0x2c97ce(_0x11eebc);_0x496580[_0x3a7467(0x29a)](this[_0x3a7467(0x11f)]),this['_dataCategoriesWindow'][_0x3a7467(0x1dc)](_0x496580,_0x3a7467(0x314)),_0x496580[_0x3a7467(0x198)](_0x3a7467(0x10d),this[_0x3a7467(0x274)][_0x3a7467(0x285)](this)),this[_0x3a7467(0x33b)](_0x496580),this[_0x3a7467(0xf4)]=_0x496580,_0x496580[_0x3a7467(0x260)](_0x400ed7[_0x3a7467(0x2c8)][_0x3a7467(0x157)]);}}},Window_BestiaryDataCategories['prototype'][_0x2c82ec(0x2c6)]=function(){const _0x2471ef=_0x2c82ec;this[_0x2471ef(0x327)]=this[_0x2471ef(0x327)]||{};for(const _0x2adf3c in this[_0x2471ef(0x327)]){this[_0x2471ef(0x327)][_0x2adf3c][_0x2471ef(0x243)]();}},Window_BestiaryDataCategories['prototype'][_0x2c82ec(0x2c4)]=function(){const _0x1bdc24=_0x2c82ec,_0x2164d0=this[_0x1bdc24(0x17f)]();if(this[_0x1bdc24(0x327)][_0x2164d0])this['_symbolWindows'][_0x2164d0]['becomeActive']?this[_0x1bdc24(0x327)][_0x2164d0]['becomeActive']():'Sicvo'===_0x1bdc24(0x134)?this['_symbolWindows'][_0x2164d0][_0x1bdc24(0x286)]():_0x58c044[_0x1bdc24(0x155)](_0x5d9297);else{if(_0x1bdc24(0x197)!==_0x1bdc24(0x197)){if(_0x1bea7a[_0x1bdc24(0xb7)]())return!![];if(_0x4cecd0[_0x1bdc24(0x341)](this[_0x1bdc24(0x33a)]))return!![];if(_0x1c045c[_0x1bdc24(0x31b)](this['_enemyID'])>0x0)return!![];return![];}else this[_0x1bdc24(0x286)]();}},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x253)]=function(){const _0x3fab24=_0x2c82ec,_0xffdb7c=this[_0x3fab24(0x17f)]();this[_0x3fab24(0x327)][_0xffdb7c]?(this['_symbolWindows'][_0xffdb7c][_0x3fab24(0x1ef)](),this[_0x3fab24(0x327)][_0xffdb7c][_0x3fab24(0x88)](0x0),this[_0x3fab24(0x327)][_0xffdb7c][_0x3fab24(0x26b)](),this[_0x3fab24(0x327)][_0xffdb7c][_0x3fab24(0x83)](0x0,0x0)):this['activate']();},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x328)]=function(_0x10e7d7){const _0xc39ce3=_0x2c82ec,_0x328123=new Rectangle(0x0,0x0,_0x10e7d7[_0xc39ce3(0x70)],_0x10e7d7[_0xc39ce3(0x346)]);this[_0xc39ce3(0x137)]=new Window_Base(_0x328123),this[_0xc39ce3(0x137)][_0xc39ce3(0x339)]=0x0,this[_0xc39ce3(0x275)](this[_0xc39ce3(0x137)]),this[_0xc39ce3(0x1b2)]();},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b2)]=function(){const _0x595093=_0x2c82ec,_0x49d9d1=this['_commandNameWindow'];_0x49d9d1[_0x595093(0x112)]['clear']();const _0x5646d7=this[_0x595093(0x351)](this[_0x595093(0xf8)]());if(_0x5646d7===_0x595093(0x24b)){const _0x81e242=this[_0x595093(0x294)](this[_0x595093(0xf8)]());let _0x451119=this[_0x595093(0xd4)](this[_0x595093(0xf8)]());_0x451119=_0x451119['replace'](/\\I\[(\d+)\]/gi,''),_0x49d9d1['resetFontSettings'](),this[_0x595093(0x22f)](_0x451119,_0x81e242),this[_0x595093(0x382)](_0x451119,_0x81e242),this[_0x595093(0x1f7)](_0x451119,_0x81e242);}},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x22f)]=function(_0x47328a,_0x83da5b){},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x382)]=function(_0xa4e895,_0x3ce0b8){const _0x8becec=_0x2c82ec,_0x22bf28=this[_0x8becec(0x137)];_0x22bf28[_0x8becec(0x289)](_0xa4e895,0x0,_0x3ce0b8['y'],_0x22bf28[_0x8becec(0x376)],_0x8becec(0x7f));},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)]['commandNameWindowCenter']=function(_0x46bc87,_0x4a2e9a){const _0x4cba19=_0x2c82ec,_0x3a383d=this[_0x4cba19(0x137)],_0x4c92b8=$gameSystem[_0x4cba19(0x116)](),_0x1305e4=_0x4a2e9a['x']+Math[_0x4cba19(0x2b6)](_0x4a2e9a[_0x4cba19(0x70)]/0x2)+_0x4c92b8;_0x3a383d['x']=_0x3a383d[_0x4cba19(0x70)]/-0x2+_0x1305e4,_0x3a383d['y']=Math[_0x4cba19(0x2b6)](_0x4a2e9a[_0x4cba19(0x346)]/0x2);},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)]['makeCommandList']=function(){const _0x5ccae0=_0x2c82ec;for(const _0x1a828c of Window_BestiaryDataCategories['SETTINGS'][_0x5ccae0(0x32c)]){this[_0x5ccae0(0xde)](_0x1a828c);}},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0xde)]=function(_0x2dfea6){const _0x4a3076=_0x2c82ec,_0x11c1af=Window_BestiaryDataCategories['SETTINGS'][_0x4a3076(0x381)][_0x2dfea6];if(!this['isCustomCommandVisible'](_0x11c1af))return;const _0xff231f=_0x2dfea6,_0x35492e=Number(_0x11c1af['icon']);let _0x57bc1f=_0x11c1af[_0x4a3076(0x321)];_0x35492e>0x0&&this[_0x4a3076(0x9e)]()!==_0x4a3076(0x321)&&(_0x4a3076(0x267)==='yZCsg'?_0x4cf6ca++:_0x57bc1f=_0x4a3076(0x98)[_0x4a3076(0x191)](_0x35492e,_0x57bc1f));const _0xd90167=this['isCustomCommandEnabled'](_0x11c1af);this[_0x4a3076(0x1f3)](_0x57bc1f,_0xff231f,_0xd90167);},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x318)]=function(_0x1dd70f){const _0x432b9f=_0x2c82ec;if(_0x1dd70f===Window_BestiaryDataCategories[_0x432b9f(0x2c8)][_0x432b9f(0x381)][_0x432b9f(0x283)]){if(!Imported[_0x432b9f(0x2c1)])return![];}return _0x1dd70f[_0x432b9f(0x2fc)];},Window_BestiaryDataCategories['prototype'][_0x2c82ec(0x211)]=function(_0x287d01){return!![];},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x76)]=function(){return'center';},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)]['drawItem']=function(_0x3ba475){const _0x1c6022=_0x2c82ec,_0x3f28a6=this[_0x1c6022(0x351)](_0x3ba475);if(_0x3f28a6===_0x1c6022(0xca))this[_0x1c6022(0xcd)](_0x3ba475);else _0x3f28a6===_0x1c6022(0x24b)?this['drawItemStyleIcon'](_0x3ba475):Window_Command[_0x1c6022(0x1a3)][_0x1c6022(0x261)][_0x1c6022(0x2cd)](this,_0x3ba475);},Window_BestiaryDataCategories['prototype'][_0x2c82ec(0x9e)]=function(){const _0x2dcfb3=_0x2c82ec;return Window_BestiaryDataCategories[_0x2dcfb3(0x2c8)][_0x2dcfb3(0x9e)];},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x351)]=function(_0x7b747c){const _0x10162e=_0x2c82ec;if(_0x7b747c<0x0)return _0x10162e(0x321);const _0x31132e=this['commandStyle']();if(_0x31132e!=='auto'){if(_0x10162e(0x1a4)===_0x10162e(0x1a4))return _0x31132e;else this[_0x10162e(0xe4)]&&(this[_0x10162e(0x36f)]&&this[_0x10162e(0x36f)][_0x10162e(0x153)](this[_0x10162e(0xe4)]),this['removeChild'](this[_0x10162e(0xe4)]),this['_dragonbones']['dispose'](),delete this[_0x10162e(0xe4)],delete this['_dragonbonesName']);}else{if(this[_0x10162e(0x1f8)]()>0x0){const _0x3f305d=this[_0x10162e(0xd4)](_0x7b747c);if(_0x3f305d['match'](/\\I\[(\d+)\]/i)){const _0x2d55e9=this[_0x10162e(0x294)](_0x7b747c),_0x37e10d=this['textSizeEx'](_0x3f305d)['width'];return _0x37e10d<=_0x2d55e9[_0x10162e(0x70)]?_0x10162e(0xca):_0x10162e(0x24b);}}}return _0x10162e(0x321);},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0xcd)]=function(_0x5bfc48){const _0x4af4da=_0x2c82ec,_0x38daa9=this[_0x4af4da(0x294)](_0x5bfc48),_0x1fc066=this[_0x4af4da(0xd4)](_0x5bfc48),_0x182ac2=this[_0x4af4da(0x10f)](_0x1fc066)[_0x4af4da(0x70)];this['changePaintOpacity'](this[_0x4af4da(0x269)](_0x5bfc48));const _0x16d176=this[_0x4af4da(0x76)]();if(_0x16d176===_0x4af4da(0x1c2))this[_0x4af4da(0x2bb)](_0x1fc066,_0x38daa9['x']+_0x38daa9['width']-_0x182ac2,_0x38daa9['y'],_0x182ac2);else{if(_0x16d176===_0x4af4da(0x7f)){if(_0x4af4da(0x2bd)===_0x4af4da(0x2bd)){const _0x413573=_0x38daa9['x']+Math[_0x4af4da(0x2b6)]((_0x38daa9[_0x4af4da(0x70)]-_0x182ac2)/0x2);this[_0x4af4da(0x2bb)](_0x1fc066,_0x413573,_0x38daa9['y'],_0x182ac2);}else _0x2130c2[_0x4af4da(0x1a3)][_0x4af4da(0x1b6)]['call'](this,_0x3a2a25),this[_0x4af4da(0x24e)]='';}else this['drawTextEx'](_0x1fc066,_0x38daa9['x'],_0x38daa9['y'],_0x182ac2);}},Window_BestiaryDataCategories[_0x2c82ec(0x1a3)][_0x2c82ec(0x29c)]=function(_0x31e945){const _0x13fc2b=_0x2c82ec;this[_0x13fc2b(0xd4)](_0x31e945)[_0x13fc2b(0x126)](/\\I\[(\d+)\]/i);const _0x2dc9c9=Number(RegExp['$1'])||0x0,_0x5cd560=this[_0x13fc2b(0x294)](_0x31e945),_0x8aebc4=_0x5cd560['x']+Math['floor']((_0x5cd560[_0x13fc2b(0x70)]-ImageManager[_0x13fc2b(0x237)])/0x2),_0x279c54=_0x5cd560['y']+(_0x5cd560[_0x13fc2b(0x346)]-ImageManager[_0x13fc2b(0x222)])/0x2;this[_0x13fc2b(0x1c5)](_0x2dc9c9,_0x8aebc4,_0x279c54);};function Window_BestiaryBasic(){const _0x21ab31=_0x2c82ec;this[_0x21ab31(0x1b6)](...arguments);}Window_BestiaryBasic[_0x2c82ec(0x1a3)]=Object[_0x2c82ec(0x15a)](Window_Command['prototype']),Window_BestiaryBasic[_0x2c82ec(0x1a3)]['constructor']=Window_BestiaryBasic,Window_BestiaryBasic[_0x2c82ec(0x2c8)]={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x195)]??0x0,'showLevelChange':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x245)]??!![]},Window_BestiaryBasic['prototype'][_0x2c82ec(0x1b6)]=function(_0x404e5f){const _0x1d670e=_0x2c82ec;Window_Command['prototype'][_0x1d670e(0x1b6)][_0x1d670e(0x2cd)](this,_0x404e5f),this[_0x1d670e(0x1ef)](),this[_0x1d670e(0x26b)](),this[_0x1d670e(0x243)]();},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d5)]=function(){const _0x29e123=_0x2c82ec;this[_0x29e123(0x286)](),this['forceSelect'](0x0),this['scrollTo'](0x0,0x0);},Window_BestiaryBasic['prototype'][_0x2c82ec(0x118)]=function(){const _0x3a58b7=_0x2c82ec;if(this['currentSymbol']()!=='param')Window_Command[_0x3a58b7(0x1a3)][_0x3a58b7(0x118)][_0x3a58b7(0x2cd)](this);},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x1ea)]=function(){const _0x38790a=_0x2c82ec;for(const _0x5e2f9e of this['baseParams']()){'nwFGj'!==_0x38790a(0xc5)?this[_0x38790a(0x1f3)](_0x5e2f9e,'param',!![],_0x5e2f9e):this[_0x38790a(0xcd)](_0x355426);}this[_0x38790a(0x2aa)]()&&this[_0x38790a(0x203)]();},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x25b)]=function(){const _0x29cc1e=_0x2c82ec;return Imported[_0x29cc1e(0x28e)]?VisuMZ[_0x29cc1e(0xed)][_0x29cc1e(0x13c)][_0x29cc1e(0x27a)][_0x29cc1e(0x1a5)]:_0x29cc1e(0x370)!==_0x29cc1e(0x370)?this['_showEnemyInBestiary'][_0x2a58b6]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_BestiaryBasic['prototype'][_0x2c82ec(0x2aa)]=function(){const _0x45823a=_0x2c82ec;return Imported[_0x45823a(0x11e)]&&Window_BestiaryBasic['SETTINGS'][_0x45823a(0xd1)];},Window_BestiaryBasic['prototype']['addLevelChangeCommands']=function(){const _0x5c0f74=_0x2c82ec,_0x3cabf7=TextManager[_0x5c0f74(0x33e)][_0x5c0f74(0x379)],_0x38123e=SceneManager[_0x5c0f74(0x387)][_0x5c0f74(0x1c6)]();{if('YuCNG'==='RXSzW'){if(_0x678283[_0x5c0f74(0x2cf)])return _0x50c69f[_0x5c0f74(0x2eb)];}else{const _0x199ec1=_0x3cabf7[_0x5c0f74(0xf0)],_0x3f5094=_0x199ec1['format'](TextManager['level']),_0x53385a=_0x38123e[_0x5c0f74(0x13a)]<_0x38123e[_0x5c0f74(0x32a)]();this[_0x5c0f74(0x1f3)](_0x3f5094,_0x5c0f74(0x32b),_0x53385a);}}{const _0x3915ac=_0x3cabf7[_0x5c0f74(0x2df)],_0x4085e2=_0x3915ac[_0x5c0f74(0x191)](TextManager[_0x5c0f74(0x13a)]),_0x1e1021=_0x38123e[_0x5c0f74(0x13a)]<_0x38123e['maxLevel']();this[_0x5c0f74(0x1f3)](_0x4085e2,_0x5c0f74(0x2df),_0x1e1021);}{if('qkHjm'==='qkHjm'){const _0x2e9c70=_0x3cabf7['levelDown'],_0x6cc1a8=_0x2e9c70[_0x5c0f74(0x191)](TextManager[_0x5c0f74(0x13a)]),_0x34f822=_0x38123e[_0x5c0f74(0x13a)]>_0x38123e[_0x5c0f74(0x2c5)]();this[_0x5c0f74(0x1f3)](_0x6cc1a8,_0x5c0f74(0x2ef),_0x34f822);}else{const _0xf161fe=_0x27bbe6['levelUp'],_0x2f120c=_0xf161fe[_0x5c0f74(0x191)](_0x25682d['level']),_0x3a96d3=_0x6eaee3['level']<_0x134770[_0x5c0f74(0x32a)]();this[_0x5c0f74(0x1f3)](_0x2f120c,'levelUp',_0x3a96d3);}}{if(_0x5c0f74(0xe3)!=='wzivb'){const _0x20db64=_0x3cabf7[_0x5c0f74(0x326)],_0x4e7240=_0x20db64[_0x5c0f74(0x191)](TextManager[_0x5c0f74(0x13a)]),_0x22099d=_0x38123e['level']>_0x38123e[_0x5c0f74(0x2c5)]();this[_0x5c0f74(0x1f3)](_0x4e7240,'levelMin',_0x22099d);}else return![];}},Window_BestiaryBasic['prototype'][_0x2c82ec(0x261)]=function(_0x10e60a){const _0xd45a60=_0x2c82ec,_0x3f10cb=this[_0xd45a60(0x125)](_0x10e60a);_0x3f10cb==='param'?this['drawParamItem'](_0x10e60a):this[_0xd45a60(0x220)](_0x10e60a);},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x2b2)]=function(){const _0x158abc=_0x2c82ec;return Imported[_0x158abc(0x28e)]&&VisuMZ[_0x158abc(0xed)][_0x158abc(0x13c)][_0x158abc(0x27a)][_0x158abc(0x13d)];},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x365)]=function(_0x853091){const _0x2f55a3=_0x2c82ec,_0x4e5b00=this[_0x2f55a3(0x294)](_0x853091),_0x4d2e72=String(this['commandName'](_0x853091))[_0x2f55a3(0x273)]()[_0x2f55a3(0x1ad)](),_0x43571f=SceneManager['_scene']['enemy']();if(!_0x43571f)return;this[_0x2f55a3(0x251)](),this[_0x2f55a3(0x2b8)](!![]),this['changeTextColor'](ColorManager[_0x2f55a3(0x36b)]());if(Imported[_0x2f55a3(0x28e)]){if(this['shouldDrawIcons']()){if('gLYIj'===_0x2f55a3(0x8f))_0x4a9cf8[_0x2f55a3(0x1a3)]['hide'][_0x2f55a3(0x2cd)](this),this[_0x2f55a3(0x2c6)]();else{const _0x21ad9d=VisuMZ['GetParamIcon'](_0x4d2e72);this[_0x2f55a3(0x1c5)](_0x21ad9d,_0x4e5b00['x']+0x2,_0x4e5b00['y']+0x2),_0x4e5b00['x']+=ImageManager['iconWidth']+0x4,_0x4e5b00[_0x2f55a3(0x70)]-=ImageManager['iconWidth']+0x4;}}const _0x406473=TextManager['param'](_0x4d2e72);this['drawText'](_0x406473,_0x4e5b00['x'],_0x4e5b00['y'],_0x4e5b00[_0x2f55a3(0x70)],'left');}else{const _0x1b02cd=TextManager['param'](Number(_0x4d2e72));this[_0x2f55a3(0x289)](_0x1b02cd,_0x4e5b00['x'],_0x4e5b00['y'],_0x4e5b00[_0x2f55a3(0x70)],_0x2f55a3(0x194));}this[_0x2f55a3(0x251)](),this[_0x2f55a3(0x345)](ColorManager[_0x2f55a3(0x36b)]());if(Imported['VisuMZ_0_CoreEngine']){const _0x1e7a50=_0x43571f[_0x2f55a3(0x28f)](_0x4d2e72,!![]);this[_0x2f55a3(0x289)](_0x1e7a50,_0x4e5b00['x'],_0x4e5b00['y'],_0x4e5b00[_0x2f55a3(0x70)],_0x2f55a3(0x1c2));}else{const _0x1e96e8=_0x43571f['param'](Number(_0x4d2e72));this[_0x2f55a3(0x289)](_0x1e96e8,_0x4e5b00['x'],_0x4e5b00['y'],_0x4e5b00['width'],_0x2f55a3(0x1c2));}},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x76)]=function(){const _0x5d983d=_0x2c82ec;return _0x5d983d(0x194);},Window_BestiaryBasic[_0x2c82ec(0x1a3)][_0x2c82ec(0x220)]=function(_0x4e89dc){const _0x33d32d=_0x2c82ec,_0x552989=this[_0x33d32d(0x294)](_0x4e89dc),_0x374718=this[_0x33d32d(0xd4)](_0x4e89dc),_0x1a71c8=this[_0x33d32d(0x10f)](_0x374718)[_0x33d32d(0x70)];this[_0x33d32d(0x2b8)](this['isCommandEnabled'](_0x4e89dc));const _0x314f9b=this[_0x33d32d(0x76)]();if(_0x314f9b===_0x33d32d(0x1c2))this[_0x33d32d(0x2bb)](_0x374718,_0x552989['x']+_0x552989[_0x33d32d(0x70)]-_0x1a71c8,_0x552989['y'],_0x1a71c8);else{if(_0x314f9b===_0x33d32d(0x7f)){if(_0x33d32d(0xc2)!==_0x33d32d(0x30f)){const _0x18f043=_0x552989['x']+Math[_0x33d32d(0x2b6)]((_0x552989[_0x33d32d(0x70)]-_0x1a71c8)/0x2);this['drawTextEx'](_0x374718,_0x18f043,_0x552989['y'],_0x1a71c8);}else{const _0x5bedf3=_0x19a39a[_0x33d32d(0x33e)][_0x33d32d(0x13c)]['BgSettings'];_0x5bedf3&&(_0x5bedf3[_0x33d32d(0x128)]!==''||_0x5bedf3['BgFilename2']!=='')&&(this[_0x33d32d(0xab)]=new _0x23c265(_0x19e2d3[_0x33d32d(0x16b)](_0x5bedf3[_0x33d32d(0x128)])),this[_0x33d32d(0x16a)]=new _0x1b1492(_0x2e4018[_0x33d32d(0x11d)](_0x5bedf3[_0x33d32d(0x1a7)])),this[_0x33d32d(0x275)](this[_0x33d32d(0xab)]),this[_0x33d32d(0x275)](this['_backSprite2']),this[_0x33d32d(0xab)]['bitmap'][_0x33d32d(0x37f)](this[_0x33d32d(0xb0)][_0x33d32d(0x285)](this,this[_0x33d32d(0xab)])),this[_0x33d32d(0x16a)]['bitmap'][_0x33d32d(0x37f)](this['adjustSprite'][_0x33d32d(0x285)](this,this[_0x33d32d(0x16a)])));}}else{if(_0x33d32d(0x25a)!=='TwiEP')this[_0x33d32d(0x2bb)](_0x374718,_0x552989['x'],_0x552989['y'],_0x1a71c8);else return _0x963611=_0x32a5f8(_0x49a252),_0x474d5d[_0x33d32d(0x126)](/#(.*)/i)?_0x33d32d(0x15f)[_0x33d32d(0x191)](_0x422199(_0x11797a['$1'])):this[_0x33d32d(0x330)](_0x1a64c1(_0x15fca6));}}};function Window_BestiaryElements(){const _0x5c4250=_0x2c82ec;this[_0x5c4250(0x1b6)](...arguments);}Window_BestiaryElements[_0x2c82ec(0x1a3)]=Object[_0x2c82ec(0x15a)](Window_Command[_0x2c82ec(0x1a3)]),Window_BestiaryElements[_0x2c82ec(0x1a3)]['constructor']=Window_BestiaryElements,Window_BestiaryElements['SETTINGS']={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x18a)]??0x0},Window_BestiaryElements[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b6)]=function(_0x39211e){const _0x416b7a=_0x2c82ec;Window_Command[_0x416b7a(0x1a3)][_0x416b7a(0x1b6)][_0x416b7a(0x2cd)](this,_0x39211e),this['deactivate'](),this['deselect'](),this[_0x416b7a(0x243)]();},Window_BestiaryElements[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d5)]=function(){const _0x1f8204=_0x2c82ec;this[_0x1f8204(0x286)](),this[_0x1f8204(0x88)](0x0),this['scrollTo'](0x0,0x0);},Window_BestiaryElements[_0x2c82ec(0x1a3)][_0x2c82ec(0x118)]=function(){},Window_BestiaryElements[_0x2c82ec(0x1a3)][_0x2c82ec(0x1ea)]=function(){const _0x4d3195=_0x2c82ec;for(let _0x512c1d=0x1;_0x512c1d<$dataSystem[_0x4d3195(0x113)]['length'];_0x512c1d++){if(this[_0x4d3195(0x9c)](_0x512c1d))continue;const _0x2bab5e=$dataSystem[_0x4d3195(0x113)][_0x512c1d];this[_0x4d3195(0x1f3)](_0x2bab5e,'elements',!![],_0x512c1d);}},Window_BestiaryElements[_0x2c82ec(0x1a3)][_0x2c82ec(0x9c)]=function(_0x5c3a2c){const _0x58bfa1=_0x2c82ec;if(_0x5c3a2c<=0x0)return!![];if(Imported[_0x58bfa1(0x2c1)]){if(_0x58bfa1(0x74)===_0x58bfa1(0x101))this[_0x58bfa1(0x103)]={},this[_0x58bfa1(0x17d)]=this['_tp'][_0x58bfa1(0x32f)](0x0,this[_0x58bfa1(0xb4)]()),_0x53c2b1[_0x58bfa1(0x33e)]['Game_BattlerBase_refresh'][_0x58bfa1(0x2cd)](this);else{if(VisuMZ[_0x58bfa1(0x233)][_0x58bfa1(0x13c)][_0x58bfa1(0x31d)][_0x58bfa1(0x375)][_0x58bfa1(0x2a5)](_0x5c3a2c)){if(_0x58bfa1(0x2ff)===_0x58bfa1(0x20c))_0xe332af['Bestiary'][_0x58bfa1(0x1ae)][_0x58bfa1(0x2cd)](this),this[_0x58bfa1(0x84)]();else return!![];}}}return![];},Window_BestiaryElements['prototype']['drawItem']=function(_0x3df7c2){const _0x30c8dd=_0x2c82ec,_0x527c57=this[_0x30c8dd(0x294)](_0x3df7c2),_0x722c88=this[_0x30c8dd(0xd4)](_0x3df7c2),_0xb8e4a8=this['_list'][_0x3df7c2][_0x30c8dd(0x2c9)];this[_0x30c8dd(0x251)](),this[_0x30c8dd(0x2b8)](this[_0x30c8dd(0x269)](_0x3df7c2)),this[_0x30c8dd(0x2bb)](_0x722c88,_0x527c57['x'],_0x527c57['y'],_0x527c57[_0x30c8dd(0x70)]);const _0x41926f=SceneManager[_0x30c8dd(0x387)][_0x30c8dd(0x1c6)](),_0x3971a9=_0x41926f[_0x30c8dd(0xd2)](_0xb8e4a8),_0xcadc3=TextManager[_0x30c8dd(0x33e)][_0x30c8dd(0x29b)];let _0x4a7826=_0xcadc3[_0x30c8dd(0x2d7)];if(Imported['VisuMZ_1_ElementStatusCore']&&_0x41926f['getAbsorbedElements']()[_0x30c8dd(0x2a5)](_0xb8e4a8))_0x4a7826=_0xcadc3[_0x30c8dd(0x258)];else{if(_0x3971a9>1.05)_0x30c8dd(0xe5)===_0x30c8dd(0xe5)?_0x4a7826=_0xcadc3[_0x30c8dd(0x2e3)]:(this[_0x30c8dd(0x24e)]=_0x54baa6,this[_0x30c8dd(0x18d)]());else{if(_0x3971a9<=0x0)_0x4a7826=_0xcadc3['immune'];else _0x3971a9<0.95&&(_0x30c8dd(0x96)==='DjcHZ'?(_0x133532(_0x30c8dd(0x37e)[_0x30c8dd(0x191)](_0x2380fb,_0xbdb961,_0x5e4789)),_0x2c5a17['exit']()):_0x4a7826=_0xcadc3['resist']);}}const _0x3c0019=_0x527c57['x']+_0x527c57[_0x30c8dd(0x70)]-this['textSizeEx'](_0x4a7826)['width'];this[_0x30c8dd(0x2bb)](_0x4a7826,_0x3c0019,_0x527c57['y'],_0x527c57['width']);};function Window_BestiarySkills(){const _0x130d92=_0x2c82ec;this[_0x130d92(0x1b6)](...arguments);}Window_BestiarySkills[_0x2c82ec(0x1a3)]=Object['create'](Window_Command[_0x2c82ec(0x1a3)]),Window_BestiarySkills[_0x2c82ec(0x1a3)][_0x2c82ec(0x2f7)]=Window_BestiarySkills,Window_BestiarySkills[_0x2c82ec(0x2c8)]={'bgType':VisuMZ[_0x2c82ec(0x33e)]['Settings']['Window'][_0x2c82ec(0x1e4)]??0x0},Window_BestiarySkills[_0x2c82ec(0x1a3)][_0x2c82ec(0x1b6)]=function(_0x27179b){const _0x467937=_0x2c82ec;Window_Command[_0x467937(0x1a3)][_0x467937(0x1b6)][_0x467937(0x2cd)](this,_0x27179b),this[_0x467937(0x1ef)](),this['deselect'](),this[_0x467937(0x243)]();},Window_BestiarySkills[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d5)]=function(){const _0x28eb83=_0x2c82ec;this[_0x28eb83(0x286)](),this[_0x28eb83(0x88)](0x0),this[_0x28eb83(0x83)](0x0,0x0);if(this['_helpWindow']){if('RfXrY'!==_0x28eb83(0x1bc))this[_0x28eb83(0x11f)][_0x28eb83(0x2fc)]();else{const _0x4e82b7=this[_0x28eb83(0x1f6)]();this[_0x28eb83(0x11f)][_0x28eb83(0x164)]['x']=this[_0x28eb83(0x11f)][_0x28eb83(0x164)]['y']=_0x4e82b7;}}},Window_BestiarySkills['prototype'][_0x2c82ec(0x118)]=function(){},Window_BestiarySkills[_0x2c82ec(0x1a3)][_0x2c82ec(0x1ea)]=function(){const _0x2770c2=_0x2c82ec,_0x5dafc1=SceneManager[_0x2770c2(0x387)]['enemy'](),_0x50d6cf=_0x5dafc1[_0x2770c2(0x314)]()[_0x2770c2(0x265)]((_0x25c4d8,_0x3c2a62)=>_0x25c4d8['id']-_0x3c2a62['id'])['filter']((_0x31907c,_0x59971b,_0x49282b)=>_0x49282b[_0x2770c2(0xc0)](_0x31907c)===_0x59971b);for(const _0x3d4989 of _0x50d6cf){if(this['isSkillHidden'](_0x3d4989))continue;this[_0x2770c2(0x1f3)](_0x3d4989['id'],_0x2770c2(0x212),!![],_0x3d4989['id']);}},Window_BestiarySkills[_0x2c82ec(0x1a3)][_0x2c82ec(0xe2)]=function(_0x21f875){const _0x416f79=_0x2c82ec;if(!_0x21f875)return!![];const _0x172168=VisuMZ[_0x416f79(0x33e)][_0x416f79(0x14f)],_0x34a0df=_0x21f875[_0x416f79(0x239)]||'';if(_0x34a0df['match'](_0x172168['hideSkill']))return!![];return![];},Window_BestiarySkills['prototype']['drawItem']=function(_0x3a02b4){const _0x421fe7=_0x2c82ec,_0x11db5e=this[_0x421fe7(0x294)](_0x3a02b4),_0x32cff4=this[_0x421fe7(0xd4)](_0x3a02b4),_0x33ef59=this[_0x421fe7(0x193)](_0x32cff4);this['resetFontSettings'](),this[_0x421fe7(0x2b8)](this[_0x421fe7(0x269)](_0x3a02b4)),this[_0x421fe7(0x2bb)](_0x33ef59,_0x11db5e['x'],_0x11db5e['y'],_0x11db5e[_0x421fe7(0x70)]);},Window_BestiarySkills[_0x2c82ec(0x1a3)][_0x2c82ec(0x193)]=function(_0x2d8e79){const _0x2c94e5=_0x2c82ec,_0x1454b2=$dataSkills[_0x2d8e79];let _0xf1370a=_0x1454b2[_0x2c94e5(0x10c)],_0x1d56ca=_0x1454b2['iconIndex'];if(Imported[_0x2c94e5(0x205)]){if('tJIyY'==='tJIyY'){const _0x1057ec=_0x1454b2['note']||'';_0x1057ec[_0x2c94e5(0x126)](/<DISPLAY ICON: (\d+)>/i)&&(_0x1d56ca=Number(RegExp['$1'])),_0x1057ec[_0x2c94e5(0x126)](/<DISPLAY TEXT: (.*)>/i)&&(_0xf1370a=String(RegExp['$1']));}else{const _0x426170=_0x5584cd['getTraitSet'](_0x4c9ff1);this[_0x2c94e5(0x30a)](_0x3e0af5,_0x426170,_0x3da5e7);}}return _0x2c94e5(0x102)[_0x2c94e5(0x191)](_0xf1370a,_0x1d56ca);},Window_BestiarySkills[_0x2c82ec(0x1a3)]['updateHelp']=function(){const _0x359721=_0x2c82ec,_0x15bdb8=this[_0x359721(0x150)]()?$dataSkills[this[_0x359721(0x150)]()]:null;this[_0x359721(0x11f)][_0x359721(0x182)](_0x15bdb8);};function Window_BestiaryRewards(){const _0x2e75e9=_0x2c82ec;this[_0x2e75e9(0x1b6)](...arguments);}Window_BestiaryRewards[_0x2c82ec(0x1a3)]=Object['create'](Window_Command[_0x2c82ec(0x1a3)]),Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x2f7)]=Window_BestiaryRewards,Window_BestiaryRewards[_0x2c82ec(0x2c8)]={'bgType':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0xcf)]??0x0,'rewardsOrder':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)]['RewardsWindow_RewardsOrder']??[_0x2c82ec(0x303),'ap','cp','jp','sp','gold',_0x2c82ec(0xc9)],'expIcon':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x310)]??0x57,'goldIcon':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x2fb)]['Gold_Icon']??0x13a},Window_BestiaryRewards['prototype'][_0x2c82ec(0x1b6)]=function(_0x587f63){const _0x26f00f=_0x2c82ec;Window_Command[_0x26f00f(0x1a3)][_0x26f00f(0x1b6)][_0x26f00f(0x2cd)](this,_0x587f63),this[_0x26f00f(0x1ef)](),this['deselect'](),this['hide']();},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d5)]=function(){const _0x178d39=_0x2c82ec;this['activate'](),this[_0x178d39(0x88)](0x0),this[_0x178d39(0x83)](0x0,0x0);},Window_BestiaryRewards[_0x2c82ec(0x1a3)]['playOkSound']=function(){},Window_BestiaryRewards['prototype'][_0x2c82ec(0x1ea)]=function(){const _0x321c8c=_0x2c82ec,_0x144582=Window_BestiaryRewards['SETTINGS'][_0x321c8c(0x226)];Math[_0x321c8c(0x156)]=!![],SceneManager['_scene'][_0x321c8c(0x1c6)]()[_0x321c8c(0x1b4)]=undefined;for(const _0x5d3be3 of _0x144582){if(_0x5d3be3===_0x321c8c(0x303))this[_0x321c8c(0x385)]();if(_0x5d3be3==='ap')this[_0x321c8c(0x354)]();if(_0x5d3be3==='cp')this[_0x321c8c(0x1fb)]();if(_0x5d3be3==='jp')this[_0x321c8c(0x77)]();if(_0x5d3be3==='sp')this[_0x321c8c(0xdc)]();if(_0x5d3be3==='gold')this[_0x321c8c(0x145)]();if(_0x5d3be3===_0x321c8c(0xc9))this[_0x321c8c(0x1a6)]();}Math[_0x321c8c(0x156)]=![];},Window_BestiaryRewards['prototype'][_0x2c82ec(0x385)]=function(){const _0x1bb185=_0x2c82ec,_0x18044f=SceneManager[_0x1bb185(0x387)][_0x1bb185(0x1c6)](),_0xf21d3f=_0x18044f[_0x1bb185(0x303)](),_0x590e12=TextManager[_0x1bb185(0x252)],_0x326a93=Window_BestiaryRewards['SETTINGS'][_0x1bb185(0x1ec)];let _0x45f872=_0x326a93>0x0?'\x5cI[%1]%2'[_0x1bb185(0x191)](_0x326a93,_0x590e12):_0x590e12;this[_0x1bb185(0x1f3)](_0x45f872,_0x1bb185(0x206),!![],_0xf21d3f);},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x354)]=function(){const _0x418d23=_0x2c82ec;if(!Imported[_0x418d23(0x115)])return;if(!VisuMZ[_0x418d23(0x1b7)][_0x418d23(0x13c)][_0x418d23(0x2a4)]['ShowVictory'])return;const _0x391df7=SceneManager[_0x418d23(0x387)]['enemy'](),_0x3c36b8=_0x391df7[_0x418d23(0x166)](),_0x427099=TextManager[_0x418d23(0x2d2)],_0x1c90e3=ImageManager['abilityPointsIcon'];let _0x3f2683=_0x1c90e3>0x0?_0x418d23(0x98)[_0x418d23(0x191)](_0x1c90e3,_0x427099):_0x427099;this['addCommand'](_0x3f2683,_0x418d23(0x206),!![],_0x3c36b8);},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x1fb)]=function(){const _0x589a91=_0x2c82ec;if(!Imported[_0x589a91(0x1ab)])return;if(!VisuMZ[_0x589a91(0xaf)]['Settings'][_0x589a91(0x208)][_0x589a91(0x97)])return;const _0x2803bd=SceneManager['_scene'][_0x589a91(0x1c6)](),_0xe75134=_0x2803bd[_0x589a91(0xa7)](),_0x5bb4e9=TextManager['classPointsAbbr'],_0x26096c=ImageManager['classPointsIcon'];let _0x26e2e9=_0x26096c>0x0?_0x589a91(0x98)['format'](_0x26096c,_0x5bb4e9):_0x5bb4e9;this[_0x589a91(0x1f3)](_0x26e2e9,_0x589a91(0x206),!![],_0xe75134);},Window_BestiaryRewards['prototype'][_0x2c82ec(0x77)]=function(){const _0x43fbda=_0x2c82ec;if(!Imported['VisuMZ_2_ClassChangeSystem'])return;if(!VisuMZ[_0x43fbda(0xaf)][_0x43fbda(0x13c)]['JobPoints'][_0x43fbda(0x97)])return;const _0x2371c8=SceneManager[_0x43fbda(0x387)][_0x43fbda(0x1c6)](),_0x55059a=_0x2371c8[_0x43fbda(0x11b)](),_0x526f8d=TextManager[_0x43fbda(0x317)],_0x443d98=ImageManager['jobPointsIcon'];let _0x4cdc22=_0x443d98>0x0?'\x5cI[%1]%2'[_0x43fbda(0x191)](_0x443d98,_0x526f8d):_0x526f8d;this['addCommand'](_0x4cdc22,_0x43fbda(0x206),!![],_0x55059a);},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0xdc)]=function(){const _0x5ebda0=_0x2c82ec;if(!Imported[_0x5ebda0(0x115)])return;if(!VisuMZ[_0x5ebda0(0x1b7)][_0x5ebda0(0x13c)][_0x5ebda0(0x17a)]['ShowVictory'])return;const _0x499b2d=SceneManager['_scene']['enemy'](),_0x5730eb=_0x499b2d[_0x5ebda0(0x1fa)](),_0x4665ab=TextManager['skillPointsAbbr'],_0x16dd03=ImageManager['skillPointsIcon'];let _0x507085=_0x16dd03>0x0?_0x5ebda0(0x98)[_0x5ebda0(0x191)](_0x16dd03,_0x4665ab):_0x4665ab;this[_0x5ebda0(0x1f3)](_0x507085,_0x5ebda0(0x206),!![],_0x5730eb);},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x145)]=function(){const _0xe1ee83=_0x2c82ec,_0x31e34c=SceneManager[_0xe1ee83(0x387)]['enemy'](),_0x103ac7=_0x31e34c[_0xe1ee83(0x1d1)](),_0xa4def9=TextManager[_0xe1ee83(0xb8)],_0x4c280f=Window_BestiaryRewards[_0xe1ee83(0x2c8)]['goldIcon'];let _0x21c67c=_0x4c280f>0x0?_0xe1ee83(0x98)[_0xe1ee83(0x191)](_0x4c280f,_0xa4def9):_0xa4def9;this[_0xe1ee83(0x1f3)](_0x21c67c,_0xe1ee83(0x206),!![],_0x103ac7);},Window_BestiaryRewards[_0x2c82ec(0x1a3)]['addItemsCommand']=function(){const _0x20fa8e=_0x2c82ec;this[_0x20fa8e(0x1d7)](),this[_0x20fa8e(0x1fe)](),this[_0x20fa8e(0x73)](),this[_0x20fa8e(0xf2)]();},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d7)]=function(){const _0x48ab52=_0x2c82ec;this['_enemyDrops']={};const _0x13d968=[_0x48ab52(0x378),'chance50',_0x48ab52(0xc8),'chance10',_0x48ab52(0x18b),_0x48ab52(0x2f2)],_0x482693=[_0x48ab52(0xc9),_0x48ab52(0x2d9),'armors'];for(const _0x5ad22d of _0x13d968){for(const _0x9e877b of _0x482693){this[_0x48ab52(0x14d)][_0x5ad22d]=this[_0x48ab52(0x14d)][_0x5ad22d]||{},this[_0x48ab52(0x14d)][_0x5ad22d][_0x9e877b]=this[_0x48ab52(0x14d)][_0x5ad22d][_0x9e877b]||[];}}},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x159)]=function(_0x16f914,_0x1edbf1){if(_0x16f914===0x1)return $dataItems[_0x1edbf1];if(_0x16f914===0x2)return $dataWeapons[_0x1edbf1];if(_0x16f914===0x3)return $dataArmors[_0x1edbf1];return null;},VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x28b)]=function(_0x51ea6a){const _0x4dd5ab=_0x2c82ec,_0x1f7ecd=TextManager[_0x4dd5ab(0x33e)][_0x4dd5ab(0x340)];if(_0x51ea6a>=0x1){if(_0x4dd5ab(0x1f1)===_0x4dd5ab(0x185))this['_dragonbonesSpriteContainer'][_0x4dd5ab(0xae)]=[this[_0x4dd5ab(0x33d)]];else return _0x1f7ecd[_0x4dd5ab(0x378)];}else{if(_0x51ea6a>=0.5){if('ORDFp'!==_0x4dd5ab(0x2dd))this[_0x4dd5ab(0x1c6)]()[_0x4dd5ab(0x348)](0x1);else return _0x1f7ecd[_0x4dd5ab(0x319)];}else{if(_0x51ea6a>=0.2)return _0x1f7ecd['chance20'];else return _0x51ea6a>=0.1?_0x1f7ecd[_0x4dd5ab(0x256)]:_0x1f7ecd['chance0'];}}},Window_BestiaryRewards['prototype'][_0x2c82ec(0x17c)]=function(_0xd21be2,_0x277e03){const _0x2fdae3=_0x2c82ec;if(!_0xd21be2)return;const _0x2e7938=TextManager[_0x2fdae3(0x33e)]['rewardsWindow'],_0x2a792f=[_0x2fdae3(0x378),_0x2fdae3(0x319),_0x2fdae3(0xc8),_0x2fdae3(0x256),_0x2fdae3(0x18b),_0x2fdae3(0x2f2)];let _0x1f1fa5='';for(const _0x5e8a90 of _0x2a792f){if('DcorB'!=='ofzZm'){if(_0x277e03===_0x2e7938[_0x5e8a90])_0x1f1fa5=_0x5e8a90;}else{this[_0x2fdae3(0x1f0)]();if(this[_0x2fdae3(0x33a)]<=0x0)return;this[_0x2fdae3(0x1a0)](),this[_0x2fdae3(0x2cb)]();}}let _0x4d67ef='';if(DataManager['isItem'](_0xd21be2))_0x4d67ef=_0x2fdae3(0xc9);if(DataManager[_0x2fdae3(0x1ee)](_0xd21be2))_0x4d67ef=_0x2fdae3(0x2d9);if(DataManager[_0x2fdae3(0x1fc)](_0xd21be2))_0x4d67ef='armors';this[_0x2fdae3(0x14d)][_0x1f1fa5][_0x4d67ef][_0x2fdae3(0x155)](_0xd21be2);},Window_BestiaryRewards[_0x2c82ec(0x1a3)]['addEnemyDatabaseDrops']=function(){const _0x115efd=_0x2c82ec,_0x25621c=SceneManager[_0x115efd(0x387)][_0x115efd(0x1c6)](),_0x16b1a1=_0x25621c[_0x115efd(0x1c6)]()['dropItems'];if(!_0x16b1a1)return;for(const _0x14bdc8 of _0x16b1a1){if(_0x14bdc8[_0x115efd(0x23d)]<=0x0)continue;const _0x2c7ad4=0x1/Math['max'](_0x14bdc8['denominator'],0x1),_0x287207=VisuMZ['Bestiary'][_0x115efd(0x159)](_0x14bdc8[_0x115efd(0x23d)],_0x14bdc8[_0x115efd(0x37a)]),_0x5e8191=VisuMZ[_0x115efd(0x33e)][_0x115efd(0x28b)](_0x2c7ad4);this['addItemToGroup'](_0x287207,_0x5e8191);}},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0x73)]=function(){const _0x17b30d=_0x2c82ec;if(!Imported[_0x17b30d(0x290)])return;const _0x683e7b=SceneManager['_scene'][_0x17b30d(0x1c6)](),_0x31fa91=_0x683e7b['enemy']()[_0x17b30d(0x239)]||'',_0x397703=_0x31fa91['split'](/[\r\n]+/),_0x3572c9=TextManager[_0x17b30d(0x33e)]['rewardsWindow'][_0x17b30d(0x2f2)];for(const _0x57826f of _0x397703){if(_0x17b30d(0x1ed)!=='nKNoK'){if(this[_0x17b30d(0x87)]===_0x1eb2fa)this[_0x17b30d(0xa8)]();this['_timesEnemySeen'][_0x34428e]=this[_0x17b30d(0x87)][_0x454570]||0x0,this['_timesEnemySeen'][_0x43bf5b]+=_0x3a79f9||0x1;}else{if(_0x57826f[_0x17b30d(0x126)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+)[ ](?:THROUGH|to)[ ](\d+) (?:DROP|DROPS)>/i)){const _0x129b31=VisuMZ[_0x17b30d(0x1b5)][_0x17b30d(0x308)](RegExp['$1']),_0x33b99c=Number(RegExp['$2']),_0x2e8dcf=Number(RegExp['$3']);for(let _0x19cba0=_0x33b99c;_0x19cba0<=_0x2e8dcf;_0x19cba0++){const _0x3534cb=_0x129b31[_0x19cba0]||null;_0x3534cb&&_0x3534cb['name'][_0x17b30d(0x1ad)]()!==''&&!_0x3534cb[_0x17b30d(0x10c)]['match'](/-----/i)&&this['addItemToGroup'](_0x3534cb,_0x3572c9);}}if(_0x57826f[_0x17b30d(0x126)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (\d+) (?:DROP|DROPS)>/i)){const _0xbb0722=VisuMZ[_0x17b30d(0x1b5)]['getDatabase'](RegExp['$1']),_0x38574a=Number(RegExp['$2']),_0x560d27=_0xbb0722[_0x38574a];this[_0x17b30d(0x17c)](_0x560d27,_0x3572c9);}if(_0x57826f[_0x17b30d(0x126)](/<CONDITIONAL (ITEM|WEAPON|ARMOR) (.*) (?:DROP|DROPS)>/i)){const _0x5c9860=VisuMZ[_0x17b30d(0x1b5)][_0x17b30d(0xa0)](RegExp['$1'],RegExp['$2']);this['addItemToGroup'](_0x5c9860,_0x3572c9);}}}},Window_BestiaryRewards[_0x2c82ec(0x1a3)]['addItemDropCommand']=function(_0x5a3fbf,_0x2b3376){const _0x3badf3=_0x2c82ec;if(!_0x5a3fbf)return;const _0x3837da=_0x5a3fbf[_0x3badf3(0x10c)],_0x469db=_0x5a3fbf[_0x3badf3(0x81)];let _0x50a01b=_0x469db>0x0?_0x3badf3(0x98)[_0x3badf3(0x191)](_0x469db,_0x3837da):_0x3837da;this['addCommand'](_0x50a01b,_0x3badf3(0x206),!![],_0x2b3376);},Window_BestiaryRewards[_0x2c82ec(0x1a3)][_0x2c82ec(0xf2)]=function(){const _0x7c9d5a=_0x2c82ec,_0x2e00ca=[_0x7c9d5a(0x378),'chance50',_0x7c9d5a(0xc8),_0x7c9d5a(0x256),_0x7c9d5a(0x18b),_0x7c9d5a(0x2f2)],_0x52bba7=['items',_0x7c9d5a(0x2d9),'armors'];for(const _0x394359 of _0x2e00ca){if('GHrqr'!==_0x7c9d5a(0x363))return _0x130c0f;else for(const _0x3c9478 of _0x52bba7){if(_0x7c9d5a(0x199)!=='fqdLr')this[_0x7c9d5a(0xe0)](),_0x925b58[_0x7c9d5a(0x1a3)][_0x7c9d5a(0x1b6)][_0x7c9d5a(0x2cd)](this,_0x4912f0);else{let _0x28410f=this[_0x7c9d5a(0x14d)][_0x394359][_0x3c9478];_0x28410f=_0x28410f['sort']((_0x409f89,_0x135fd0)=>_0x409f89['id']-_0x135fd0['id']);for(const _0x389308 of _0x28410f){const _0xe623=TextManager[_0x7c9d5a(0x33e)][_0x7c9d5a(0x340)][_0x394359];this['addItemDropCommand'](_0x389308,_0xe623);}}}}},Window_BestiaryRewards['prototype'][_0x2c82ec(0x261)]=function(_0x3723d9){const _0x189700=_0x2c82ec,_0x8b3d55=this['itemLineRect'](_0x3723d9),_0x3b00f4=this[_0x189700(0xd4)](_0x3723d9),_0x733550=String(this[_0x189700(0x302)][_0x3723d9][_0x189700(0x2c9)]);this[_0x189700(0x251)](),this[_0x189700(0x2b8)](this['isCommandEnabled'](_0x3723d9)),this[_0x189700(0x2bb)](_0x3b00f4,_0x8b3d55['x'],_0x8b3d55['y'],_0x8b3d55[_0x189700(0x70)]);const _0x19a414=_0x8b3d55['x']+(_0x8b3d55[_0x189700(0x70)]-this[_0x189700(0x10f)](_0x733550)[_0x189700(0x70)]);this[_0x189700(0x2bb)](_0x733550,_0x19a414,_0x8b3d55['y'],_0x8b3d55[_0x189700(0x70)]);};function Window_BestiaryTraits(){const _0x55c21d=_0x2c82ec;this[_0x55c21d(0x1b6)](...arguments);}Window_BestiaryTraits[_0x2c82ec(0x1a3)]=Object['create'](Window_Command[_0x2c82ec(0x1a3)]),Window_BestiaryTraits[_0x2c82ec(0x1a3)]['constructor']=Window_BestiaryTraits,Window_BestiaryTraits[_0x2c82ec(0x2c8)]={'bgType':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x1ff)]??0x0,'displayAllTraitTypes':VisuMZ['Bestiary'][_0x2c82ec(0x13c)]['Window']['TraitsWindow_ShowAllTraits']??![]},Window_BestiaryTraits['prototype']['initialize']=function(_0x49f084){const _0x325eba=_0x2c82ec;this[_0x325eba(0xe0)](),Window_Command[_0x325eba(0x1a3)][_0x325eba(0x1b6)]['call'](this,_0x49f084),this[_0x325eba(0x1ef)](),this[_0x325eba(0x26b)](),this[_0x325eba(0x243)]();},Window_BestiaryTraits[_0x2c82ec(0x1a3)]['initCategoryStatus']=function(){const _0x1f98c4=_0x2c82ec;this[_0x1f98c4(0x1bd)]={};const _0x4bf12b=[_0x1f98c4(0x35e),'SubElement','Gender',_0x1f98c4(0x309),_0x1f98c4(0x33f),_0x1f98c4(0xd0),_0x1f98c4(0x227),_0x1f98c4(0x138),_0x1f98c4(0xfb),_0x1f98c4(0x2a2)];for(const _0x43d798 of _0x4bf12b){_0x1f98c4(0x215)===_0x1f98c4(0x215)?this['_categoryStatus'][_0x43d798[_0x1f98c4(0x2e0)]()[_0x1f98c4(0x1ad)]()]=!![]:this[_0x1f98c4(0x327)][_0x1a31be]['becomeActive']();}},Window_BestiaryTraits[_0x2c82ec(0x1a3)][_0x2c82ec(0x1aa)]=function(){return![];},Window_BestiaryTraits['prototype'][_0x2c82ec(0x1d5)]=function(){const _0x477efb=_0x2c82ec;this[_0x477efb(0x286)](),this['forceSelect'](0x0),this[_0x477efb(0x83)](0x0,0x0),this['_helpWindow']&&('VDiPm'!=='hoYsB'?this[_0x477efb(0x11f)][_0x477efb(0x2fc)]():(_0x5d896a[_0x477efb(0x156)]=!![],this[_0x477efb(0x1c6)]()[_0x477efb(0x1f9)](_0x381506,0x0,0x0),_0x4bc7a9['_noRandom']=![]));},Window_BestiaryTraits['prototype'][_0x2c82ec(0x118)]=function(){const _0x5f26fe=_0x2c82ec;if(this['currentSymbol']()===_0x5f26fe(0x23a))SoundManager['playOk']();else{if(this[_0x5f26fe(0x17f)]()===_0x5f26fe(0x288)){if(_0x5f26fe(0x186)===_0x5f26fe(0x35a))_0x50c976-=0x1;else{const _0x3bb63e=this[_0x5f26fe(0x150)](),_0x420996=SceneManager['_scene']['enemy']();enabled=_0x420996['getTraitSet'](_0x3bb63e[0x0])[_0x5f26fe(0x273)]()[_0x5f26fe(0x1ad)]()===_0x3bb63e[0x1][_0x5f26fe(0x273)]()[_0x5f26fe(0x1ad)]();if(!enabled)SoundManager[_0x5f26fe(0x234)]();}}}},Window_BestiaryTraits['prototype'][_0x2c82ec(0x1ea)]=function(){const _0x4dd4b5=_0x2c82ec,_0x5235b5=SceneManager['_scene'][_0x4dd4b5(0x1c6)]();if(!_0x5235b5)return;const _0x4b63f1=_0x5235b5[_0x4dd4b5(0x305)]();for(const _0x1ad49d of _0x4b63f1){if(!this[_0x4dd4b5(0xea)](_0x1ad49d,_0x5235b5))continue;this['addTraitCommand'](_0x1ad49d),this[_0x4dd4b5(0xd5)](_0x1ad49d);}},Window_BestiaryTraits[_0x2c82ec(0x1a3)][_0x2c82ec(0xea)]=function(_0xacd413,_0x46eecf){const _0x1ebd2e=_0x2c82ec,_0x5adb6c=DataManager[_0x1ebd2e(0x1bb)](_0xacd413);if(!_0x5adb6c)return![];if(!_0x5adb6c[_0x1ebd2e(0xb6)])return![];if(Window_BestiaryTraits[_0x1ebd2e(0x2c8)][_0x1ebd2e(0x146)]){if(_0x1ebd2e(0x223)!=='refeo')return!![];else _0xcc1ed8[_0x1ebd2e(0x1a3)][_0x1ebd2e(0x15a)]['call'](this),this['createEnemy'](),this[_0x1ebd2e(0x2f6)](),this[_0x1ebd2e(0x72)]();}else{if(_0x1ebd2e(0x13b)===_0x1ebd2e(0x13b))return _0x46eecf&&_0x46eecf[_0x1ebd2e(0x121)](_0xacd413)!=='';else this['processFastScroll'](![]);}},Window_BestiaryTraits['prototype'][_0x2c82ec(0x2e6)]=function(_0x2838eb){const _0x26c5ce=_0x2c82ec,_0x3585a5=this[_0x26c5ce(0x141)](_0x2838eb)?TextManager[_0x26c5ce(0x33e)][_0x26c5ce(0x2b1)]['openCategoriesFmt']:TextManager[_0x26c5ce(0x33e)][_0x26c5ce(0x2b1)][_0x26c5ce(0x21b)],_0x28983c=DataManager['traitSetType'](_0x2838eb),_0x287b9a=_0x3585a5[_0x26c5ce(0x191)](_0x28983c[_0x26c5ce(0x175)]);this[_0x26c5ce(0x1f3)](_0x287b9a,'category',!![],_0x2838eb);},Window_BestiaryTraits[_0x2c82ec(0x1a3)]['isCategoryOpen']=function(_0x5125f8){const _0x2279e6=_0x2c82ec;return _0x5125f8=_0x5125f8[_0x2279e6(0x2e0)]()['trim'](),this[_0x2279e6(0x1bd)][_0x5125f8];},Window_BestiaryTraits['prototype']['openCloseCurrentCategory']=function(){const _0x534725=_0x2c82ec,_0x9b31c7=this[_0x534725(0x106)]()[_0x534725(0x2e0)]()[_0x534725(0x1ad)]();this[_0x534725(0x1bd)][_0x9b31c7]=!this['_categoryStatus'][_0x9b31c7],this[_0x534725(0x18d)]();},Window_BestiaryTraits[_0x2c82ec(0x1a3)][_0x2c82ec(0x106)]=function(){const _0x5982f5=_0x2c82ec;return this[_0x5982f5(0x17f)]()===_0x5982f5(0x23a)?this[_0x5982f5(0x150)]():null;},Window_BestiaryTraits['prototype']['makeTraitList']=function(_0x558ad7){const _0x1e5ba1=_0x2c82ec;if(!this[_0x1e5ba1(0x141)](_0x558ad7))return;const _0xfd614a=SceneManager[_0x1e5ba1(0x387)]['enemy'](),_0x235d39=VisuMZ[_0x1e5ba1(0x33e)][_0x1e5ba1(0x31e)](_0x558ad7,_0xfd614a);if(_0x235d39[_0x1e5ba1(0x277)]<=0x0){const _0x538862=_0xfd614a[_0x1e5ba1(0x121)](_0x558ad7);this[_0x1e5ba1(0x30a)](_0x558ad7,_0x538862,_0xfd614a);}else for(const _0x26dcf6 of _0x235d39){_0x1e5ba1(0x108)==='yiqkG'?(this[_0x1e5ba1(0x1d0)]['openCloseCurrentCategory'](),this[_0x1e5ba1(0x1d0)]['activate']()):this['makeTraitCommand'](_0x558ad7,_0x26dcf6,_0xfd614a);}},Window_BestiaryTraits[_0x2c82ec(0x1a3)][_0x2c82ec(0x30a)]=function(_0xabfea3,_0x3f8500,_0x2a4711){const _0x28eaaf=_0x2c82ec,_0x2cc7ad=DataManager[_0x28eaaf(0x7b)](_0xabfea3,_0x3f8500);this[_0x28eaaf(0x1f3)]('\x20\x20'+_0x2cc7ad['Display'],_0x28eaaf(0x288),!![],[_0xabfea3,_0x3f8500]);},Window_BestiaryTraits[_0x2c82ec(0x1a3)][_0x2c82ec(0x261)]=function(_0x2239f2){const _0x422c59=_0x2c82ec,_0x3e80a6=this[_0x422c59(0x294)](_0x2239f2),_0x4ac0eb=this[_0x422c59(0xd4)](_0x2239f2);this['resetFontSettings']();let _0x11c23f=!![];if(this[_0x422c59(0x125)](_0x2239f2)==='trait'){const _0x179b9e=this[_0x422c59(0x302)][_0x2239f2][_0x422c59(0x2c9)],_0x56216a=SceneManager['_scene'][_0x422c59(0x1c6)]();_0x11c23f=_0x56216a['getTraitSet'](_0x179b9e[0x0])[_0x422c59(0x273)]()[_0x422c59(0x1ad)]()===_0x179b9e[0x1]['toUpperCase']()[_0x422c59(0x1ad)]();}this[_0x422c59(0x2b8)](_0x11c23f),this[_0x422c59(0x2bb)](_0x4ac0eb,_0x3e80a6['x'],_0x3e80a6['y'],_0x3e80a6['width']);},Window_BestiaryTraits['prototype'][_0x2c82ec(0x30e)]=function(){const _0x319235=_0x2c82ec;if(this['currentSymbol']()===_0x319235(0x23a))'AnRZi'!==_0x319235(0x217)?this[_0x319235(0x1c6)]()[_0x319235(0x19c)](this[_0x319235(0x1c6)]()[_0x319235(0x32a)]()):this['_helpWindow'][_0x319235(0x2fa)](TextManager[_0x319235(0x33e)][_0x319235(0x2b1)][_0x319235(0xa1)]);else{if(this['currentSymbol']()===_0x319235(0x288)){const _0x1ddfe2=this[_0x319235(0x150)](),_0x2f953d=DataManager[_0x319235(0x7b)](_0x1ddfe2[0x0],_0x1ddfe2[0x1]);this['_helpWindow'][_0x319235(0x2fa)](_0x2f953d?_0x2f953d[_0x319235(0x297)]||'':'');}else this[_0x319235(0x17f)]()===null&&this[_0x319235(0x11f)][_0x319235(0x2fa)](TextManager['Bestiary']['traitsWindow'][_0x319235(0x1d9)]);}};function Window_BestiaryLore(){const _0x1c14c2=_0x2c82ec;this[_0x1c14c2(0x1b6)](...arguments);}Window_BestiaryLore[_0x2c82ec(0x1a3)]=Object[_0x2c82ec(0x15a)](Window_Selectable[_0x2c82ec(0x1a3)]),Window_BestiaryLore['prototype'][_0x2c82ec(0x2f7)]=Window_BestiaryLore,Window_BestiaryLore[_0x2c82ec(0x2c8)]={'bgType':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x2fb)][_0x2c82ec(0x2ea)]??0x0,'fontSize':VisuMZ[_0x2c82ec(0x33e)]['Settings'][_0x2c82ec(0x2fb)][_0x2c82ec(0x292)]??0x16,'autoWordWrap':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)]['LoreWindow_AutoWordWrap']??![],'slowScrollSpeed':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)]['SlowScrollSpeed']??0x8,'fastScrollSpeed':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)]['FastScrollSpeed']??0x20,'slowSoundFrequency':VisuMZ[_0x2c82ec(0x33e)][_0x2c82ec(0x13c)]['Window'][_0x2c82ec(0x25e)]??0x8,'fastSoundFrequency':VisuMZ['Bestiary'][_0x2c82ec(0x13c)][_0x2c82ec(0x2fb)][_0x2c82ec(0x143)]??0x4},Window_BestiaryLore[_0x2c82ec(0x1a3)]['initialize']=function(_0x3e2e18){const _0x432883=_0x2c82ec;this[_0x432883(0x24e)]='',Window_Selectable['prototype'][_0x432883(0x1b6)][_0x432883(0x2cd)](this,_0x3e2e18),this['deactivate'](),this[_0x432883(0x26b)](),this[_0x432883(0x243)]();},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x251)]=function(){const _0x3c264f=_0x2c82ec;Window_Selectable[_0x3c264f(0x1a3)][_0x3c264f(0x251)][_0x3c264f(0x2cd)](this),this[_0x3c264f(0x112)][_0x3c264f(0x33c)]=Window_BestiaryLore['SETTINGS'][_0x3c264f(0x33c)];},Window_BestiaryLore['prototype'][_0x2c82ec(0x18d)]=function(){const _0x55b284=_0x2c82ec;this[_0x55b284(0x214)](),this[_0x55b284(0x388)](),this[_0x55b284(0x263)](),this[_0x55b284(0x8a)]();},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x388)]=function(){const _0x2f121d=_0x2c82ec,_0x282252=this[_0x2f121d(0x24e)];this[_0x2f121d(0x231)]=0x0,this['_allTextHeight']=this['textSizeEx'](_0x282252)[_0x2f121d(0x346)];},Window_BestiaryLore[_0x2c82ec(0x1a3)]['contentsHeight']=function(){const _0x5a51c0=_0x2c82ec;return Math['max'](this[_0x5a51c0(0x231)],0x1);},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x1d5)]=function(){const _0x1a16a2=_0x2c82ec;this[_0x1a16a2(0x286)](),this[_0x1a16a2(0x83)](0x0,0x0);},Window_BestiaryLore[_0x2c82ec(0x1a3)]['processEnemyLore']=function(){const _0x41cf4c=_0x2c82ec,_0x4cd213=SceneManager[_0x41cf4c(0x387)]['enemy'](),_0x45ea46=TextManager['getBestiaryLore'](_0x4cd213);this['setText'](_0x45ea46);},Window_BestiaryLore['prototype'][_0x2c82ec(0x2fa)]=function(_0x4d2a1d){const _0x10a99d=_0x2c82ec;if(_0x4d2a1d===this['_text'])return;if(Imported[_0x10a99d(0x2b7)]&&Window_BestiaryLore[_0x10a99d(0x2c8)]['autoWordWrap']){if(_0x10a99d(0xc1)!==_0x10a99d(0xc1)){const _0x209bbd=this[_0x10a99d(0x106)]();this[_0x10a99d(0x1bd)][_0x209bbd]=!this[_0x10a99d(0x1bd)][_0x209bbd],this[_0x10a99d(0x18d)]();}else _0x4d2a1d=_0x10a99d(0xbd)+_0x4d2a1d;}this['_text']=_0x4d2a1d;},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x8a)]=function(){const _0x16cfd0=_0x2c82ec,_0x22e25d=this[_0x16cfd0(0x24e)];this[_0x16cfd0(0x251)](),this[_0x16cfd0(0x2fd)](_0x22e25d);if(Imported[_0x16cfd0(0x2b7)])this['resetWordWrap']();this[_0x16cfd0(0x298)]();},Window_BestiaryLore[_0x2c82ec(0x1a3)]['drawMessageText']=function(_0x536e28){const _0xaf5620=_0x2c82ec;this[_0xaf5620(0x2bb)](_0x536e28,0x0,0x0,this['innerWidth']);},Window_BestiaryLore[_0x2c82ec(0x1a3)]['updateOrigin']=function(){},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0xac)]=function(){const _0x19c8b6=_0x2c82ec;if(!this[_0x19c8b6(0x1cd)])return;if(Input[_0x19c8b6(0x2b4)](_0x19c8b6(0x271)))this[_0x19c8b6(0x228)](!![]);else{if(Input[_0x19c8b6(0x2b4)]('up'))this['processSlowScroll'](![]);else{if(Input[_0x19c8b6(0x2b4)](_0x19c8b6(0x331)))this[_0x19c8b6(0x169)](!![]);else{if(Input[_0x19c8b6(0x2b4)](_0x19c8b6(0x20b))){if(_0x19c8b6(0x152)==='TSian'){const _0x1fd6c5=this[_0x19c8b6(0x106)]()['toLowerCase']()[_0x19c8b6(0x1ad)]();this[_0x19c8b6(0x1bd)][_0x1fd6c5]=!this[_0x19c8b6(0x1bd)][_0x1fd6c5],this[_0x19c8b6(0x18d)]();}else this[_0x19c8b6(0x169)](![]);}else{if(Input[_0x19c8b6(0xa3)](_0x19c8b6(0x1c7)))this[_0x19c8b6(0x298)](!![]);else Input['isTriggered']('end')&&this[_0x19c8b6(0x299)](!![]);}}}}},Window_BestiaryLore['prototype'][_0x2c82ec(0x228)]=function(_0x219274){const _0x5ba6ce=_0x2c82ec;let _0x235953=this[_0x5ba6ce(0x293)]['y'];this[_0x5ba6ce(0x293)]['y']+=(_0x219274?0x1:-0x1)*Window_BestiaryLore[_0x5ba6ce(0x2c8)]['slowScrollSpeed'];let _0x2b0eff=Math[_0x5ba6ce(0x1f5)](0x0,this[_0x5ba6ce(0x231)]-this[_0x5ba6ce(0x179)]);this[_0x5ba6ce(0x293)]['y']=this[_0x5ba6ce(0x293)]['y'][_0x5ba6ce(0x32f)](0x0,_0x2b0eff);if(_0x235953!==this['origin']['y']&&Graphics[_0x5ba6ce(0x2da)]%Window_BestiaryLore[_0x5ba6ce(0x2c8)]['slowSoundFrequency']===0x0)this['playCursorSound']();},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x169)]=function(_0x50671b){const _0x2e438d=_0x2c82ec;let _0xa56f9a=this[_0x2e438d(0x293)]['y'];this[_0x2e438d(0x293)]['y']+=(_0x50671b?0x1:-0x1)*Window_BestiaryLore[_0x2e438d(0x2c8)]['fastScrollSpeed'];let _0x27e2a4=Math[_0x2e438d(0x1f5)](0x0,this[_0x2e438d(0x231)]-this[_0x2e438d(0x179)]);this[_0x2e438d(0x293)]['y']=this[_0x2e438d(0x293)]['y'][_0x2e438d(0x32f)](0x0,_0x27e2a4);if(_0xa56f9a!==this[_0x2e438d(0x293)]['y']&&Graphics[_0x2e438d(0x2da)]%Window_BestiaryLore[_0x2e438d(0x2c8)][_0x2e438d(0xb1)]===0x0)this[_0x2e438d(0x2b0)]();},Window_BestiaryLore[_0x2c82ec(0x1a3)]['scrollToTop']=function(_0xab797c){const _0x4c3d92=_0x2c82ec;let _0x4d5a81=this[_0x4c3d92(0x293)]['y'];this[_0x4c3d92(0x293)]['y']=0x0;if(_0xab797c&&_0x4d5a81!==this[_0x4c3d92(0x293)]['y'])this[_0x4c3d92(0x2b0)]();},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x299)]=function(_0x28f3ab){const _0x3750bf=_0x2c82ec;let _0x2fc96e=this[_0x3750bf(0x293)]['y'],_0x101151=Math[_0x3750bf(0x1f5)](0x0,this['_allTextHeight']-this[_0x3750bf(0x179)]);this[_0x3750bf(0x293)]['y']=_0x101151;if(_0x28f3ab&&_0x2fc96e!==this[_0x3750bf(0x293)]['y'])this['playCursorSound']();},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0xec)]=function(){const _0x5b292a=_0x2c82ec;this[_0x5b292a(0x2fe)]=this['origin']['y']<this['_allTextHeight']-this[_0x5b292a(0x179)],this['upArrowVisible']=this[_0x5b292a(0x293)]['y']>0x0;},Window_BestiaryLore[_0x2c82ec(0x1a3)][_0x2c82ec(0x2b5)]=function(_0x1fc14d,_0x232541){const _0x33eadd=_0x2c82ec;this[_0x33eadd(0x293)]['y']+=_0x232541;let _0xef0ae=Math[_0x33eadd(0x1f5)](0x0,this[_0x33eadd(0x231)]-this['innerHeight']);this[_0x33eadd(0x293)]['y']=this[_0x33eadd(0x293)]['y'][_0x33eadd(0x32f)](0x0,_0xef0ae);},Window_BestiaryLore['prototype'][_0x2c82ec(0x281)]=function(_0x5dd313,_0x5ccbe7){const _0x43bec8=_0x2c82ec;this[_0x43bec8(0x293)]['y']+=_0x5ccbe7;let _0x4fd478=Math[_0x43bec8(0x1f5)](0x0,this[_0x43bec8(0x231)]-this['innerHeight']);this['origin']['y']=this[_0x43bec8(0x293)]['y']['clamp'](0x0,_0x4fd478);};