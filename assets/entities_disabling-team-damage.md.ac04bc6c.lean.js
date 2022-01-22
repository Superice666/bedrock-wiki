import{_ as e,r as o,c,a,w as t,e as n,o as r,d as p}from"./404.md.7be7b610.js";const x='{"title":"Disabling Team-damage","description":"","frontmatter":{"title":"Disabling Team-damage","category":"Tutorials","tags":["intermediate"]},"headers":[{"level":3,"title":"Projectiles","slug":"projectiles"}],"relativePath":"entities/disabling-team-damage.md","lastUpdated":1642852460099}',l={},u=n("",1),i=p("BP/entities/player.json#components"),k=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token comment">//if you already have a damage sensor, simply copy this object into the &quot;triggers&quot; array</span>
         <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
               <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//Does the player have this tag?</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team1&quot;</span> <span class="token punctuation">}</span> <span class="token comment">//If so, does the entity they&#39;re trying to hurt have this tag?</span>
                     <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//repeats for every team</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team2&quot;</span> <span class="token punctuation">}</span>
                     <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team3&quot;</span> <span class="token punctuation">}</span>
                     <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team4&quot;</span> <span class="token punctuation">}</span>
                     <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team5&quot;</span> <span class="token punctuation">}</span>
                     <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span>
               <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">//if any of these filters evaluate to true in the current attack interaction, the target will not be hurt.</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="projectiles" tabindex="-1">Projectiles <a class="header-anchor" href="#projectiles" aria-hidden="true">#</a></h3><p>Due to the primitive filters used by projectile entities, you have to use a completely different method to achieve this.</p><p>The process uses:</p><ul><li>Tags</li><li>Ticking</li><li>Hurt on Condition</li><li>Functions</li></ul>__VP_STATIC_END__`,5),m=p("BP/entities/player.json#components"),b=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code>
<span class="token comment">//&quot;components&quot;</span>
<span class="token property">&quot;minecraft:timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//This is for applying teams to a projectile to nearby</span>
   <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>         <span class="token comment">//untagged projectiles, through an event.</span>
      <span class="token number">0.0</span><span class="token punctuation">,</span>
      <span class="token number">0.1</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">&quot;looping&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token property">&quot;time_down_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:projectile_team&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:hurt_on_condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//The projectile will be unable to directly deal</span>
   <span class="token property">&quot;damage_conditions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>        <span class="token comment">//damage, so instead we&#39;ll apply tags to the</span>
      <span class="token punctuation">{</span>                          <span class="token comment">//player, which will trigger this . . .</span>
         <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;damage&quot;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token property">&quot;cause&quot;</span><span class="token operator">:</span> <span class="token string">&quot;projectile&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;damage_per_tick&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>     <span class="token comment">//. . . which in turn, will trigger an event</span>
   <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>                 <span class="token comment">//to remove this tag, so the damage only</span>
      <span class="token property">&quot;cause&quot;</span><span class="token operator">:</span> <span class="token string">&quot;projectile&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//happens once.</span>
      <span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;damage&quot;</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:stop_damage&quot;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//&quot;events&quot;</span>
<span class="token property">&quot;wiki:projectile_team&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">//The function here will apply tags depending on</span>
   <span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>        <span class="token comment">//which team tags the player has.</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&quot;function wiki-apply_team&quot;</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;wiki:stop_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>      <span class="token comment">//The event that simply removes the damage tag.</span>
   <span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&quot;tag @s remove damage&quot;</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>__VP_STATIC_END__`,1),q=p("BP/functions/wiki-apply_team.mcfunction"),g=n(`__VP_STATIC_START__<div class="language-"><pre><code>execute @s[tag=team1] ~ ~ ~ tag @p[rm=0,r=1,type=arrow,tag=] team1
execute @s[tag=team2] ~ ~ ~ tag @p[rm=0,r=1,type=arrow,tag=] team2
execute @s[tag=team3] ~ ~ ~ tag @p[rm=0,r=1,type=arrow,tag=] team3
execute @s[tag=team4] ~ ~ ~ tag @p[rm=0,r=1,type=arrow,tag=] team4

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>__VP_STATIC_END__`,1),_=p("BP/entities/arrow.json"),d=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code>
<span class="token comment">//&quot;components&quot;</span>
<span class="token property">&quot;on_hit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>               <span class="token comment">//On_hit, trigger an event . . .</span>
   <span class="token property">&quot;definition_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;affect_projectile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;event_trigger&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:hit&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;remove_on_hit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//&quot;events&quot;</span>
<span class="token property">&quot;wiki:hit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>             <span class="token comment">//. . . which executes a function, applying</span>
   <span class="token property">&quot;run_command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">//the damage tag to any players of a different team!</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&quot;function wiki-apply_damage&quot;</span>
      <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>__VP_STATIC_END__`,1),y=p("BP/functions/wiki-apply_damage.mcfunction"),h=n(`__VP_STATIC_START__<div class="language-"><pre><code>execute @s[tag=team1] ~ ~ ~ tag @p[rm=0,r=1,tag=!team1] add damage
execute @s[tag=team2] ~ ~ ~ tag @p[rm=0,r=1,tag=!team2] add damage
execute @s[tag=team3] ~ ~ ~ tag @p[rm=0,r=1,tag=!team3] add damage
execute @s[tag=team4] ~ ~ ~ tag @p[rm=0,r=1,tag=!team4] add damage

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If you modify <code>arrow.json</code>, take into consideration the component groups.</p>__VP_STATIC_END__`,2);function v(f,T,w,j,P,S){const s=o("CodeHeader");return r(),c("div",null,[u,a(s,null,{default:t(()=>[i]),_:1}),k,a(s,null,{default:t(()=>[m]),_:1}),b,a(s,null,{default:t(()=>[q]),_:1}),g,a(s,null,{default:t(()=>[_]),_:1}),d,a(s,null,{default:t(()=>[y]),_:1}),h])}var C=e(l,[["render",v]]);export{x as __pageData,C as default};