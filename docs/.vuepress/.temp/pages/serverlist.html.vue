<template><div><p>以下是整理后的Minecraft服务端核心列表，按分类结构化呈现，并补充关键说明与注意事项：</p>
<hr>
<h3 id="官方服务端" tabindex="-1"><a class="header-anchor" href="#官方服务端"><span><strong>官方服务端</strong></span></a></h3>
<ul>
<li><strong>Vanilla</strong><br>
官方原生服务端，无插件/模组支持，适合纯净生存。<br>
链接：<a href="https://www.minecraft.net/en-us/download/server" target="_blank" rel="noopener noreferrer">下载地址</a></li>
</ul>
<hr>
<h3 id="插件服务端" tabindex="-1"><a class="header-anchor" href="#插件服务端"><span><strong>插件服务端</strong></span></a></h3>
<p><em>基于BukkitAPI，支持插件扩展，适合轻量定制化。</em></p>
<ul>
<li><strong>Bukkit</strong>：原始插件框架，已停止更新。<br>
链接：<a href="https://getbukkit.org/download/craftbukkit" target="_blank" rel="noopener noreferrer">CraftBukkit</a></li>
<li><strong>Spigot</strong>：Bukkit优化版，提升性能与兼容性。<br>
链接：<a href="https://getbukkit.org/download/spigot" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>Paper</strong>：Spigot分支，优化TPS与漏洞修复。<br>
链接：<a href="https://papermc.io/downloads" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>Purpur</strong>：Paper增强，高度可配置。<br>
链接：<a href="https://purpurmc.org/downloads" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>Pufferfish/Airplane</strong>：针对高版本（1.17+）的Paper优化分支。<br>
链接：<a href="https://pufferfish.host/downloads" target="_blank" rel="noopener noreferrer">Pufferfish</a> | <a href="https://airplane.gg/downloads" target="_blank" rel="noopener noreferrer">Airplane</a></li>
<li><strong>已停更项目</strong>：Tuinity（合并至Paper）、Akarin、Kettle（小众分支）。</li>
</ul>
<hr>
<h3 id="模组服务端" tabindex="-1"><a class="header-anchor" href="#模组服务端"><span><strong>模组服务端</strong></span></a></h3>
<p><em>支持Forge/Fabric等模组加载器，需客户端同步安装模组。</em></p>
<ul>
<li><strong>Forge</strong>：经典模组平台，版本更新较慢。<br>
链接：<a href="https://files.minecraftforge.net" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>Fabric</strong>：轻量高效，多用于新版本优化模组。<br>
链接：<a href="https://fabricmc.net/use/server/" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>Sponge</strong>：支持插件+Forge模组，但生态有限。<br>
链接：<a href="https://spongepowered.org/downloads" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>其他整合</strong>：
<ul>
<li><strong>Mohist/Magma</strong>：Bukkit+Forge混合支持。</li>
<li><strong>CatServer/Arc</strong>：中国社区维护的Forge+插件方案。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="优化核心" tabindex="-1"><a class="header-anchor" href="#优化核心"><span><strong>优化核心</strong></span></a></h3>
<p><em>专注于服务器性能提升（TPS、实体处理等）。</em></p>
<ul>
<li><strong>Folia</strong>：Paper多线程分支，需适配插件。<br>
链接：<a href="https://papermc.io/software/folia" target="_blank" rel="noopener noreferrer">下载</a></li>
<li><strong>LightFall/Gardens of Eden</strong>：高版本优化方案。</li>
<li><strong>NeoForge</strong>：Forge的社区延续分支，需确认模组兼容性。</li>
</ul>
<hr>
<h3 id="混合核心" tabindex="-1"><a class="header-anchor" href="#混合核心"><span><strong>混合核心</strong></span></a></h3>
<p><em>同时支持插件与模组，适合复杂需求。</em></p>
<ul>
<li><strong>Arclight</strong>：基于Forge+Bukkit，兼容性强。<br>
链接：<a href="https://github.com/IzzelAliz/Arclight" target="_blank" rel="noopener noreferrer">GitHub</a></li>
<li><strong>Uranium</strong>：1.12.2版本常用，支持Forge+Spigot。</li>
<li><strong>已停更</strong>：Thermos（旧版替代方案）。</li>
</ul>
<hr>
<h3 id="代理服务端" tabindex="-1"><a class="header-anchor" href="#代理服务端"><span><strong>代理服务端</strong></span></a></h3>
<p><em>用于跨服务器网络（BungeeCord生态）。</em></p>
<ul>
<li><strong>BungeeCord</strong>：基础代理，支持插件。</li>
<li><strong>Waterfall</strong>：BungeeCord优化版，修复漏洞。</li>
<li><strong>Velocity</strong>：高性能代理，兼容现代插件。</li>
</ul>
<hr>
<h3 id="基岩版服务端" tabindex="-1"><a class="header-anchor" href="#基岩版服务端"><span><strong>基岩版服务端</strong></span></a></h3>
<p><em>适用于手机/主机版（Bedrock Edition）。</em></p>
<ul>
<li><strong>Nukkit/PocketMine-MP</strong>：主流选择，支持插件。</li>
<li><strong>Dragonfly</strong>：实验性高性能服务端。</li>
</ul>
<hr>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><strong>注意事项</strong></span></a></h3>
<ol>
<li><strong>版本匹配</strong>：服务端与客户端版本需严格一致（如1.20.1）。</li>
<li><strong>下载安全</strong>：优先从官方源下载，避免第三方修改版。</li>
<li><strong>科学上网</strong>：GitHub/部分官网链接可能需要代理访问。</li>
<li><strong>维护状态</strong>：已停更项目（如Tuinity）可能存在漏洞，建议迁移至替代方案。</li>
<li><strong>性能选择</strong>：
<ul>
<li>小服轻量：Paper/Purpur</li>
<li>大型网络：Folia+Velocity</li>
<li>模组整合：NeoForge（新版）或 Mohist（旧版）</li>
</ul>
</li>
</ol>
<p>建议根据实际需求（插件/模组/版本）选择核心，并定期备份存档！</p>
</div></template>


