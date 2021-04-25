(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    217 : function(e, a, t) {
        "use strict";
        var n = t(211),
        l = t.n(n),
        s = t(205),
        c = t.n(s),
        r = t(206),
        i = t.n(r),
        m = t(207),
        o = t.n(m),
        u = t(208),
        p = t.n(u),
        d = t(209),
        E = t.n(d),
        h = t(6),
        N = t.n(h),
        g = t(100),
        f = t.n(g),
        v = function(e) {
            function a(e) {
                return c()(this, a),
                o()(this, p()(a).call(this, e))
            }
            return E()(a, e),
            i()(a, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    a = e.basics,
                    t = e.languages;
                    return N.a.createElement("section", {
                        className: "col-md-3 card-wrapper profile-card-wrapper affix"
                    },
                    N.a.createElement("div", {
                        className: "card profile-card"
                    },
                    N.a.createElement("span", {
                        className: "profile-pic-container"
                    },
                    N.a.createElement("div", {
                        className: "profile-pic"
                    },
                    N.a.createElement("img", {
                        className: "media-object img-circle center-block",
                        src: a.picture || "https://s.gravatar.com/avatar/9acdb04e603c1cac2b893190f6dd5911?s=100&amp;r=pg&amp;d=mm"
                    })), N.a.createElement("div", {
                        className: "name-and-profession text-center"
                    },
                    N.a.createElement("h3", null, N.a.createElement("b", null, a.name)), N.a.createElement("h4", null, N.a.createElement("b", null, a.position)), N.a.createElement("h5", {
                        className: "text-muted"
                    },
                    a.label))), N.a.createElement("hr", null), N.a.createElement("div", {
                        className: "contact-details clearfix"
                    },
                    N.a.createElement("div", {
                        className: "detail"
                    },
                    N.a.createElement("span", {
                        className: "icon"
                    },
                    N.a.createElement("i", {
                        className: "icon fs-lg icon-profile"
                    })), N.a.createElement("span", {
                        className: "info"
                    },
                    a.gender, " ", a.age, "岁 ", a.worklife, "年工作经验")), N.a.createElement("div", {
                        className: "detail"
                    },
                    N.a.createElement("span", {
                        className: "icon"
                    },
                    N.a.createElement("i", {
                        className: "icon fs-lg icon-location"
                    })), N.a.createElement("span", {
                        className: "info"
                    },
                    a.location)), N.a.createElement("div", {
                        className: "detail"
                    },
                    N.a.createElement("span", {
                        className: "icon"
                    },
                    N.a.createElement("i", {
                        className: "icon fs-lg icon-phone"
                    })), N.a.createElement("span", {
                        className: "info"
                    },
                    a.phone)), N.a.createElement("div", {
                        className: "detail"
                    },
                    N.a.createElement("span", {
                        className: "icon"
                    },
                    N.a.createElement("i", {
                        className: "icon fs-lg icon-mail"
                    })), N.a.createElement("span", {
                        className: "info"
                    },
                    N.a.createElement("a", {
                        className: "link-disguise",
                        href: "mailto:".concat(a.email)
                    },
                    a.email))), N.a.createElement("div", {
                        className: "detail"
                    },
                    N.a.createElement("span", {
                        className: "icon"
                    },
                    N.a.createElement("i", {
                        className: "icon fs-lg icon-link"
                    })), N.a.createElement("span", {
                        className: "info"
                    },
                    N.a.createElement("a", {
                        href: a.website,
                        target: "_blank"
                    },
                    a.website))), N.a.createElement("div", {
                        className: "detail"
                    },
                    N.a.createElement("span", {
                        className: "icon",
                        title: "Languages I speak"
                    },
                    N.a.createElement("i", {
                        className: "icon fs-lg icon-language"
                    })), t.map(function(e, a) {
                        return N.a.createElement("span", {
                            key: a,
                            className: "info"
                        },
                        e.language)
                    }))), N.a.createElement("hr", null), N.a.createElement("div", {
                        className: "social-links text-center"
                    },
                    N.a.createElement("div", null, a.profiles.map(function(e, a) {
                        var t = f()(l()({
                            iconfont: !0,
                            "social-link": !0
                        },
                        "iconfont-".concat(e.network), e.network));
                        return N.a.createElement("a", {
                            key: a,
                            className: t,
                            href: e.url,
                            target: "_blank"
                        })
                    })))))
                }
            }]),
            a
        } (N.a.Component);
        a.a = v
    },
    218 : function(e, a, t) {
        "use strict";
        var n = t(205),
        l = t.n(n),
        s = t(206),
        c = t.n(s),
        r = t(207),
        i = t.n(r),
        m = t(208),
        o = t.n(m),
        u = t(209),
        p = t.n(u),
        d = t(6),
        E = t.n(d),
        h = function(e) {
            function a(e) {
                return l()(this, a),
                i()(this, o()(a).call(this, e))
            }
            return p()(a, e),
            c()(a, [{
                key: "render",
                value: function() {
                    return E.a.createElement("section", {
                        className: "col-md-12 card-wrapper"
                    },
                    E.a.createElement("div", {
                        className: "footer"
                    },
                    "简历模板由 wtfsilence 开发，最后更新于", E.a.createElement("span", {
                        className: "date"
                    },
                    "2020-04-01")))
                }
            }]),
            a
        } (E.a.Component);
        a.a = h
    },
    219 : function(e, a, t) {
        "use strict";
        var n = t(205),
        l = t.n(n),
        s = t(206),
        c = t.n(s),
        r = t(207),
        i = t.n(r),
        m = t(208),
        o = t.n(m),
        u = t(209),
        p = t.n(u),
        d = t(6),
        E = t.n(d),
        h = t(102),
        N = t.n(h),
        g = function(e) {
            function t(e) {
                var a;
                return l()(this, t),
                (a = i()(this, o()(t).call(this, e))).state = {
                    publications: []
                },
                a
            }
            return p()(t, e),
            c()(t, [{
                key: "componentDidMount",
                value: function() {
                    this.getPublications()
                }
            },
            {
                key: "getPublications",
                value: function() {
                    var a = this;
                    N()("https://api.github.com/users/skyvow/repos").then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        // console.log(e)
                        // e.message || a.setState({
                        //     publications: e.filter(function(e) {
                        //         return ! e.fork
                        //     }).sort(function(e, a) {
                        //         return e.stargazers_count < a.stargazers_count
                        //     }).slice(0, 6)
                        // })
                    })
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    a = e.basics,
                    t = e.work,
                    n = e.project,
                    l = e.education,
                    s = e.awards,
                    c = e.skills,
                    r = e.interests,
                    i = e.references,
                    m = this.state.publications;
                    return E.a.createElement("section", {
                        className: "col-md-9 card-wrapper pull-right"
                    },
                    E.a.createElement("div", {
                        className: "card background-card"
                    },
                    E.a.createElement("h4", {
                        className: "text-uppercase"
                    },
                    "背景资料"), E.a.createElement("hr", null), E.a.createElement("div", {
                        className: "background-details"
                    },
                    E.a.createElement("div", {
                        className: "detail",
                        id: "about"
                    },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-board"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "自我描述")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "自我描述"), E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    E.a.createElement("li", {
                        className: "card card-nested clearfix"
                    },
                    E.a.createElement("div", {
                        className: "content mop-wrapper"
                    },
                    E.a.createElement("ul", null, a.summary.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "mop-wrapper"
                        },
                        E.a.createElement("p", null, e))
                    }))))))), E.a.createElement("div", {
                        className: "detail",
                        id: "work-experience"
                    },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-office"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "工作经历")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "工作经历"), E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    t.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "card card-nested clearfix"
                        },
                        E.a.createElement("div", {
                            className: "content"
                        },
                        E.a.createElement("div", {
                            className: "header"
                        },
                        E.a.createElement("h4", {
                            className: "header-title"
                        },
                        E.a.createElement("a", {
                            href: e.website,
                            target: "_blank"
                        },
                        e.company)), E.a.createElement("p", {
                            className: "header-text"
                        },
                        e.position)), E.a.createElement("p", {
                            className: "text-muted"
                        },
                        E.a.createElement("small", null, E.a.createElement("span", {
                            className: "space-right"
                        },
                        e.startDate, " - ", e.endDate))), E.a.createElement("div", {
                            className: "mop-wrapper space-bottom"
                        },
                        E.a.createElement("p", null, e.summary)), E.a.createElement("ul", null, e.highlights.map(function(e, a) {
                            return E.a.createElement("li", {
                                key: a,
                                className: "mop-wrapper"
                            },
                            E.a.createElement("p", null, e))
                        }))))
                    })))), E.a.createElement("div", {
                        className: "detail",
                        id: "education"
                    },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-graduation-cap"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "教育经历")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "教育经历"), E.a.createElement("div", {
                        className: "content"
                    },
                    E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    l.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "card card-nested"
                        },
                        E.a.createElement("div", {
                            className: "content"
                        },
                        E.a.createElement("p", {
                            className: "clear-margin relative"
                        },
                        E.a.createElement("strong", null, e.institution, "，", e.studyType, "， "), e.area), E.a.createElement("p", {
                            className: "text-muted"
                        },
                        E.a.createElement("small", null, e.startDate, " - ", e.endDate)), E.a.createElement("i", null, e.gpa), E.a.createElement("div", {
                            className: "space-top labels"
                        },
                        e.courses.map(function(e, a) {
                            return E.a.createElement("span", {
                                key: a,
                                className: "label label-info"
                            },
                            e)
                        }))))
                    }))))), E.a.createElement("div", {
                        className: "detail",
                        id: "project-experience"
                    },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-child"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "项目经验")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "项目经验"), E.a.createElement("div", {
                        className: "content"
                    },
                    E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    n.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "card card-nested"
                        },
                        E.a.createElement("div", {
                            className: "content"
                        },
                        E.a.createElement("div", {
                            className: "header"
                        },
                        E.a.createElement("h4", {
                            className: "header-title"
                        },
                        E.a.createElement("a", {
                            href: e.website,
                            target: "_blank"
                        },
                        e.organization)), E.a.createElement("p", {
                            className: "header-text"
                        },
                        e.position)), E.a.createElement("p", {
                            className: "text-muted"
                        },
                        E.a.createElement("small", null, e.startDate, " - ", e.endDate)), E.a.createElement("div", {
                            className: "mop-wrapper space-bottom"
                        },
                        E.a.createElement("p", null, "技术栈：", e.summary)), E.a.createElement("ul", null, e.highlights.map(function(e, a) {
                            return E.a.createElement("li", {
                                key: a,
                                className: "mop-wrapper"
                            },
                            E.a.createElement("p", null, e))
                        }))))
                    }))))), E.a.createElement("div", {
                        className: "detail",
                        id: "publications"
                    },
                    // E.a.createElement("div", {
                    //     className: "icon"
                    // },
                    // E.a.createElement("i", {
                    //     className: "fs-lg icon-newspaper"
                    // }), E.a.createElement("span", {
                    //     className: "mobile-title"
                    // },
                    // "作品展示")), E.a.createElement("div", {
                    //     className: "info"
                    // },
                    // E.a.createElement("h4", {
                    //     className: "title text-uppercase"
                    // },
                    // "作品展示"), E.a.createElement("div", {
                    //     className: "content"
                    // },
                    // E.a.createElement("ul", {
                    //     className: "list-unstyled clear-margin"
                    // },
                    // m.map(function(e, a) {
                    //     return E.a.createElement("li", {
                    //         key: a,
                    //         className: "card card-nested"
                    //     },
                    //     E.a.createElement("div", {
                    //         className: "content"
                    //     },
                    //     E.a.createElement("div", {
                    //         className: "header"
                    //     },
                    //     E.a.createElement("h4", {
                    //         className: "header-title"
                    //     },
                    //     E.a.createElement("a", {
                    //         href: e.html_url,
                    //         target: "_blank"
                    //     },
                    //     e.name)), E.a.createElement("p", {
                    //         className: "header-text"
                    //     },
                    //     "Star: ", e.stargazers_count, " Fork: ", e.forks_count)), E.a.createElement("p", {
                    //         className: "text-muted"
                    //     },
                    //     E.a.createElement("small", null, e.releaseDate)), E.a.createElement("div", {
                    //         className: "mop-wrapper"
                    //     },
                    //     E.a.createElement("p", null, e.description))))
                    // }))))), E.a.createElement("div", {
                    //     className: "detail",
                    //     id: "skills"
                    // },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-tools"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "技能评价")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "技能评价"), E.a.createElement("div", {
                        className: "content"
                    },
                    E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    c.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "card card-nested card-skills"
                        },
                        E.a.createElement("div", {
                            className: "skill-info"
                        },
                        E.a.createElement("strong", null, e.name), E.a.createElement("div", {
                            className: "space-top labels"
                        },
                        e.keywords.map(function(e, a) {
                            return E.a.createElement("span", {
                                key: a,
                                className: "label label-info"
                            },
                            e)
                        }))))
                    }))))), 
                    // E.a.createElement("div", {
                    //     className: "detail",
                    //     id: "awards"
                    // },
                    // E.a.createElement("div", {
                    //     className: "icon"
                    // },
                    // E.a.createElement("i", {
                    //     className: "fs-lg icon-trophy"
                    // }), E.a.createElement("span", {
                    //     className: "mobile-title"
                    // },
                    // "荣誉证书")), E.a.createElement("div", {
                    //     className: "info"
                    // },
                    // E.a.createElement("h4", {
                    //     className: "title text-uppercase"
                    // },
                    // "荣誉证书"), E.a.createElement("div", {
                    //     className: "content"
                    // },
                    // E.a.createElement("ul", {
                    //     className: "list-unstyled clear-margin"
                    // },
                    // s.map(function(e, a) {
                    //     return E.a.createElement("li", {
                    //         key: a,
                    //         className: "card card-nested"
                    //     },
                    //     E.a.createElement("div", {
                    //         className: "content"
                    //     },
                    //     E.a.createElement("p", {
                    //         className: "clear-margin"
                    //     },
                    //     E.a.createElement("strong", null, e.title, " "), e.awarder), E.a.createElement("p", {
                    //         className: "text-muted"
                    //     },
                    //     E.a.createElement("small", null, e.date)), E.a.createElement("div", {
                    //         className: "mop-wrapper"
                    //     },
                    //     E.a.createElement("p", null, e.summary))))
                    // }))))), 
                    E.a.createElement("div", {
                        className: "detail",
                        id: "interests"
                    },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-heart"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "兴趣爱好")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "兴趣爱好"), E.a.createElement("div", {
                        className: "content"
                    },
                    E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    r.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "card card-nested"
                        },
                        E.a.createElement("p", null, E.a.createElement("strong", null, e.name)), E.a.createElement("div", {
                            className: "space-top labels"
                        },
                        e.keywords.map(function(e, a) {
                            return E.a.createElement("span", {
                                key: a,
                                className: "label label-info"
                            },
                            e)
                        })))
                    }))))), E.a.createElement("div", {
                        className: "detail",
                        id: "references"
                    },
                    E.a.createElement("div", {
                        className: "icon"
                    },
                    E.a.createElement("i", {
                        className: "fs-lg icon-thumbs-up"
                    }), E.a.createElement("span", {
                        className: "mobile-title"
                    },
                    "座右铭")), E.a.createElement("div", {
                        className: "info"
                    },
                    E.a.createElement("h4", {
                        className: "title text-uppercase"
                    },
                    "座右铭"), E.a.createElement("div", {
                        className: "content"
                    },
                    E.a.createElement("ul", {
                        className: "list-unstyled clear-margin"
                    },
                    i.map(function(e, a) {
                        return E.a.createElement("li", {
                            key: a,
                            className: "card card-nested"
                        },
                        E.a.createElement("blockquote", {
                            className: "quote"
                        },
                        E.a.createElement("p", null, e.reference), E.a.createElement("small", null, e.name)))
                    }))))))))
                }
            }]),
            t
        } (E.a.Component);
        a.a = g
    },
    220 : function(e, a, t) {
        "use strict";
        var n = t(205),
        l = t.n(n),
        s = t(206),
        c = t.n(s),
        r = t(207),
        i = t.n(r),
        m = t(208),
        o = t.n(m),
        u = t(209),
        p = t.n(u),
        d = t(210),
        E = t.n(d),
        h = t(211),
        N = t.n(h),
        g = t(6),
        f = t.n(g),
        v = t(100),
        b = t.n(v),
        k = function(e) {
            function a(e) {
                var t;
                return l()(this, a),
                t = i()(this, o()(a).call(this, e)),
                N()(E()(E()(t)), "handlerClick",
                function(e) {
                    var a = t.state.isOpen;
                    t.setState({
                        isOpen: !a
                    })
                }),
                N()(E()(E()(t)), "scrollToAnchor",
                function(e) {
                    if (e) {
                        var a = document.getElementById(e);
                        a && (a.scrollIntoView(), t.setState({
                            isOpen: !1
                        }))
                    }
                }),
                t.state = {
                    isOpen: !1
                },
                t
            }
            return p()(a, e),
            c()(a, [{
                key: "render",
                value: function() {
                    var e = this,
                    a = this.state.isOpen,
                    t = b()({
                        "js-floating-nav-trigger": !0,
                        "floating-nav-trigger": !0,
                        "is-open": a
                    }),
                    n = b()({
                        "floating-nav": !0,
                        "js-floating-nav": !0,
                        "is-visible": a
                    });
                    return f.a.createElement("section", {
                        className: "col-md-12 nav-card-wrapper"
                    },
                    f.a.createElement("a", {
                        className: t,
                        href: "javascript:;",
                        onClick: this.handlerClick
                    },
                    f.a.createElement("i", {
                        className: "icon-bars"
                    }), f.a.createElement("span", {
                        className: "close-icon"
                    },
                    "×")), f.a.createElement("a", {
                        className: t,
                        href: "javascript:;",
                        onClick: this.props.renderHTMLtoPDF,
                        style: {
                            bottom: "80px",
                            display:"none",
                            opacity:0
                        }
                    },
                    f.a.createElement("i", {
                        className: "glyphicon glyphicon-download-alt",
                        style: {
                            lineHeight: "50px"
                        }
                    })), f.a.createElement("nav", {
                        className: n
                    },
                    f.a.createElement("ul", {
                        className: "list-unstyled"
                    },
                    f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("about")
                        }
                    },
                    f.a.createElement("i", {
                        className: "mr-10 icon-board"
                    }), "自我描述")), f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("work-experience")
                        }
                    },
                    f.a.createElement("i", {
                        className: "mr-10 icon-office"
                    }), "工作经历")), f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("education")
                        }
                    },
                    f.a.createElement("i", {
                        className: "mr-10 icon-graduation-cap"
                    }), "教育经历")), f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("project-experience")
                        }
                    },
                    f.a.createElement("i", {
                        className: "mr-10 icon-child"
                    }), "项目经验")), f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("publications")
                        }
                    },
                    // f.a.createElement("i", {
                    //     className: "mr-10 icon-newspaper"
                    // }), "作品展示")), f.a.createElement("li", null, f.a.createElement("a", {
                    //     href: "javascript:;",
                    //     onClick: function() {
                    //         return e.scrollToAnchor("skills")
                    //     }
                    // },
                    f.a.createElement("i", {
                        className: "mr-10 icon-tools"
                    }), "技能评价")), f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("awards")
                        }
                    },
                    // f.a.createElement("i", {
                    //     className: "mr-10 icon-trophy"
                    // }), "荣誉证书")), f.a.createElement("li", null, f.a.createElement("a", {
                    //     href: "javascript:;",
                    //     onClick: function() {
                    //         return e.scrollToAnchor("interests")
                    //     }
                    // },
                    f.a.createElement("i", {
                        className: "mr-10 icon-heart"
                    }), "兴趣爱好")), f.a.createElement("li", null, f.a.createElement("a", {
                        href: "javascript:;",
                        onClick: function() {
                            return e.scrollToAnchor("references")
                        }
                    },
                    f.a.createElement("i", {
                        className: "mr-10 icon-thumbs-up"
                    }), "座右铭")))))
                }
            }]),
            a
        } (f.a.Component);
        a.a = k
    },
    221 : function(e, a, t) {
        "use strict";
        a.a = {
            basics: {
                position: "Web 前端工程师",
                name: "张仪飞",
                gender: "男",
                age: "27",
                worklife: "3",
                label: "我是一个喜欢做菜的码农",
                picture: "https://img0.baidu.com/it/u=813171515,3593460038&fm=26&fmt=auto&gp=0.jpg",
                email: "894532264@qq.com",
                phone: "15594696995",
                website: "https://github.com/wtfsilence",
                summary: ["个人主攻 Web 前端和 APP 开发 和小程序开发，3年+前端开发经验，参与或独立开发过多个核心项目，项目类型涉及：电子商务、企业管理、旅游等等", "喜欢关注 Web 前端相关新技术方向（Vue、Nodejs、Apicloud、小程序...），对于新技术有很强的学习兴趣", "喜欢技术高超的人，喜欢去研究一些新的知识", "热爱前端这份工作，也热爱一切美好的事物，对于我来说，是一种责任、是一种快乐"],
                location: "西安市雁塔区",
                profiles: [{
                    network: "github",
                    username: "wtfsilence",
                    url: "https://github.com/wtfsilence"
                },
                // {
                //     network: "zhihu",
                //     username: "silence",
                //     // url: "https://www.jianshu.com/u/c683865d3778"
                // }
                ]
            },
            work: [{
                company: "西安趣链科技有限公司",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.01",
                endDate: "2021.01",
                summary: "西安趣链科技有限公司",
                highlights: ["根据产品需求文档，进行 Web 前端开发，前端主体框架选型，搭建基础框架", "根据设计提供的设计稿编写静态页面", "Javascript 数据处理、Ajax 交互开发", "负责配合后台开发人员，完成页面的交互及接口对接", "负责团队的前端开发质量，提高效率，实施前后端分离", "负责前端技术的完善，以用户为中心，不断尝试前端新技术，等等"]
            },
            {
                company: "西安比熊网络科技有限公司",
                position: "Web 前端工程师",
                website: "",
                startDate: "2017.09",
                endDate: "2018.12",
                summary: "西安比熊网络科技有限公司",
                highlights: ["Photoshop 对设计图进行切片", "HTML5 + CSS3 编写网站页面，并保证浏览器的兼容性", "负责配合后台开发人员，完成页面的交互及接口对接", "负责电脑端及移动端 Web 项目的前端开发"]
            }
            // {
            //     company: "西安智通网络科技有限公司",
            //     position: "Web 前端工程师",
            //     website: "",
            //     startDate: "2016.09",
            //     endDate: "2017.9",
            //     summary: "西安智通网络科技有限公司",
            //     highlights: ["Photoshop 对设计图进行切片", "HTML5 + CSS3 编写网站页面，并保证浏览器的兼容性", "负责配合后台开发人员，完成页面的交互及接口对接", "负责电脑端及移动端 Web 项目的前端开发"]
            // }
            ],
            project: [{
                organization: "退役军人之家 PC",
                position: "Web 前端工程师",
                website: "",
                startDate: "2020.10",
                endDate: "至今",
                summary: "vue + vue-router + axios + element + vuex",
                highlights: ["2020年3月到2020年5月团队合作开发的一款管理类项目，包括人员档案管理、人员信息管理、系统管理、诉求信息管理等功能；", "在此封装了高效的可复用的组件模块，通过组件化开发极大的提升了开发效率；","项目上线后用户体验流畅，用户数量不断增加，产品的销售量也在不断增多中。"]
            },{
                organization: "民生银行 H5",
                position: "Web 前端工程师",
                website: "",
                startDate: "2020.04",
                endDate: "2020.06",
                summary: "vue + vue-router + axios + vuex",
                highlights: ["2020年02月到2020年03月独立负责开发的一款理财类项目，包括产品信息、投资理财等功能；", "前端采用微信公众号开发，在此封装了高效的可复用的组件模块，通过组件化开发极大的提升了开发效率；","项目上线后用户体验流畅，用户数量不断增加，产品的销售量也在不断增多中。"]
            },
            {
                organization: "国联质检小程序、国联质检名片小程序",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.10",
                endDate: "2020.02",
                summary: "微信小程序",
                highlights: ["产品包括分类、资讯、购物车、以及我的页面等功能；", "可以在线购买国联质检检测产品；", "项目上线后，前端性能表现良好，用户表示很满意，为公司创造了更多的收益。"]
            },
            {
                organization: "国联质检管理后台 PC",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.10",
                endDate: "2020.01",
                summary: "vue + vue-router + axios + element + vuex",
                highlights: ["国联质检平台是一个商业后台管理系统的前端项目；","基于vue + vue-router + axios + element + vuex实现。主要包括商品管理、订单管理、用户管理、资讯管理、财务管理、统计报表、权限管理、卡片管理、设置等功能。"]
            },
            {
                organization: "Umall商城 APP",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.07",
                endDate: "2019.10",
                summary: "vue + apicloud + vant",
                highlights: ["2019年07月到2019年10月我们四人小组负责开发一款商城的项目，包括首页、分类、购物车，我的，能更好的更优惠的物品展示在客户APP上；","作为团队中的核心程序员，我负责项目的调研，根据产品需求文档进行需求拆分，技术选型与搭建框架等开发；", "让用户不仅享受购物的便利和优惠的价格，还让推广者获得劳动报酬。"]
            },
            {
                organization: "金龙鱼H5",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.06",
                endDate: "2019.07",
                summary: "vue + vue-router + vue-cli + vant",
                highlights: ["金龙鱼H5采用 vue + vue-router + vue-cli + vant 为主体框架开发，主要完成登陆模块、购物车、我的等模块，我的模块主要包括收货地址、我的订单等","嵌套在农行App中的H5页面"]
            },
            {
                organization: "百商优鉴 H5",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.05",
                endDate: "2019.06",
                summary: "微信公众号",
                highlights: ["项目基于 微信公众号源代码 重构项目，克服了多人协作开发的问题，使得研发成本大大降低、快速上线。"]
            },
            {
                organization: "点钻猫 APP",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.03",
                endDate: "2019.05",
                summary: "vue + apicloud + vant + vue-cli + vue-router",
                highlights: ["可以将拍摄的视频进行上传、分享。然后人们在互相分享中，获知一些景点的实时景色状况、或者个人喜欢的视频、留下美好回忆;", "视频，也在人们的互相分享中，得以宣传推广，从而促进短视频发展。"]
            },
            {
                organization: "魅色一卡通APP",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.01",
                endDate: "2019.03",
                summary: "apicloud + vue",
                highlights: ["项目基于apicloud、vue技术栈，2019年1月到2019年3月团队合作开发的一款商城类项目，包括购物车、产品详情、物流、小游戏等功能；", "前端采用微信小程序开发，在此封装了高效的可复用的组件模块，通过组件化开发极大的提升了开发效率；","项目上线后用户体验流畅，用户数量不断增加，产品的销售量也在不断增多中。"]
            },
            {
                organization: "魅色一卡通",
                position: "Web 前端工程师",
                website: "",
                startDate: "2019.01",
                endDate: "2019.03",
                summary: "微信小程序",
                highlights: ["2019年1月到2019年3月团队合作开发的一款商城类项目，包括购物车、产品详情、物流、小游戏等功能；", "前端采用微信小程序开发，在此封装了高效的可复用的组件模块，通过组件化开发极大的提升了开发效率；","项目上线后用户体验流畅，用户数量不断增加，产品的销售量也在不断增多中。"]
            }],
            education: [{
                institution: "陕西工商职业学院",
                area: "酒店管理",
                studyType: "专科",
                startDate: "2013-09",
                endDate: "2016-06",
                gpa: "3.0",
                courses: ["计算机基础", "旅游管理", "管理学"]
            }],
            awards: [{
                title: "",
                date: "",
                awarder: "",
                summary: ""
            }],
            // publications: [{
            //     name: "angular-weui",
            //     publisher: "skyvow",
            //     releaseDate: "2016-10",
            //     website: "https://github.com/skyvow/angular-weui",
            //     summary: "Angular WeUI - 基于WeUI封装一些常用指令及服务"
            // }],
            skills: [{
                name: "前端",
                level: "master",
                keywords: ["HTML5", "CSS3", "Javascript", "jQuery", "Apicloud","Vue","微信小程序"]
            },
            {
                name: "后端",
                level: "master",
                keywords: ["PHP", "Nodejs"]
            }],
            languages: [{
                language: "中文",
                fluency: "母语"
            }],
            interests: [{
                name: "社交",
                keywords: ["微信", "微博", "QQ", "抖音"]
            }],
            references: [{
                // name: "张仪飞",
                reference: "我们各自努力，最高处见"
            }]
        }
    },
    222 : function(e, A, W) {
        "use strict";
        W.r(A),
        function(e) {
            var a = W(205),
            c = W.n(a),
            t = W(206),
            n = W.n(t),
            l = W(207),
            r = W.n(l),
            s = W(208),
            i = W.n(s),
            m = W(209),
            o = W.n(m),
            u = W(210),
            p = W.n(u),
            d = W(211),
            E = W.n(d),
            h = W(6),
            N = W.n(h),
            g = W(101),
            f = W.n(g),
            v = W(104),
            b = W.n(v),
            k = W(215),
            y = W(217),
            w = W(218),
            S = W(219),
            D = W(220),
            x = W(221),
            C = function(e) {
                function s() {
                    var e, a;
                    c()(this, s);
                    for (var t = arguments.length,
                    n = new Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                    return a = r()(this, (e = i()(s)).call.apply(e, [this].concat(n))),
                    E()(p()(p()(a)), "renderHTMLtoPDF",
                    function() {
                        f()(document.body, {
                            onrendered: function(e) {
                                var a = e.width,
                                t = e.height,
                                n = a / 592.28 * 841.89,
                                l = t,
                                s = 0,
                                c = 592.28 / a * t,
                                r = e.toDataURL("image/jpeg", 1),
                                i = new b.a("", "pt", "a4");
                                if (l < n) i.addImage(r, "JPEG", 0, 0, 595.28, c);
                                else for (; 0 < l;) i.addImage(r, "JPEG", 0, s, 595.28, c),
                                s -= 841.89,
                                0 < (l -= n) && i.addPage();
                                i.save("张仪飞-web前端.pdf")
                            }
                        })
                    }),
                    a
                }
                return o()(s, e),
                n()(s, [{
                    key: "componentDidMount",
                    value: function() {
                        document.getElementById("loading").style.display = "none"
                    }
                },
                {
                    key: "render",
                    value: function() {
                        return N.a.createElement("div", {
                            className: "container-fluid"
                        },
                        N.a.createElement("div", {
                            className: "row main clearfix"
                        },
                        N.a.createElement(D.a, {
                            renderHTMLtoPDF: this.renderHTMLtoPDF
                        }), N.a.createElement(y.a, x.a), N.a.createElement(S.a, x.a), N.a.createElement(w.a, null)))
                    }
                }]),
                s
            } (N.a.Component);
            A.
        default = Object(k.hot)(e)(C)
        }.call(this, W(214)(e))
    }
}]);
