export default {
  app: {
    title: "CloudPaste",
    slogan: "安全分享您的内容",
  },
  nav: {
    home: "首页",
    upload: "文件上传",
    admin: "管理",
  },
  theme: {
    toggle: "主题切换",
    dark: "暗色模式",
    light: "亮色模式",
  },
  language: {
    toggle: "语言切换",
    zh: "中文",
    en: "英文",
  },
  footer: {
    copyright: "CloudPaste © {year} - 安全分享您的内容",
  },
  markdown: {
    title: "Markdown 编辑器",
    placeholder: "请输入Markdown内容...",
    save: "保存",
    share: "分享",
    download: "下载",
    preview: "预览",
    edit: "编辑",
    permissionRequired: "您需要登录管理员账号或使用有文本权限的API密钥。请",
    loginOrAuth: "登录/授权",
    createShare: "创建分享",
    processing: "处理中...",
    shareLink: "分享链接:",
    copyLink: "复制链接",
    showQRCode: "显示二维码",
    disappearIn: "秒后消失",
    qrCodeTitle: "分享二维码",
    qrCodeGenerating: "生成中...",
    qrCodeScanToAccess: "扫描二维码访问",
    downloadQRCode: "下载二维码",
    linkCopied: "链接已复制到剪贴板",
    copyFailed: "复制链接失败",
    autoSaved: "已自动保存...",
    errorNoPermission: "错误：您没有创建文本分享的权限",
    errorEmptyContent: "错误：内容不能为空",
    creatingShare: "正在创建分享...",
    shareCreatedSuccess: "分享创建成功！",
    errorPermissionDenied: "错误: 您没有创建分享的权限，请确认API密钥权限或重新登录",
    errorPrefix: "错误",
    errorCreateShareFailed: "创建分享失败",
    qrCodeDownloaded: "二维码已下载",
    onlyAllowedChars: "仅允许使用字母、数字、-和_",
    invalidFormat: "无效格式，只允许使用字母、数字、-和_",
    form: {
      remark: "备注(可选)",
      remarkPlaceholder: "添加备注信息...",
      customLink: "链接后缀(可选)",
      customLinkPlaceholder: "留空则自动生成",
      password: "密码保护",
      passwordPlaceholder: "可选",
      expireTime: "过期时间",
      expireOptions: {
        hour1: "1小时",
        day1: "1天",
        day7: "7天",
        day30: "30天",
        never: "永不过期",
      },
      maxViews: "可打开次数(0表示无限制)",
      maxViewsPlaceholder: "0表示无限制",
    },
  },
  file: {
    upload: "上传文件",
    select: "选择文件",
    drag: "拖拽文件到此处上传",
    password: "密码",
    passwordPlaceholder: "请输入密码",
    submit: "提交",
    loading: "加载中...",
    error: "错误",
    success: "成功",
    view: "文件分享",
    storage: "存储配置",
    path: "存储路径(可选)",
    pathPlaceholder: "自定义/文件夹/路径",
    shareSettings: "分享设置",
    remark: "备注(可选)",
    remarkPlaceholder: "添加备注信息...",
    customLink: "自定义链接(可选)",
    customLinkPlaceholder: "您的自定义链接",
    maxViews: "最大可访问次数(0表示无限制)",
    maxViewsPlaceholder: "留空或填0表示无限制",
    expireTime: "过期时间",
    expireOptions: {
      hour1: "1小时",
      day1: "1天",
      day7: "7天",
      day30: "30天",
      never: "永不过期",
    },
    passwordProtection: "密码保护(可选)",
    upload: "上传",
    cancel: "取消上传",
    uploadProgress: "上传进度",
    maxSizeExceeded: "文件大小超过限制，最大允许 {size}",
    negativeMaxViews: "可访问次数不能为负数",
    uploadSuccessful: "文件上传成功！",
    insufficientStorage: "存储空间不足",
    fileSize: "文件大小",
    clearSelected: "清除已选文件",
    uploadSpeed: "上传速度",
    accessCount: "访问次数",
    remainingViews: "剩余次数",
    unlimited: "无限制",
    usedUp: "已用完",
    downloadFile: "下载文件",
    copyLink: "复制链接",
    deleteFile: "删除文件",
    editFile: "编辑文件",
    cancelMessage: "文件上传已取消",
    selectStorage: "请选择存储配置",
    noStorage: "无可用存储配置",
    recentUploads: "最近上传",
    showingRecent: "显示最近3条记录",
    noFilesUploaded: "暂无已上传文件",
    uploadToShow: "上传文件后将显示在此处",
    fileName: "文件名",
    fileType: "类型",
    remainingViewsLabel: "剩余次数",
    createdAt: "创建时间",
    actions: "操作",
    encrypted: "已加密",
    noPassword: "无密码",
    open: "打开",
    qrCode: "二维码",
    remainingCount: "{count}",
    confirmDelete: "确认删除",
    confirmDeleteMessage: "您确定要删除这个文件吗？此操作无法撤销。",
    confirmDeleteBtn: "确认删除",
    deleting: "删除中...",
    fileQrCode: "文件链接二维码",
    downloadQrCode: "下载二维码",
    deletedSuccess: "文件已成功删除",
    deleteFailed: "删除失败: {message}",
    permissionRequired: "您需要登录管理员账号或使用有文件权限的API密钥。请",
    loginOrAuth: "登录/授权",
    linkCopied: "链接已复制到剪贴板",
    copyFailed: "复制链接失败",
    loadingFilesError: "加载文件列表失败: {message}",
    uploadPageTitle: "文件上传",
    qrCodeDownloadSuccess: "二维码已开始下载",
    delete: "删除",
    onlyAllowedChars: "仅允许使用字母、数字、-和_",
    invalidFormat: "无效格式，只允许使用字母、数字、-和_",
  },
  paste: {
    view: "文本分享",
    password: "此内容需要密码访问",
    passwordProtected: "此文本分享已被密码保护，请输入密码查看内容",
    copy: "复制内容",
    outline: "大纲",
    shareSettings: "分享设置",
    remark: "备注(可选)",
    remarkPlaceholder: "添加备注信息...",
    customLink: "自定义链接(可选)",
    customLinkPlaceholder: "您的自定义链接",
    password: "密码保护",
    passwordPlaceholder: "留空表示无需密码",
    expireTime: "过期时间",
    expireOptions: {
      hour1: "1小时",
      day1: "1天",
      day7: "7天",
      day30: "30天",
      never: "永不过期",
    },
    accessCount: "访问次数",
    remainingViews: "剩余次数",
  },
  common: {
    back: "返回",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    edit: "编辑",
    save: "保存",
    close: "关闭",
    required: "必填项",
    optional: "选填项",
    loading: "加载中...",
    unknownError: "未知错误",
  },
  errors: {
    passwordRequired: "请输入密码",
    passwordIncorrect: "密码错误，请重新输入",
    notFound: "未找到",
    expired: "已过期",
    serverError: "服务器错误",
  },
  // 控制面板
  dashboard: {
    systemOverview: "系统概览",
    refresh: "刷新",
    loading: "加载中...",
    fetchError: "获取数据失败，请稍后重试",
    totalPastes: "文本分享",
    totalFiles: "文件上传",
    totalApiKeys: "API密钥",
    totalS3Configs: "存储配置",
    storageUsage: "存储空间使用",
    storageBuckets: "存储桶",
    selectBucket: "选择存储桶",
    allBuckets: "所有存储桶",
    storageBucketDistribution: "存储桶分布占比",
    noStorageBucketData: "暂无存储桶数据",
    otherStorage: "其他存储",
    weeklyActivity: "过去7天活动",
    serverEnvironment: "服务部署环境",
    dataStorage: "数据存储服务",
    lastUpdated: "数据更新时间",
    switchToLineChart: "切换为折线图",
    switchToBarChart: "切换为柱状图",
    weeklyPastes: "本周文本分享",
    weeklyFiles: "本周文件上传",
    mostActiveDate: "最活跃日期",
    highestDailyActivity: "最高单日活动",
    activityOverview: "活动概览",
    items: "个",
  },
  mimetype: {
    markdown: "Markdown文档",
    image: "图像",
    jpeg: "JPEG图像",
    png: "PNG图像",
    gif: "GIF动图",
    webp: "WebP图像",
    svg: "SVG矢量图",
    tiff: "TIFF图像",
    bmp: "BMP位图",
    ico: "ICO图标",
    heic: "HEIC高效图像",
    video: "视频",
    mp4: "MP4视频",
    webm: "WebM视频",
    avi: "AVI视频",
    mov: "MOV视频",
    wmv: "WMV视频",
    mkv: "MKV视频",
    threegp: "3GP视频",
    audio: "音频",
    mp3: "MP3音频",
    m4a: "M4A音频",
    wav: "WAV音频",
    ogg: "OGG音频",
    flac: "FLAC无损音频",
    aac: "AAC音频",
    pdf: "PDF文档",
    spreadsheet: "电子表格",
    document: "文档",
    unknown: "未知类型",
  },
  fileStats: {
    bytes: "字节",
    kb: "KB",
    mb: "MB",
    gb: "GB",
    tb: "TB",
  },
  // 管理面板
  admin: {
    title: {
      admin: "管理系统",
      user: "用户面板",
    },
    sidebar: {
      dashboard: "控制面板",
      textManagement: "文本管理",
      fileManagement: "文件管理",
      storageConfig: "S3存储配置",
      keyManagement: "密钥管理",
      settings: "系统设置",
      logout: "退出登录",
      logoutAuth: "退出授权",
      menuTitle: {
        admin: "管理系统菜单",
        user: "用户面板菜单",
      },
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    permissionDenied: {
      title: "权限不足",
      message: "抱歉，您当前使用的API密钥没有权限访问控制面板功能。",
      suggestion: "请使用管理员账户登录，或查看当前API密钥可用的其他功能。",
    },
    login: {
      adminLogin: "管理员登录",
      apiKeyAuth: "API密钥授权",
      username: "用户名",
      password: "密码",
      apiKey: "API密钥",
      loginButton: "登录",
      useAdminAccount: "使用管理员账户登录",
      useApiKey: "使用API密钥授权",
      loggingIn: "登录中...",
      inputRequired: {
        usernamePassword: "请输入用户名和密码",
        apiKey: "请输入API密钥",
      },
      errors: {
        invalidToken: "服务器返回的登录数据格式异常，未找到token",
        loginFailed: "登录失败，请检查用户名和密码",
        invalidResponse: "服务器返回了无效的响应格式，请检查API配置",
        serverError: "服务器错误",
        keyValidationFailed: "密钥验证失败",
        permissionInfo: "无法获取密钥权限信息",
        keyValidationFailed: "密钥验证失败，请检查API密钥和服务器配置",
      },
    },
    settings: {
      title: "系统设置",
      description: "在这里您可以管理系统的全局设置和管理员账户信息",
      uploadSettings: {
        title: "上传限制设置",
        description: "配置用户能够上传的单个文件最大大小",
        maxUploadSizeLabel: "单次最大上传大小限制",
        maxUploadSizePlaceholder: "输入最大允许上传大小",
        maxUploadSizeHint: "设置用户单次能上传的最大文件大小。推荐值：64-100MB。",
        unitKB: "KB",
        unitMB: "MB",
        unitGB: "GB",
        footerHint: "此设置将对所有用户的文件上传生效",
      },
      adminSettings: {
        title: "管理员信息",
        description: "更改管理员账户的登录凭据",
        newUsernameLabel: "新用户名",
        newUsernamePlaceholder: "输入新用户名",
        newUsernameHint: "留空表示不修改用户名",
        currentPasswordLabel: "当前密码",
        currentPasswordPlaceholder: "输入当前密码",
        currentPasswordHint: "请输入您当前的管理员密码",
        newPasswordLabel: "新密码",
        newPasswordPlaceholder: "输入新密码",
        newPasswordHint: "留空表示不修改密码",
        footerHint: "更新账户信息后，您将被登出系统并需要重新登录",
      },
      status: {
        success: "系统设置已成功更新！",
        adminUpdateSuccess: "信息修改成功！系统将在3秒后自动退出，请使用新信息重新登录。",
        processing: "处理中...",
        updateSettings: "更新设置",
        updateAccount: "更新账户",
        errors: {
          maxUploadSizeError: "最大上传大小必须为正整数",
          updateSettingsError: "更新系统设置失败",
          currentPasswordRequired: "请输入当前密码",
          newFieldRequired: "请至少填写新密码或新用户名",
          updateInfoError: "更新信息失败",
          passwordSame: "新密码不能与当前密码相同",
        },
      },
    },
    keyManagement: {
      title: "密钥管理",
      refresh: "刷新",
      lastRefreshed: "上次刷新",
      bulkDelete: "批量删除",
      delete: "删除",
      create: "创建新密钥",
      createShort: "新建",
      keyName: "密钥名称",
      key: "密钥",
      permissions: "权限",
      createdAt: "创建时间",
      expiresAt: "过期时间",
      lastUsed: "最后使用",
      actions: "操作",
      edit: "编辑",
      loading: "加载中...",
      loadingKeys: "正在加载密钥...",
      noKeysTitle: "尚未创建任何API密钥",
      noKeysDescription: "API密钥可用于第三方应用访问您的CloudPaste服务",
      copyKey: "复制",
      copyKeyFull: "复制密钥",
      textPermission: "文本",
      filePermission: "文件",
      textPermissionFull: "文本权限",
      filePermissionFull: "文件权限",
      noPermission: "无权限",
      neverExpires: "永不过期",
      neverUsed: "从未使用",
      deleteConfirm: "确定要删除此密钥吗？此操作不可撤销。",
      bulkDeleteConfirm: "确定要删除选中的 {count} 个密钥吗？此操作不可恢复。",
      selectKeysFirst: "请先选择需要删除的密钥",
      error: {
        loadFailed: "加载密钥失败，请稍后重试",
        cannotLoadList: "无法加载API密钥列表",
        bulkDeleteFailed: "批量删除失败，请稍后重试",
        deleteFailed: "删除密钥失败，请稍后重试",
        copyFailed: "复制失败，请手动复制",
      },
      success: {
        bulkDeleted: "成功删除{count}个密钥",
        deleted: "密钥已删除",
        copied: "密钥已复制到剪贴板",
        created: "API密钥创建成功，请立即复制保存",
        updated: "API密钥已更新",
      },
      createModal: {
        title: "创建新API密钥",
        close: "关闭",
        keyName: "密钥名称",
        keyNamePlaceholder: "例如：Web应用、移动端API",
        keyNameHelp: "为您的API密钥设置一个有意义的名称，以便日后识别",
        useCustomKey: "使用自定义密钥",
        customKey: "自定义密钥",
        customKeyPlaceholder: "仅限字母、数字、横杠和下划线",
        customKeyHelp: "设置自定义密钥，如：sk-123",
        expiration: "过期时间",
        expiration1d: "1天",
        expiration7d: "7天",
        expiration30d: "30天",
        expirationNever: "永不过期",
        expirationCustom: "自定义",
        customExpiration: "自定义过期日期",
        permissions: {
          text: "文本权限",
          file: "文件权限",
        },
        securityTip: "安全提示",
        securityMessage: "API密钥具有操作权限。创建后，请安全保存密钥。",
        cancel: "取消",
        create: "创建密钥",
        processing: "处理中...",
        errors: {
          nameRequired: "请输入密钥名称",
          customKeyRequired: "请输入自定义密钥",
          customKeyFormat: "密钥只能包含字母、数字、横杠和下划线",
          expirationRequired: "请选择自定义过期时间",
          createFailed: "创建密钥失败",
        },
      },
      editModal: {
        title: "编辑API密钥",
        cancel: "取消",
        update: "更新密钥",
        processing: "处理中...",
        errors: {
          nameRequired: "请输入密钥名称",
          expirationRequired: "请选择自定义过期时间",
          updateFailed: "更新密钥失败",
        },
      },
    },
  },
};
