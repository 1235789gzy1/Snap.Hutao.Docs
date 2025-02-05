---
headerDepth: 2
icon: iconfont icon-warn
category: [FAQ]
order: 2
comment: false
---

# 常见的程序异常

该文档包含由**用户端错误**造成的问题

## RuntimeEnvironmentException

- 异常：`RuntimeEnvironmentException`
  - 提示：`未开启长路径功能，无法设置注册表键值`
- 问题来源：没有解除 Windows 目录长度限制
- 解决方案：下载 [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip) 后解压，运行解压后的 `.reg` 文件

## Return Code: -10001

- 该异常实际上来源于米游社的返回信息，包括：
  - `Return Code: -10001`
  - `Return Code: -100`
- 问题来源：
  1. Cookie 过期或网络异常
  2. 系统时间错误
- 解决方案：
  1. 在帐号面板中，点击`刷新 Cookie`
  2. 删除帐号后重新添加米游社帐号
  3. 在系统设置中启用自动同步时间并立刻同步时间

## 状态：1034 验证失败

- 当胡桃工具箱返回 `1034` 状态码并提示验证失败时（通常是实时便笺功能），代表当前的操作被米游社的验证系统所阻挡
- 解决方式：
  - 进入 `实时便笺` 功能
  - 点击右上角的 `验证当前用户与角色`按钮
  - 根据米游社提示进行验证
  - 完成验证后点击`完成`
  - 此时，风控应当已被解除；若没有，可继续执行上述操作

::: tip

- 若风险提示过于频繁，或始终无法触发验证，代表您的账号风险已过高，请修改密码，使多个设备同时登录的状态被重置

:::

::: warning

- 若您**已绑定并使用可提供原神查询的 Bot**或**同时有多个设备使用同一个米哈游通行证**，则本条目所示的情况，尤其**无感验证**将基本无法成功，这是米游社后端的**安全性**设计，不可避免，无法绕过
- 若您本地有多个**米哈游通行证**同时频繁与**米游社**进行数据交互，则可能会被米游社在一定时间内封禁 IP 地址，这是米游社后端的**安全性**设计，不可避免，无法绕过

:::

## HttpRequestException 元数据校验文件下载失败

### ConnectionError

连接到胡桃服务器时失败，请检查胡桃客户端的网络连接

如果你使用了网络代理，请务必检查是否[解除了 Windows 容器 Loopback 限制](FAQ.md)

### 403 (Forbidden)/ 404 (NOT FOUND)

解决方案：更新胡桃工具箱至[最新版本](../quick-start.md)

### 502 (Bad Gateway)

连接到胡桃服务器时失败，请检查胡桃客户端的网络连接

## `653366069` 请求异常

- 连接到米游社/HoYoLAB服务器时失败
  - 如果仅是偶尔出现的问题，你可以考虑忽略该错误
  - 如果持续该错误，请检查本地网络到目标服务器的连接是否正常

如果你使用了网络代理，请务必检查是否[解除了 Windows 容器 Loopback 限制](FAQ.md)

## 在查找必要的模块时出现问题

当用户在解锁游戏帧数限制的情况下启动游戏时，可能会遇上以下错误提示并启动游戏失败

1. 在查找必要的模块时遇到问题：无法读取任何模块，可能是保护驱动已经加载完成
2. 在查找必要的模块时遇到问题：查找模块超时
   该问题仅当原神反作弊模块早于解锁帧率模块启动时出现。在出现该错误后，胡桃会主动关闭游戏进程，用户再次尝试启动游戏即可。

## 应用安装失败，错误消息：出现内部错误 0x80073D05

安装时出现 `0x80073D05` 错误码的主要原因是先前卸载时没有删除部分本地文件导致的。

- 需要打开 `%appdata%/../Local/Packages`
- 并在文件夹中找到 `60568DGPStudio.SnapHutao_ebfp3nyc27j86` 文件夹并删除
