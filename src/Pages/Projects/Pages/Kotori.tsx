import React from 'react';
import Icons from "../../../Icons/Icons";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

export default function Kotori() {
    return (
        <div>
            <div className="Container">
                <Navbar/>
                <div className="Content">
                    <div className="Pre-title">Kotori</div>
                    <div className="Title"></div>
                    <div className="Title">Framework and APIs</div>
                    <div className="SmallText"><p>
                        The frontend is managed by discord.js API. Written with node.js framework.
                        <br/>
                        <br/>
                        Powered by sqlite3, google firestore, and google sheets for database and storage.
                        <br/>
                        <br/>
                        Utilizes discord.js, google firestore, google sheets, google drive, and hastebin APIs.
                    </p></div>
                    <div className="Title">Features</div>


                    <div className="Subtitle2">Currency System</div>
                    <div className="SmallText">spawns in "sakuras" and "golden sakuras" for people to catch (automatic %
                        chance spawning on every message sent in main chat channel)
                        <br/>i.imgur.com/6j5bsuk.png
                        <br/>multiplier bonuses, offers % chance of gaining more than one sakura per catch
                        <br/>leaderboards for sakuras, golden sakuras and multipliers
                        <br/>shop that accepts both "currencies" along with currency exchange & special item purchasing
                        <br/>jackpot, winner takes all, paid with sakuras for each ticket
                        <br/>daily/weekly claim of sakuras and golden sakuras for extra bonuses to donors of the server
                        <br/>stats command to display summary data of all economy data (logged with google sheets)
                    </div>


                    <div className="Subtitle2">Marriage System</div>
                    <div className="SmallText">marry, divorce, display spouse, etc.
                        <br/>updates marriage status for both users on marry and divorce command calls
                    </div>


                    <div className="Subtitle2">Interactive Minigames</div>
                    <div className="SmallText">tictactoe: allows 2 users to play tictactoe with a graphical display
                        using emojis
                        <br/>connect4: allows 2 users to play connect4, displays graphics using npm canvas
                        <br/>https://i.imgur.com/wInpqu7.png
                        <br/>allows bets using sakuras currency
                    </div>


                    <div className="Subtitle2">Anti-raid & Captcha system</div>
                    <div className="SmallText">raidmode command: in the case of a spam bot attack or raid, rapidly changes changes channel permissions to place server in lockdown mode
                        <br/>generate simple captcha math questions for users to answer (prevents
                        botting and spammers/raiders)
                        <br/>example usage
                        <br/>simple captcha: https://i.imgur.com/0R6jS5D.png
                        <br/>harder captcha: https://i.imgur.com/4X77bDe.png
                        <br/>captcha wrong answer: https://i.imgur.com/bMOAiG5.png
                    </div>


                    <div className="Subtitle2">Moderation commands</div>
                    <div className="SmallText">easy to use commands for staff to moderate server,
                        <br/>ban: bans user from server
                        <br/>kick: kicks user from server
                        <br/>mute: removes message sending perms from user temporarily for a certain length of time
                        <br/>warn (google firestore): logs warnings/rule-breaks for users that receive warnings,
                        auto-punishes users based on total amount of warnings they have received up to date, dms user
                        the warning message
                        <br/>toggle staff roles (sqlite3 database): allows staff members to toggle on/off their staff
                        roles to moderate the server
                    </div>


                    <div className="Subtitle2">Auto-moderation & logs</div>
                    <div className="SmallText">automod auto-punish: 5 infractions in 5 mins or less => automatic 10 min
                        mute
                        <br/>automoderates spam
                        <br/>character spam (hiiiiiiiiiiiiiiii)
                        <br/>repeated phrases (hi there hi there hi there hi there hi there)
                        <br/>banned words/curse words
                        <br/>(haven't yet gotten the chance to add my own npm package in my bot yet)
                        <br/>searches for exactly match of word that is banned
                        <br/>logs
                        <br/>logs, deleted/edited messages, automoderation events
                    </div>


                    <div className="Subtitle2">Reaction gifs</div>
                    <div className="SmallText">pulls random image url links from a google sheets of each reaction type
                        from users
                    </div>


                    <div className="Subtitle2">Staff applications</div>
                    <div className="SmallText">checks conditions of user (must have been in server for 7+ days, have a
                        level 15 role)
                        <br/>prompts app questions and collects users responses in dms, displays entire application in a
                        different server for staff to vote on
                    </div>

                    <div className="Subtitle2">Reminders</div>
                    <div className="SmallText">create reminders that get triggered after a certain amount of time and
                        sends a user the reminder with a notification ping
                    </div>


                    <div className="Subtitle2">Giveaways</div>
                    <div className="SmallText">create giveaways that are timed and require users to have a certain role
                        to enter
                    </div>


                    <div className="Subtitle2">Blacklist Partners</div>
                    <div className="SmallText">checks invite links from a partner channel against a list of blacklisted
                        servers
                        <br/>>autodeletes partnership ads that are postings for a blacklisted server
                    </div>


                    <div className="Subtitle2">Music Streaming</div>
                    <div className="SmallText">streams music in voice chat channels from youtube</div>


                    <div className="Subtitle2">Permissions Handler</div>
                    <div className="SmallText">6 levels of permissions, only users with permission levels greater than
                        the minimum set one for each command can use the command, different levels of staff have access
                        to a different set of commands, unverified members can only run the verification command
                    </div>


                    <div className="Subtitle2">Cooldown Handler</div>
                    <div className="SmallText">commands can be set with a certain cooldown time before the same command
                        can be executed again by a single user
                    </div>


                    <div className="Subtitle2">Other Features</div>
                    <div className="SmallText">anonymous confessions, forwards messages from one channel to another,
                        deleting a user's original message, logs in a different channel for staff to moderate
                        <br/>management of the warnings for each user, clear warning, edit warning
                        <br/>poll command, generates a timed or untimed poll that displays the winning result after time
                        is up
                        <br/>report command, allows a user to dm a report of a rule-breaking user with image evidence
                        <br/>letter command, allows a user to send an optionally anonymous letter to another user via
                        the bot through dms
                        <br/>custom role management
                        <br/>allows users with custom roles to manage the role themself (assign/remove the role from
                        other users)
                        <br/>calculation/log command (google sheets): allows the owner of the server to track financial
                        transactions that take place in the server, displaying summary data from past transactions in
                        the past 14 days or lifetime statistic
                        <br/>spellcheck for suggesting the closest matching command if the user made 2 or less typos
                        when calling a command
                    </div>

                </div>
                <Footer/>
            </div>
        </div>
    )
}