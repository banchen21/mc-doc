<template><div><h4 id="_1-cpu-性能与玩家数量" tabindex="-1"><a class="header-anchor" href="#_1-cpu-性能与玩家数量"><span><strong>1. CPU 性能与玩家数量</strong></span></a></h4>
<ul>
<li><strong>核心作用</strong>：<br>
Minecraft 服务端主要依赖单核性能（尤其是插件/模组服务器），高主频CPU可提升TPS（每秒计算次数）。</li>
<li><strong>推荐配置</strong>：
<table>
<thead>
<tr>
<th>玩家数量</th>
<th>CPU要求</th>
<th>示例型号（Intel/AMD）</th>
</tr>
</thead>
<tbody>
<tr>
<td>10人以下</td>
<td>2核/3.0GHz+</td>
<td>i3-12100 / Ryzen 3 3100</td>
</tr>
<tr>
<td>10-50人</td>
<td>4核/3.5GHz+</td>
<td>i5-13400 / Ryzen 5 5600</td>
</tr>
<tr>
<td>50人以上</td>
<td>6核/4.0GHz+</td>
<td>i7-13700K / Ryzen 7 7800X</td>
</tr>
</tbody>
</table>
</li>
<li><strong>优化建议</strong>：
<ul>
<li>使用 <strong>Folia</strong> 或 <strong>Paper</strong> 等多线程优化核心。</li>
<li>关闭后台无关进程（如GUI图形界面）。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_2-内存分配规则" tabindex="-1"><a class="header-anchor" href="#_2-内存分配规则"><span><strong>2. 内存分配规则</strong></span></a></h4>
<ul>
<li><strong>基础公式</strong>：<br>
<code v-pre>建议内存 = 基础占用 + (玩家数 × 50~100MB)</code>
<ul>
<li>纯净服：1GB + 每玩家50MB</li>
<li>插件服：2GB + 每玩家80MB</li>
<li>模组服：4GB + 每玩家100MB</li>
</ul>
</li>
<li><strong>示例配置</strong>：
<table>
<thead>
<tr>
<th>服务器类型</th>
<th>20人服</th>
<th>50人服</th>
</tr>
</thead>
<tbody>
<tr>
<td>纯净服</td>
<td>2-3GB</td>
<td>5-6GB</td>
</tr>
<tr>
<td>插件服</td>
<td>3-4GB</td>
<td>6-8GB</td>
</tr>
<tr>
<td>大型模组服</td>
<td>6-8GB</td>
<td>10-12GB</td>
</tr>
</tbody>
</table>
</li>
<li><strong>注意事项</strong>：
<ul>
<li>Java参数优化（如使用 <code v-pre>-XX:+UseG1GC</code> 垃圾回收器）。</li>
<li>避免过量分配内存（超过物理内存的80%可能引发频繁GC卡顿）。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_3-硬盘选择与存档管理" tabindex="-1"><a class="header-anchor" href="#_3-硬盘选择与存档管理"><span><strong>3. 硬盘选择与存档管理</strong></span></a></h4>
<ul>
<li><strong>硬盘类型</strong>：
<ul>
<li><strong>SSD</strong>：强烈推荐，减少区块加载延迟（尤其是大型地图）。</li>
<li><strong>HDD</strong>：仅适合低人数纯净服或备份存储。</li>
</ul>
</li>
<li><strong>容量估算</strong>：
<table>
<thead>
<tr>
<th>地图活动范围</th>
<th>预估存档大小</th>
</tr>
</thead>
<tbody>
<tr>
<td>小型生存服</td>
<td>1-5GB</td>
</tr>
<tr>
<td>大型RPG地图</td>
<td>10-50GB</td>
</tr>
<tr>
<td>模组整合包</td>
<td>20-100GB</td>
</tr>
</tbody>
</table>
</li>
<li><strong>维护建议</strong>：
<ul>
<li>定期使用 <code v-pre>WorldEdit</code> 清理无效区块。</li>
<li>开启自动备份（推荐每6小时一次）。</li>
</ul>
</li>
</ul>
<hr>
<h4 id="_4-带宽需求与网络优化" tabindex="-1"><a class="header-anchor" href="#_4-带宽需求与网络优化"><span><strong>4. 带宽需求与网络优化</strong></span></a></h4>
<ul>
<li><strong>带宽计算</strong>：<br>
<code v-pre>最低带宽 = 玩家数 × 100Kbps</code>
<ul>
<li>示例：10人服需至少 <strong>1Mbps 上行带宽</strong></li>
<li>高延迟玩法（如PVP）建议提升至 <strong>200Kbps/玩家</strong></li>
</ul>
</li>
<li><strong>网络配置</strong>：
<table>
<thead>
<tr>
<th>玩家分布</th>
<th>推荐方案</th>
</tr>
</thead>
<tbody>
<tr>
<td>国内同区域</td>
<td>普通BGP线路（5Mbps）</td>
</tr>
<tr>
<td>国际服</td>
<td>高防服务器+CN2优化线路</td>
</tr>
</tbody>
</table>
</li>
<li><strong>防御措施</strong>：
<ul>
<li>使用 <strong>DDoS防护</strong> 服务（如Cloudflare）。</li>
<li>通过 <strong>BungeeCord</strong> 或 <strong>Velocity</strong> 隐藏真实IP。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="综合配置推荐表" tabindex="-1"><a class="header-anchor" href="#综合配置推荐表"><span><strong>综合配置推荐表</strong></span></a></h3>
<table>
<thead>
<tr>
<th>服务器规模</th>
<th>CPU</th>
<th>内存</th>
<th>硬盘</th>
<th>带宽</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>小型服</td>
<td>2核3.5GHz</td>
<td>4GB</td>
<td>SSD 50GB</td>
<td>3Mbps</td>
<td>好友联机/纯净生存</td>
</tr>
<tr>
<td>中型服</td>
<td>4核4.0GHz</td>
<td>8GB</td>
<td>SSD 200GB</td>
<td>10Mbps</td>
<td>插件RPG/模组整合</td>
</tr>
<tr>
<td>大型服</td>
<td>8核4.5GHz</td>
<td>16GB+</td>
<td>SSD 1TB</td>
<td>50Mbps</td>
<td>跨服网络/千人在线</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span><strong>注意事项</strong></span></a></h3>
<ol>
<li><strong>实际测试优先</strong>：部署前用 <code v-pre>Spark Profiler</code> 监控资源消耗。</li>
<li><strong>虚拟化影响</strong>：避免使用超售严重的VPS，优先选择独立服务器或KVM虚拟化。</li>
<li><strong>版本差异</strong>：1.18+版本因世界高度增加，需预留更多内存和硬盘空间。</li>
<li><strong>插件优化</strong>：使用 <code v-pre>ClearLag</code> 清理实体，<code v-pre>Chunky</code> 预生成地形。</li>
</ol>
<p>通过科学配置硬件，可显著降低卡顿和崩溃风险！</p>
</div></template>


