---
headerDepth: 0
---

# 米游社多帐号切换

::: tip
本文档所描述的帐号切换指的是用于获取游戏数据的米游社帐号，不是原神游戏内的帐号
:::

## 添加一个新的米游社帐号
  
### 图片示例： 
![登录](https://user-images.githubusercontent.com/96916320/207941286-56abb14e-5a6c-4a4d-9fb6-d8ce1a4c8226.png)  
    
     
- 在程序主界面的左下角，设置的上方管理你的米游社帐号。在弹出的面板中你可以
  - 点击`登录米哈游通行证`按钮
  - 在弹出的内置浏览器中登录"米哈游通行证"账号
    - 您也可以通过点击`手动输入`按钮，直接输入`米游社 Cookie`来添加您的米游社帐号
    - 若您选择`手动输入`米游社Cookie，则该Cookie**必须包含Stoken等字段**，且为V2版本
      - 手动获取`含Stoken的V2版本Cookie`的方式：[请参考此条目](https://hut.ao/features/mhy-account-switch.html#%E5%A6%82%E4%BD%95%E8%87%AA%E8%A1%8C%E8%8E%B7%E5%8F%96%E5%90%AB%E6%9C%89stoken%E7%9A%84cookie)
  - 在弹出的内置浏览器登陆成功后，点击右上角的"我已登陆"按钮
    - **部分杀毒软件**可能会对获取到的Cookie进行静默处理，导致Cookie不完整，如有此类错误提示，请自行关闭并重试
  - 完成后，您就可以在帐号管理面板切换已登录的米游社帐号了
    - 新添加米游社账号后，需在主界面左下角切换账号的功能中，手动点击一次新登录的账号，以将其设置为使用状态  
    
   
       
## 如何自行获取含有Stoken的Cookie  
    
- 若您目前**只需要登入一个**账号，则无需考虑本条目，直接在胡桃工具箱中登入自己的米游社通行证账号即可  
    
- 如您在使用最新版本，在"胡桃工具箱"中正常添加了账号，则此时账号的Cookie中已经具有了Stoken字段，无需再进行此方法    
     
- 若您有自行获取含有Stoken的Cookie的意愿，可参考以下思路：  
    
::: warning
- 请注意：Stoken、login_ticket等字段，均为敏感数据，使用时请自行斟酌
- 以下步骤中涉及的软件、开源项目等资源均来源于互联网，与[DGP-Studio开发团队](https://github.com/DGP-Studio)无关
- 本说明文档仅提供有关的解决思路，仅供学习使用，具体操作与操作后果与本项目无关
:::   
    
### 安卓(Android)用户使用"GetToken"获取Stoken  
   
::: tip
- 项目名称：[HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)   
   
- 下载地址：[网盘](https://cloud.06dn.com/s/gbybsj) / [Github](https://github.com/HolographicHat/GetToken/releases/download/2.42.1/miyoushe-361-lspatched.apk)
:::  
  
- 首先先下载安装上述名为"[GetToken.apk](https://cloud.06dn.com/s/gbybsj)"的Android安装包  
  - 若在手机中安装，可能需要先卸载手机上原有的米游社App  
  - 您也可在电脑上的任意安卓模拟器或Android子系统中安装  
    - 经测试，华为手机以及MuMu模拟器暂无法使用  
       
- 安装后打开，在底栏点击"我的"，然后登录您的通行证  
- 在右上角点击`形如🔑形状的按钮`  
- 点击勾选"Stoken"选项  
- 点击`复制登录信息`  
- 将复制到的"Stoken"发送到已经安装了`胡桃工具箱`的电脑  
- 在`胡桃工具箱`中的账号登录位置，点击`手动输入`  
  - 注意：您需要**已经**把您需要"升级Stoken状态"的米游社账号，在"胡桃"内登录完毕  
- 将之前获取到的"Stoken"输入，此时即可完成登录  
     
::: tip
- 本文所提到的"Stoken"所指代的是含有"Stoken"字段的米游社Cookie，为了让用户更容易理解使用步骤，故对此表述做出了简化
:::   
   
### 苹果(iOS)用户使用"stream"获取Stoken   
    
- 在应用商店中下载"stream"应用  
    
- 对域名"api-takumi.mihoyo.com"进行抓包分析
- 找到并复制带有Stoken的数据
  - 形如`stuid=****;stoken=v2****;mid=****;`  
    
- 将复制到的"Stoken"发送到已经安装了`胡桃工具箱`的电脑
- 在`胡桃工具箱`中的账号登录位置，点击`手动输入`
  - 注意：您需要**已经**把您需要"升级Stoken状态"的米游社账号，在"胡桃"内登录完毕
- 将之前获取到的"Stoken"输入，此时即可完成登录   
      
- 若您在此过程中遇到困难，建议使用上一条中的"GetToken"方法获取Stoken   
      
## 常见问题：米游社帐号登录状态经常失效，添加的帐号消失  
  
* 我们通过储存帐号的米游社 Cookie 来维持登录状态。
* 但是当用户在浏览器或其它设备上**注销帐号**后， 维持登录状态的 Cookie 将**失效**。
* 这会导致胡桃工具箱上的米游社帐号在启动后被自动移除。
* 此情况也可能因为网络连接问题导致无法检查Cookie有效性，故出现此情况后请优先重启胡桃工具箱。
* 自2022年10月起，米游社极大地提高了账号被判定为有风险的概率，[账号有风险](https://hut.ao/FAQ/mihoyo-risk-tip.html)时亦会令Cookie无法被识别为有效状态   
    
