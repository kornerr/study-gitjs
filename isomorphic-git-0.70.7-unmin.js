!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.git = e()) : (t.git = e());
})(self, function () {
    return (function (t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        r.d(
                            n,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return n;
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = 133))
        );
    })([
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            }),
                r.d(e, "b", function () {
                    return o;
                });
            const n = {
                    FileReadError: 'Could not read file "{ filepath }".',
                    MissingRequiredParameterError: 'The function "{ function }" requires a "{ parameter }" parameter but none was provided.',
                    InvalidRefNameError: 'Failed to { verb } { noun } "{ ref }" because that name would not be a valid git reference. A valid alternative would be "{ suggestion }".',
                    InvalidParameterCombinationError: 'The function "{ function }" doesn\'t take these parameters simultaneously: { parameters }',
                    RefExistsError: 'Failed to create { noun } "{ ref }" because { noun } "{ ref }" already exists.',
                    RefNotExistsError: 'Failed to { verb } { noun } "{ ref }" because { noun } "{ ref }" does not exists.',
                    BranchDeleteError: 'Failed to delete branch "{ ref }" because branch "{ ref }" checked out now.',
                    NoHeadCommitError: 'Failed to create { noun } "{ ref }" because the HEAD ref could not be resolved to a commit.',
                    CommitNotFetchedError: 'Failed to checkout "{ ref }" because commit { oid } is not available locally. Do a git fetch to make the branch available locally.',
                    ObjectTypeUnknownFail: 'Object { oid } has unknown type "{ type }".',
                    ObjectTypeAssertionFail: "Object { oid } was anticipated to be a { expected } but it is a { type }. This is probably a bug deep in isomorphic-git!",
                    ObjectTypeAssertionInTreeFail: 'Object { oid } in tree for "{ entrypath }" was an unexpected object type "{ type }".',
                    ObjectTypeAssertionInRefFail: '{ ref } is not pointing to a "{ expected }" object but a "{ type }" object.',
                    ObjectTypeAssertionInPathFail: 'Found a blob { oid } in the path "{ path }" where a tree was expected.',
                    MissingAuthorError: "Author name and email must be specified as an argument or in the .git/config file.",
                    MissingCommitterError: "Committer name and email must be specified if a committer object is passed.",
                    MissingTaggerError: "Tagger name and email must be specified as an argument or in the .git/config file.",
                    GitRootNotFoundError: "Unable to find git root for { filepath }.",
                    UnparseableServerResponseFail: 'Unparsable response from server! Expected "unpack ok" or "unpack [error message]" but received "{ line }".',
                    InvalidDepthParameterError: "Invalid value for depth parameter: { depth }",
                    RemoteDoesNotSupportShallowFail: "Remote does not support shallow fetches.",
                    RemoteDoesNotSupportDeepenSinceFail: "Remote does not support shallow fetches by date.",
                    RemoteDoesNotSupportDeepenNotFail: "Remote does not support shallow fetches excluding commits reachable by refs.",
                    RemoteDoesNotSupportDeepenRelativeFail: "Remote does not support shallow fetches relative to the current shallow depth.",
                    RemoteDoesNotSupportSmartHTTP: 'Remote did not reply using the "smart" HTTP protocol. Expected "001e# service=git-upload-pack" but received: { preview }',
                    CorruptShallowOidFail: "non-40 character shallow oid: { oid }",
                    FastForwardFail: "A simple fast-forward merge was not possible.",
                    MergeNotSupportedFail: "Merges with conflicts are not supported yet.",
                    DirectorySeparatorsError: '"filepath" parameter should not include leading or trailing directory separators because these can cause problems on some platforms',
                    ResolveTreeError: "Could not resolve { oid } to a tree.",
                    ResolveCommitError: "Could not resolve { oid } to a commit.",
                    DirectoryIsAFileError: 'Unable to read "{ oid }:{ filepath }" because encountered a file where a directory was expected.',
                    TreeOrBlobNotFoundError: 'No file or directory found at "{ oid }:{ filepath }".',
                    NotImplementedFail: "TODO: { thing } still needs to be implemented!",
                    ReadObjectFail: "Failed to read git object with oid { oid }",
                    NotAnOidFail: 'Expected a 40-char hex object id but saw "{ value }".',
                    NoRefspecConfiguredError: 'Could not find a fetch refspec for remote "{ remote }".\\nMake sure the config file has an entry like the following:\\n[remote "{ remote }"]\\nfetch = +refs/heads/*:refs/remotes/origin/*',
                    MismatchRefValueError: 'Provided oldValue doesn\\\'t match the actual value of "{ ref }".',
                    ResolveRefError: 'Could not resolve reference "{ ref }".',
                    ExpandRefError: 'Could not expand reference "{ ref }".',
                    EmptyServerResponseFail: "Empty response from git server.",
                    AssertServerResponseFail: 'Expected "{ expected }" but got "{ actual }".',
                    HTTPError: "HTTP Error: { statusCode } { statusMessage }",
                    RemoteUrlParseError: 'Cannot parse remote URL: "{ url }"',
                    UnknownTransportError: 'Git remote "{ url }" uses an unrecognized transport protocol: "{ transport }"',
                    AcquireLockFileFail: 'Unable to acquire lockfile "{ filename }". Exhausted tries.',
                    DoubleReleaseLockFileFail: 'Cannot double-release lockfile "{ filename }".',
                    InternalFail: "An internal error caused this command to fail. Please file a bug report at https://github.com/isomorphic-git/isomorphic-git/issues with this error message: { message }",
                    UnknownOauth2Format:
                        "I do not know how { company } expects its Basic Auth headers to be formatted for OAuth2 usage. If you do, you can use the regular username and password parameters to set the basic auth header yourself.",
                    MissingPasswordTokenError: "Missing password or token",
                    MissingUsernameError: "Missing username",
                    MixPasswordTokenError: 'Cannot mix "password" with "token"',
                    MixUsernamePasswordTokenError: 'Cannot mix "username" and "password" with "token"',
                    MissingTokenError: "Missing token",
                    MixUsernameOauth2formatMissingTokenError: 'Cannot mix "username" with "oauth2format". Missing token.',
                    MixPasswordOauth2formatMissingTokenError: 'Cannot mix "password" with "oauth2format". Missing token.',
                    MixUsernamePasswordOauth2formatMissingTokenError: 'Cannot mix "username" and "password" with "oauth2format". Missing token.',
                    MixUsernameOauth2formatTokenError: 'Cannot mix "username" with "oauth2format" and "token"',
                    MixPasswordOauth2formatTokenError: 'Cannot mix "password" with "oauth2format" and "token"',
                    MixUsernamePasswordOauth2formatTokenError: 'Cannot mix "username" and "password" with "oauth2format" and "token"',
                    MaxSearchDepthExceeded: "Maximum search depth of { depth } exceeded.",
                    PushRejectedNonFastForward: 'Push rejected because it was not a simple fast-forward. Use "force: true" to override.',
                    PushRejectedTagExists: 'Push rejected because tag already exists. Use "force: true" to override.',
                    AddingRemoteWouldOverwrite: 'Adding remote { remote } would overwrite the existing remote. Use "force: true" to override.',
                    PluginUndefined: 'A command required the "{ plugin }" plugin but it was undefined.',
                    CoreNotFound: 'No plugin core with the name "{ core }" is registered.',
                    PluginSchemaViolation: 'Schema check failed for "{ plugin }" plugin; missing { method } method.',
                    PluginUnrecognized: 'Unrecognized plugin type "{ plugin }"',
                    AmbiguousShortOid: 'Found multiple oids matching "{ short }" ({ matches }). Use a longer abbreviation length to disambiguate them.',
                    ShortOidNotFound: 'Could not find an object matching "{ short }".',
                    CheckoutConflictError: "Your local changes to the following files would be overwritten by checkout: { filepaths }",
                },
                i = {
                    FileReadError: "FileReadError",
                    MissingRequiredParameterError: "MissingRequiredParameterError",
                    InvalidRefNameError: "InvalidRefNameError",
                    InvalidParameterCombinationError: "InvalidParameterCombinationError",
                    RefExistsError: "RefExistsError",
                    RefNotExistsError: "RefNotExistsError",
                    BranchDeleteError: "BranchDeleteError",
                    NoHeadCommitError: "NoHeadCommitError",
                    CommitNotFetchedError: "CommitNotFetchedError",
                    ObjectTypeUnknownFail: "ObjectTypeUnknownFail",
                    ObjectTypeAssertionFail: "ObjectTypeAssertionFail",
                    ObjectTypeAssertionInTreeFail: "ObjectTypeAssertionInTreeFail",
                    ObjectTypeAssertionInRefFail: "ObjectTypeAssertionInRefFail",
                    ObjectTypeAssertionInPathFail: "ObjectTypeAssertionInPathFail",
                    MissingAuthorError: "MissingAuthorError",
                    MissingCommitterError: "MissingCommitterError",
                    MissingTaggerError: "MissingTaggerError",
                    GitRootNotFoundError: "GitRootNotFoundError",
                    UnparseableServerResponseFail: "UnparseableServerResponseFail",
                    InvalidDepthParameterError: "InvalidDepthParameterError",
                    RemoteDoesNotSupportShallowFail: "RemoteDoesNotSupportShallowFail",
                    RemoteDoesNotSupportDeepenSinceFail: "RemoteDoesNotSupportDeepenSinceFail",
                    RemoteDoesNotSupportDeepenNotFail: "RemoteDoesNotSupportDeepenNotFail",
                    RemoteDoesNotSupportDeepenRelativeFail: "RemoteDoesNotSupportDeepenRelativeFail",
                    RemoteDoesNotSupportSmartHTTP: "RemoteDoesNotSupportSmartHTTP",
                    CorruptShallowOidFail: "CorruptShallowOidFail",
                    FastForwardFail: "FastForwardFail",
                    MergeNotSupportedFail: "MergeNotSupportedFail",
                    DirectorySeparatorsError: "DirectorySeparatorsError",
                    ResolveTreeError: "ResolveTreeError",
                    ResolveCommitError: "ResolveCommitError",
                    DirectoryIsAFileError: "DirectoryIsAFileError",
                    TreeOrBlobNotFoundError: "TreeOrBlobNotFoundError",
                    NotImplementedFail: "NotImplementedFail",
                    ReadObjectFail: "ReadObjectFail",
                    NotAnOidFail: "NotAnOidFail",
                    NoRefspecConfiguredError: "NoRefspecConfiguredError",
                    MismatchRefValueError: "MismatchRefValueError",
                    ResolveRefError: "ResolveRefError",
                    ExpandRefError: "ExpandRefError",
                    EmptyServerResponseFail: "EmptyServerResponseFail",
                    AssertServerResponseFail: "AssertServerResponseFail",
                    HTTPError: "HTTPError",
                    RemoteUrlParseError: "RemoteUrlParseError",
                    UnknownTransportError: "UnknownTransportError",
                    AcquireLockFileFail: "AcquireLockFileFail",
                    DoubleReleaseLockFileFail: "DoubleReleaseLockFileFail",
                    InternalFail: "InternalFail",
                    UnknownOauth2Format: "UnknownOauth2Format",
                    MissingPasswordTokenError: "MissingPasswordTokenError",
                    MissingUsernameError: "MissingUsernameError",
                    MixPasswordTokenError: "MixPasswordTokenError",
                    MixUsernamePasswordTokenError: "MixUsernamePasswordTokenError",
                    MissingTokenError: "MissingTokenError",
                    MixUsernameOauth2formatMissingTokenError: "MixUsernameOauth2formatMissingTokenError",
                    MixPasswordOauth2formatMissingTokenError: "MixPasswordOauth2formatMissingTokenError",
                    MixUsernamePasswordOauth2formatMissingTokenError: "MixUsernamePasswordOauth2formatMissingTokenError",
                    MixUsernameOauth2formatTokenError: "MixUsernameOauth2formatTokenError",
                    MixPasswordOauth2formatTokenError: "MixPasswordOauth2formatTokenError",
                    MixUsernamePasswordOauth2formatTokenError: "MixUsernamePasswordOauth2formatTokenError",
                    MaxSearchDepthExceeded: "MaxSearchDepthExceeded",
                    PushRejectedNonFastForward: "PushRejectedNonFastForward",
                    PushRejectedTagExists: "PushRejectedTagExists",
                    AddingRemoteWouldOverwrite: "AddingRemoteWouldOverwrite",
                    PluginUndefined: "PluginUndefined",
                    CoreNotFound: "CoreNotFound",
                    PluginSchemaViolation: "PluginSchemaViolation",
                    PluginUnrecognized: "PluginUnrecognized",
                    AmbiguousShortOid: "AmbiguousShortOid",
                    ShortOidNotFound: "ShortOidNotFound",
                    CheckoutConflictError: "CheckoutConflictError",
                };
            class o extends Error {
                constructor(t, e) {
                    super(),
                        (this.name = t),
                        (this.code = t),
                        (this.data = e),
                        (this.message = (function (t, e) {
                            let r = t;
                            for (const t of Object.keys(e)) {
                                let n;
                                (n = Array.isArray(e[t]) ? e[t].join(", ") : String(e[t])), (r = r.replace(new RegExp(`{ ${t} }`, "g"), n));
                            }
                            return r;
                        })(n[t], e || {})),
                        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
                }
                toJSON() {
                    return { code: this.code, data: this.data, caller: this.caller, message: this.message };
                }
                toString() {
                    return this.stack.toString();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return h;
                });
                var n = r(17),
                    i = r.n(n),
                    o = r(0),
                    a = r(34),
                    s = r(23),
                    u = r(65);
                function c(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function f(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                c(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                c(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                const l = new Map(),
                    d = new WeakMap();
                class h {
                    constructor(t) {
                        if (void 0 === t) throw new o.b(o.a.PluginUndefined, { plugin: "fs" });
                        return d.has(t)
                            ? d.get(t)
                            : d.has(t._original_unwrapped_fs)
                            ? d.get(t._original_unwrapped_fs)
                            : void 0 !== t._original_unwrapped_fs
                            ? t
                            : (Object.getOwnPropertyDescriptor(t, "promises") && Object.getOwnPropertyDescriptor(t, "promises").enumerable
                                  ? ((this._readFile = t.promises.readFile.bind(t.promises)),
                                    (this._writeFile = t.promises.writeFile.bind(t.promises)),
                                    (this._mkdir = t.promises.mkdir.bind(t.promises)),
                                    (this._rmdir = t.promises.rmdir.bind(t.promises)),
                                    (this._unlink = t.promises.unlink.bind(t.promises)),
                                    (this._stat = t.promises.stat.bind(t.promises)),
                                    (this._lstat = t.promises.lstat.bind(t.promises)),
                                    (this._readdir = t.promises.readdir.bind(t.promises)),
                                    (this._readlink = t.promises.readlink.bind(t.promises)),
                                    (this._symlink = t.promises.symlink.bind(t.promises)))
                                  : ((this._readFile = i()(t.readFile.bind(t))),
                                    (this._writeFile = i()(t.writeFile.bind(t))),
                                    (this._mkdir = i()(t.mkdir.bind(t))),
                                    (this._rmdir = i()(t.rmdir.bind(t))),
                                    (this._unlink = i()(t.unlink.bind(t))),
                                    (this._stat = i()(t.stat.bind(t))),
                                    (this._lstat = i()(t.lstat.bind(t))),
                                    (this._readdir = i()(t.readdir.bind(t))),
                                    (this._readlink = i()(t.readlink.bind(t))),
                                    (this._symlink = i()(t.symlink.bind(t)))),
                              (this._original_unwrapped_fs = t),
                              void d.set(t, this));
                    }
                    exists(t, e = {}) {
                        var r = this;
                        return f(function* () {
                            try {
                                return yield r._stat(t), !0;
                            } catch (t) {
                                if ("ENOENT" === t.code || "ENOTDIR" === t.code) return !1;
                                throw (console.log('Unhandled error in "FileSystem.exists()" function', t), t);
                            }
                        })();
                    }
                    read(e, r = {}) {
                        var n = this;
                        return f(function* () {
                            try {
                                let i = yield n._readFile(e, r);
                                return "string" != typeof i && (i = t.from(i)), i;
                            } catch (t) {
                                return null;
                            }
                        })();
                    }
                    write(t, e, r = {}) {
                        var n = this;
                        return f(function* () {
                            try {
                                return void (yield n._writeFile(t, e, r));
                            } catch (i) {
                                yield n.mkdir(Object(s.a)(t)), yield n._writeFile(t, e, r);
                            }
                        })();
                    }
                    mkdir(t, e = !1) {
                        var r = this;
                        return f(function* () {
                            try {
                                return void (yield r._mkdir(t));
                            } catch (n) {
                                if (null === n) return;
                                if ("EEXIST" === n.code) return;
                                if (e) throw n;
                                if ("ENOENT" === n.code) {
                                    const e = Object(s.a)(t);
                                    if ("." === e || "/" === e || e === t) throw n;
                                    yield r.mkdir(e), yield r.mkdir(t, !0);
                                }
                            }
                        })();
                    }
                    rm(t) {
                        var e = this;
                        return f(function* () {
                            try {
                                yield e._unlink(t);
                            } catch (t) {
                                if ("ENOENT" !== t.code) throw t;
                            }
                        })();
                    }
                    rmdir(t) {
                        var e = this;
                        return f(function* () {
                            try {
                                yield e._rmdir(t);
                            } catch (t) {
                                if ("ENOENT" !== t.code) throw t;
                            }
                        })();
                    }
                    readdir(t) {
                        var e = this;
                        return f(function* () {
                            try {
                                const r = yield e._readdir(t);
                                return r.sort(a.a), r;
                            } catch (t) {
                                return "ENOTDIR" === t.code ? null : [];
                            }
                        })();
                    }
                    readdirDeep(t) {
                        var e = this;
                        return f(function* () {
                            const r = yield e._readdir(t);
                            return (yield Promise.all(
                                r.map(
                                    (function () {
                                        var r = f(function* (r) {
                                            const n = t + "/" + r;
                                            return (yield e._stat(n)).isDirectory() ? e.readdirDeep(n) : n;
                                        });
                                        return function (t) {
                                            return r.apply(this, arguments);
                                        };
                                    })()
                                )
                            )).reduce((t, e) => t.concat(e), []);
                        })();
                    }
                    lstat(t) {
                        var e = this;
                        return f(function* () {
                            try {
                                return yield e._lstat(t);
                            } catch (t) {
                                if ("ENOENT" === t.code) return null;
                                throw t;
                            }
                        })();
                    }
                    readlink(t, e = { encoding: "buffer" }) {
                        var r = this;
                        return f(function* () {
                            try {
                                return r._readlink(t, e);
                            } catch (t) {
                                if ("ENOENT" === t.code) return null;
                                throw t;
                            }
                        })();
                    }
                    writelink(t, e) {
                        var r = this;
                        return f(function* () {
                            return r._symlink(e.toString("utf8"), t);
                        })();
                    }
                    lock(t, e = 3) {
                        var r = this;
                        return f(function* () {
                            if (l.has(t)) return clearTimeout(l.get(t)), void l.delete(t);
                            if (0 === e) throw new o.b(o.a.AcquireLockFileFail, { filename: t });
                            try {
                                yield r._mkdir(`${t}.lock`);
                            } catch (n) {
                                "EEXIST" === n.code && (yield Object(u.a)(100), yield r.lock(t, e - 1));
                            }
                        })();
                    }
                    unlock(t, e = 50) {
                        var r = this;
                        return f(function* () {
                            if (l.has(t)) throw new o.b(o.a.DoubleReleaseLockFileFail, { filename: t });
                            l.set(
                                t,
                                setTimeout(
                                    f(function* () {
                                        l.delete(t), yield r._rmdir(`${t}.lock`);
                                    }),
                                    e
                                )
                            );
                        })();
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                return t
                    .replace(/\/\.\//g, "/")
                    .replace(/\/{2,}/g, "/")
                    .replace(/^\/\.$/, "/")
                    .replace(/^\.\/$/, ".")
                    .replace(/^\.\//, "")
                    .replace(/\/\.$/, "")
                    .replace(/(.+)\/$/, "$1")
                    .replace(/^$/, ".");
            }
            function i(...t) {
                return n(t.map(n).join("/"));
            }
            r.d(e, "a", function () {
                return i;
            });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "b", function () {
                return i;
            }),
                r.d(e, "a", function () {
                    return a;
                });
            var n = r(0);
            const i = new (class extends Map {
                    set(t, e) {
                        ((t, e) => {
                            "fs" === t && Object.getOwnPropertyDescriptor(e, "promises") && Object.getOwnPropertyDescriptor(e, "promises").enumerable && (e = e.promises);
                            const r = { credentialManager: ["fill", "approved", "rejected"], emitter: ["emit"], fs: ["lstat", "mkdir", "readdir", "readFile", "rmdir", "stat", "unlink", "writeFile"], pgp: ["sign", "verify"], http: [] };
                            if (!Object.prototype.hasOwnProperty.call(r, t)) throw new n.b(n.a.PluginUnrecognized, { plugin: t });
                            for (const i of r[t]) if (void 0 === e[i]) throw new n.b(n.a.PluginSchemaViolation, { plugin: t, method: i });
                        })(t, e),
                            super.set(t, e);
                    }
                    get(t) {
                        const e = new Set(["credentialManager", "fs", "pgp"]);
                        if (!super.has(t) && e.has(t)) throw new n.b(n.a.PluginUndefined, { plugin: t });
                        return super.get(t);
                    }
                })(),
                o = new Map([["default", i]]),
                a = {
                    get(t) {
                        if (o.has(t)) return o.get(t);
                        throw new n.b(n.a.CoreNotFound, { core: t });
                    },
                    create: (t) => (o.has(t) ? o.get(t) : (o.set(t, new Map()), o.get(t))),
                };
        },
        function (t, e, r) {
            "use strict";
            var n = r(1),
                i = r(0);
            class o {
                constructor(t) {
                    if (((this.refs = new Map()), (this.parsedConfig = []), t)) {
                        let e = null;
                        this.parsedConfig = t
                            .trim()
                            .split("\n")
                            .map((t) => {
                                if (/^\s*#/.test(t)) return { line: t, comment: !0 };
                                const r = t.indexOf(" ");
                                if (t.startsWith("^")) {
                                    const r = t.slice(1);
                                    return this.refs.set(e + "^{}", r), { line: t, ref: e, peeled: r };
                                }
                                {
                                    const n = t.slice(0, r);
                                    return (e = t.slice(r + 1)), this.refs.set(e, n), { line: t, ref: e, oid: n };
                                }
                            });
                    }
                    return this;
                }
                static from(t) {
                    return new o(t);
                }
                delete(t) {
                    (this.parsedConfig = this.parsedConfig.filter((e) => e.ref !== t)), this.refs.delete(t);
                }
                toString() {
                    return this.parsedConfig.map(({ line: t }) => t).join("\n") + "\n";
                }
            }
            var a = r(68);
            function s(t, e) {
                const r = t.replace(/\^\{\}$/, ""),
                    n = e.replace(/\^\{\}$/, ""),
                    i = -(r < n) || +(r > n);
                return 0 === i ? (t.endsWith("^{}") ? 1 : -1) : i;
            }
            var u = r(2),
                c = r(24);
            function f(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function l(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            f(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            f(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            r.d(e, "a", function () {
                return p;
            });
            const d = (t) => [`${t}`, `refs/${t}`, `refs/tags/${t}`, `refs/heads/${t}`, `refs/remotes/${t}`, `refs/remotes/${t}/HEAD`],
                h = ["config", "description", "index", "shallow", "commondir"];
            class p {
                static updateRemoteRefs({ fs: t, gitdir: e, remote: r, refs: o, symrefs: s, tags: f, refspecs: d, prune: h = !1, pruneTags: g = !1 }) {
                    return l(function* () {
                        const l = new n.a(t);
                        for (const t of o.values()) if (!t.match(/[0-9a-f]{40}/)) throw new i.b(i.a.NotAnOidFail, { value: t });
                        const m = yield c.a.get({ fs: l, gitdir: e });
                        if (!d) {
                            if (0 === (d = yield m.getall(`remote.${r}.fetch`)).length) throw new i.b(i.a.NoRefspecConfiguredError, { remote: r });
                            d.unshift(`+HEAD:refs/remotes/${r}/HEAD`);
                        }
                        const y = a.a.from(d),
                            v = new Map();
                        if (g) {
                            const t = yield p.listRefs({ fs: l, gitdir: e, filepath: "refs/tags" });
                            yield p.deleteRefs({ fs: l, gitdir: e, refs: t.map((t) => `refs/tags/${t}`) });
                        }
                        if (f)
                            for (const t of o.keys())
                                if (t.startsWith("refs/tags") && !t.endsWith("^{}") && !(yield p.exists({ fs: l, gitdir: e, ref: t }))) {
                                    const e = o.get(t + "^{}") || o.get(t);
                                    v.set(t, e);
                                }
                        const w = y.translate([...o.keys()]);
                        for (const [t, e] of w) {
                            const r = o.get(t);
                            v.set(e, r);
                        }
                        const b = y.translate([...s.keys()]);
                        for (const [t, e] of b) {
                            const r = s.get(t),
                                n = y.translateOne(r);
                            n && v.set(e, `ref: ${n}`);
                        }
                        const _ = [];
                        if (h) {
                            for (const t of y.localNamespaces()) {
                                const r = (yield p.listRefs({ fs: l, gitdir: e, filepath: t })).map((e) => `${t}/${e}`);
                                for (const t of r) v.has(t) || _.push(t);
                            }
                            _.length > 0 && (yield p.deleteRefs({ fs: l, gitdir: e, refs: _ }));
                        }
                        for (const [t, r] of v) yield l.write(Object(u.a)(e, t), `${r.trim()}\n`, "utf8");
                        return { pruned: _ };
                    })();
                }
                static writeRef({ fs: t, gitdir: e, ref: r, value: o }) {
                    return l(function* () {
                        const a = new n.a(t);
                        if (!o.match(/[0-9a-f]{40}/)) throw new i.b(i.a.NotAnOidFail, { value: o });
                        yield a.write(Object(u.a)(e, r), `${o.trim()}\n`, "utf8");
                    })();
                }
                static writeSymbolicRef({ fs: t, gitdir: e, ref: r, value: i }) {
                    return l(function* () {
                        const o = new n.a(t);
                        yield o.write(Object(u.a)(e, r), "ref: " + `${i.trim()}\n`, "utf8");
                    })();
                }
                static deleteRef({ fs: t, gitdir: e, ref: r }) {
                    return l(function* () {
                        return p.deleteRefs({ fs: t, gitdir: e, refs: [r] });
                    })();
                }
                static deleteRefs({ fs: t, gitdir: e, refs: r }) {
                    return l(function* () {
                        const i = new n.a(t);
                        yield Promise.all(r.map((t) => i.rm(Object(u.a)(e, t))));
                        let a = yield i.read(`${e}/packed-refs`, { encoding: "utf8" });
                        const s = o.from(a),
                            c = s.refs.size;
                        for (const t of r) s.refs.has(t) && s.delete(t);
                        s.refs.size < c && ((a = s.toString()), yield i.write(`${e}/packed-refs`, a, { encoding: "utf8" }));
                    })();
                }
                static resolve({ fs: t, gitdir: e, ref: r, depth: o }) {
                    return l(function* () {
                        const a = new n.a(t);
                        if (void 0 !== o && -1 === --o) return r;
                        let s;
                        if (r.startsWith("ref: ")) return (r = r.slice("ref: ".length)), p.resolve({ fs: a, gitdir: e, ref: r, depth: o });
                        if (40 === r.length && /[0-9a-f]{40}/.test(r)) return r;
                        const u = yield p.packedRefs({ fs: a, gitdir: e }),
                            c = d(r).filter((t) => !h.includes(t));
                        for (const t of c) if ((s = (yield a.read(`${e}/${t}`, { encoding: "utf8" })) || u.get(t))) return p.resolve({ fs: a, gitdir: e, ref: s.trim(), depth: o });
                        throw new i.b(i.a.ResolveRefError, { ref: r });
                    })();
                }
                static exists({ fs: t, gitdir: e, ref: r }) {
                    return l(function* () {
                        try {
                            return yield p.expand({ fs: t, gitdir: e, ref: r }), !0;
                        } catch (t) {
                            return !1;
                        }
                    })();
                }
                static expand({ fs: t, gitdir: e, ref: r }) {
                    return l(function* () {
                        const o = new n.a(t);
                        if (40 === r.length && /[0-9a-f]{40}/.test(r)) return r;
                        const a = yield p.packedRefs({ fs: o, gitdir: e }),
                            s = d(r);
                        for (const t of s) {
                            if (yield o.exists(`${e}/${t}`)) return t;
                            if (a.has(t)) return t;
                        }
                        throw new i.b(i.a.ExpandRefError, { ref: r });
                    })();
                }
                static expandAgainstMap({ ref: t, map: e }) {
                    return l(function* () {
                        const r = d(t);
                        for (const t of r) if (yield e.has(t)) return t;
                        throw new i.b(i.a.ExpandRefError, { ref: t });
                    })();
                }
                static resolveAgainstMap({ ref: t, fullref: e = t, depth: r, map: n }) {
                    if (void 0 !== r && -1 === --r) return { fullref: e, oid: t };
                    if (t.startsWith("ref: ")) return (t = t.slice("ref: ".length)), p.resolveAgainstMap({ ref: t, fullref: e, depth: r, map: n });
                    if (40 === t.length && /[0-9a-f]{40}/.test(t)) return { fullref: e, oid: t };
                    const o = d(t);
                    for (const t of o) {
                        const e = n.get(t);
                        if (e) return p.resolveAgainstMap({ ref: e.trim(), fullref: t, depth: r, map: n });
                    }
                    throw new i.b(i.a.ResolveRefError, { ref: t });
                }
                static packedRefs({ fs: t, gitdir: e }) {
                    return l(function* () {
                        const r = new n.a(t),
                            i = yield r.read(`${e}/packed-refs`, { encoding: "utf8" });
                        return o.from(i).refs;
                    })();
                }
                static listRefs({ fs: t, gitdir: e, filepath: r }) {
                    return l(function* () {
                        const i = new n.a(t),
                            o = p.packedRefs({ fs: i, gitdir: e });
                        let a = null;
                        try {
                            a = (a = yield i.readdirDeep(`${e}/${r}`)).map((t) => t.replace(`${e}/${r}/`, ""));
                        } catch (t) {
                            a = [];
                        }
                        for (let t of (yield o).keys()) t.startsWith(r) && ((t = t.replace(r + "/", "")), a.includes(t) || a.push(t));
                        return a.sort(s), a;
                    })();
                }
                static listBranches({ fs: t, gitdir: e, remote: r }) {
                    return l(function* () {
                        const i = new n.a(t);
                        return r ? p.listRefs({ fs: i, gitdir: e, filepath: `refs/remotes/${r}` }) : p.listRefs({ fs: i, gitdir: e, filepath: "refs/heads" });
                    })();
                }
                static listTags({ fs: t, gitdir: e }) {
                    return l(function* () {
                        const r = new n.a(t);
                        return (yield p.listRefs({ fs: r, gitdir: e, filepath: "refs/tags" })).filter((t) => !t.endsWith("^{}"));
                    })();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return d;
                });
                var n = r(18),
                    i = r.n(n),
                    o = r(1),
                    a = r(0),
                    s = r(16),
                    u = r(94),
                    c = r(95),
                    f = r(12);
                function l(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function d(t) {
                    return h.apply(this, arguments);
                }
                function h() {
                    var e;
                    return (
                        (e = function* ({ fs: e, gitdir: r, oid: n, format: l = "content" }) {
                            const h = new o.a(e),
                                p = (t) => d({ fs: h, gitdir: r, oid: t });
                            let g;
                            if (
                                ("4b825dc642cb6eb9a060e54bf8d69288fbee4904" === n && (g = { format: "wrapped", object: t.from("tree 0\0") }),
                                g || (g = yield Object(u.a)({ fs: h, gitdir: r, oid: n })),
                                g || (g = yield Object(c.a)({ fs: h, gitdir: r, oid: n, getExternalRefDelta: p })),
                                !g)
                            )
                                throw new a.b(a.a.ReadObjectFail, { oid: n });
                            if ("deflated" === l) return g;
                            switch (g.format) {
                                case "deflated":
                                    (g.object = t.from(i.a.inflate(g.object))), (g.format = "wrapped");
                                case "wrapped":
                                    if ("wrapped" === l && "wrapped" === g.format) return g;
                                    const e = yield Object(f.a)(g.object);
                                    if (e !== n) throw new a.b(a.a.InternalFail, { message: `SHA check failed! Expected ${n}, computed ${e}` });
                                    const { object: r, type: o } = s.a.unwrap(g.object);
                                    (g.type = o), (g.object = r), (g.format = "content");
                                case "content":
                                    if ("content" === l) return g;
                                    break;
                                default:
                                    throw new a.b(a.a.InternalFail, { message: `invalid format "${g.format}"` });
                            }
                        }),
                        (h = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, i) {
                                var o = e.apply(t, r);
                                function a(t) {
                                    l(o, n, i, a, s, "next", t);
                                }
                                function s(t) {
                                    l(o, n, i, a, s, "throw", t);
                                }
                                a(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            }),
                r.d(e, "b", function () {
                    return i;
                });
            var n,
                i,
                o = "undefined" != typeof performance && performance,
                a =
                    o && o.now
                        ? function () {
                              return o.now();
                          }
                        : function () {
                              return Date.now();
                          };
            function s(t) {
                if (!t) throw new Error("name must be non-empty");
            }
            if (o && o.mark)
                (n = function (t) {
                    s(t), o.mark("start " + t);
                }),
                    (i = function (t) {
                        s(t), o.mark("end " + t), o.measure(t, "start " + t, "end " + t);
                        var e = o.getEntriesByName(t);
                        return e[e.length - 1];
                    }),
                    function () {
                        return o.getEntriesByType("measure");
                    },
                    function () {
                        o.clearMarks(), o.clearMeasures();
                    };
            else {
                var u = {},
                    c = [];
                (n = function (t) {
                    s(t);
                    var e = a();
                    u["$" + t] = e;
                }),
                    (i = function (t) {
                        s(t);
                        var e = a(),
                            r = u["$" + t];
                        if (!r) throw new Error("no known mark: " + t);
                        var n = { startTime: r, name: t, duration: e - r, entryType: "measure" };
                        return (
                            (function (t, e) {
                                for (var r, n = 0, i = t.length; n < i; ) t[(r = (n + i) >>> 1)].startTime < e.startTime ? (n = r + 1) : (i = r);
                                t.splice(n, 0, e);
                            })(c, n),
                            n
                        );
                    }),
                    function () {
                        return c;
                    },
                    function () {
                        (u = {}), (c = []);
                    };
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return l;
                });
                var n = r(0),
                    i = r(44),
                    o = r(37),
                    a = r(14),
                    s = r(99),
                    u = r(36);
                function c(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function f(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                c(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                c(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                class l {
                    constructor(e) {
                        if ("string" == typeof e) this._commit = e;
                        else if (t.isBuffer(e)) this._commit = e.toString("utf8");
                        else {
                            if ("object" != typeof e) throw new n.b(n.a.InternalFail, { message: "invalid type passed to GitCommit constructor" });
                            this._commit = l.render(e);
                        }
                    }
                    static fromPayloadSignature({ payload: t, signature: e }) {
                        const r = l.justHeaders(t),
                            n = l.justMessage(t),
                            i = Object(a.a)(r + "\ngpgsig" + Object(o.a)(e) + "\n" + n);
                        return new l(i);
                    }
                    static from(t) {
                        return new l(t);
                    }
                    toObject() {
                        return t.from(this._commit, "utf8");
                    }
                    headers() {
                        return this.parseHeaders();
                    }
                    message() {
                        return l.justMessage(this._commit);
                    }
                    parse() {
                        return Object.assign({ message: this.message() }, this.headers());
                    }
                    static justMessage(t) {
                        return Object(a.a)(t.slice(t.indexOf("\n\n") + 2));
                    }
                    static justHeaders(t) {
                        return t.slice(0, t.indexOf("\n\n"));
                    }
                    parseHeaders() {
                        const t = l.justHeaders(this._commit).split("\n"),
                            e = [];
                        for (const r of t) " " === r[0] ? (e[e.length - 1] += "\n" + r.slice(1)) : e.push(r);
                        const r = { parent: [] };
                        for (const t of e) {
                            const e = t.slice(0, t.indexOf(" ")),
                                n = t.slice(t.indexOf(" ") + 1);
                            Array.isArray(r[e]) ? r[e].push(n) : (r[e] = n);
                        }
                        return r.author && (r.author = Object(u.a)(r.author)), r.committer && (r.committer = Object(u.a)(r.committer)), r;
                    }
                    static renderHeaders(t) {
                        let e = "";
                        if ((t.tree ? (e += `tree ${t.tree}\n`) : (e += "tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904\n"), t.parent)) {
                            if (void 0 === t.parent.length) throw new n.b(n.a.InternalFail, { message: "commit 'parent' property should be an array" });
                            for (const r of t.parent) e += `parent ${r}\n`;
                        }
                        const r = t.author;
                        e += `author ${Object(i.a)(r)}\n`;
                        const a = t.committer || t.author;
                        return (e += `committer ${Object(i.a)(a)}\n`), t.gpgsig && (e += "gpgsig" + Object(o.a)(t.gpgsig)), e;
                    }
                    static render(t) {
                        return l.renderHeaders(t) + "\n" + Object(a.a)(t.message);
                    }
                    render() {
                        return this._commit;
                    }
                    withoutSignature() {
                        const t = Object(a.a)(this._commit);
                        if (-1 === t.indexOf("\ngpgsig")) return t;
                        const e = t.slice(0, t.indexOf("\ngpgsig")),
                            r = t.slice(t.indexOf("-----END PGP SIGNATURE-----\n") + "-----END PGP SIGNATURE-----\n".length);
                        return Object(a.a)(e + "\n" + r);
                    }
                    isolateSignature() {
                        const t = this._commit.slice(this._commit.indexOf("-----BEGIN PGP SIGNATURE-----"), this._commit.indexOf("-----END PGP SIGNATURE-----") + "-----END PGP SIGNATURE-----".length);
                        return Object(s.a)(t);
                    }
                    static sign(t, e, r) {
                        return f(function* () {
                            const n = t.withoutSignature(),
                                i = l.justMessage(t._commit);
                            let { signature: s } = yield e.sign({ payload: n, secretKey: r });
                            s = Object(a.a)(s);
                            const u = l.justHeaders(t._commit) + "\ngpgsig" + Object(o.a)(s) + "\n" + i;
                            return l.from(u);
                        })();
                    }
                    static verify(t, e, r) {
                        return f(function* () {
                            const n = t.withoutSignature(),
                                i = t.isolateSignature();
                            return e.verify({ payload: n, publicKey: r, signature: i });
                        })();
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return i;
                });
                let n = null;
                function i(...e) {
                    if (null === n)
                        try {
                            n =
                                (t && t.env && t.env.DEBUG && ("*" === t.env.DEBUG || "isomorphic-git" === t.env.DEBUG)) ||
                                ("undefined" != typeof window && void 0 !== window.localStorage && ("*" === window.localStorage.debug || "isomorphic-git" === window.localStorage.debug));
                        } catch (t) {
                            n = !1;
                        }
                    n && console.log(...e);
                }
            }.call(this, r(48)));
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return a;
                });
                var n = r(57),
                    i = r(35);
                function o(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                class a {
                    static flush() {
                        return t.from("0000", "utf8");
                    }
                    static encode(e) {
                        "string" == typeof e && (e = t.from(e));
                        const r = e.length + 4,
                            n = Object(i.a)(4, r);
                        return t.concat([t.from(n, "utf8"), e]);
                    }
                    static streamReader(t) {
                        const e = new n.a(t);
                        return (function () {
                            var t,
                                r =
                                    ((t = function* () {
                                        try {
                                            let t = yield e.read(4);
                                            if (null == t) return !0;
                                            if (0 === (t = parseInt(t.toString("utf8"), 16))) return null;
                                            const r = yield e.read(t - 4);
                                            return null == r || r;
                                        } catch (t) {
                                            return console.log("error", t), !0;
                                        }
                                    }),
                                    function () {
                                        var e = this,
                                            r = arguments;
                                        return new Promise(function (n, i) {
                                            var a = t.apply(e, r);
                                            function s(t) {
                                                o(a, n, i, s, u, "next", t);
                                            }
                                            function u(t) {
                                                o(a, n, i, s, u, "throw", t);
                                            }
                                            s(void 0);
                                        });
                                    });
                            return function () {
                                return r.apply(this, arguments);
                            };
                        })();
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                 * @license  MIT
                 */
                var n = r(63),
                    i = r(103),
                    o = r(104);
                function a() {
                    return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function s(t, e) {
                    if (a() < e) throw new RangeError("Invalid typed array length");
                    return u.TYPED_ARRAY_SUPPORT ? ((t = new Uint8Array(e)).__proto__ = u.prototype) : (null === t && (t = new u(e)), (t.length = e)), t;
                }
                function u(t, e, r) {
                    if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return l(this, t);
                    }
                    return c(this, t, e, r);
                }
                function c(t, e, r, n) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
                        ? (function (t, e, r, n) {
                              if ((e.byteLength, r < 0 || e.byteLength < r)) throw new RangeError("'offset' is out of bounds");
                              if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                              e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                              u.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = u.prototype) : (t = d(t, e));
                              return t;
                          })(t, e, r, n)
                        : "string" == typeof e
                        ? (function (t, e, r) {
                              ("string" == typeof r && "" !== r) || (r = "utf8");
                              if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                              var n = 0 | p(e, r),
                                  i = (t = s(t, n)).write(e, r);
                              i !== n && (t = t.slice(0, i));
                              return t;
                          })(t, e, r)
                        : (function (t, e) {
                              if (u.isBuffer(e)) {
                                  var r = 0 | h(e.length);
                                  return 0 === (t = s(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
                              }
                              if (e) {
                                  if (("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? s(t, 0) : d(t, e);
                                  if ("Buffer" === e.type && o(e.data)) return d(t, e.data);
                              }
                              var n;
                              throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                          })(t, e);
                }
                function f(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative');
                }
                function l(t, e) {
                    if ((f(e), (t = s(t, e < 0 ? 0 : 0 | h(e))), !u.TYPED_ARRAY_SUPPORT)) for (var r = 0; r < e; ++r) t[r] = 0;
                    return t;
                }
                function d(t, e) {
                    var r = e.length < 0 ? 0 : 0 | h(e.length);
                    t = s(t, r);
                    for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
                    return t;
                }
                function h(t) {
                    if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                    return 0 | t;
                }
                function p(t, e) {
                    if (u.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var r = t.length;
                    if (0 === r) return 0;
                    for (var n = !1; ; )
                        switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return z(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return H(t).length;
                            default:
                                if (n) return z(t).length;
                                (e = ("" + e).toLowerCase()), (n = !0);
                        }
                }
                function g(t, e, r) {
                    var n = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
                    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                            case "hex":
                                return $(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return j(this, e, r);
                            case "ascii":
                                return S(this, e, r);
                            case "latin1":
                            case "binary":
                                return R(this, e, r);
                            case "base64":
                                return O(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return A(this, e, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + t);
                                (t = (t + "").toLowerCase()), (n = !0);
                        }
                }
                function m(t, e, r) {
                    var n = t[e];
                    (t[e] = t[r]), (t[r] = n);
                }
                function y(t, e, r, n, i) {
                    if (0 === t.length) return -1;
                    if (("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), (r = +r), isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)) {
                        if (i) return -1;
                        r = t.length - 1;
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0;
                    }
                    if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e))) return 0 === e.length ? -1 : v(t, e, r, n, i);
                    if ("number" == typeof e)
                        return (e &= 255), u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r)) : v(t, [e], r, n, i);
                    throw new TypeError("val must be string, number or Buffer");
                }
                function v(t, e, r, n, i) {
                    var o,
                        a = 1,
                        s = t.length,
                        u = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        (a = 2), (s /= 2), (u /= 2), (r /= 2);
                    }
                    function c(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a);
                    }
                    if (i) {
                        var f = -1;
                        for (o = r; o < s; o++)
                            if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                                if ((-1 === f && (f = o), o - f + 1 === u)) return f * a;
                            } else -1 !== f && (o -= o - f), (f = -1);
                    } else
                        for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                            for (var l = !0, d = 0; d < u; d++)
                                if (c(t, o + d) !== c(e, d)) {
                                    l = !1;
                                    break;
                                }
                            if (l) return o;
                        }
                    return -1;
                }
                function w(t, e, r, n) {
                    r = Number(r) || 0;
                    var i = t.length - r;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    var o = e.length;
                    if (o % 2 != 0) throw new TypeError("Invalid hex string");
                    n > o / 2 && (n = o / 2);
                    for (var a = 0; a < n; ++a) {
                        var s = parseInt(e.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        t[r + a] = s;
                    }
                    return a;
                }
                function b(t, e, r, n) {
                    return L(z(e, t.length - r), t, r, n);
                }
                function _(t, e, r, n) {
                    return L(
                        (function (t) {
                            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e;
                        })(e),
                        t,
                        r,
                        n
                    );
                }
                function x(t, e, r, n) {
                    return _(t, e, r, n);
                }
                function E(t, e, r, n) {
                    return L(H(e), t, r, n);
                }
                function k(t, e, r, n) {
                    return L(
                        (function (t, e) {
                            for (var r, n, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) (r = t.charCodeAt(a)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
                            return o;
                        })(e, t.length - r),
                        t,
                        r,
                        n
                    );
                }
                function O(t, e, r) {
                    return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
                }
                function j(t, e, r) {
                    r = Math.min(t.length, r);
                    for (var n = [], i = e; i < r; ) {
                        var o,
                            a,
                            s,
                            u,
                            c = t[i],
                            f = null,
                            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (i + l <= r)
                            switch (l) {
                                case 1:
                                    c < 128 && (f = c);
                                    break;
                                case 2:
                                    128 == (192 & (o = t[i + 1])) && (u = ((31 & c) << 6) | (63 & o)) > 127 && (f = u);
                                    break;
                                case 3:
                                    (o = t[i + 1]), (a = t[i + 2]), 128 == (192 & o) && 128 == (192 & a) && (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 && (u < 55296 || u > 57343) && (f = u);
                                    break;
                                case 4:
                                    (o = t[i + 1]),
                                        (a = t[i + 2]),
                                        (s = t[i + 3]),
                                        128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 && u < 1114112 && (f = u);
                            }
                        null === f ? ((f = 65533), (l = 1)) : f > 65535 && ((f -= 65536), n.push(((f >>> 10) & 1023) | 55296), (f = 56320 | (1023 & f))), n.push(f), (i += l);
                    }
                    return (function (t) {
                        var e = t.length;
                        if (e <= P) return String.fromCharCode.apply(String, t);
                        var r = "",
                            n = 0;
                        for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += P)));
                        return r;
                    })(n);
                }
                (e.Buffer = u),
                    (e.SlowBuffer = function (t) {
                        +t != t && (t = 0);
                        return u.alloc(+t);
                    }),
                    (e.INSPECT_MAX_BYTES = 50),
                    (u.TYPED_ARRAY_SUPPORT =
                        void 0 !== t.TYPED_ARRAY_SUPPORT
                            ? t.TYPED_ARRAY_SUPPORT
                            : (function () {
                                  try {
                                      var t = new Uint8Array(1);
                                      return (
                                          (t.__proto__ = {
                                              __proto__: Uint8Array.prototype,
                                              foo: function () {
                                                  return 42;
                                              },
                                          }),
                                          42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                                      );
                                  } catch (t) {
                                      return !1;
                                  }
                              })()),
                    (e.kMaxLength = a()),
                    (u.poolSize = 8192),
                    (u._augment = function (t) {
                        return (t.__proto__ = u.prototype), t;
                    }),
                    (u.from = function (t, e, r) {
                        return c(null, t, e, r);
                    }),
                    u.TYPED_ARRAY_SUPPORT &&
                        ((u.prototype.__proto__ = Uint8Array.prototype),
                        (u.__proto__ = Uint8Array),
                        "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })),
                    (u.alloc = function (t, e, r) {
                        return (function (t, e, r, n) {
                            return f(e), e <= 0 ? s(t, e) : void 0 !== r ? ("string" == typeof n ? s(t, e).fill(r, n) : s(t, e).fill(r)) : s(t, e);
                        })(null, t, e, r);
                    }),
                    (u.allocUnsafe = function (t) {
                        return l(null, t);
                    }),
                    (u.allocUnsafeSlow = function (t) {
                        return l(null, t);
                    }),
                    (u.isBuffer = function (t) {
                        return !(null == t || !t._isBuffer);
                    }),
                    (u.compare = function (t, e) {
                        if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                        if (t === e) return 0;
                        for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                            if (t[i] !== e[i]) {
                                (r = t[i]), (n = e[i]);
                                break;
                            }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }),
                    (u.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (u.concat = function (t, e) {
                        if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return u.alloc(0);
                        var r;
                        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                        var n = u.allocUnsafe(e),
                            i = 0;
                        for (r = 0; r < t.length; ++r) {
                            var a = t[r];
                            if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                            a.copy(n, i), (i += a.length);
                        }
                        return n;
                    }),
                    (u.byteLength = p),
                    (u.prototype._isBuffer = !0),
                    (u.prototype.swap16 = function () {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                        return this;
                    }),
                    (u.prototype.swap32 = function () {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                        return this;
                    }),
                    (u.prototype.swap64 = function () {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                        return this;
                    }),
                    (u.prototype.toString = function () {
                        var t = 0 | this.length;
                        return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : g.apply(this, arguments);
                    }),
                    (u.prototype.equals = function (t) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === u.compare(this, t);
                    }),
                    (u.prototype.inspect = function () {
                        var t = "",
                            r = e.INSPECT_MAX_BYTES;
                        return this.length > 0 && ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
                    }),
                    (u.prototype.compare = function (t, e, r, n, i) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        if ((void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length))
                            throw new RangeError("out of range index");
                        if (n >= i && e >= r) return 0;
                        if (n >= i) return -1;
                        if (e >= r) return 1;
                        if (this === t) return 0;
                        for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0), s = Math.min(o, a), c = this.slice(n, i), f = t.slice(e, r), l = 0; l < s; ++l)
                            if (c[l] !== f[l]) {
                                (o = c[l]), (a = f[l]);
                                break;
                            }
                        return o < a ? -1 : a < o ? 1 : 0;
                    }),
                    (u.prototype.includes = function (t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }),
                    (u.prototype.indexOf = function (t, e, r) {
                        return y(this, t, e, r, !0);
                    }),
                    (u.prototype.lastIndexOf = function (t, e, r) {
                        return y(this, t, e, r, !1);
                    }),
                    (u.prototype.write = function (t, e, r, n) {
                        if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                        else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                        else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            (e |= 0), isFinite(r) ? ((r |= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                        }
                        var i = this.length - e;
                        if (((void 0 === r || r > i) && (r = i), (t.length > 0 && (r < 0 || e < 0)) || e > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var o = !1; ; )
                            switch (n) {
                                case "hex":
                                    return w(this, t, e, r);
                                case "utf8":
                                case "utf-8":
                                    return b(this, t, e, r);
                                case "ascii":
                                    return _(this, t, e, r);
                                case "latin1":
                                case "binary":
                                    return x(this, t, e, r);
                                case "base64":
                                    return E(this, t, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return k(this, t, e, r);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + n);
                                    (n = ("" + n).toLowerCase()), (o = !0);
                            }
                    }),
                    (u.prototype.toJSON = function () {
                        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                    });
                var P = 4096;
                function S(t, e, r) {
                    var n = "";
                    r = Math.min(t.length, r);
                    for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                    return n;
                }
                function R(t, e, r) {
                    var n = "";
                    r = Math.min(t.length, r);
                    for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                    return n;
                }
                function $(t, e, r) {
                    var n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    for (var i = "", o = e; o < r; ++o) i += D(t[o]);
                    return i;
                }
                function A(t, e, r) {
                    for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                    return i;
                }
                function T(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
                }
                function I(t, e, r, n, i, o) {
                    if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw new RangeError("Index out of range");
                }
                function B(t, e, r, n) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
                }
                function F(t, e, r, n) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255;
                }
                function U(t, e, r, n, i, o) {
                    if (r + n > t.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range");
                }
                function M(t, e, r, n, o) {
                    return o || U(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
                }
                function C(t, e, r, n, o) {
                    return o || U(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
                }
                (u.prototype.slice = function (t, e) {
                    var r,
                        n = this.length;
                    if (((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT))
                        (r = this.subarray(t, e)).__proto__ = u.prototype;
                    else {
                        var i = e - t;
                        r = new u(i, void 0);
                        for (var o = 0; o < i; ++o) r[o] = this[o + t];
                    }
                    return r;
                }),
                    (u.prototype.readUIntLE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || T(t, e, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) n += this[t + o] * i;
                        return n;
                    }),
                    (u.prototype.readUIntBE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || T(t, e, this.length);
                        for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); ) n += this[t + --e] * i;
                        return n;
                    }),
                    (u.prototype.readUInt8 = function (t, e) {
                        return e || T(t, 1, this.length), this[t];
                    }),
                    (u.prototype.readUInt16LE = function (t, e) {
                        return e || T(t, 2, this.length), this[t] | (this[t + 1] << 8);
                    }),
                    (u.prototype.readUInt16BE = function (t, e) {
                        return e || T(t, 2, this.length), (this[t] << 8) | this[t + 1];
                    }),
                    (u.prototype.readUInt32LE = function (t, e) {
                        return e || T(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                    }),
                    (u.prototype.readUInt32BE = function (t, e) {
                        return e || T(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                    }),
                    (u.prototype.readIntLE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || T(t, e, this.length);
                        for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) n += this[t + o] * i;
                        return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
                    }),
                    (u.prototype.readIntBE = function (t, e, r) {
                        (t |= 0), (e |= 0), r || T(t, e, this.length);
                        for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); ) o += this[t + --n] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
                    }),
                    (u.prototype.readInt8 = function (t, e) {
                        return e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }),
                    (u.prototype.readInt16LE = function (t, e) {
                        e || T(t, 2, this.length);
                        var r = this[t] | (this[t + 1] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (u.prototype.readInt16BE = function (t, e) {
                        e || T(t, 2, this.length);
                        var r = this[t + 1] | (this[t] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (u.prototype.readInt32LE = function (t, e) {
                        return e || T(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                    }),
                    (u.prototype.readInt32BE = function (t, e) {
                        return e || T(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                    }),
                    (u.prototype.readFloatLE = function (t, e) {
                        return e || T(t, 4, this.length), i.read(this, t, !0, 23, 4);
                    }),
                    (u.prototype.readFloatBE = function (t, e) {
                        return e || T(t, 4, this.length), i.read(this, t, !1, 23, 4);
                    }),
                    (u.prototype.readDoubleLE = function (t, e) {
                        return e || T(t, 8, this.length), i.read(this, t, !0, 52, 8);
                    }),
                    (u.prototype.readDoubleBE = function (t, e) {
                        return e || T(t, 8, this.length), i.read(this, t, !1, 52, 8);
                    }),
                    (u.prototype.writeUIntLE = function (t, e, r, n) {
                        ((t = +t), (e |= 0), (r |= 0), n) || I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = (t / i) & 255;
                        return e + r;
                    }),
                    (u.prototype.writeUIntBE = function (t, e, r, n) {
                        ((t = +t), (e |= 0), (r |= 0), n) || I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        var i = r - 1,
                            o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = (t / o) & 255;
                        return e + r;
                    }),
                    (u.prototype.writeUInt8 = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), (this[e] = 255 & t), e + 1;
                    }),
                    (u.prototype.writeUInt16LE = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : B(this, t, e, !0), e + 2;
                    }),
                    (u.prototype.writeUInt16BE = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : B(this, t, e, !1), e + 2;
                    }),
                    (u.prototype.writeUInt32LE = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? ((this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t)) : F(this, t, e, !0), e + 4;
                    }),
                    (u.prototype.writeUInt32BE = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t)) : F(this, t, e, !1), e + 4;
                    }),
                    (u.prototype.writeIntLE = function (t, e, r, n) {
                        if (((t = +t), (e |= 0), !n)) {
                            var i = Math.pow(2, 8 * r - 1);
                            I(this, t, e, r, i - 1, -i);
                        }
                        var o = 0,
                            a = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++o < r && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), (this[e + o] = (((t / a) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (u.prototype.writeIntBE = function (t, e, r, n) {
                        if (((t = +t), (e |= 0), !n)) {
                            var i = Math.pow(2, 8 * r - 1);
                            I(this, t, e, r, i - 1, -i);
                        }
                        var o = r - 1,
                            a = 1,
                            s = 0;
                        for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), (this[e + o] = (((t / a) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (u.prototype.writeInt8 = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                    }),
                    (u.prototype.writeInt16LE = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : B(this, t, e, !0), e + 2;
                    }),
                    (u.prototype.writeInt16BE = function (t, e, r) {
                        return (t = +t), (e |= 0), r || I(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : B(this, t, e, !1), e + 2;
                    }),
                    (u.prototype.writeInt32LE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e |= 0),
                            r || I(this, t, e, 4, 2147483647, -2147483648),
                            u.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24)) : F(this, t, e, !0),
                            e + 4
                        );
                    }),
                    (u.prototype.writeInt32BE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e |= 0),
                            r || I(this, t, e, 4, 2147483647, -2147483648),
                            t < 0 && (t = 4294967295 + t + 1),
                            u.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t)) : F(this, t, e, !1),
                            e + 4
                        );
                    }),
                    (u.prototype.writeFloatLE = function (t, e, r) {
                        return M(this, t, e, !0, r);
                    }),
                    (u.prototype.writeFloatBE = function (t, e, r) {
                        return M(this, t, e, !1, r);
                    }),
                    (u.prototype.writeDoubleLE = function (t, e, r) {
                        return C(this, t, e, !0, r);
                    }),
                    (u.prototype.writeDoubleBE = function (t, e, r) {
                        return C(this, t, e, !1, r);
                    }),
                    (u.prototype.copy = function (t, e, r, n) {
                        if ((r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r)) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                        var i,
                            o = n - r;
                        if (this === t && r < e && e < n) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
                        else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + r];
                        else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
                        return o;
                    }),
                    (u.prototype.fill = function (t, e, r, n) {
                        if ("string" == typeof t) {
                            if (("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), 1 === t.length)) {
                                var i = t.charCodeAt(0);
                                i < 256 && (t = i);
                            }
                            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        var o;
                        if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t)) for (o = e; o < r; ++o) this[o] = t;
                        else {
                            var a = u.isBuffer(t) ? t : z(new u(t, n).toString()),
                                s = a.length;
                            for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
                        }
                        return this;
                    });
                var N = /[^+\/0-9A-Za-z-_]/g;
                function D(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16);
                }
                function z(t, e) {
                    var r;
                    e = e || 1 / 0;
                    for (var n = t.length, i = null, o = [], a = 0; a < n; ++a) {
                        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                if (a + 1 === n) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                i = r;
                                continue;
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                                continue;
                            }
                            r = 65536 + (((i - 55296) << 10) | (r - 56320));
                        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (((i = null), r < 128)) {
                            if ((e -= 1) < 0) break;
                            o.push(r);
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push((r >> 6) | 192, (63 & r) | 128);
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        }
                    }
                    return o;
                }
                function H(t) {
                    return n.toByteArray(
                        (function (t) {
                            if (
                                (t = (function (t) {
                                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                                })(t).replace(N, "")).length < 2
                            )
                                return "";
                            for (; t.length % 4 != 0; ) t += "=";
                            return t;
                        })(t)
                    );
                }
                function L(t, e, r, n) {
                    for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                    return i;
                }
            }.call(this, r(76)));
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return s;
                });
                var n = r(0),
                    i = r(39);
                function o(t) {
                    switch (t) {
                        case "040000":
                            return "tree";
                        case "100644":
                        case "100755":
                        case "120000":
                            return "blob";
                        case "160000":
                            return "commit";
                    }
                    throw new n.b(n.a.InternalFail, { message: `Unexpected GitTree entry mode: ${t}` });
                }
                function a(t) {
                    return (
                        !t.oid && t.sha && (t.oid = t.sha),
                        (t.mode = (function (t) {
                            if (("number" == typeof t && (t = t.toString(8)), t.match(/^0?4.*/))) return "040000";
                            if (t.match(/^1006.*/)) return "100644";
                            if (t.match(/^1007.*/)) return "100755";
                            if (t.match(/^120.*/)) return "120000";
                            if (t.match(/^160.*/)) return "160000";
                            throw new n.b(n.a.InternalFail, { message: `Could not understand file mode: ${t}` });
                        })(t.mode)),
                        t.type || (t.type = "blob"),
                        t
                    );
                }
                class s {
                    constructor(e) {
                        if (t.isBuffer(e))
                            this._entries = (function (t) {
                                const e = [];
                                let r = 0;
                                for (; r < t.length; ) {
                                    const i = t.indexOf(32, r);
                                    if (-1 === i) throw new n.b(n.a.InternalFail, { message: `GitTree: Error parsing buffer at byte location ${r}: Could not find the next space character.` });
                                    const a = t.indexOf(0, r);
                                    if (-1 === a) throw new n.b(n.a.InternalFail, { message: `GitTree: Error parsing buffer at byte location ${r}: Could not find the next null character.` });
                                    let s = t.slice(r, i).toString("utf8");
                                    "40000" === s && (s = "040000");
                                    const u = o(s),
                                        c = t.slice(i + 1, a).toString("utf8"),
                                        f = t.slice(a + 1, a + 21).toString("hex");
                                    (r = a + 21), e.push({ mode: s, path: c, oid: f, type: u });
                                }
                                return e;
                            })(e);
                        else {
                            if (!Array.isArray(e)) throw new n.b(n.a.InternalFail, { message: "invalid type passed to GitTree constructor" });
                            this._entries = e.map(a);
                        }
                        this._entries.sort(i.a);
                    }
                    static from(t) {
                        return new s(t);
                    }
                    render() {
                        return this._entries.map((t) => `${t.mode} ${t.type} ${t.oid}    ${t.path}`).join("\n");
                    }
                    toObject() {
                        return t.concat(
                            this._entries.map((e) => {
                                const r = t.from(e.mode.replace(/^0/, "")),
                                    n = t.from(" "),
                                    i = t.from(e.path, "utf8"),
                                    o = t.from([0]),
                                    a = t.from(e.oid, "hex");
                                return t.concat([r, n, i, o, a]);
                            })
                        );
                    }
                    entries() {
                        return this._entries;
                    }
                    *[Symbol.iterator]() {
                        for (const t of this._entries) yield t;
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            var n = r(53),
                i = r.n(n);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function a(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var a = t.apply(e, r);
                        function s(t) {
                            o(a, n, i, s, u, "next", t);
                        }
                        function u(t) {
                            o(a, n, i, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            r.d(e, "a", function () {
                return u;
            });
            let s = null;
            function u(t) {
                return c.apply(this, arguments);
            }
            function c() {
                return (c = a(function* (t) {
                    return (
                        null === s &&
                            (s = yield (function () {
                                return d.apply(this, arguments);
                            })()),
                        s
                            ? f(t)
                            : (function (t) {
                                  return new i.a().update(t).digest("hex");
                              })(t)
                    );
                })).apply(this, arguments);
            }
            function f(t) {
                return l.apply(this, arguments);
            }
            function l() {
                return (l = a(function* (t) {
                    return (function (t) {
                        let e = "";
                        for (const r of new Uint8Array(t)) r < 16 && (e += "0"), (e += r.toString(16));
                        return e;
                    })(yield crypto.subtle.digest("SHA-1", t));
                })).apply(this, arguments);
            }
            function d() {
                return (d = a(function* () {
                    try {
                        if ("da39a3ee5e6b4b0d3255bfef95601890afd80709" === (yield f(new Uint8Array([])))) return !0;
                    } catch (t) {}
                    return !1;
                })).apply(this, arguments);
            }
        },
        function (t, e, r) {
            "use strict";
            var n = r(43),
                i = r.n(n),
                o = r(1),
                a = r(66);
            const s = (t, e) => {
                for (const r of t) e.has(r) || e.set(r, new Map()), (e = e.get(r));
                return e;
            };
            class u {
                constructor() {
                    this._root = new Map();
                }
                set(t, e) {
                    const r = t.pop();
                    s(t, this._root).set(r, e);
                }
                get(t) {
                    const e = t.pop();
                    return s(t, this._root).get(e);
                }
                has(t) {
                    const e = t.pop();
                    return s(t, this._root).has(e);
                }
            }
            var c = r(41);
            function f(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function l(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            f(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            f(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            r.d(e, "a", function () {
                return y;
            });
            const d = new u(),
                h = new u();
            let p = null;
            function g() {
                return (g = l(function* (t, e) {
                    const r = yield t.lstat(e),
                        n = yield t.read(e),
                        i = yield a.a.from(n);
                    d.set([t, e], i), h.set([t, e], r);
                })).apply(this, arguments);
            }
            function m() {
                return (m = l(function* (t, e) {
                    const r = h.get([t, e]);
                    if (void 0 === r) return !0;
                    const n = yield t.lstat(e);
                    return null !== r && null !== n && Object(c.a)(r, n);
                })).apply(this, arguments);
            }
            class y {
                static acquire({ fs: t, gitdir: e }, r) {
                    return l(function* () {
                        const n = new o.a(t),
                            a = `${e}/index`;
                        let s;
                        return (
                            null === p && (p = new i.a({ maxPending: 1 / 0 })),
                            yield p.acquire(
                                a,
                                l(function* () {
                                    (yield (function (t, e) {
                                        return m.apply(this, arguments);
                                    })(n, a)) &&
                                        (yield (function (t, e) {
                                            return g.apply(this, arguments);
                                        })(n, a));
                                    const t = d.get([n, a]);
                                    if (((s = yield r(t)), t._dirty)) {
                                        const e = yield t.toObject();
                                        yield n.write(a, e), h.set([n, a], yield n.lstat(a)), (t._dirty = !1);
                                    }
                                })
                            ),
                            s
                        );
                    })();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                return (t = (t = (t = t.replace(/\r/g, "")).replace(/^\n+/, "")).replace(/\n+$/, "") + "\n");
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return c;
                });
                var n = r(0),
                    i = r(44),
                    o = r(14),
                    a = r(36);
                function s(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function u(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                s(o, n, i, a, u, "next", t);
                            }
                            function u(t) {
                                s(o, n, i, a, u, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                class c {
                    constructor(e) {
                        if ("string" == typeof e) this._tag = e;
                        else if (t.isBuffer(e)) this._tag = e.toString("utf8");
                        else {
                            if ("object" != typeof e) throw new n.b(n.a.InternalFail, { message: "invalid type passed to GitAnnotatedTag constructor" });
                            this._tag = c.render(e);
                        }
                    }
                    static from(t) {
                        return new c(t);
                    }
                    static render(t) {
                        return `object ${t.object}\ntype ${t.type}\ntag ${t.tag}\ntagger ${Object(i.a)(t.tagger)}\n\n${t.message}\n${t.signature ? t.signature : ""}`;
                    }
                    justHeaders() {
                        return this._tag.slice(0, this._tag.indexOf("\n\n"));
                    }
                    message() {
                        const t = this.withoutSignature();
                        return t.slice(t.indexOf("\n\n") + 2);
                    }
                    parse() {
                        return Object.assign(this.headers(), { message: this.message(), signature: this.signature() });
                    }
                    render() {
                        return this._tag;
                    }
                    headers() {
                        const t = this.justHeaders().split("\n"),
                            e = [];
                        for (const r of t) " " === r[0] ? (e[e.length - 1] += "\n" + r.slice(1)) : e.push(r);
                        const r = {};
                        for (const t of e) {
                            const e = t.slice(0, t.indexOf(" ")),
                                n = t.slice(t.indexOf(" ") + 1);
                            Array.isArray(r[e]) ? r[e].push(n) : (r[e] = n);
                        }
                        return r.tagger && (r.tagger = Object(a.a)(r.tagger)), r.committer && (r.committer = Object(a.a)(r.committer)), r;
                    }
                    withoutSignature() {
                        const t = Object(o.a)(this._tag);
                        return -1 === t.indexOf("\n-----BEGIN PGP SIGNATURE-----") ? t : t.slice(0, t.lastIndexOf("\n-----BEGIN PGP SIGNATURE-----"));
                    }
                    signature() {
                        const t = this._tag.slice(this._tag.indexOf("-----BEGIN PGP SIGNATURE-----"), this._tag.indexOf("-----END PGP SIGNATURE-----") + "-----END PGP SIGNATURE-----".length);
                        return Object(o.a)(t);
                    }
                    toObject() {
                        return t.from(this._tag, "utf8");
                    }
                    static sign(t, e, r) {
                        return u(function* () {
                            const n = t.withoutSignature() + "\n";
                            let { signature: i } = yield e.sign({ payload: n, secretKey: r });
                            const a = n + (i = Object(o.a)(i));
                            return c.from(a);
                        })();
                    }
                    static verify(t, e, r) {
                        return u(function* () {
                            const n = t.withoutSignature() + "\n",
                                i = t.signature();
                            return e.verify({ payload: n, publicKey: r, signature: i });
                        })();
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return i;
                });
                var n = r(0);
                class i {
                    static wrap({ type: e, object: r }) {
                        return t.concat([t.from(`${e} ${r.byteLength.toString()}\0`), t.from(r)]);
                    }
                    static unwrap(e) {
                        const r = e.indexOf(32),
                            i = e.indexOf(0),
                            o = e.slice(0, r).toString("utf8"),
                            a = e.slice(r + 1, i).toString("utf8"),
                            s = e.length - (i + 1);
                        if (parseInt(a) !== s) throw new n.b(n.a.InternalFail, { message: `Length mismatch: expected ${a} bytes but got ${s} instead.` });
                        return { type: o, object: t.from(e.slice(i + 1)) };
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            const n = (t, e) =>
                function (...r) {
                    return new (0, e.promiseModule)((n, i) => {
                        e.multiArgs
                            ? r.push((...t) => {
                                  e.errorFirst ? (t[0] ? i(t) : (t.shift(), n(t))) : n(t);
                              })
                            : e.errorFirst
                            ? r.push((t, e) => {
                                  t ? i(t) : n(e);
                              })
                            : r.push(n),
                            t.apply(this, r);
                    });
                };
            t.exports = (t, e) => {
                e = Object.assign({ exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise }, e);
                const r = typeof t;
                if (null === t || ("object" !== r && "function" !== r)) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === t ? "null" : r}\``);
                const i = (t) => {
                    const r = (e) => ("string" == typeof e ? t === e : e.test(t));
                    return e.include ? e.include.some(r) : !e.exclude.some(r);
                };
                let o;
                o =
                    "function" === r
                        ? function (...r) {
                              return e.excludeMain ? t(...r) : n(t, e).apply(this, r);
                          }
                        : Object.create(Object.getPrototypeOf(t));
                for (const r in t) {
                    const a = t[r];
                    o[r] = "function" == typeof a && i(r) ? n(a, e) : a;
                }
                return o;
            };
        },
        function (t, e, r) {
            "use strict";
            var n = {};
            (0, r(25).assign)(n, r(108), r(111), r(82)), (t.exports = n);
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            }),
                r.d(e, "b", function () {
                    return i;
                });
            const n = Symbol("GitWalkBeta1Symbol"),
                i = Symbol("GitWalkBeta2Symbol");
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(54);
            const i = 2 ** 32;
            function o(t, e, r, n) {
                if (void 0 !== t && void 0 !== e) return [t, e];
                void 0 === r && (r = n.valueOf());
                const i = Math.floor(r / 1e3);
                return [i, 1e6 * (r - 1e3 * i)];
            }
            function a(t) {
                const [e, r] = o(t.ctimeSeconds, t.ctimeNanoseconds, t.ctimeMs, t.ctime),
                    [a, s] = o(t.mtimeSeconds, t.mtimeNanoseconds, t.mtimeMs, t.mtime);
                return {
                    ctimeSeconds: e % i,
                    ctimeNanoseconds: r % i,
                    mtimeSeconds: a % i,
                    mtimeNanoseconds: s % i,
                    dev: t.dev % i,
                    ino: t.ino % i,
                    mode: Object(n.a)(t.mode % i),
                    uid: t.uid % i,
                    gid: t.gid % i,
                    size: t.size > -1 ? t.size % i : 0,
                };
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            });
            class n {
                constructor(t) {
                    (this.buffer = t), (this._start = 0);
                }
                eof() {
                    return this._start >= this.buffer.length;
                }
                tell() {
                    return this._start;
                }
                seek(t) {
                    this._start = t;
                }
                slice(t) {
                    const e = this.buffer.slice(this._start, this._start + t);
                    return (this._start += t), e;
                }
                toString(t, e) {
                    const r = this.buffer.toString(t, this._start, this._start + e);
                    return (this._start += e), r;
                }
                write(t, e, r) {
                    const n = this.buffer.write(t, this._start, e, r);
                    return (this._start += e), n;
                }
                readUInt8() {
                    const t = this.buffer.readUInt8(this._start);
                    return (this._start += 1), t;
                }
                writeUInt8(t) {
                    const e = this.buffer.writeUInt8(t, this._start);
                    return (this._start += 1), e;
                }
                readUInt16BE() {
                    const t = this.buffer.readUInt16BE(this._start);
                    return (this._start += 2), t;
                }
                writeUInt16BE(t) {
                    const e = this.buffer.writeUInt16BE(t, this._start);
                    return (this._start += 2), e;
                }
                readUInt32BE() {
                    const t = this.buffer.readUInt32BE(this._start);
                    return (this._start += 4), t;
                }
                writeUInt32BE(t) {
                    const e = this.buffer.writeUInt32BE(t, this._start);
                    return (this._start += 4), e;
                }
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return f;
                });
                var n = r(18),
                    i = r.n(n),
                    o = r(1),
                    a = r(16),
                    s = r(93),
                    u = r(12);
                function c(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function f(t) {
                    return l.apply(this, arguments);
                }
                function l() {
                    var e;
                    return (
                        (e = function* ({ fs: e, gitdir: r, type: n, object: c, format: f = "content", oid: l, dryRun: d = !1 }) {
                            if (("deflated" !== f && ("wrapped" !== f && (c = a.a.wrap({ type: n, object: c })), (l = yield Object(u.a)(c)), (c = t.from(i.a.deflate(c)))), !d)) {
                                const t = new o.a(e);
                                yield Object(s.a)({ fs: t, gitdir: r, object: c, format: "deflated", oid: l });
                            }
                            return l;
                        }),
                        (l = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, i) {
                                var o = e.apply(t, r);
                                function a(t) {
                                    c(o, n, i, a, s, "next", t);
                                }
                                function s(t) {
                                    c(o, n, i, a, s, "throw", t);
                                }
                                a(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                const e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
                return -1 === e ? "." : 0 === e ? "/" : t.slice(0, e);
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return s;
            });
            var n = r(1),
                i = r(67);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function a(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var a = t.apply(e, r);
                        function s(t) {
                            o(a, n, i, s, u, "next", t);
                        }
                        function u(t) {
                            o(a, n, i, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            class s {
                static get({ fs: t, gitdir: e }) {
                    return a(function* () {
                        const r = new n.a(t),
                            o = yield r.read(`${e}/config`, { encoding: "utf8" });
                        return i.a.from(o);
                    })();
                }
                static save({ fs: t, gitdir: e, config: r }) {
                    return a(function* () {
                        const i = new n.a(t);
                        yield i.write(`${e}/config`, r.toString(), { encoding: "utf8" });
                    })();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }
            (e.assign = function (t) {
                for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
                    var r = e.shift();
                    if (r) {
                        if ("object" != typeof r) throw new TypeError(r + "must be non-object");
                        for (var n in r) i(r, n) && (t[n] = r[n]);
                    }
                }
                return t;
            }),
                (e.shrinkBuf = function (t, e) {
                    return t.length === e ? t : t.subarray ? t.subarray(0, e) : ((t.length = e), t);
                });
            var o = {
                    arraySet: function (t, e, r, n, i) {
                        if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), i);
                        else for (var o = 0; o < n; o++) t[i + o] = e[r + o];
                    },
                    flattenChunks: function (t) {
                        var e, r, n, i, o, a;
                        for (n = 0, e = 0, r = t.length; e < r; e++) n += t[e].length;
                        for (a = new Uint8Array(n), i = 0, e = 0, r = t.length; e < r; e++) (o = t[e]), a.set(o, i), (i += o.length);
                        return a;
                    },
                },
                a = {
                    arraySet: function (t, e, r, n, i) {
                        for (var o = 0; o < n; o++) t[i + o] = e[r + o];
                    },
                    flattenChunks: function (t) {
                        return [].concat.apply([], t);
                    },
                };
            (e.setTyped = function (t) {
                t ? ((e.Buf8 = Uint8Array), (e.Buf16 = Uint16Array), (e.Buf32 = Int32Array), e.assign(e, o)) : ((e.Buf8 = Array), (e.Buf16 = Array), (e.Buf32 = Array), e.assign(e, a));
            }),
                e.setTyped(n);
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            });
            const n = { name: "isomorphic-git", version: "0.70.7", agent: "git/isomorphic-git@0.70.7" };
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                const e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
                return e > -1 && (t = t.slice(e + 1)), t;
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            var n = r(1),
                i = r(4),
                o = r(0),
                a = r(5),
                s = r(2),
                u = r(32),
                c = r(11);
            function f(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function l(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            f(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            f(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            class d {
                constructor({ fs: t, gitdir: e, ref: r }) {
                    const a = new n.a(t);
                    (this.fs = a),
                        (this.gitdir = e),
                        (this.mapPromise = l(function* () {
                            const t = new Map();
                            let n;
                            try {
                                n = yield i.a.resolve({ fs: a, gitdir: e, ref: r });
                            } catch (t) {
                                t.code === o.a.ResolveRefError && (n = "4b825dc642cb6eb9a060e54bf8d69288fbee4904");
                            }
                            const s = yield Object(u.a)({ fs: a, gitdir: e, oid: n });
                            return (s.type = "tree"), t.set(".", s), t;
                        })());
                    const s = this;
                    this.ConstructEntry = class {
                        constructor(t) {
                            Object.assign(this, t);
                        }
                        populateStat() {
                            var t = this;
                            return l(function* () {
                                t.exists && (yield s.populateStat(t));
                            })();
                        }
                        populateContent() {
                            var t = this;
                            return l(function* () {
                                t.exists && (yield s.populateContent(t));
                            })();
                        }
                        populateHash() {
                            var t = this;
                            return l(function* () {
                                t.exists && (yield s.populateHash(t));
                            })();
                        }
                    };
                }
                readdir(t) {
                    var e = this;
                    return l(function* () {
                        if (!t.exists) return [];
                        const r = t.fullpath,
                            { fs: n, gitdir: i } = e,
                            u = yield e.mapPromise,
                            f = u.get(r);
                        if (!f) throw new Error(`No obj for ${r}`);
                        const l = f.oid;
                        if (!l) throw new Error(`No oid for obj ${JSON.stringify(f)}`);
                        if ("tree" !== f.type) return null;
                        const { type: d, object: h } = yield Object(a.a)({ fs: n, gitdir: i, oid: l });
                        if (d !== f.type) throw new o.b(o.a.ObjectTypeAssertionFail, { oid: l, expected: f.type, type: d });
                        const p = c.a.from(h);
                        for (const t of p) u.set(Object(s.a)(r, t.path), t);
                        return p.entries().map((t) => ({ fullpath: Object(s.a)(r, t.path), basename: t.path, exists: !0 }));
                    })();
                }
                populateStat(t) {
                    var e = this;
                    return l(function* () {
                        const r = (yield e.mapPromise).get(t.fullpath);
                        if (!r) throw new Error(`ENOENT: no such file or directory, lstat '${t.fullpath}'`);
                        const { mode: n, type: i } = r;
                        Object.assign(t, { mode: n, type: i });
                    })();
                }
                populateContent(t) {
                    var e = this;
                    return l(function* () {
                        const r = yield e.mapPromise,
                            { fs: n, gitdir: i } = e,
                            o = r.get(t.fullpath);
                        if (!o) throw new Error(`No obj for ${t.fullpath}`);
                        const s = o.oid;
                        if (!s) throw new Error(`No oid for entry ${JSON.stringify(o)}`);
                        const { type: u, object: c } = yield Object(a.a)({ fs: n, gitdir: i, oid: s });
                        if ("tree" === u) throw new Error("EISDIR: illegal operation on a directory, read");
                        Object.assign(t, { content: c });
                    })();
                }
                populateHash(t) {
                    var e = this;
                    return l(function* () {
                        const r = (yield e.mapPromise).get(t.fullpath);
                        if (!r) throw new Error(`ENOENT: no such file or directory, open '${t.fullpath}'`);
                        const n = r.oid;
                        Object.assign(t, { oid: n });
                    })();
                }
            }
            var h = r(54);
            function p(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function g(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            p(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            p(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            class m {
                constructor({ fs: t, gitdir: e, ref: r }) {
                    const a = new n.a(t);
                    (this.fs = a),
                        (this.gitdir = e),
                        (this.mapPromise = g(function* () {
                            const t = new Map();
                            let n;
                            try {
                                n = yield i.a.resolve({ fs: a, gitdir: e, ref: r });
                            } catch (t) {
                                t.code === o.a.ResolveRefError && (n = "4b825dc642cb6eb9a060e54bf8d69288fbee4904");
                            }
                            const s = yield Object(u.a)({ fs: a, gitdir: e, oid: n });
                            return (s.type = "tree"), (s.mode = "40000"), t.set(".", s), t;
                        })());
                    const s = this;
                    this.ConstructEntry = class {
                        constructor(t) {
                            (this._fullpath = t), (this._type = !1), (this._mode = !1), (this._stat = !1), (this._content = !1), (this._oid = !1);
                        }
                        type() {
                            var t = this;
                            return g(function* () {
                                return s.type(t);
                            })();
                        }
                        mode() {
                            var t = this;
                            return g(function* () {
                                return s.mode(t);
                            })();
                        }
                        stat() {
                            var t = this;
                            return g(function* () {
                                return s.stat(t);
                            })();
                        }
                        content() {
                            var t = this;
                            return g(function* () {
                                return s.content(t);
                            })();
                        }
                        oid() {
                            var t = this;
                            return g(function* () {
                                return s.oid(t);
                            })();
                        }
                    };
                }
                readdir(t) {
                    var e = this;
                    return g(function* () {
                        const r = t._fullpath,
                            { fs: n, gitdir: i } = e,
                            u = yield e.mapPromise,
                            f = u.get(r);
                        if (!f) throw new Error(`No obj for ${r}`);
                        const l = f.oid;
                        if (!l) throw new Error(`No oid for obj ${JSON.stringify(f)}`);
                        if ("tree" !== f.type) return null;
                        const { type: d, object: h } = yield Object(a.a)({ fs: n, gitdir: i, oid: l });
                        if (d !== f.type) throw new o.b(o.a.ObjectTypeAssertionFail, { oid: l, expected: f.type, type: d });
                        const p = c.a.from(h);
                        for (const t of p) u.set(Object(s.a)(r, t.path), t);
                        return p.entries().map((t) => Object(s.a)(r, t.path));
                    })();
                }
                type(t) {
                    var e = this;
                    return g(function* () {
                        if (!1 === t._type) {
                            const r = yield e.mapPromise,
                                { type: n } = r.get(t._fullpath);
                            t._type = n;
                        }
                        return t._type;
                    })();
                }
                mode(t) {
                    var e = this;
                    return g(function* () {
                        if (!1 === t._mode) {
                            const r = yield e.mapPromise,
                                { mode: n } = r.get(t._fullpath);
                            t._mode = Object(h.a)(parseInt(n, 8));
                        }
                        return t._mode;
                    })();
                }
                stat(t) {
                    return g(function* () {})();
                }
                content(t) {
                    var e = this;
                    return g(function* () {
                        if (!1 === t._content) {
                            const r = yield e.mapPromise,
                                { fs: n, gitdir: i } = e,
                                o = r.get(t._fullpath).oid,
                                { type: s, object: u } = yield Object(a.a)({ fs: n, gitdir: i, oid: o });
                            t._content = "blob" !== s ? void 0 : u;
                        }
                        return t._content;
                    })();
                }
                oid(t) {
                    var e = this;
                    return g(function* () {
                        if (!1 === t._oid) {
                            const r = (yield e.mapPromise).get(t._fullpath);
                            t._oid = r.oid;
                        }
                        return t._oid;
                    })();
                }
            }
            var y = r(3),
                v = r(19);
            function w({ ref: t = "HEAD", core: e = "default", dir: r, gitdir: i, fs: o }) {
                const a = Object.create(null);
                return (
                    Object.defineProperty(a, v.a, {
                        value: function () {
                            (i = i || Object(s.a)(r, ".git")), (o = y.a.get(e).get("fs"));
                            const a = new n.a(o);
                            return new d({ fs: a, gitdir: i, ref: t });
                        },
                    }),
                    Object.defineProperty(a, v.b, {
                        value: function ({ fs: e, gitdir: r }) {
                            return new m({ fs: e, gitdir: r, ref: t });
                        },
                    }),
                    Object.freeze(a),
                    a
                );
            }
            r.d(e, "a", function () {
                return w;
            });
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return o;
                });
                var n = r(30);
                function i(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function o(t) {
                    return a.apply(this, arguments);
                }
                function a() {
                    var e;
                    return (
                        (e = function* (e) {
                            const r = [];
                            return yield Object(n.a)(e, (e) => r.push(t.from(e))), t.concat(r);
                        }),
                        (a = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, o) {
                                var a = e.apply(t, r);
                                function s(t) {
                                    i(a, n, o, s, u, "next", t);
                                }
                                function u(t) {
                                    i(a, n, o, s, u, "throw", t);
                                }
                                s(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(58);
            function i(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function o(t, e) {
                return a.apply(this, arguments);
            }
            function a() {
                var t;
                return (
                    (t = function* (t, e) {
                        const r = Object(n.a)(t);
                        for (;;) {
                            const { value: t, done: n } = yield r.next();
                            if ((t && (yield e(t)), n)) break;
                        }
                        r.return && r.return();
                    }),
                    (a = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                i(a, n, o, s, u, "next", t);
                            }
                            function u(t) {
                                i(a, n, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return f;
            });
            var n = r(43),
                i = r.n(n),
                o = r(1),
                a = r(2);
            function s(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function u(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            s(o, n, i, a, u, "next", t);
                        }
                        function u(t) {
                            s(o, n, i, a, u, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            let c = null;
            class f {
                static read({ fs: t, gitdir: e }) {
                    return u(function* () {
                        const r = new o.a(t);
                        null === c && (c = new i.a());
                        const n = Object(a.a)(e, "shallow"),
                            s = new Set();
                        return (
                            yield c.acquire(
                                n,
                                u(function* () {
                                    const t = yield r.read(n, { encoding: "utf8" });
                                    return null === t
                                        ? s
                                        : "" === t.trim()
                                        ? s
                                        : void t
                                              .trim()
                                              .split("\n")
                                              .map((t) => s.add(t));
                                })
                            ),
                            s
                        );
                    })();
                }
                static write({ fs: t, gitdir: e, oids: r }) {
                    return u(function* () {
                        const n = new o.a(t);
                        null === c && (c = new i.a());
                        const s = Object(a.a)(e, "shallow");
                        if (r.size > 0) {
                            const t = [...r].join("\n") + "\n";
                            yield c.acquire(
                                s,
                                u(function* () {
                                    yield n.write(s, t, { encoding: "utf8" });
                                })
                            );
                        } else
                            yield c.acquire(
                                s,
                                u(function* () {
                                    yield n.rm(s);
                                })
                            );
                    })();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return c;
            });
            var n = r(15),
                i = r(7),
                o = r(0),
                a = r(11),
                s = r(5);
            function u(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function c(t) {
                return f.apply(this, arguments);
            }
            function f() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r }) {
                        if ("4b825dc642cb6eb9a060e54bf8d69288fbee4904" === r) return { tree: a.a.from([]), oid: r };
                        const { type: u, object: f } = yield Object(s.a)({ fs: t, gitdir: e, oid: r });
                        if ("tag" === u) return c({ fs: t, gitdir: e, oid: (r = n.a.from(f).parse().object) });
                        if ("commit" === u) return c({ fs: t, gitdir: e, oid: (r = i.a.from(f).parse().tree) });
                        if ("tree" !== u) throw new o.b(o.a.ResolveTreeError, { oid: r });
                        return { tree: a.a.from(f), oid: r };
                    }),
                    (f = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                u(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                u(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            var n = r(1),
                i = r(73),
                o = r(60),
                a = r(2),
                s = r(3),
                u = r(19),
                c = r(74);
            function* f(t) {
                const e = new c.a();
                let r;
                const n = [],
                    i = t.length;
                for (let r = 0; r < i; r++) (n[r] = t[r].next().value), void 0 !== n[r] && e.consider(n[r]);
                if (null !== e.value)
                    for (;;) {
                        const o = [];
                        (r = e.value), e.reset();
                        for (let a = 0; a < i; a++) void 0 !== n[a] && n[a] === r ? ((o[a] = n[a]), (n[a] = t[a].next().value)) : (o[a] = null), void 0 !== n[a] && e.consider(n[a]);
                        if ((yield o, null === e.value)) return;
                    }
            }
            function l(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function d(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            l(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            l(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function h(t) {
                return p.apply(this, arguments);
            }
            function p() {
                return (p = d(function* ({
                    core: t = "default",
                    dir: e,
                    gitdir: r = Object(a.a)(e, ".git"),
                    fs: c = s.a.get(t).get("fs"),
                    trees: l,
                    map: h = (function () {
                        var t = d(function* (t, e) {
                            return e;
                        });
                        return function (e, r) {
                            return t.apply(this, arguments);
                        };
                    })(),
                    reduce: p = (function () {
                        var t = d(function* (t, e) {
                            const r = Object(o.a)(e);
                            return void 0 !== t && r.unshift(t), r;
                        });
                        return function (e, r) {
                            return t.apply(this, arguments);
                        };
                    })(),
                    iterate: g = (t, e) => Promise.all([...e].map(t)),
                }) {
                    try {
                        const t = new n.a(c),
                            o = l.map((n) => n[u.b]({ fs: t, dir: e, gitdir: r })),
                            a = new Array(o.length).fill("."),
                            s = Object(i.a)(0, o.length),
                            m = (function () {
                                var t = d(function* (t) {
                                    s.map((e) => {
                                        t[e] = t[e] && new o[e].ConstructEntry(t[e]);
                                    });
                                    const e = (yield Promise.all(s.map((e) => (t[e] ? o[e].readdir(t[e]) : [])))).map((t) => (null === t ? [] : t)).map((t) => t[Symbol.iterator]());
                                    return { entries: t, children: f(e) };
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                            y = (function () {
                                var t = d(function* (t) {
                                    const { entries: e, children: r } = yield m(t),
                                        n = e.find((t) => t && t._fullpath)._fullpath,
                                        i = yield h(n, e);
                                    if (null !== i) {
                                        let t = yield g(y, r);
                                        return (t = t.filter((t) => void 0 !== t)), p(i, t);
                                    }
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })();
                        return y(a);
                    } catch (t) {
                        throw ((t.caller = "git.walk"), t);
                    }
                })).apply(this, arguments);
            }
            r.d(e, "a", function () {
                return h;
            });
        },
        function (t, e, r) {
            "use strict";
            function n(t, e) {
                return -(t < e) || +(t > e);
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            function n(t, e) {
                const r = e.toString(16);
                return "0".repeat(t - r.length) + r;
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                const [, e, r, n, o] = t.match(/^(.*) <(.*)> (.*) (.*)$/);
                return { name: e, email: r, timestamp: Number(n), timezoneOffset: i(o) };
            }
            function i(t) {
                let [, e, r, n] = t.match(/(\+|-)(\d\d)(\d\d)/);
                return (n = ("+" === e ? 1 : -1) * (60 * Number(r) + Number(n))), 0 === (i = n) ? i : -i;
                var i;
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                return (
                    t
                        .trim()
                        .split("\n")
                        .map((t) => " " + t)
                        .join("\n") + "\n"
                );
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            function n(t, e, r) {
                return (e = e instanceof RegExp ? e : new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")), t.replace(e, r);
            }
            var i = {
                clean: function (t) {
                    if ("string" != typeof t) throw new Error("Expected a string, received: " + t);
                    return (
                        (t = n(t, "./", "/")),
                        (t = n(t, "..", ".")),
                        (t = n(t, " ", "-")),
                        (t = n(t, /^[~^:?*\\\-]/g, "")),
                        (t = n(t, /[~^:?*\\]/g, "-")),
                        (t = n(t, /[~^:?*\\\-]$/g, "")),
                        (t = n(t, "@{", "-")),
                        (t = n(t, /\.$/g, "")),
                        (t = n(t, /\/$/g, "")),
                        (t = n(t, /\.lock$/g, ""))
                    );
                },
            };
            t.exports = i;
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            });
            var n = r(34);
            function i(t, e) {
                return Object(n.a)(t.path, e.path);
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return v;
                });
                var n = r(96),
                    i = r.n(n),
                    o = r(97),
                    a = r.n(o),
                    s = r(6),
                    u = r(18),
                    c = r.n(u),
                    f = r(0),
                    l = r(21),
                    d = r(98),
                    h = r(8),
                    p = r(12),
                    g = r(16);
                function m(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function y(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                m(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                m(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                class v {
                    constructor(t) {
                        Object.assign(this, t), (this.offsetCache = {});
                    }
                    static fromIdx({ idx: t, getExternalRefDelta: e }) {
                        return y(function* () {
                            s.a("fromIdx");
                            const r = new l.a(t);
                            if ("ff744f63" !== r.slice(4).toString("hex")) return;
                            const n = r.readUInt32BE();
                            if (2 !== n) throw new f.b(f.a.InternalFail, { message: `Unable to read version ${n} packfile IDX. (Only version 2 supported)` });
                            if (t.byteLength > 2147483648) throw new f.b(f.a.InternalFail, { message: "To keep implementation simple, I haven't implemented the layer 5 feature needed to support packfiles > 2GB in size." });
                            r.seek(r.tell() + 1020);
                            const i = r.readUInt32BE();
                            s.a("hashes");
                            const o = [];
                            for (let t = 0; t < i; t++) {
                                const e = r.slice(20).toString("hex");
                                o[t] = e;
                            }
                            Object(h.a)(`hashes ${s.b("hashes").duration}`), r.seek(r.tell() + 4 * i), s.a("offsets");
                            const a = new Map();
                            for (let t = 0; t < i; t++) a.set(o[t], r.readUInt32BE());
                            Object(h.a)(`offsets ${s.b("offsets").duration}`);
                            const u = r.slice(20).toString("hex");
                            return Object(h.a)(`fromIdx ${s.b("fromIdx").duration}`), new v({ hashes: o, crcs: {}, offsets: a, packfileSha: u, getExternalRefDelta: e });
                        })();
                    }
                    static fromPack({ pack: t, getExternalRefDelta: e, emitter: r, emitterPrefix: n }) {
                        return y(function* () {
                            const o = { 1: "commit", 2: "tree", 3: "blob", 4: "tag", 6: "ofs-delta", 7: "ref-delta" },
                                a = {},
                                u = t.slice(-20).toString("hex"),
                                c = [],
                                f = {},
                                l = new Map();
                            let m = null,
                                y = null;
                            const w = { hash: 0, readSlice: 0, offsets: 0, crcs: 0, sort: 0 };
                            let b = { commit: 0, tree: 0, blob: 0, tag: 0, "ofs-delta": 0, "ref-delta": 0 },
                                _ = 0;
                            Object(h.a)("Indexing objects"),
                                Object(h.a)("percent\tmilliseconds\tbytesProcessed\tcommits\ttrees\tblobs\ttags\tofs-deltas\tref-deltas"),
                                s.a("total"),
                                s.a("offsets"),
                                s.a("percent"),
                                yield Object(d.a)([t], ({ data: t, type: e, reference: i, offset: u, num: c }) => {
                                    null === m && (m = c);
                                    const f = Math.floor((100 * (m - c)) / m);
                                    f !== y &&
                                        (r && r.emit(`${n}progress`, { phase: "Receiving objects", loaded: m - c, total: m, lengthComputable: !0 }),
                                        Object(h.a)(`${f}%\t${Math.floor(s.b("percent").duration)}\t${_}\t${b.commit}\t${b.tree}\t${b.blob}\t${b.tag}\t${b["ofs-delta"]}\t${b["ref-delta"]}`),
                                        (b = { commit: 0, tree: 0, blob: 0, tag: 0, "ofs-delta": 0, "ref-delta": 0 }),
                                        (_ = 0),
                                        s.a("percent")),
                                        (y = f),
                                        b[(e = o[e])]++,
                                        (_ += t.byteLength),
                                        ["commit", "tree", "blob", "tag"].includes(e) ? (a[u] = { type: e, offset: u }) : "ofs-delta" === e ? (a[u] = { type: e, offset: u }) : "ref-delta" === e && (a[u] = { type: e, offset: u });
                                }),
                                (w.offsets = Math.floor(s.b("offsets").duration)),
                                Object(h.a)("Computing CRCs"),
                                s.a("crcs");
                            const x = Object.keys(a).map(Number);
                            for (const [e, r] of x.entries()) {
                                const n = e + 1 === x.length ? t.byteLength - 20 : x[e + 1],
                                    o = a[r],
                                    s = i.a.buf(t.slice(r, n)) >>> 0;
                                (o.end = n), (o.crc = s);
                            }
                            w.crcs = Math.floor(s.b("crcs").duration);
                            const E = new v({ pack: Promise.resolve(t), packfileSha: u, crcs: f, hashes: c, offsets: l, getExternalRefDelta: e });
                            Object(h.a)("Resolving deltas"), Object(h.a)("percent2\tmilliseconds2\tcallsToReadSlice\tcallsToGetExternal"), s.a("percent"), (y = null);
                            let k = 0,
                                O = 0,
                                j = 0;
                            const P = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            for (let t in a) {
                                t = Number(t);
                                const e = Math.floor((100 * k++) / m);
                                e !== y &&
                                    (Object(h.a)(`${e}%\t${Math.floor(s.b("percent").duration)}\t${O}\t${j}`),
                                    r && r.emit(`${n}progress`, { phase: "Resolving deltas", loaded: k, total: m, lengthComputable: !0 }),
                                    s.a("percent"),
                                    (O = 0),
                                    (j = 0)),
                                    (y = e);
                                const i = a[t];
                                if (!i.oid)
                                    try {
                                        (E.readDepth = 0), (E.externalReadDepth = 0), s.a("readSlice");
                                        const { type: e, object: r } = yield E.readSlice({ start: t }),
                                            n = s.b("readSlice").duration;
                                        (w.readSlice += n), (O += E.readDepth), (j += E.externalReadDepth), (P[E.readDepth] += n), (S[E.readDepth] += 1), s.a("hash");
                                        const o = yield Object(p.a)(g.a.wrap({ type: e, object: r }));
                                        (w.hash += s.b("hash").duration), (i.oid = o), c.push(o), l.set(o, t), (f[o] = i.crc);
                                    } catch (t) {
                                        Object(h.a)("ERROR", t);
                                        continue;
                                    }
                            }
                            s.a("sort"), c.sort(), (w.sort = Math.floor(s.b("sort").duration));
                            const R = s.b("total").duration;
                            return (
                                (w.hash = Math.floor(w.hash)),
                                (w.readSlice = Math.floor(w.readSlice)),
                                (w.misc = Math.floor(Object.values(w).reduce((t, e) => t - e, R))),
                                Object(h.a)(Object.keys(w).join("\t")),
                                Object(h.a)(Object.values(w).join("\t")),
                                Object(h.a)("by depth:"),
                                Object(h.a)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].join("\t")),
                                Object(h.a)(S.slice(0, 12).join("\t")),
                                Object(h.a)(P.map(Math.floor).slice(0, 12).join("\t")),
                                E
                            );
                        })();
                    }
                    toBuffer() {
                        var e = this;
                        return y(function* () {
                            const r = [],
                                n = (e, n) => {
                                    r.push(t.from(e, n));
                                };
                            n("ff744f63", "hex"), n("00000002", "hex");
                            const i = new l.a(t.alloc(1024));
                            for (let t = 0; t < 256; t++) {
                                let r = 0;
                                for (const n of e.hashes) parseInt(n.slice(0, 2), 16) <= t && r++;
                                i.writeUInt32BE(r);
                            }
                            r.push(i.buffer);
                            for (const t of e.hashes) n(t, "hex");
                            const o = new l.a(t.alloc(4 * e.hashes.length));
                            for (const t of e.hashes) o.writeUInt32BE(e.crcs[t]);
                            r.push(o.buffer);
                            const a = new l.a(t.alloc(4 * e.hashes.length));
                            for (const t of e.hashes) a.writeUInt32BE(e.offsets.get(t));
                            r.push(a.buffer), n(e.packfileSha, "hex");
                            const s = t.concat(r),
                                u = yield Object(p.a)(s),
                                c = t.alloc(20);
                            return c.write(u, "hex"), t.concat([s, c]);
                        })();
                    }
                    load({ pack: t }) {
                        var e = this;
                        return y(function* () {
                            e.pack = t;
                        })();
                    }
                    unload() {
                        var t = this;
                        return y(function* () {
                            t.pack = null;
                        })();
                    }
                    read({ oid: t }) {
                        var e = this;
                        return y(function* () {
                            if (!e.offsets.get(t)) {
                                if (e.getExternalRefDelta) return e.externalReadDepth++, e.getExternalRefDelta(t);
                                throw new f.b(f.a.InternalFail, { message: `Could not read object ${t} from packfile` });
                            }
                            const r = e.offsets.get(t);
                            return e.readSlice({ start: r });
                        })();
                    }
                    readSlice({ start: e }) {
                        var r = this;
                        return y(function* () {
                            if (r.offsetCache[e]) return Object.assign({}, r.offsetCache[e]);
                            r.readDepth++;
                            if (!r.pack) throw new f.b(f.a.InternalFail, { message: "Tried to read from a GitPackIndex with no packfile loaded into memory" });
                            const n = (yield r.pack).slice(e),
                                i = new l.a(n),
                                o = i.readUInt8(),
                                s = 112 & o;
                            let u = { 16: "commit", 32: "tree", 48: "blob", 64: "tag", 96: "ofs_delta", 112: "ref_delta" }[s];
                            if (void 0 === u) throw new f.b(f.a.InternalFail, { message: "Unrecognized type: 0b" + s.toString(2) });
                            const d = 15 & o;
                            let h = d;
                            128 & o &&
                                (h = (function (t, e) {
                                    let r = e,
                                        n = 4,
                                        i = null;
                                    do {
                                        (r |= (127 & (i = t.readUInt8())) << n), (n += 7);
                                    } while (128 & i);
                                    return r;
                                })(i, d));
                            let p = null,
                                g = null;
                            if ("ofs_delta" === u) {
                                const t = (function (t) {
                                        const e = [];
                                        let r = 0,
                                            n = 0;
                                        do {
                                            const i = 127 & (r = t.readUInt8());
                                            e.push(i), (n = 128 & r);
                                        } while (n);
                                        return e.reduce((t, e) => ((t + 1) << 7) | e, -1);
                                    })(i),
                                    n = e - t;
                                ({ object: p, type: u } = yield r.readSlice({ start: n }));
                            }
                            if ("ref_delta" === u) {
                                const t = i.slice(20).toString("hex");
                                ({ object: p, type: u } = yield r.read({ oid: t }));
                            }
                            const m = n.slice(i.tell());
                            if ((g = t.from(c.a.inflate(m))).byteLength !== h) throw new f.b(f.a.InternalFail, { message: `Packfile told us object would have length ${h} but it had length ${g.byteLength}` });
                            return p && (g = t.from(a()(g, p))), r.readDepth > 3 && (r.offsetCache[e] = { type: u, object: g }), { type: u, format: "content", object: g };
                        })();
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(8),
                i = r(20);
            function o(t, e) {
                const r = Object(i.a)(t),
                    o = Object(i.a)(e),
                    s = r.mode !== o.mode || r.mtimeSeconds !== o.mtimeSeconds || r.ctimeSeconds !== o.ctimeSeconds || r.uid !== o.uid || r.gid !== o.gid || r.ino !== o.ino || r.size !== o.size;
                return s && n.a.enabled && console.table([a(r), a(o)]), s;
            }
            function a(t) {
                return { mode: t.mode, mtimeSeconds: t.mtimeSeconds, ctimeSeconds: t.ctimeSeconds, uid: t.uid, gid: t.gid, ino: t.ino, size: t.size };
            }
        },
        function (t, e, r) {
            "use strict";
            var n = r(0),
                i = r(46),
                o = r(45),
                a = r(29);
            function s(t) {
                let e = t.match(/^https?:\/\/([^\/]+)@/);
                if (null == e) return null;
                e = e[1];
                const [r, n] = e.split(":");
                return { url: (t = t.replace(`${e}@`, "")), username: r, password: n };
            }
            var u = r(61),
                c = r(26),
                f = r(3),
                l = r(62);
            function d(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function h(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            d(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            d(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            r.d(e, "a", function () {
                return g;
            });
            const p = (t, e) => (t.endsWith("?") ? `${t}${e}` : `${t}/${e.replace(/^https?:\/\//, "")}`);
            class g {
                static capabilities() {
                    return h(function* () {
                        return ["discover", "connect"];
                    })();
                }
                static discover({ core: t, corsProxy: e, service: r, url: d, noGitSuffix: g, auth: m, headers: y }) {
                    return h(function* () {
                        const h = d;
                        d.endsWith(".git") || g || (d = d += ".git");
                        const v = s(d);
                        v && ((d = v.url), m.oauth2format || ((m.username = m.username || v.username), (m.password = m.password || v.password))), e && (d = p(e, d));
                        const w = f.a.get(t).get("http") || u.a;
                        ("undefined" == typeof window || e) && (y["user-agent"] = y["user-agent"] || c.a.agent);
                        const b = Object(o.a)(m, !!v);
                        b && (y.Authorization = Object(i.a)(b));
                        let _ = yield w({ core: t, method: "GET", url: `${d}/info/refs?service=${r}`, headers: y });
                        if (401 === _.statusCode && f.a.get(t).has("credentialManager")) {
                            const e = f.a.get(t).get("credentialManager");
                            m = yield e.fill({ url: h });
                            const n = Object(o.a)(m);
                            n && (y.Authorization = Object(i.a)(n)),
                                401 === (_ = yield w({ core: t, method: "GET", url: `${d}/info/refs?service=${r}`, headers: y })).statusCode
                                    ? yield e.rejected({ url: h, auth: m })
                                    : 200 === _.statusCode && (yield e.approved({ url: h, auth: m }));
                        }
                        if (200 !== _.statusCode) throw new n.b(n.a.HTTPError, { statusCode: _.statusCode, statusMessage: _.statusMessage });
                        if (_.headers["content-type"] === `application/x-${r}-advertisement`) {
                            const t = yield Object(l.a)(_.body, { service: r });
                            return (t.auth = m), t;
                        }
                        {
                            const t = yield Object(a.a)(_.body),
                                e = t.toString("utf8"),
                                i = e.length < 256 ? e : e.slice(0, 256) + "...";
                            try {
                                const o = yield Object(l.a)([t], { service: r });
                                return (o.auth = m), o;
                            } catch (t) {
                                throw new n.b(n.a.RemoteDoesNotSupportSmartHTTP, { preview: i, response: e });
                            }
                        }
                    })();
                }
                static connect({ core: t, emitter: e, emitterPrefix: r, corsProxy: a, service: l, url: d, noGitSuffix: g, auth: m, body: y, headers: v }) {
                    return h(function* () {
                        d.endsWith(".git") || g || (d = d += ".git");
                        const h = s(d);
                        h && ((d = h.url), (m.username = m.username || h.username), (m.password = m.password || h.password)), a && (d = p(a, d)), (v["content-type"] = `application/x-${l}-request`), (v.accept = `application/x-${l}-result`);
                        const w = f.a.get(t).get("http") || u.a;
                        ("undefined" == typeof window || a) && (v["user-agent"] = v["user-agent"] || c.a.agent), (m = Object(o.a)(m, !!h)) && (v.Authorization = Object(i.a)(m));
                        const b = yield w({ core: t, emitter: e, emitterPrefix: r, method: "POST", url: `${d}/${l}`, body: y, headers: v });
                        if (200 !== b.statusCode) throw new n.b(n.a.HTTPError, { statusCode: b.statusCode, statusMessage: b.statusMessage });
                        return b;
                    })();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            t.exports = r(105);
        },
        function (t, e, r) {
            "use strict";
            function n({ name: t, email: e, timestamp: r, timezoneOffset: n }) {
                return `${t} <${e}> ${r} ${(n = (function (t) {
                    const e = (function (t) {
                        return Math.sign(t) || (Object.is(t, -0) ? -1 : 1);
                    })(((r = t), 0 === r ? r : -r));
                    var r;
                    t = Math.abs(t);
                    const n = Math.floor(t / 60);
                    t -= 60 * n;
                    let i = String(n),
                        o = String(t);
                    i.length < 2 && (i = "0" + i);
                    o.length < 2 && (o = "0" + o);
                    return (-1 === e ? "-" : "+") + i + o;
                })(n))}`;
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(0),
                i = r(51);
            function o({ username: t, password: e, token: r, oauth2format: o } = {}, a = !1) {
                switch ([!!t, !!e, !!r, !!o].map(Number).join("")) {
                    case "0000":
                        return null;
                    case "1000":
                        if (a) return { username: t, password: "" };
                        throw new n.b(n.a.MissingPasswordTokenError);
                    case "0100":
                        throw new n.b(n.a.MissingUsernameError);
                    case "1100":
                        return { username: t, password: e };
                    case "0010":
                        return { username: r, password: "" };
                    case "1010":
                        return { username: t, password: r };
                    case "0110":
                        throw new n.b(n.a.MixPasswordTokenError);
                    case "1110":
                        throw new n.b(n.a.MixUsernamePasswordTokenError);
                    case "0001":
                        throw new n.b(n.a.MissingTokenError);
                    case "1001":
                        throw new n.b(n.a.MixUsernameOauth2formatMissingTokenError);
                    case "0101":
                        throw new n.b(n.a.MixPasswordOauth2formatMissingTokenError);
                    case "1101":
                        throw new n.b(n.a.MixUsernamePasswordOauth2formatMissingTokenError);
                    case "0011":
                        return Object(i.a)(o, r);
                    case "1011":
                        throw new n.b(n.a.MixUsernameOauth2formatTokenError);
                    case "0111":
                        throw new n.b(n.a.MixPasswordOauth2formatTokenError);
                    case "1111":
                        throw new n.b(n.a.MixUsernamePasswordOauth2formatTokenError);
                }
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                function n({ username: e, password: r }) {
                    return `Basic ${t.from(`${e}:${r}`).toString("base64")}`;
                }
                r.d(e, "a", function () {
                    return n;
                });
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            function n(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            r.d(e, "a", function () {
                return i;
            });
            class i {
                constructor() {
                    this._queue = [];
                }
                write(t) {
                    if (this._ended) throw Error("You cannot write to a FIFO that has already been ended!");
                    if (this._waiting) {
                        const e = this._waiting;
                        (this._waiting = null), e({ value: t });
                    } else this._queue.push(t);
                }
                end() {
                    if (((this._ended = !0), this._waiting)) {
                        const t = this._waiting;
                        (this._waiting = null), t({ done: !0 });
                    }
                }
                destroy(t) {
                    (this._ended = !0), (this.error = t);
                }
                next() {
                    var t,
                        e = this;
                    return ((t = function* () {
                        if (e._queue.length > 0) return { value: e._queue.shift() };
                        if (e._ended) return { done: !0 };
                        if (e._waiting) throw Error("You cannot call read until the previous call to read has returned!");
                        return new Promise((t) => {
                            e._waiting = t;
                        });
                    }),
                    function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (i, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                n(a, i, o, s, u, "next", t);
                            }
                            function u(t) {
                                n(a, i, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    })();
                }
            }
        },
        function (t, e) {
            var r,
                n,
                i = (t.exports = {});
            function o() {
                throw new Error("setTimeout has not been defined");
            }
            function a() {
                throw new Error("clearTimeout has not been defined");
            }
            function s(t) {
                if (r === setTimeout) return setTimeout(t, 0);
                if ((r === o || !r) && setTimeout) return (r = setTimeout), setTimeout(t, 0);
                try {
                    return r(t, 0);
                } catch (e) {
                    try {
                        return r.call(null, t, 0);
                    } catch (e) {
                        return r.call(this, t, 0);
                    }
                }
            }
            !(function () {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : o;
                } catch (t) {
                    r = o;
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (t) {
                    n = a;
                }
            })();
            var u,
                c = [],
                f = !1,
                l = -1;
            function d() {
                f && u && ((f = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && h());
            }
            function h() {
                if (!f) {
                    var t = s(d);
                    f = !0;
                    for (var e = c.length; e; ) {
                        for (u = c, c = []; ++l < e; ) u && u[l].run();
                        (l = -1), (e = c.length);
                    }
                    (u = null),
                        (f = !1),
                        (function (t) {
                            if (n === clearTimeout) return clearTimeout(t);
                            if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(t);
                            try {
                                n(t);
                            } catch (e) {
                                try {
                                    return n.call(null, t);
                                } catch (e) {
                                    return n.call(this, t);
                                }
                            }
                        })(t);
                }
            }
            function p(t, e) {
                (this.fun = t), (this.array = e);
            }
            function g() {}
            (i.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                c.push(new p(t, e)), 1 !== c.length || f || s(h);
            }),
                (p.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = g),
                (i.addListener = g),
                (i.once = g),
                (i.off = g),
                (i.removeListener = g),
                (i.removeAllListeners = g),
                (i.emit = g),
                (i.prependListener = g),
                (i.prependOnceListener = g),
                (i.listeners = function (t) {
                    return [];
                }),
                (i.binding = function (t) {
                    throw new Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                    return "/";
                }),
                (i.chdir = function (t) {
                    throw new Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                    return 0;
                });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return f;
            });
            var n = r(92),
                i = r.n(n),
                o = r(1),
                a = r(27),
                s = r(23),
                u = r(2);
            function c(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            class f {
                static isIgnored({ fs: t, dir: e, gitdir: r = Object(u.a)(e, ".git"), filepath: n }) {
                    return ((f = function* () {
                        const r = new o.a(t);
                        if (".git" === Object(a.a)(n)) return !0;
                        if ("." === n) return !1;
                        const c = [{ gitignore: Object(u.a)(e, ".gitignore"), filepath: n }],
                            f = n.split("/");
                        for (let t = 1; t < f.length; t++) {
                            const r = f.slice(0, t).join("/"),
                                n = f.slice(t).join("/");
                            c.push({ gitignore: Object(u.a)(e, r, ".gitignore"), filepath: n });
                        }
                        let l = !1;
                        for (const t of c) {
                            let e;
                            try {
                                e = yield r.read(t.gitignore, "utf8");
                            } catch (t) {
                                if ("NOENT" === t.code) continue;
                            }
                            const n = i()().add(e),
                                o = Object(s.a)(t.filepath);
                            if ("." !== o && n.ignores(o)) return !0;
                            l = l ? !n.test(t.filepath).unignored : n.test(t.filepath).ignored;
                        }
                        return l;
                    }),
                    function () {
                        var t = this,
                            e = arguments;
                        return new Promise(function (r, n) {
                            var i = f.apply(t, e);
                            function o(t) {
                                c(i, r, n, o, a, "next", t);
                            }
                            function a(t) {
                                c(i, r, n, o, a, "throw", t);
                            }
                            o(void 0);
                        });
                    })();
                    var f;
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(27),
                i = r(23);
            function o(t) {
                const e = new Map(),
                    r = function (t) {
                        if (!e.has(t)) {
                            const o = { type: "tree", fullpath: t, basename: Object(n.a)(t), metadata: {}, children: [] };
                            e.set(t, o), (o.parent = r(Object(i.a)(t))), o.parent && o.parent !== o && o.parent.children.push(o);
                        }
                        return e.get(t);
                    },
                    o = function (t, o) {
                        if (!e.has(t)) {
                            const a = { type: "blob", fullpath: t, basename: Object(n.a)(t), metadata: o, parent: r(Object(i.a)(t)), children: [] };
                            a.parent && a.parent.children.push(a), e.set(t, a);
                        }
                        return e.get(t);
                    };
                r(".");
                for (const e of t) o(e.path, e);
                return e;
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            });
            var n = r(0);
            function i(t, e) {
                switch (t) {
                    case "github":
                        return { username: e, password: "x-oauth-basic" };
                    case "githubapp":
                        return { username: "x-access-token", password: e };
                    case "bitbucket":
                        return { username: "x-token-auth", password: e };
                    case "gitlab":
                        return { username: "oauth2", password: e };
                    default:
                        throw new n.b(n.a.UnknownOauth2Format, { company: t });
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(47),
                i = r(9);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            class a {
                static demux(t) {
                    const e = i.a.streamReader(t),
                        r = new n.a(),
                        a = new n.a(),
                        s = new n.a(),
                        u = (function () {
                            var t,
                                n =
                                    ((t = function* () {
                                        const t = yield e();
                                        if (null === t) return u();
                                        if (!0 === t) return r.end(), s.end(), void a.end();
                                        switch (t[0]) {
                                            case 1:
                                                a.write(t.slice(1));
                                                break;
                                            case 2:
                                                s.write(t.slice(1));
                                                break;
                                            case 3:
                                                const e = t.slice(1);
                                                return s.write(e), void a.destroy(new Error(e.toString("utf8")));
                                            default:
                                                r.write(t.slice(0));
                                        }
                                        u();
                                    }),
                                    function () {
                                        var e = this,
                                            r = arguments;
                                        return new Promise(function (n, i) {
                                            var a = t.apply(e, r);
                                            function s(t) {
                                                o(a, n, i, s, u, "next", t);
                                            }
                                            function u(t) {
                                                o(a, n, i, s, u, "throw", t);
                                            }
                                            s(void 0);
                                        });
                                    });
                            return function () {
                                return n.apply(this, arguments);
                            };
                        })();
                    return u(), { packetlines: r, packfile: a, progress: s };
                }
            }
        },
        function (t, e, r) {
            var n = r(106),
                i = r(107),
                o = r(77).Buffer,
                a = [1518500249, 1859775393, -1894007588, -899497514],
                s = new Array(80);
            function u() {
                this.init(), (this._w = s), i.call(this, 64, 56);
            }
            function c(t) {
                return (t << 5) | (t >>> 27);
            }
            function f(t) {
                return (t << 30) | (t >>> 2);
            }
            function l(t, e, r, n) {
                return 0 === t ? (e & r) | (~e & n) : 2 === t ? (e & r) | (e & n) | (r & n) : e ^ r ^ n;
            }
            n(u, i),
                (u.prototype.init = function () {
                    return (this._a = 1732584193), (this._b = 4023233417), (this._c = 2562383102), (this._d = 271733878), (this._e = 3285377520), this;
                }),
                (u.prototype._update = function (t) {
                    for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, d = 0; d < 16; ++d) r[d] = t.readInt32BE(4 * d);
                    for (; d < 80; ++d) r[d] = ((e = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]) << 1) | (e >>> 31);
                    for (var h = 0; h < 80; ++h) {
                        var p = ~~(h / 20),
                            g = (c(n) + l(p, i, o, s) + u + r[h] + a[p]) | 0;
                        (u = s), (s = o), (o = f(i)), (i = n), (n = g);
                    }
                    (this._a = (n + this._a) | 0), (this._b = (i + this._b) | 0), (this._c = (o + this._c) | 0), (this._d = (s + this._d) | 0), (this._e = (u + this._e) | 0);
                }),
                (u.prototype._hash = function () {
                    var t = o.allocUnsafe(20);
                    return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t;
                }),
                (t.exports = u);
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                let e = t > 0 ? t >> 12 : 0;
                4 !== e && 8 !== e && 10 !== e && 14 !== e && (e = 8);
                let r = 511 & t;
                return (r = 73 & r ? 493 : 420), 8 !== e && (r = 0), (e << 12) + r;
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            });
            var n = r(0);
            class i {
                constructor({ remotePath: t, localPath: e, force: r, matchPrefix: n }) {
                    Object.assign(this, { remotePath: t, localPath: e, force: r, matchPrefix: n });
                }
                static from(t) {
                    const [e, r, o, a, s] = t.match(/^(\+?)(.*?)(\*?):(.*?)(\*?)$/).slice(1),
                        u = "+" === e,
                        c = "*" === o;
                    if (c !== ("*" === s)) throw new n.b(n.a.InternalFail, { message: "Invalid refspec" });
                    return new i({ remotePath: r, localPath: a, force: u, matchPrefix: c });
                }
                translate(t) {
                    if (this.matchPrefix) {
                        if (t.startsWith(this.remotePath)) return this.localPath + t.replace(this.remotePath, "");
                    } else if (t === this.remotePath) return this.localPath;
                    return null;
                }
                reverseTranslate(t) {
                    if (this.matchPrefix) {
                        if (t.startsWith(this.localPath)) return this.remotePath + t.replace(this.localPath, "");
                    } else if (t === this.localPath) return this.remotePath;
                    return null;
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return s;
            });
            var n = r(40);
            function i(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            const o = new Map();
            function a() {
                var t;
                return (
                    (t = function* ({ fs: t, filename: e, getExternalRefDelta: r, emitter: i, emitterPrefix: o }) {
                        const a = yield t.read(e);
                        return n.a.fromIdx({ idx: a, getExternalRefDelta: r });
                    }),
                    (a = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                i(a, n, o, s, u, "next", t);
                            }
                            function u(t) {
                                i(a, n, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function s({ fs: t, filename: e, getExternalRefDelta: r, emitter: n, emitterPrefix: i }) {
                let s = o.get(e);
                return (
                    s ||
                        ((s = (function (t) {
                            return a.apply(this, arguments);
                        })({ fs: t, filename: e, getExternalRefDelta: r, emitter: n, emitterPrefix: i })),
                        o.set(e, s)),
                    s
                );
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return a;
                });
                var n = r(58);
                function i(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function o(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                i(a, n, o, s, u, "next", t);
                            }
                            function u(t) {
                                i(a, n, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    };
                }
                class a {
                    constructor(t) {
                        (this.stream = Object(n.a)(t)), (this.buffer = null), (this.cursor = 0), (this.undoCursor = 0), (this.started = !1), (this._ended = !1), (this._discardedBytes = 0);
                    }
                    eof() {
                        return this._ended && this.cursor === this.buffer.length;
                    }
                    tell() {
                        return this._discardedBytes + this.cursor;
                    }
                    byte() {
                        var t = this;
                        return o(function* () {
                            if (!t.eof() && (t.started || (yield t._init()), t.cursor !== t.buffer.length || (yield t._loadnext(), !t._ended))) return t._moveCursor(1), t.buffer[t.undoCursor];
                        })();
                    }
                    chunk() {
                        var t = this;
                        return o(function* () {
                            if (!t.eof() && (t.started || (yield t._init()), t.cursor !== t.buffer.length || (yield t._loadnext(), !t._ended))) return t._moveCursor(t.buffer.length), t.buffer.slice(t.undoCursor, t.cursor);
                        })();
                    }
                    read(t) {
                        var e = this;
                        return o(function* () {
                            if (!e.eof()) return e.started || (yield e._init()), e.cursor + t > e.buffer.length && (e._trim(), yield e._accumulate(t)), e._moveCursor(t), e.buffer.slice(e.undoCursor, e.cursor);
                        })();
                    }
                    skip(t) {
                        var e = this;
                        return o(function* () {
                            e.eof() || (e.started || (yield e._init()), e.cursor + t > e.buffer.length && (e._trim(), yield e._accumulate(t)), e._moveCursor(t));
                        })();
                    }
                    undo() {
                        var t = this;
                        return o(function* () {
                            t.cursor = t.undoCursor;
                        })();
                    }
                    _next() {
                        var e = this;
                        return o(function* () {
                            e.started = !0;
                            let { done: r, value: n } = yield e.stream.next();
                            return r && (e._ended = !0), n && (n = t.from(n)), n;
                        })();
                    }
                    _trim() {
                        (this.buffer = this.buffer.slice(this.undoCursor)), (this.cursor -= this.undoCursor), (this._discardedBytes += this.undoCursor), (this.undoCursor = 0);
                    }
                    _moveCursor(t) {
                        (this.undoCursor = this.cursor), (this.cursor += t), this.cursor > this.buffer.length && (this.cursor = this.buffer.length);
                    }
                    _accumulate(e) {
                        var r = this;
                        return o(function* () {
                            if (r._ended) return;
                            const n = [r.buffer];
                            for (; r.cursor + e > s(n); ) {
                                const t = yield r._next();
                                if (r._ended) break;
                                n.push(t);
                            }
                            r.buffer = t.concat(n);
                        })();
                    }
                    _loadnext() {
                        var t = this;
                        return o(function* () {
                            (t._discardedBytes += t.buffer.length), (t.undoCursor = 0), (t.cursor = 0), (t.buffer = yield t._next());
                        })();
                    }
                    _init() {
                        var t = this;
                        return o(function* () {
                            t.buffer = yield t._next();
                        })();
                    }
                }
                function s(t) {
                    return t.reduce((t, e) => t + e.length, 0);
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            });
            var n = r(59);
            function i(t) {
                return t[Symbol.asyncIterator] ? t[Symbol.asyncIterator]() : t[Symbol.iterator] ? t[Symbol.iterator]() : t.next ? t : Object(n.b)(t);
            }
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                if (t[Symbol.asyncIterator]) return t;
                const e = t.getReader();
                return {
                    next: () => e.read(),
                    return: () => (e.releaseLock(), {}),
                    [Symbol.asyncIterator]() {
                        return this;
                    },
                };
            }
            function i(t) {
                let e = [t];
                return {
                    next: () => Promise.resolve({ done: 0 === e.length, value: e.pop() }),
                    return: () => ((e = []), {}),
                    [Symbol.asyncIterator]() {
                        return this;
                    },
                };
            }
            r.d(e, "a", function () {
                return n;
            }),
                r.d(e, "b", function () {
                    return i;
                });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            });
            const n = void 0 === Array.prototype.flat ? (t) => t.reduce((t, e) => t.concat(e), []) : (t) => t.flat();
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return a;
                });
                var n = r(59),
                    i = r(29);
                function o(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function a(t) {
                    return s.apply(this, arguments);
                }
                function s() {
                    var e;
                    return (
                        (e = function* ({ core: e, emitter: r, emitterPrefix: o, url: a, method: s = "GET", headers: u = {}, body: c }) {
                            c && (c = yield Object(i.a)(c));
                            const f = yield t.fetch(a, { method: s, headers: u, body: c }),
                                l = f.body && f.body.getReader ? Object(n.a)(f.body) : [new Uint8Array(yield f.arrayBuffer())];
                            u = {};
                            for (const [t, e] of f.headers.entries()) u[t] = e;
                            return { url: f.url, method: f.method, statusCode: f.status, statusMessage: f.statusText, body: l, headers: u };
                        }),
                        (s = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, i) {
                                var a = e.apply(t, r);
                                function s(t) {
                                    o(a, n, i, s, u, "next", t);
                                }
                                function u(t) {
                                    o(a, n, i, s, u, "throw", t);
                                }
                                s(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(76)));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(0),
                i = r(9);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function a(t, e) {
                return s.apply(this, arguments);
            }
            function s() {
                var t;
                return (
                    (t = function* (t, { service: e }) {
                        const r = new Set(),
                            o = new Map(),
                            a = new Map(),
                            s = i.a.streamReader(t);
                        let c = yield s();
                        for (; null === c; ) c = yield s();
                        if (!0 === c) throw new n.b(n.a.EmptyServerResponseFail);
                        if (c.toString("utf8").replace(/\n$/, "") !== `# service=${e}`) throw new n.b(n.a.AssertServerResponseFail, { expected: `# service=${e}\\n`, actual: c.toString("utf8") });
                        let f = yield s();
                        for (; null === f; ) f = yield s();
                        if (!0 === f) return { capabilities: r, refs: o, symrefs: a };
                        const [l, d] = u(f.toString("utf8"), "\0", "\\x00");
                        d.split(" ").map((t) => r.add(t));
                        const [h, p] = u(l, " ", " ");
                        for (o.set(p, h); ; ) {
                            const t = yield s();
                            if (!0 === t) break;
                            if (null !== t) {
                                const [e, r] = u(t.toString("utf8"), " ", " ");
                                o.set(r, e);
                            }
                        }
                        for (const t of r)
                            if (t.startsWith("symref=")) {
                                const e = t.match(/symref=([^:]+):(.*)/);
                                3 === e.length && a.set(e[1], e[2]);
                            }
                        return { capabilities: r, refs: o, symrefs: a };
                    }),
                    (s = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var a = t.apply(e, r);
                            function s(t) {
                                o(a, n, i, s, u, "next", t);
                            }
                            function u(t) {
                                o(a, n, i, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function u(t, e, r) {
                const i = t.trim().split(e);
                if (2 !== i.length) throw new n.b(n.a.AssertServerResponseFail, { expected: `Two strings separated by '${r}'`, actual: t.toString("utf8") });
                return i;
            }
        },
        function (t, e) {
            !(function (e) {
                "use strict";
                var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                (t.exports.toByteArray = function (t) {
                    var e, n, i, o, a, s;
                    if (t.length % 4 > 0) throw "Invalid string. Length must be a multiple of 4";
                    for (s = [], i = (a = (a = t.indexOf("=")) > 0 ? t.length - a : 0) > 0 ? t.length - 4 : t.length, e = 0, n = 0; e < i; e += 4, n += 3)
                        (o = (r.indexOf(t[e]) << 18) | (r.indexOf(t[e + 1]) << 12) | (r.indexOf(t[e + 2]) << 6) | r.indexOf(t[e + 3])), s.push((16711680 & o) >> 16), s.push((65280 & o) >> 8), s.push(255 & o);
                    return (
                        2 === a
                            ? ((o = (r.indexOf(t[e]) << 2) | (r.indexOf(t[e + 1]) >> 4)), s.push(255 & o))
                            : 1 === a && ((o = (r.indexOf(t[e]) << 10) | (r.indexOf(t[e + 1]) << 4) | (r.indexOf(t[e + 2]) >> 2)), s.push((o >> 8) & 255), s.push(255 & o)),
                        s
                    );
                }),
                    (t.exports.fromByteArray = function (t) {
                        var e,
                            n,
                            i,
                            o,
                            a = t.length % 3,
                            s = "";
                        for (e = 0, i = t.length - a; e < i; e += 3) (n = (t[e] << 16) + (t[e + 1] << 8) + t[e + 2]), (s += r[((o = n) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
                        switch (a) {
                            case 1:
                                (n = t[t.length - 1]), (s += r[n >> 2]), (s += r[(n << 4) & 63]), (s += "==");
                                break;
                            case 2:
                                (n = (t[t.length - 2] << 8) + t[t.length - 1]), (s += r[n >> 10]), (s += r[(n >> 4) & 63]), (s += r[(n << 2) & 63]), (s += "=");
                        }
                        return s;
                    });
            })();
        },
        function (t, e, r) {
            "use strict";
            t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        },
        function (t, e, r) {
            "use strict";
            function n(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function i(t) {
                return o.apply(this, arguments);
            }
            function o() {
                var t;
                return (
                    (t = function* (t) {
                        return new Promise((e, r) => setTimeout(e, t));
                    }),
                    (o = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (i, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                n(a, i, o, s, u, "next", t);
                            }
                            function u(t) {
                                n(a, i, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            r.d(e, "a", function () {
                return i;
            });
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return f;
                });
                var n = r(21),
                    i = r(39),
                    o = r(20),
                    a = r(12),
                    s = r(0);
                function u(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function c(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                u(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                u(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                class f {
                    constructor(t) {
                        (this._dirty = !1), (this._entries = t || new Map());
                    }
                    static from(e) {
                        return c(function* () {
                            if (t.isBuffer(e)) return f.fromBuffer(e);
                            if (null === e) return new f(null);
                            throw new s.b(s.a.InternalFail, { message: "invalid type passed to GitIndex.from" });
                        })();
                    }
                    static fromBuffer(t) {
                        return c(function* () {
                            const e = yield Object(a.a)(t.slice(0, -20)),
                                r = t.slice(-20).toString("hex");
                            if (r !== e) throw new s.b(s.a.InternalFail, { message: `Invalid checksum in GitIndex buffer: expected ${r} but saw ${e}` });
                            const i = new n.a(t),
                                o = new Map(),
                                u = i.toString("utf8", 4);
                            if ("DIRC" !== u) throw new s.b(s.a.InternalFail, { message: `Inavlid dircache magic file number: ${u}` });
                            const c = i.readUInt32BE();
                            if (2 !== c) throw new s.b(s.a.InternalFail, { message: `Unsupported dircache version: ${c}` });
                            const l = i.readUInt32BE();
                            let d = 0;
                            for (; !i.eof() && d < l; ) {
                                const e = {};
                                (e.ctimeSeconds = i.readUInt32BE()),
                                    (e.ctimeNanoseconds = i.readUInt32BE()),
                                    (e.mtimeSeconds = i.readUInt32BE()),
                                    (e.mtimeNanoseconds = i.readUInt32BE()),
                                    (e.dev = i.readUInt32BE()),
                                    (e.ino = i.readUInt32BE()),
                                    (e.mode = i.readUInt32BE()),
                                    (e.uid = i.readUInt32BE()),
                                    (e.gid = i.readUInt32BE()),
                                    (e.size = i.readUInt32BE()),
                                    (e.oid = i.slice(20).toString("hex"));
                                const r = i.readUInt16BE();
                                e.flags = ((h = r), { assumeValid: Boolean(32768 & h), extended: Boolean(16384 & h), stage: (12288 & h) >> 12, nameLength: 4095 & h });
                                const n = t.indexOf(0, i.tell() + 1) - i.tell();
                                if (n < 1) throw new s.b(s.a.InternalFail, { message: `Got a path length of: ${n}` });
                                e.path = i.toString("utf8", n);
                                let a = 8 - ((i.tell() - 12) % 8);
                                for (0 === a && (a = 8); a--; ) {
                                    const t = i.readUInt8();
                                    if (0 !== t) throw new s.b(s.a.InternalFail, { message: `Expected 1-8 null characters but got '${t}' after ${e.path}` });
                                    if (i.eof()) throw new s.b(s.a.InternalFail, { message: "Unexpected end of file" });
                                }
                                o.set(e.path, e), d++;
                            }
                            var h;
                            return new f(o);
                        })();
                    }
                    get entries() {
                        return [...this._entries.values()].sort(i.a);
                    }
                    get entriesMap() {
                        return this._entries;
                    }
                    *[Symbol.iterator]() {
                        for (const t of this.entries) yield t;
                    }
                    insert({ filepath: e, stats: r, oid: n }) {
                        r = Object(o.a)(r);
                        const i = t.from(e),
                            a = {
                                ctimeSeconds: r.ctimeSeconds,
                                ctimeNanoseconds: r.ctimeNanoseconds,
                                mtimeSeconds: r.mtimeSeconds,
                                mtimeNanoseconds: r.mtimeNanoseconds,
                                dev: r.dev,
                                ino: r.ino,
                                mode: r.mode || 33188,
                                uid: r.uid,
                                gid: r.gid,
                                size: r.size,
                                path: e,
                                oid: n,
                                flags: { assumeValid: !1, extended: !1, stage: 0, nameLength: i.length < 4095 ? i.length : 4095 },
                            };
                        this._entries.set(a.path, a), (this._dirty = !0);
                    }
                    delete({ filepath: t }) {
                        if (this._entries.has(t)) this._entries.delete(t);
                        else for (const e of this._entries.keys()) e.startsWith(t + "/") && this._entries.delete(e);
                        this._dirty = !0;
                    }
                    clear() {
                        this._entries.clear(), (this._dirty = !0);
                    }
                    render() {
                        return this.entries.map((t) => `${t.mode.toString(8)} ${t.oid}    ${t.path}`).join("\n");
                    }
                    toObject() {
                        var e = this;
                        return c(function* () {
                            const r = t.alloc(12),
                                i = new n.a(r);
                            i.write("DIRC", 4, "utf8"), i.writeUInt32BE(2), i.writeUInt32BE(e.entries.length);
                            const s = t.concat(
                                    e.entries.map((e) => {
                                        const r = t.from(e.path),
                                            i = 8 * Math.ceil((62 + r.length + 1) / 8),
                                            a = t.alloc(i),
                                            s = new n.a(a),
                                            u = Object(o.a)(e);
                                        return (
                                            s.writeUInt32BE(u.ctimeSeconds),
                                            s.writeUInt32BE(u.ctimeNanoseconds),
                                            s.writeUInt32BE(u.mtimeSeconds),
                                            s.writeUInt32BE(u.mtimeNanoseconds),
                                            s.writeUInt32BE(u.dev),
                                            s.writeUInt32BE(u.ino),
                                            s.writeUInt32BE(u.mode),
                                            s.writeUInt32BE(u.uid),
                                            s.writeUInt32BE(u.gid),
                                            s.writeUInt32BE(u.size),
                                            s.write(e.oid, 20, "hex"),
                                            s.writeUInt16BE(
                                                (function (e) {
                                                    const r = e.flags;
                                                    return (r.extended = !1), (r.nameLength = Math.min(t.from(e.path).length, 4095)), (r.assumeValid ? 32768 : 0) + (r.extended ? 16384 : 0) + ((3 & r.stage) << 12) + (4095 & r.nameLength);
                                                })(e)
                                            ),
                                            s.write(e.path, r.length, "utf8"),
                                            a
                                        );
                                    })
                                ),
                                u = t.concat([r, s]),
                                c = yield Object(a.a)(u);
                            return t.concat([u, t.from(c, "hex")]);
                        })();
                    }
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            function n(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function i(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (i, o) {
                        var a = t.apply(e, r);
                        function s(t) {
                            n(a, i, o, s, u, "next", t);
                        }
                        function u(t) {
                            n(a, i, o, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            r.d(e, "a", function () {
                return b;
            });
            const o = (t) => {
                    if ("true" === (t = t.trim().toLowerCase()) || "yes" === t || "on" === t) return !0;
                    if ("false" === t || "no" === t || "off" === t) return !1;
                    throw Error(`Expected 'true', 'false', 'yes', 'no', 'on', or 'off', but got ${t}`);
                },
                a = {
                    core: {
                        filemode: o,
                        bare: o,
                        logallrefupdates: o,
                        symlinks: o,
                        ignorecase: o,
                        bigFileThreshold: (t) => {
                            t = t.toLowerCase();
                            let e = parseInt(t);
                            return t.endsWith("k") && (e *= 1024), t.endsWith("m") && (e *= 1048576), t.endsWith("g") && (e *= 1073741824), e;
                        },
                    },
                },
                s = /^\[([A-Za-z0-9_.]+)(?: "(.*)")?\]$/,
                u = /^[A-Za-z0-9_.]+$/,
                c = /^([A-Za-z]\w*)(?: *= *(.*))?$/,
                f = /^[A-Za-z]\w*$/,
                l = /^(.*?)( *[#;].*)$/,
                d = (t) => {
                    const e = s.exec(t);
                    if (null != e) {
                        const [t, r] = e.slice(1);
                        return [t, r];
                    }
                    return null;
                },
                h = (t) => {
                    const e = c.exec(t);
                    if (null != e) {
                        const [t, r = "true"] = e.slice(1),
                            n = p(r);
                        return [t, m(n)];
                    }
                    return null;
                },
                p = (t) => {
                    const e = l.exec(t);
                    if (null == e) return t;
                    const [r, n] = e.slice(1);
                    return g(r) && g(n) ? `${r}${n}` : r;
                },
                g = (t) => {
                    return (t.match(/(?:^|[^\\])"/g) || []).length % 2 != 0;
                },
                m = (t) =>
                    t.split("").reduce((t, e, r, n) => {
                        const i = '"' === e && "\\" !== n[r - 1],
                            o = "\\" === e && '"' === n[r + 1];
                        return i || o ? t : t + e;
                    }, ""),
                y = (t) => (null != t ? t.toLowerCase() : null),
                v = (t, e, r) => [y(t), e, y(r)].filter((t) => null != t).join("."),
                w = (t, e) => t.reduce((t, r, n) => (e(r) ? n : t), -1);
            class b {
                constructor(t) {
                    let e = null,
                        r = null;
                    this.parsedConfig = t.split("\n").map((t) => {
                        let n = null,
                            i = null;
                        const o = t.trim(),
                            a = d(o),
                            s = null != a;
                        if (s) [e, r] = a;
                        else {
                            const t = h(o);
                            null != t && ([n, i] = t);
                        }
                        const u = v(e, r, n);
                        return { line: t, isSection: s, section: e, subsection: r, name: n, value: i, path: u };
                    });
                }
                static from(t) {
                    return new b(t);
                }
                get(t, e = !1) {
                    var r = this;
                    return i(function* () {
                        const n = r.parsedConfig
                            .filter((e) => e.path === t.toLowerCase())
                            .map(({ section: t, name: e, value: r }) => {
                                const n = a[t] && a[t][e];
                                return n ? n(r) : r;
                            });
                        return e ? n : n.pop();
                    })();
                }
                getall(t) {
                    var e = this;
                    return i(function* () {
                        return e.get(t, !0);
                    })();
                }
                getSubsections(t) {
                    var e = this;
                    return i(function* () {
                        return e.parsedConfig.filter((e) => e.section === t && e.isSection).map((t) => t.subsection);
                    })();
                }
                deleteSection(t, e) {
                    var r = this;
                    return i(function* () {
                        r.parsedConfig = r.parsedConfig.filter((r) => !(r.section === t && r.subsection === e));
                    })();
                }
                append(t, e) {
                    var r = this;
                    return i(function* () {
                        return r.set(t, e, !0);
                    })();
                }
                set(t, e, r = !1) {
                    var n = this;
                    return i(function* () {
                        const i = w(n.parsedConfig, (e) => e.path === t.toLowerCase());
                        if (null == e) -1 !== i && n.parsedConfig.splice(i, 1);
                        else if (-1 !== i) {
                            const t = n.parsedConfig[i],
                                o = Object.assign({}, t, { value: e, modified: !0 });
                            r ? n.parsedConfig.splice(i + 1, 0, o) : (n.parsedConfig[i] = o);
                        } else {
                            const r = t.split(".").slice(0, -1).join(".").toLowerCase(),
                                i = n.parsedConfig.findIndex((t) => t.path === r),
                                [o, a] = r.split("."),
                                s = t.split(".").pop(),
                                c = { section: o, subsection: a, name: s, value: e, modified: !0, path: v(o, a, s) };
                            if (u.test(o) && f.test(s))
                                if (i >= 0) n.parsedConfig.splice(i + 1, 0, c);
                                else {
                                    const t = { section: o, subsection: a, modified: !0, path: v(o, a, null) };
                                    n.parsedConfig.push(t, c);
                                }
                        }
                    })();
                }
                toString() {
                    return this.parsedConfig.map(({ line: t, section: e, subsection: r, name: n, value: i, modified: o = !1 }) => (o ? (null != n && null != i ? `\t${n} = ${i}` : null != r ? `[${e} "${r}"]` : `[${e}]`) : t)).join("\n");
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            });
            var n = r(55);
            class i {
                constructor(t = []) {
                    this.rules = t;
                }
                static from(t) {
                    const e = [];
                    for (const r of t) e.push(n.a.from(r));
                    return new i(e);
                }
                add(t) {
                    const e = n.a.from(t);
                    this.rules.push(e);
                }
                translate(t) {
                    const e = [];
                    for (const r of this.rules)
                        for (const n of t) {
                            const t = r.translate(n);
                            t && e.push([n, t]);
                        }
                    return e;
                }
                translateOne(t) {
                    let e = null;
                    for (const r of this.rules) {
                        const n = r.translate(t);
                        n && (e = n);
                    }
                    return e;
                }
                localNamespaces() {
                    return this.rules.filter((t) => t.matchPrefix).map((t) => t.localPath.replace(/\/$/, ""));
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(0),
                i = r(42);
            class o {
                static getRemoteHelperFor({ url: t }) {
                    const e = new Map();
                    e.set("http", i.a), e.set("https", i.a);
                    const r = (function ({ url: t }) {
                        const e = t.match(/(\w+)(:\/\/|::)(.*)/);
                        if (null !== e) return "://" === e[2] ? { transport: e[1], address: e[0] } : "::" === e[2] ? { transport: e[1], address: e[3] } : void 0;
                    })({ url: t });
                    if (!r) throw new n.b(n.a.RemoteUrlParseError, { url: t });
                    if (e.has(r.transport)) return e.get(r.transport);
                    throw new n.b(n.a.UnknownTransportError, { url: t, transport: r.transport });
                }
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(100),
                i = r.n(n);
            const o = /^.*(\r?\n|$)/gm;
            function a({ ourContent: t, baseContent: e, theirContent: r, ourName: n = "ours", baseName: a = "base", theirName: s = "theirs", format: u = "diff", markerSize: c = 7 }) {
                const f = t.match(o),
                    l = e.match(o),
                    d = r.match(o),
                    h = i()(f, l, d);
                let p = "",
                    g = !0;
                for (const t of h)
                    t.ok && (p += t.ok.join("")),
                        t.conflict &&
                            ((g = !1),
                            (p += `${"<".repeat(c)} ${n}\n`),
                            (p += t.conflict.a.join("")),
                            "diff3" === u && ((p += `${"|".repeat(c)} ${a}\n`), (p += t.conflict.o.join(""))),
                            (p += `${"=".repeat(c)}\n`),
                            (p += t.conflict.b.join("")),
                            (p += `${">".repeat(c)} ${s}\n`));
                return { cleanMerge: g, mergedText: p };
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return p;
                });
                var n = r(18),
                    i = r.n(n),
                    o = r(53),
                    a = r.n(o),
                    s = r(1),
                    u = r(5),
                    c = r(2),
                    f = r(35),
                    l = r(3),
                    d = r(101);
                function h(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function p(t) {
                    return g.apply(this, arguments);
                }
                function g() {
                    var e;
                    return (
                        (e = function* ({ core: e = "default", dir: r, gitdir: n = Object(c.a)(r, ".git"), fs: o = l.a.get(e).get("fs"), oids: h }) {
                            const p = new s.a(o),
                                g = new a.a(),
                                m = [];
                            function y(e, r) {
                                const n = t.from(e, r);
                                m.push(n), g.update(n);
                            }
                            function v({ stype: e, object: r }) {
                                const n = d.a[e];
                                let o = r.length,
                                    a = o > 15 ? 128 : 0;
                                const s = 15 & o;
                                o >>>= 4;
                                let u = (a | n | s).toString(16);
                                for (y(u, "hex"); a; ) (u = (a = o > 127 ? 128 : 0) | (127 & o)), y(Object(f.a)(2, u), "hex"), (o >>>= 7);
                                y(t.from(i.a.deflate(r)));
                            }
                            y("PACK"), y("00000002", "hex"), y(Object(f.a)(8, h.length), "hex");
                            for (const t of h) {
                                const { type: e, object: r } = yield Object(u.a)({ fs: p, gitdir: n, oid: t });
                                v({ write: y, object: r, stype: e });
                            }
                            const w = g.digest();
                            return m.push(w), m;
                        }),
                        (g = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, i) {
                                var o = e.apply(t, r);
                                function a(t) {
                                    h(o, n, i, a, s, "next", t);
                                }
                                function s(t) {
                                    h(o, n, i, a, s, "throw", t);
                                }
                                a(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return u;
            });
            var n = r(37),
                i = r(14),
                o = r(7);
            function a(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function s(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function s(t) {
                            a(o, n, i, s, u, "next", t);
                        }
                        function u(t) {
                            a(o, n, i, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            class u extends o.a {
                static from(t) {
                    return new u(t);
                }
                sign(t, e) {
                    var r = this;
                    return s(function* () {
                        const a = r.withoutSignature(),
                            s = o.a.justHeaders(r._commit),
                            u = o.a.justMessage(r._commit),
                            c = t.key.readArmored(e).keys;
                        let { signature: f } = yield t.sign({ data: t.util.str2Uint8Array(a), privateKeys: c, detached: !0, armor: !0 });
                        f = Object(i.a)(f);
                        const l = s + "\ngpgsig" + Object(n.a)(f) + "\n" + u;
                        return o.a.from(l);
                    })();
                }
                listSigningKeys(t) {
                    var e = this;
                    return s(function* () {
                        return t.message
                            .readSignedContent(e.withoutSignature(), e.isolateSignature())
                            .getSigningKeyIds()
                            .map((t) => t.toHex());
                    })();
                }
                verify(t, e) {
                    var r = this;
                    return s(function* () {
                        const n = t.key.readArmored(e).keys;
                        return t.message
                            .readSignedContent(r.withoutSignature(), r.isolateSignature())
                            .verify(n)
                            .reduce((t, e) => t.valid && e.valid, { valid: !0 });
                    })();
                }
            }
        },
        function (t, e, r) {
            "use strict";
            function n(t, e) {
                const r = e - t;
                return Array.from({ length: r }, (e, r) => t + r);
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            });
            class n {
                constructor() {
                    this.value = null;
                }
                consider(t) {
                    null != t && (null === this.value ? (this.value = t) : t < this.value && (this.value = t));
                }
                reset() {
                    this.value = null;
                }
            }
        },
        function (t, e, r) {
            (function (t) {
                function r(t, e) {
                    for (var r = 0, n = t.length - 1; n >= 0; n--) {
                        var i = t[n];
                        "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--);
                    }
                    if (e) for (; r--; r) t.unshift("..");
                    return t;
                }
                function n(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var r = [], n = 0; n < t.length; n++) e(t[n], n, t) && r.push(t[n]);
                    return r;
                }
                (e.resolve = function () {
                    for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                        var a = o >= 0 ? arguments[o] : t.cwd();
                        if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && ((e = a + "/" + e), (i = "/" === a.charAt(0)));
                    }
                    return (
                        (i ? "/" : "") +
                            (e = r(
                                n(e.split("/"), function (t) {
                                    return !!t;
                                }),
                                !i
                            ).join("/")) || "."
                    );
                }),
                    (e.normalize = function (t) {
                        var o = e.isAbsolute(t),
                            a = "/" === i(t, -1);
                        return (
                            (t = r(
                                n(t.split("/"), function (t) {
                                    return !!t;
                                }),
                                !o
                            ).join("/")) ||
                                o ||
                                (t = "."),
                            t && a && (t += "/"),
                            (o ? "/" : "") + t
                        );
                    }),
                    (e.isAbsolute = function (t) {
                        return "/" === t.charAt(0);
                    }),
                    (e.join = function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        return e.normalize(
                            n(t, function (t, e) {
                                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                                return t;
                            }).join("/")
                        );
                    }),
                    (e.relative = function (t, r) {
                        function n(t) {
                            for (var e = 0; e < t.length && "" === t[e]; e++);
                            for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                            return e > r ? [] : t.slice(e, r - e + 1);
                        }
                        (t = e.resolve(t).substr(1)), (r = e.resolve(r).substr(1));
                        for (var i = n(t.split("/")), o = n(r.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; u < a; u++)
                            if (i[u] !== o[u]) {
                                s = u;
                                break;
                            }
                        var c = [];
                        for (u = s; u < i.length; u++) c.push("..");
                        return (c = c.concat(o.slice(s))).join("/");
                    }),
                    (e.sep = "/"),
                    (e.delimiter = ":"),
                    (e.dirname = function (t) {
                        if (("string" != typeof t && (t += ""), 0 === t.length)) return ".";
                        for (var e = t.charCodeAt(0), r = 47 === e, n = -1, i = !0, o = t.length - 1; o >= 1; --o)
                            if (47 === (e = t.charCodeAt(o))) {
                                if (!i) {
                                    n = o;
                                    break;
                                }
                            } else i = !1;
                        return -1 === n ? (r ? "/" : ".") : r && 1 === n ? "/" : t.slice(0, n);
                    }),
                    (e.basename = function (t, e) {
                        var r = (function (t) {
                            "string" != typeof t && (t += "");
                            var e,
                                r = 0,
                                n = -1,
                                i = !0;
                            for (e = t.length - 1; e >= 0; --e)
                                if (47 === t.charCodeAt(e)) {
                                    if (!i) {
                                        r = e + 1;
                                        break;
                                    }
                                } else -1 === n && ((i = !1), (n = e + 1));
                            return -1 === n ? "" : t.slice(r, n);
                        })(t);
                        return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
                    }),
                    (e.extname = function (t) {
                        "string" != typeof t && (t += "");
                        for (var e = -1, r = 0, n = -1, i = !0, o = 0, a = t.length - 1; a >= 0; --a) {
                            var s = t.charCodeAt(a);
                            if (47 !== s) -1 === n && ((i = !1), (n = a + 1)), 46 === s ? (-1 === e ? (e = a) : 1 !== o && (o = 1)) : -1 !== e && (o = -1);
                            else if (!i) {
                                r = a + 1;
                                break;
                            }
                        }
                        return -1 === e || -1 === n || 0 === o || (1 === o && e === n - 1 && e === r + 1) ? "" : t.slice(e, n);
                    });
                var i =
                    "b" === "ab".substr(-1)
                        ? function (t, e, r) {
                              return t.substr(e, r);
                          }
                        : function (t, e, r) {
                              return e < 0 && (e = t.length + e), t.substr(e, r);
                          };
            }.call(this, r(48)));
        },
        function (t, e) {
            var r;
            r = (function () {
                return this;
            })();
            try {
                r = r || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (r = window);
            }
            t.exports = r;
        },
        function (t, e, r) {
            var n = r(10),
                i = n.Buffer;
            function o(t, e) {
                for (var r in t) e[r] = t[r];
            }
            function a(t, e, r) {
                return i(t, e, r);
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? (t.exports = n) : (o(n, e), (e.Buffer = a)),
                o(i, a),
                (a.from = function (t, e, r) {
                    if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                    return i(t, e, r);
                }),
                (a.alloc = function (t, e, r) {
                    if ("number" != typeof t) throw new TypeError("Argument must be a number");
                    var n = i(t);
                    return void 0 !== e ? ("string" == typeof r ? n.fill(e, r) : n.fill(e)) : n.fill(0), n;
                }),
                (a.allocUnsafe = function (t) {
                    if ("number" != typeof t) throw new TypeError("Argument must be a number");
                    return i(t);
                }),
                (a.allocUnsafeSlow = function (t) {
                    if ("number" != typeof t) throw new TypeError("Argument must be a number");
                    return n.SlowBuffer(t);
                });
        },
        function (t, e, r) {
            "use strict";
            t.exports = function (t, e, r, n) {
                for (var i = (65535 & t) | 0, o = ((t >>> 16) & 65535) | 0, a = 0; 0 !== r; ) {
                    r -= a = r > 2e3 ? 2e3 : r;
                    do {
                        o = (o + (i = (i + e[n++]) | 0)) | 0;
                    } while (--a);
                    (i %= 65521), (o %= 65521);
                }
                return i | (o << 16) | 0;
            };
        },
        function (t, e, r) {
            "use strict";
            var n = (function () {
                for (var t, e = [], r = 0; r < 256; r++) {
                    t = r;
                    for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                    e[r] = t;
                }
                return e;
            })();
            t.exports = function (t, e, r, i) {
                var o = n,
                    a = i + r;
                t ^= -1;
                for (var s = i; s < a; s++) t = (t >>> 8) ^ o[255 & (t ^ e[s])];
                return -1 ^ t;
            };
        },
        function (t, e, r) {
            "use strict";
            var n = r(25),
                i = !0,
                o = !0;
            try {
                String.fromCharCode.apply(null, [0]);
            } catch (t) {
                i = !1;
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1));
            } catch (t) {
                o = !1;
            }
            for (var a = new n.Buf8(256), s = 0; s < 256; s++) a[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
            function u(t, e) {
                if (e < 65534 && ((t.subarray && o) || (!t.subarray && i))) return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
                for (var r = "", a = 0; a < e; a++) r += String.fromCharCode(t[a]);
                return r;
            }
            (a[254] = a[254] = 1),
                (e.string2buf = function (t) {
                    var e,
                        r,
                        i,
                        o,
                        a,
                        s = t.length,
                        u = 0;
                    for (o = 0; o < s; o++)
                        55296 == (64512 & (r = t.charCodeAt(o))) && o + 1 < s && 56320 == (64512 & (i = t.charCodeAt(o + 1))) && ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++), (u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
                    for (e = new n.Buf8(u), a = 0, o = 0; a < u; o++)
                        55296 == (64512 & (r = t.charCodeAt(o))) && o + 1 < s && 56320 == (64512 & (i = t.charCodeAt(o + 1))) && ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
                            r < 128
                                ? (e[a++] = r)
                                : r < 2048
                                ? ((e[a++] = 192 | (r >>> 6)), (e[a++] = 128 | (63 & r)))
                                : r < 65536
                                ? ((e[a++] = 224 | (r >>> 12)), (e[a++] = 128 | ((r >>> 6) & 63)), (e[a++] = 128 | (63 & r)))
                                : ((e[a++] = 240 | (r >>> 18)), (e[a++] = 128 | ((r >>> 12) & 63)), (e[a++] = 128 | ((r >>> 6) & 63)), (e[a++] = 128 | (63 & r)));
                    return e;
                }),
                (e.buf2binstring = function (t) {
                    return u(t, t.length);
                }),
                (e.binstring2buf = function (t) {
                    for (var e = new n.Buf8(t.length), r = 0, i = e.length; r < i; r++) e[r] = t.charCodeAt(r);
                    return e;
                }),
                (e.buf2string = function (t, e) {
                    var r,
                        n,
                        i,
                        o,
                        s = e || t.length,
                        c = new Array(2 * s);
                    for (n = 0, r = 0; r < s; )
                        if ((i = t[r++]) < 128) c[n++] = i;
                        else if ((o = a[i]) > 4) (c[n++] = 65533), (r += o - 1);
                        else {
                            for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < s; ) (i = (i << 6) | (63 & t[r++])), o--;
                            o > 1 ? (c[n++] = 65533) : i < 65536 ? (c[n++] = i) : ((i -= 65536), (c[n++] = 55296 | ((i >> 10) & 1023)), (c[n++] = 56320 | (1023 & i)));
                        }
                    return u(c, n);
                }),
                (e.utf8border = function (t, e) {
                    var r;
                    for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; r >= 0 && 128 == (192 & t[r]); ) r--;
                    return r < 0 ? e : 0 === r ? e : r + a[t[r]] > e ? r : e;
                });
        },
        function (t, e, r) {
            "use strict";
            t.exports = function () {
                (this.input = null),
                    (this.next_in = 0),
                    (this.avail_in = 0),
                    (this.total_in = 0),
                    (this.output = null),
                    (this.next_out = 0),
                    (this.avail_out = 0),
                    (this.total_out = 0),
                    (this.msg = ""),
                    (this.state = null),
                    (this.data_type = 2),
                    (this.adler = 0);
            };
        },
        function (t, e, r) {
            "use strict";
            t.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8,
            };
        },
        function (t, e) {
            var r, n;
            (t.exports = r = {}),
                (n = "undefined" == typeof WeakMap ? null : new WeakMap()),
                (r.get = n
                    ? function (t) {
                          var e = n.get(t.buffer);
                          e || n.set(t.buffer, (e = new DataView(t.buffer, 0)));
                          return e;
                      }
                    : function (t) {
                          return new DataView(t.buffer, 0);
                      });
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return i;
            });
            var n = r(9);
            function i({ capabilities: t = [], wants: e = [], haves: r = [], shallows: i = [], depth: o = null, since: a = null, exclude: s = [] }) {
                const u = [];
                e = [...new Set(e)];
                let c = ` ${t.join(" ")}`;
                for (const t of e) u.push(n.a.encode(`want ${t}${c}\n`)), (c = "");
                for (const t of i) u.push(n.a.encode(`shallow ${t}\n`));
                null !== o && u.push(n.a.encode(`deepen ${o}\n`)), null !== a && u.push(n.a.encode(`deepen-since ${Math.floor(a.valueOf() / 1e3)}\n`));
                for (const t of s) u.push(n.a.encode(`deepen-not ${t}\n`));
                u.push(n.a.flush());
                for (const t of r) u.push(n.a.encode(`have ${t}\n`));
                return u.push(n.a.encode("done\n")), u;
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return s;
            });
            var n = r(0),
                i = r(52),
                o = r(30);
            function a(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function s(t) {
                return u.apply(this, arguments);
            }
            function u() {
                var t;
                return (
                    (t = function* (t) {
                        const { packetlines: e, packfile: r, progress: a } = i.a.demux(t),
                            s = [],
                            u = [],
                            c = [];
                        let f = !1,
                            l = !1;
                        return new Promise((t, i) => {
                            Object(o.a)(e, (e) => {
                                const o = e.toString("utf8").trim();
                                if (o.startsWith("shallow")) {
                                    const t = o.slice(-41).trim();
                                    40 !== t.length && i(new n.b(n.a.CorruptShallowOidFail, { oid: t })), s.push(t);
                                } else if (o.startsWith("unshallow")) {
                                    const t = o.slice(-41).trim();
                                    40 !== t.length && i(new n.b(n.a.CorruptShallowOidFail, { oid: t })), u.push(t);
                                } else if (o.startsWith("ACK")) {
                                    const [, t, e] = o.split(" ");
                                    c.push({ oid: t, status: e }), e || (l = !0);
                                } else o.startsWith("NAK") && ((f = !0), (l = !0));
                                l && t({ shallows: s, unshallows: u, acks: c, nak: f, packfile: r, progress: a });
                            });
                        });
                    }),
                    (u = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function s(t) {
                                a(o, n, i, s, u, "next", t);
                            }
                            function u(t) {
                                a(o, n, i, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return g;
                });
                var n = r(28),
                    i = r(33),
                    o = r(1),
                    a = r(0),
                    s = r(11),
                    u = r(22),
                    c = r(27),
                    f = r(2),
                    l = r(70),
                    d = r(3);
                function h(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function p(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                h(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                h(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                function g(t) {
                    return m.apply(this, arguments);
                }
                function m() {
                    return (m = p(function* ({
                        core: t = "default",
                        dir: e,
                        gitdir: r = Object(f.a)(e, ".git"),
                        fs: l = d.a.get(t).get("fs"),
                        ourOid: h,
                        baseOid: g,
                        theirOid: m,
                        ourName: v = "ours",
                        baseName: b = "base",
                        theirName: _ = "theirs",
                        dryRun: x = !1,
                    }) {
                        const E = new o.a(l),
                            k = Object(n.a)({ ref: h }),
                            O = Object(n.a)({ ref: g }),
                            j = Object(n.a)({ ref: m });
                        var P, S;
                        return (yield Object(i.a)({
                            core: t,
                            fs: E,
                            dir: e,
                            gitdir: r,
                            trees: [k, O, j],
                            map:
                                ((S = p(function* (t, [e, n, i]) {
                                    const o = Object(c.a)(t);
                                    switch (`${yield y(e, n)}-${yield y(i, n)}`) {
                                        case "false-false":
                                            return { mode: yield n.mode(), path: o, oid: yield n.oid(), type: yield n.type() };
                                        case "false-true":
                                            return i ? { mode: yield i.mode(), path: o, oid: yield i.oid(), type: yield i.type() } : void 0;
                                        case "true-false":
                                            return e ? { mode: yield e.mode(), path: o, oid: yield e.oid(), type: yield e.type() } : void 0;
                                        case "true-true":
                                            if (e && n && i && "blob" === (yield e.type()) && "blob" === (yield n.type()) && "blob" === (yield i.type()))
                                                return (function (t) {
                                                    return w.apply(this, arguments);
                                                })({ fs: E, gitdir: r, path: o, ours: e, base: n, theirs: i, ourName: v, baseName: b, theirName: _ });
                                            throw new a.b(a.a.MergeNotSupportedFail);
                                    }
                                })),
                                function (t, e) {
                                    return S.apply(this, arguments);
                                }),
                            reduce:
                                ((P = p(function* (t, e) {
                                    const n = e.filter(Boolean);
                                    if (!t || "tree" !== t.type || 0 !== n.length) {
                                        if (n.length > 0) {
                                            const e = new s.a(n).toObject(),
                                                i = yield Object(u.a)({ fs: E, gitdir: r, type: "tree", object: e, dryRun: x });
                                            t.oid = i;
                                        }
                                        return t;
                                    }
                                })),
                                function (t, e) {
                                    return P.apply(this, arguments);
                                }),
                        })).oid;
                    })).apply(this, arguments);
                }
                function y(t, e) {
                    return v.apply(this, arguments);
                }
                function v() {
                    return (v = p(function* (t, e) {
                        return (
                            !(!t && !e) &&
                            (!(!t || e) ||
                                !(t || !e) ||
                                (("tree" !== (yield t.type()) || "tree" !== (yield e.type())) && ((yield t.type()) !== (yield e.type()) || (yield t.mode()) !== (yield e.mode()) || (yield t.oid()) !== (yield e.oid()))))
                        );
                    })).apply(this, arguments);
                }
                function w() {
                    return (w = p(function* ({ fs: e, gitdir: r, path: n, ours: i, base: o, theirs: s, ourName: c, theirName: f, baseName: d, format: h, markerSize: p, dryRun: g }) {
                        const m = (yield o.mode()) === (yield i.mode()) ? yield s.mode() : yield i.mode();
                        if ((yield i.oid()) === (yield s.oid())) return { mode: m, path: n, oid: yield i.oid(), type: "blob" };
                        if ((yield i.oid()) === (yield o.oid())) return { mode: m, path: n, oid: yield s.oid(), type: "blob" };
                        if ((yield s.oid()) === (yield o.oid())) return { mode: m, path: n, oid: yield i.oid(), type: "blob" };
                        const { mergedText: y, cleanMerge: v } = Object(l.a)({
                            ourContent: (yield i.content()).toString("utf8"),
                            baseContent: (yield o.content()).toString("utf8"),
                            theirContent: (yield s.content()).toString("utf8"),
                            ourName: c,
                            theirName: f,
                            baseName: d,
                            format: h,
                            markerSize: p,
                        });
                        if (!v) throw new a.b(a.a.MergeNotSupportedFail);
                        return { mode: m, path: n, oid: yield Object(u.a)({ fs: e, gitdir: r, type: "blob", object: t.from(y, "utf8"), dryRun: g }), type: "blob" };
                    })).apply(this, arguments);
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return p;
            });
            var n = r(4),
                i = r(31),
                o = r(1),
                a = r(15),
                s = r(7),
                u = r(0),
                c = r(5),
                f = r(2),
                l = r(3);
            function d(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function h(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            d(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            d(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function p(t) {
                return g.apply(this, arguments);
            }
            function g() {
                return (g = h(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: d = l.a.get(t).get("fs"), start: p, finish: g }) {
                    const m = new o.a(d),
                        y = yield i.a.read({ fs: m, gitdir: r }),
                        v = new Set(),
                        w = new Set();
                    for (const t of p) v.add(yield n.a.resolve({ fs: m, gitdir: r, ref: t }));
                    for (const t of g)
                        try {
                            const e = yield n.a.resolve({ fs: m, gitdir: r, ref: t });
                            w.add(e);
                        } catch (t) {}
                    const b = new Set();
                    function _(t) {
                        return x.apply(this, arguments);
                    }
                    function x() {
                        return (x = h(function* (t) {
                            b.add(t);
                            const { type: e, object: n } = yield Object(c.a)({ fs: m, gitdir: r, oid: t });
                            if ("tag" === e) {
                                return _(a.a.from(n).headers().object);
                            }
                            if ("commit" !== e) throw new u.b(u.a.ObjectTypeAssertionFail, { oid: t, type: e, expected: "commit" });
                            if (!y.has(t)) {
                                const e = s.a.from(n).headers().parent;
                                for (t of e) w.has(t) || b.has(t) || (yield _(t));
                            }
                        })).apply(this, arguments);
                    }
                    for (const t of v) yield _(t);
                    return b;
                })).apply(this, arguments);
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return d;
            });
            var n = r(1),
                i = r(15),
                o = r(7),
                a = r(11),
                s = r(5),
                u = r(2),
                c = r(3);
            function f(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function l(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            f(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            f(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function d(t) {
                return h.apply(this, arguments);
            }
            function h() {
                return (h = l(function* ({ core: t = "default", dir: e, gitdir: r = Object(u.a)(e, ".git"), fs: f = c.a.get(t).get("fs"), oids: d }) {
                    const h = new n.a(f),
                        p = new Set();
                    function g(t) {
                        return m.apply(this, arguments);
                    }
                    function m() {
                        return (m = l(function* (t) {
                            p.add(t);
                            const { type: e, object: n } = yield Object(s.a)({ fs: h, gitdir: r, oid: t });
                            if ("tag" === e) {
                                const t = i.a.from(n).headers().object;
                                yield g(t);
                            } else if ("commit" === e) {
                                const t = o.a.from(n).headers().tree;
                                yield g(t);
                            } else if ("tree" === e) {
                                const t = a.a.from(n);
                                for (const e of t) ("blob" !== e.type && "tree" !== e.type) || p.add(e.oid), "tree" === e.type && (yield g(e.oid));
                            }
                        })).apply(this, arguments);
                    }
                    for (const t of d) yield g(t);
                    return p;
                })).apply(this, arguments);
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(9);
            function i(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function o(t) {
                return a.apply(this, arguments);
            }
            function a() {
                var t;
                return (
                    (t = function* ({ capabilities: t = [], triplets: e = [] }) {
                        const r = [];
                        let i = `\0 ${t.join(" ")}`;
                        for (const t of e) r.push(n.a.encode(`${t.oldoid} ${t.oid} ${t.fullRef}${i}\n`)), (i = "");
                        return r.push(n.a.flush()), r;
                    }),
                    (a = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                i(a, n, o, s, u, "next", t);
                            }
                            function u(t) {
                                i(a, n, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(0),
                i = r(9);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function a(t) {
                return s.apply(this, arguments);
            }
            function s() {
                var t;
                return (
                    (t = function* (t) {
                        const e = {};
                        let r = "";
                        const o = i.a.streamReader(t);
                        let a = yield o();
                        for (; !0 !== a; ) null !== a && (r += a.toString("utf8") + "\n"), (a = yield o());
                        const s = r.toString("utf8").split("\n");
                        if (!(a = s.shift()).startsWith("unpack ")) throw new n.b(n.a.UnparseableServerResponseFail, { line: a });
                        "unpack ok" === a ? (e.ok = ["unpack"]) : (e.errors = [a.trim()]);
                        for (const t of s) {
                            const r = t.slice(0, 2),
                                n = t.slice(3);
                            "ok" === r ? ((e.ok = e.ok || []), e.ok.push(n)) : "ng" === r && ((e.errors = e.errors || []), e.errors.push(n));
                        }
                        return e;
                    }),
                    (s = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var a = t.apply(e, r);
                            function s(t) {
                                o(a, n, i, s, u, "next", t);
                            }
                            function u(t) {
                                o(a, n, i, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            function n(t, e) {
                if (void 0 === e) {
                    const r = t.indexOf(":");
                    r > -1 ? ((e = t.slice(r + 1)), (t = t.slice(0, r))) : (e = "");
                }
                return { username: t, password: e };
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            (function (e) {
                function r(t) {
                    return Array.isArray(t) ? t : [t];
                }
                const n = /^\s+$/,
                    i = /^\\!/,
                    o = /^\\#/,
                    a = /\r?\n/g,
                    s = /^\.*\/|^\.+$/,
                    u = "/",
                    c = "undefined" != typeof Symbol ? Symbol.for("node-ignore") : "node-ignore",
                    f = (t, e, r) => Object.defineProperty(t, e, { value: r }),
                    l = /([0-z])-([0-z])/g,
                    d = [
                        [/\\?\s+$/, (t) => (0 === t.indexOf("\\") ? " " : "")],
                        [/\\\s/g, () => " "],
                        [/[\\^$.|*+(){]/g, (t) => `\\${t}`],
                        [/\[([^\]\/]*)($|\])/g, (t, e, r) => ("]" === r ? `[${((t) => t.replace(l, (t, e, r) => (e.charCodeAt(0) <= r.charCodeAt(0) ? t : "")))(e)}]` : `\\${t}`)],
                        [/(?!\\)\?/g, () => "[^/]"],
                        [/^\//, () => "^"],
                        [/\//g, () => "\\/"],
                        [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
                        [/(?:[^*])$/, (t) => (/\/$/.test(t) ? `${t}$` : `${t}(?=$|\\/$)`)],
                        [
                            /^(?=[^^])/,
                            function () {
                                return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
                            },
                        ],
                        [/\\\/\\\*\\\*(?=\\\/|$)/g, (t, e, r) => (e + 6 < r.length ? "(?:\\/[^\\/]+)*" : "\\/.+")],
                        [/(^|[^\\]+)\\\*(?=.+)/g, (t, e) => `${e}[^\\/]*`],
                        [
                            /(\^|\\\/)?\\\*$/,
                            (t, e) => {
                                return `${e ? `${e}[^/]+` : "[^/]*"}(?=$|\\/$)`;
                            },
                        ],
                        [/\\\\\\/g, () => "\\"],
                    ],
                    h = Object.create(null),
                    p = (t) => "string" == typeof t,
                    g = (t) => t && p(t) && !n.test(t) && 0 !== t.indexOf("#"),
                    m = (t) => t.split(a);
                class y {
                    constructor(t, e, r, n) {
                        (this.origin = t), (this.pattern = e), (this.negative = r), (this.regex = n);
                    }
                }
                const v = (t, e) => {
                        const r = t;
                        let n = !1;
                        0 === t.indexOf("!") && ((n = !0), (t = t.substr(1)));
                        const a = ((t, e, r) => {
                            const n = h[t];
                            if (n) return n;
                            const i = d.reduce((e, r) => e.replace(r[0], r[1].bind(t)), t);
                            return (h[t] = r ? new RegExp(i, "i") : new RegExp(i));
                        })((t = t.replace(i, "!").replace(o, "#")), 0, e);
                        return new y(r, t, n, a);
                    },
                    w = (t, e) => {
                        throw new e(t);
                    },
                    b = (t, e, r) => {
                        if (!p(t)) return r(`path must be a string, but got \`${e}\``, TypeError);
                        if (!t) return r("path must not be empty", TypeError);
                        if (b.isNotRelative(t)) {
                            return r(`path should be a ${"`path.relative()`d"} string, but got "${e}"`, RangeError);
                        }
                        return !0;
                    },
                    _ = (t) => s.test(t);
                (b.isNotRelative = _), (b.convert = (t) => t);
                class x {
                    constructor({ ignorecase: t = !0 } = {}) {
                        (this._rules = []), (this._ignorecase = t), f(this, c, !0), this._initCache();
                    }
                    _initCache() {
                        (this._ignoreCache = Object.create(null)), (this._testCache = Object.create(null));
                    }
                    _addPattern(t) {
                        if (t && t[c]) return (this._rules = this._rules.concat(t._rules)), void (this._added = !0);
                        if (g(t)) {
                            const e = v(t, this._ignorecase);
                            (this._added = !0), this._rules.push(e);
                        }
                    }
                    add(t) {
                        return (this._added = !1), r(p(t) ? m(t) : t).forEach(this._addPattern, this), this._added && this._initCache(), this;
                    }
                    addPattern(t) {
                        return this.add(t);
                    }
                    _testOne(t, e) {
                        let r = !1,
                            n = !1;
                        return (
                            this._rules.forEach((i) => {
                                const { negative: o } = i;
                                (n === o && r !== n) || (o && !r && !n && !e) || (i.regex.test(t) && ((r = !o), (n = o)));
                            }),
                            { ignored: r, unignored: n }
                        );
                    }
                    _test(t, e, r, n) {
                        const i = t && b.convert(t);
                        return b(i, t, w), this._t(i, e, r, n);
                    }
                    _t(t, e, r, n) {
                        if (t in e) return e[t];
                        if ((n || (n = t.split(u)), n.pop(), !n.length)) return (e[t] = this._testOne(t, r));
                        const i = this._t(n.join(u) + u, e, r, n);
                        return (e[t] = i.ignored ? i : this._testOne(t, r));
                    }
                    ignores(t) {
                        return this._test(t, this._ignoreCache, !1).ignored;
                    }
                    createFilter() {
                        return (t) => !this.ignores(t);
                    }
                    filter(t) {
                        return r(t).filter(this.createFilter());
                    }
                    test(t) {
                        return this._test(t, this._testCache, !0);
                    }
                }
                const E = (t) => new x(t),
                    k = () => !1;
                if (((E.isPathValid = (t) => b(t && b.convert(t), t, k)), (E.default = E), (t.exports = E), void 0 !== e && ((e.env && e.env.IGNORE_TEST_WIN32) || "win32" === e.platform))) {
                    const t = (t) => (/^\\\\\?\\/.test(t) || /["<>|\u0000-\u001F]+/u.test(t) ? t : t.replace(/\\/g, "/"));
                    b.convert = t;
                    const e = /^[a-z]:\//i;
                    b.isNotRelative = (t) => e.test(t) || _(t);
                }
            }.call(this, r(48)));
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(1),
                i = r(0);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function a(t) {
                return s.apply(this, arguments);
            }
            function s() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, type: r, object: o, format: a, oid: s }) {
                        const u = new n.a(t);
                        if ("deflated" !== a) throw new i.b(i.a.InternalFail, { message: "GitObjectStoreLoose expects objects to write to be in deflated format" });
                        const c = `${e}/${`objects/${s.slice(0, 2)}/${s.slice(2)}`}`;
                        (yield u.exists(c)) || (yield u.write(c, o));
                    }),
                    (s = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var a = t.apply(e, r);
                            function s(t) {
                                o(a, n, i, s, u, "next", t);
                            }
                            function u(t) {
                                o(a, n, i, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return o;
            });
            var n = r(1);
            function i(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function o(t) {
                return a.apply(this, arguments);
            }
            function a() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r }) {
                        const i = new n.a(t),
                            o = `objects/${r.slice(0, 2)}/${r.slice(2)}`,
                            a = yield i.read(`${e}/${o}`);
                        return a ? { object: a, format: "deflated", source: o } : null;
                    }),
                    (a = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, o) {
                            var a = t.apply(e, r);
                            function s(t) {
                                i(a, n, o, s, u, "next", t);
                            }
                            function u(t) {
                                i(a, n, o, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return u;
            });
            var n = r(1),
                i = r(0),
                o = r(56),
                a = r(2);
            function s(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function u(t) {
                return c.apply(this, arguments);
            }
            function c() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r, format: s = "content", getExternalRefDelta: u }) {
                        const c = new n.a(t);
                        let f = yield c.readdir(Object(a.a)(e, "objects/pack"));
                        f = f.filter((t) => t.endsWith(".idx"));
                        for (const t of f) {
                            const n = `${e}/objects/pack/${t}`,
                                a = yield Object(o.a)({ fs: c, filename: n, getExternalRefDelta: u });
                            if (a.error) throw new i.b(i.a.InternalFail, { message: a.error });
                            if (a.offsets.has(r)) {
                                if (!a.pack) {
                                    const t = n.replace(/idx$/, "pack");
                                    a.pack = c.read(t);
                                }
                                const e = yield a.read({ oid: r, getExternalRefDelta: u });
                                return (e.format = "content"), (e.source = `objects/pack/${t.replace(/idx$/, "pack")}`), e;
                            }
                        }
                        return null;
                    }),
                    (c = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                s(o, n, i, a, u, "next", t);
                            }
                            function u(t) {
                                s(o, n, i, a, u, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            var n;
            (n = function (t) {
                t.version = "1.2.0";
                var e = (function () {
                    for (var t = 0, e = new Array(256), r = 0; 256 != r; ++r)
                        (t =
                            1 &
                            (t =
                                1 &
                                (t =
                                    1 &
                                    (t =
                                        1 & (t = 1 & (t = 1 & (t = 1 & (t = 1 & (t = r) ? -306674912 ^ (t >>> 1) : t >>> 1) ? -306674912 ^ (t >>> 1) : t >>> 1) ? -306674912 ^ (t >>> 1) : t >>> 1) ? -306674912 ^ (t >>> 1) : t >>> 1)
                                            ? -306674912 ^ (t >>> 1)
                                            : t >>> 1)
                                        ? -306674912 ^ (t >>> 1)
                                        : t >>> 1)
                                    ? -306674912 ^ (t >>> 1)
                                    : t >>> 1)
                                ? -306674912 ^ (t >>> 1)
                                : t >>> 1),
                            (e[r] = t);
                    return "undefined" != typeof Int32Array ? new Int32Array(e) : e;
                })();
                (t.table = e),
                    (t.bstr = function (t, r) {
                        for (var n = -1 ^ r, i = t.length - 1, o = 0; o < i; ) n = ((n = (n >>> 8) ^ e[255 & (n ^ t.charCodeAt(o++))]) >>> 8) ^ e[255 & (n ^ t.charCodeAt(o++))];
                        return o === i && (n = (n >>> 8) ^ e[255 & (n ^ t.charCodeAt(o))]), -1 ^ n;
                    }),
                    (t.buf = function (t, r) {
                        if (t.length > 1e4)
                            return (function (t, r) {
                                for (var n = -1 ^ r, i = t.length - 7, o = 0; o < i; )
                                    n =
                                        ((n =
                                            ((n =
                                                ((n =
                                                    ((n = ((n = ((n = ((n = (n >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^
                                                    e[255 & (n ^ t[o++])]) >>>
                                                    8) ^
                                                e[255 & (n ^ t[o++])]) >>>
                                                8) ^
                                            e[255 & (n ^ t[o++])]) >>>
                                            8) ^
                                        e[255 & (n ^ t[o++])];
                                for (; o < i + 7; ) n = (n >>> 8) ^ e[255 & (n ^ t[o++])];
                                return -1 ^ n;
                            })(t, r);
                        for (var n = -1 ^ r, i = t.length - 3, o = 0; o < i; ) n = ((n = ((n = ((n = (n >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^ e[255 & (n ^ t[o++])]) >>> 8) ^ e[255 & (n ^ t[o++])];
                        for (; o < i + 3; ) n = (n >>> 8) ^ e[255 & (n ^ t[o++])];
                        return -1 ^ n;
                    }),
                    (t.str = function (t, r) {
                        for (var n, i, o = -1 ^ r, a = 0, s = t.length; a < s; )
                            (n = t.charCodeAt(a++)) < 128
                                ? (o = (o >>> 8) ^ e[255 & (o ^ n)])
                                : n < 2048
                                ? (o = ((o = (o >>> 8) ^ e[255 & (o ^ (192 | ((n >> 6) & 31)))]) >>> 8) ^ e[255 & (o ^ (128 | (63 & n)))])
                                : n >= 55296 && n < 57344
                                ? ((n = 64 + (1023 & n)),
                                  (i = 1023 & t.charCodeAt(a++)),
                                  (o =
                                      ((o = ((o = ((o = (o >>> 8) ^ e[255 & (o ^ (240 | ((n >> 8) & 7)))]) >>> 8) ^ e[255 & (o ^ (128 | ((n >> 2) & 63)))]) >>> 8) ^ e[255 & (o ^ (128 | ((i >> 6) & 15) | ((3 & n) << 4)))]) >>> 8) ^
                                      e[255 & (o ^ (128 | (63 & i)))]))
                                : (o = ((o = ((o = (o >>> 8) ^ e[255 & (o ^ (224 | ((n >> 12) & 15)))]) >>> 8) ^ e[255 & (o ^ (128 | ((n >> 6) & 63)))]) >>> 8) ^ e[255 & (o ^ (128 | (63 & n)))]);
                        return -1 ^ o;
                    });
            }),
                "undefined" == typeof DO_NOT_EXPORT_CRC ? n(e) : n({});
        },
        function (t, e, r) {
            t.exports = function (t, e) {
                var r,
                    i,
                    u,
                    c,
                    f,
                    l = { size: null, buffer: null },
                    d = { size: null, buffer: null };
                s(t, l), s(l.buffer, d), (t = d.buffer), (f = i = 0), (r = n.create(d.size)), (c = t.length);
                for (; f < c; ) 128 & (u = t[f++]) ? h() : p();
                return r;
                function h() {
                    n.writeUInt32LE(o, 0, 0), n.writeUInt32LE(a, 0, 0);
                    for (var s, c, l = 1, d = 0; d < 4; ++d) u & l && (o[3 - d] = t[f++]), (l <<= 1);
                    for (d = 0; d < 3; ++d) u & l && (a[3 - d] = t[f++]), (l <<= 1);
                    (a[0] = 0), (s = n.readUInt32BE(a, 0) || 65536), (c = n.readUInt32BE(o, 0)), n.copy(e, r, i, c, c + s), (i += s);
                }
                function p() {
                    n.copy(t, r, i, f, u + f), (f += u), (i += u);
                }
            };
            var n = r(116),
                i = new (r(127))(),
                o = n.create(4),
                a = n.create(4);
            function s(t, e) {
                var r = !1,
                    o = 0,
                    a = 0;
                i.ondata = function (t) {
                    (a = t), (r = !0);
                };
                do {
                    i.write(t[o++]);
                } while (!r);
                (e.size = a), (e.buffer = n.subarray(t, o));
            }
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return c;
                });
                var n = r(18),
                    i = r.n(n),
                    o = r(0),
                    a = r(57);
                function s(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function u(t) {
                    return function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                s(o, n, i, a, u, "next", t);
                            }
                            function u(t) {
                                s(o, n, i, a, u, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }
                function c(t, e) {
                    return f.apply(this, arguments);
                }
                function f() {
                    return (f = u(function* (t, e) {
                        const r = new a.a(t);
                        let n = yield r.read(4);
                        if ("PACK" !== (n = n.toString("utf8"))) throw new o.b(o.a.InternalFail, { message: `Invalid PACK header '${n}'` });
                        let s = yield r.read(4);
                        if (2 !== (s = s.readUInt32BE(0))) throw new o.b(o.a.InternalFail, { message: `Invalid packfile version: ${s}` });
                        let u = yield r.read(4);
                        if (!((u = u.readUInt32BE(0)) < 1))
                            for (; !r.eof() && u--; ) {
                                const t = r.tell(),
                                    { type: n, length: a, ofs: s, reference: c } = yield l(r),
                                    f = new i.a.Inflate();
                                for (; !f.result; ) {
                                    const i = yield r.chunk();
                                    if (r.ended) break;
                                    if ((f.push(i, !1), f.err)) throw new o.b(o.a.InternalFail, { message: `Pako error: ${f.msg}` });
                                    if (f.result) {
                                        if (f.result.length !== a) throw new o.b(o.a.InternalFail, { message: "Inflated object size is different from that stated in packfile." });
                                        yield r.undo(), yield r.read(i.length - f.strm.avail_in);
                                        const l = r.tell();
                                        e({ data: f.result, type: n, num: u, offset: t, end: l, reference: c, ofs: s });
                                    }
                                }
                            }
                    })).apply(this, arguments);
                }
                function l(t) {
                    return d.apply(this, arguments);
                }
                function d() {
                    return (d = u(function* (e) {
                        let r = yield e.byte();
                        const n = (r >> 4) & 7;
                        let i,
                            o,
                            a = 15 & r;
                        if (128 & r) {
                            let t = 4;
                            do {
                                (a |= (127 & (r = yield e.byte())) << t), (t += 7);
                            } while (128 & r);
                        }
                        if (6 === n) {
                            let n = 0;
                            i = 0;
                            const a = [];
                            do {
                                (i |= (127 & (r = yield e.byte())) << n), (n += 7), a.push(r);
                            } while (128 & r);
                            o = t.from(a);
                        }
                        if (7 === n) {
                            o = yield e.read(20);
                        }
                        return { type: n, length: a, ofs: i, reference: o };
                    })).apply(this, arguments);
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            function n(t) {
                return t
                    .split("\n")
                    .map((t) => t.replace(/^ /, ""))
                    .join("\n");
            }
            r.d(e, "a", function () {
                return n;
            });
        },
        function (t, e, r) {
            var n = r(128);
            function i(t, e) {
                for (
                    var r = [],
                        i = t.length,
                        o = e.length,
                        a = (function (t, e) {
                            var r = new n(t, e);
                            r.compose();
                            for (var i, o, a = r.getses(), s = t.length - 1, u = e.length - 1, c = a.length - 1; c >= 0; --c)
                                a[c].t === r.SES_COMMON
                                    ? (o ? ((o.chain = { file1index: s, file2index: u, chain: null }), (o = o.chain)) : (o = i = { file1index: s, file2index: u, chain: null }), s--, u--)
                                    : a[c].t === r.SES_DELETE
                                    ? s--
                                    : a[c].t === r.SES_ADD && u--;
                            var f = { file1index: -1, file2index: -1, chain: null };
                            return o ? ((o.chain = f), i) : f;
                        })(t, e);
                    null !== a;
                    a = a.chain
                ) {
                    var s = i - a.file1index - 1,
                        u = o - a.file2index - 1;
                    (i = a.file1index), (o = a.file2index), (s || u) && r.push({ file1: [i + 1, s], file2: [o + 1, u] });
                }
                return r.reverse(), r;
            }
            t.exports = function (t, e, r) {
                var n = [],
                    o = [t, e, r],
                    a = (function (t, e, r) {
                        var n,
                            o = i(e, t),
                            a = i(e, r),
                            s = [];
                        function u(t, e) {
                            s.push([t.file1[0], e, t.file1[1], t.file2[0], t.file2[1]]);
                        }
                        for (n = 0; n < o.length; n++) u(o[n], 0);
                        for (n = 0; n < a.length; n++) u(a[n], 2);
                        s.sort(function (t, e) {
                            return t[0] - e[0];
                        });
                        var c = [],
                            f = 0;
                        function l(t) {
                            t > f && (c.push([1, f, t - f]), (f = t));
                        }
                        for (var d = 0; d < s.length; d++) {
                            for (var h = d, p = s[d], g = p[0], m = g + p[2]; d < s.length - 1; ) {
                                var y = s[d + 1],
                                    v = y[0];
                                if (v > m) break;
                                (m = Math.max(m, v + y[2])), d++;
                            }
                            if ((l(g), h == d)) p[4] > 0 && c.push([p[1], p[3], p[4]]);
                            else {
                                var w = { 0: [t.length, -1, e.length, -1], 2: [r.length, -1, e.length, -1] };
                                for (n = h; n <= d; n++) {
                                    var b = w[(p = s[n])[1]],
                                        _ = p[0],
                                        x = _ + p[2],
                                        E = p[3],
                                        k = E + p[4];
                                    (b[0] = Math.min(E, b[0])), (b[1] = Math.max(k, b[1])), (b[2] = Math.min(_, b[2])), (b[3] = Math.max(x, b[3]));
                                }
                                var O = w[0][0] + (g - w[0][2]),
                                    j = w[0][1] + (m - w[0][3]),
                                    P = w[2][0] + (g - w[2][2]),
                                    S = w[2][1] + (m - w[2][3]);
                                c.push([-1, O, j - O, g, m - g, P, S - P]);
                            }
                            f = m;
                        }
                        return l(e.length), c;
                    })(t, e, r),
                    s = [];
                function u() {
                    s.length && n.push({ ok: s }), (s = []);
                }
                function c(t) {
                    for (var e = 0; e < t.length; e++) s.push(t[e]);
                }
                function f(e) {
                    if (e[2] != e[6]) return !0;
                    for (var n = e[1], i = e[5], o = 0; o < e[2]; o++) if (t[o + n] != r[o + i]) return !0;
                    return !1;
                }
                for (var l = 0; l < a.length; l++) {
                    var d = a[l],
                        h = d[0];
                    -1 == h
                        ? f(d)
                            ? (u(), n.push({ conflict: { a: t.slice(d[1], d[1] + d[2]), aIndex: d[1], o: e.slice(d[3], d[3] + d[4]), oIndex: d[3], b: r.slice(d[5], d[5] + d[6]), bIndex: d[5] } }))
                            : c(o[0].slice(d[1], d[1] + d[2]))
                        : c(o[h].slice(d[1], d[1] + d[2]));
                }
                return u(), n;
            };
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return n;
            });
            const n = { commit: 16, tree: 32, blob: 48, tag: 64, ofs_delta: 96, ref_delta: 112 };
        },
        function (t, e, r) {
            (function (e) {
                const r = "win32" === e.platform,
                    n = r ? "\\\\+" : "\\/",
                    i = r ? "\\\\" : "/",
                    o = "((?:[^/]*(?:/|$))*)",
                    a = "([^/]*)",
                    s = `((?:[^${i}]*(?:${i}|$))*)`,
                    u = `([^${i}]*)`;
                t.exports = function (t, { extended: e = !1, globstar: r = !1, strict: i = !1, filepath: c = !1, flags: f = "" } = {}) {
                    let l = "",
                        d = "",
                        h = { regex: "", segments: [] },
                        p = !1,
                        g = !1;
                    const m = [];
                    function y(t, { split: e, last: r, only: i } = {}) {
                        "path" !== i && (l += t), c && "regex" !== i && ((h.regex += "\\/" === t ? n : t), e ? (r && (d += t), "" !== d && (f.includes("g") || (d = `^${d}$`), h.segments.push(new RegExp(d, f))), (d = "")) : (d += t));
                    }
                    let v, w;
                    for (let n = 0; n < t.length; n++)
                        if (((v = t[n]), (w = t[n + 1]), ["\\", "$", "^", ".", "="].includes(v))) y(`\\${v}`);
                        else if ("/" !== v)
                            if ("(" !== v)
                                if (")" !== v)
                                    if ("|" !== v)
                                        if ("+" !== v)
                                            if ("@" === v && e && "(" === w) m.push(v);
                                            else if ("!" !== v)
                                                if ("?" !== v)
                                                    if ("[" !== v)
                                                        if ("]" !== v)
                                                            if ("{" !== v)
                                                                if ("}" !== v)
                                                                    if ("," !== v)
                                                                        if ("*" !== v) y(v);
                                                                        else {
                                                                            if ("(" === w && e) {
                                                                                m.push(v);
                                                                                continue;
                                                                            }
                                                                            let i = t[n - 1],
                                                                                c = 1;
                                                                            for (; "*" === t[n + 1]; ) c++, n++;
                                                                            let f = t[n + 1];
                                                                            if (r) {
                                                                                c > 1 && ("/" === i || void 0 === i) && ("/" === f || void 0 === f)
                                                                                    ? (y(o, { only: "regex" }), y(s, { only: "path", last: !0, split: !0 }), n++)
                                                                                    : (y(a, { only: "regex" }), y(u, { only: "path" }));
                                                                            } else y(".*");
                                                                        }
                                                                    else {
                                                                        if (p) {
                                                                            y("|");
                                                                            continue;
                                                                        }
                                                                        y(`\\${v}`);
                                                                    }
                                                                else {
                                                                    if (e) {
                                                                        (p = !1), y(")");
                                                                        continue;
                                                                    }
                                                                    y(`\\${v}`);
                                                                }
                                                            else {
                                                                if (e) {
                                                                    (p = !0), y("(");
                                                                    continue;
                                                                }
                                                                y(`\\${v}`);
                                                            }
                                                        else {
                                                            if (e) {
                                                                (g = !1), y(v);
                                                                continue;
                                                            }
                                                            y(`\\${v}`);
                                                        }
                                                    else {
                                                        if (g && ":" === w) {
                                                            n++;
                                                            let e = "";
                                                            for (; ":" !== t[++n]; ) e += t[n];
                                                            "alnum" === e ? y("(\\w|\\d)") : "space" === e ? y("\\s") : "digit" === e && y("\\d"), n++;
                                                            continue;
                                                        }
                                                        if (e) {
                                                            (g = !0), y(v);
                                                            continue;
                                                        }
                                                        y(`\\${v}`);
                                                    }
                                                else {
                                                    if (e) {
                                                        "(" === w ? m.push(v) : y(".");
                                                        continue;
                                                    }
                                                    y(`\\${v}`);
                                                }
                                            else {
                                                if (e) {
                                                    if (g) {
                                                        y("^");
                                                        continue;
                                                    }
                                                    if ("(" === w) {
                                                        m.push(v), y("(?!"), n++;
                                                        continue;
                                                    }
                                                    y(`\\${v}`);
                                                    continue;
                                                }
                                                y(`\\${v}`);
                                            }
                                        else {
                                            if ("(" === w && e) {
                                                m.push(v);
                                                continue;
                                            }
                                            y(`\\${v}`);
                                        }
                                    else {
                                        if (m.length) {
                                            y(v);
                                            continue;
                                        }
                                        y(`\\${v}`);
                                    }
                                else {
                                    if (m.length) {
                                        y(v);
                                        let t = m.pop();
                                        y("@" === t ? "{1}" : "!" === t ? "([^/]*)" : t);
                                        continue;
                                    }
                                    y(`\\${v}`);
                                }
                            else {
                                if (m.length) {
                                    y(v);
                                    continue;
                                }
                                y(`\\${v}`);
                            }
                        else y(`\\${v}`, { split: !0 }), "/" !== w || i || (l += "?");
                    f.includes("g") || ((l = `^${l}$`), (d = `^${d}$`), c && (h.regex = `^${h.regex}$`));
                    const b = { regex: new RegExp(l, f) };
                    return c && (h.segments.push(new RegExp(d, f)), (h.regex = new RegExp(h.regex, f)), (h.globstar = new RegExp(f.includes("g") ? s : `^${s}$`, f)), (b.path = h)), b;
                };
            }.call(this, r(48)));
        },
        function (t, e) {
            (e.read = function (t, e, r, n, i) {
                var o,
                    a,
                    s = 8 * i - n - 1,
                    u = (1 << s) - 1,
                    c = u >> 1,
                    f = -7,
                    l = r ? i - 1 : 0,
                    d = r ? -1 : 1,
                    h = t[e + l];
                for (l += d, o = h & ((1 << -f) - 1), h >>= -f, f += s; f > 0; o = 256 * o + t[e + l], l += d, f -= 8);
                for (a = o & ((1 << -f) - 1), o >>= -f, f += n; f > 0; a = 256 * a + t[e + l], l += d, f -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
                    (a += Math.pow(2, n)), (o -= c);
                }
                return (h ? -1 : 1) * a * Math.pow(2, o - n);
            }),
                (e.write = function (t, e, r, n, i, o) {
                    var a,
                        s,
                        u,
                        c = 8 * o - i - 1,
                        f = (1 << c) - 1,
                        l = f >> 1,
                        d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        h = n ? 0 : o - 1,
                        p = n ? 1 : -1,
                        g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                    for (
                        e = Math.abs(e),
                            isNaN(e) || e === 1 / 0
                                ? ((s = isNaN(e) ? 1 : 0), (a = f))
                                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                                  e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                                  (e += a + l >= 1 ? d / u : d * Math.pow(2, 1 - l)) * u >= 2 && (a++, (u /= 2)),
                                  a + l >= f ? ((s = 0), (a = f)) : a + l >= 1 ? ((s = (e * u - 1) * Math.pow(2, i)), (a += l)) : ((s = e * Math.pow(2, l - 1) * Math.pow(2, i)), (a = 0)));
                        i >= 8;
                        t[r + h] = 255 & s, h += p, s /= 256, i -= 8
                    );
                    for (a = (a << i) | s, c += i; c > 0; t[r + h] = 255 & a, h += p, a /= 256, c -= 8);
                    t[r + h - p] |= 128 * g;
                });
        },
        function (t, e) {
            var r = {}.toString;
            t.exports =
                Array.isArray ||
                function (t) {
                    return "[object Array]" == r.call(t);
                };
        },
        function (t, e, r) {
            "use strict";
            (function (e) {
                var r = function (t) {
                    (t = t || {}),
                        (this.Promise = t.Promise || Promise),
                        (this.queues = {}),
                        (this.domains = {}),
                        (this.domainReentrant = t.domainReentrant || !1),
                        (this.timeout = t.timeout || r.DEFAULT_TIMEOUT),
                        (this.maxPending = t.maxPending || r.DEFAULT_MAX_PENDING);
                };
                (r.DEFAULT_TIMEOUT = 0),
                    (r.DEFAULT_MAX_PENDING = 1e3),
                    (r.prototype.acquire = function (t, r, n, i) {
                        if (Array.isArray(t)) return this._acquireBatch(t, r, n, i);
                        if ("function" != typeof r) throw new Error("You must pass a function to execute");
                        var o = null,
                            a = null,
                            s = null;
                        "function" != typeof n &&
                            ((i = n),
                            (n = null),
                            (s = new this.Promise(function (t, e) {
                                (o = t), (a = e);
                            }))),
                            (i = i || {});
                        var u = !1,
                            c = null,
                            f = this,
                            l = function (e, r, i) {
                                e && (0 === f.queues[t].length && delete f.queues[t], delete f.domains[t]),
                                    u || (s ? (r ? a(r) : o(i)) : "function" == typeof n && n(r, i), (u = !0)),
                                    e && f.queues[t] && f.queues[t].length > 0 && f.queues[t].shift()();
                            },
                            d = function (n) {
                                if (u) return l(n);
                                if ((c && (clearTimeout(c), (c = null)), n && (f.domains[t] = e.domain), 1 === r.length)) {
                                    var i = !1;
                                    r(function (t, e) {
                                        i || ((i = !0), l(n, t, e));
                                    });
                                } else
                                    f._promiseTry(function () {
                                        return r();
                                    }).then(
                                        function (t) {
                                            l(n, void 0, t);
                                        },
                                        function (t) {
                                            l(n, t);
                                        }
                                    );
                            };
                        if ((e.domain && (d = e.domain.bind(d)), f.queues[t]))
                            if (f.domainReentrant && e.domain && e.domain === f.domains[t]) d(!1);
                            else if (f.queues[t].length >= f.maxPending) l(!1, new Error("Too much pending tasks"));
                            else {
                                var h = function () {
                                    d(!0);
                                };
                                i.skipQueue ? f.queues[t].unshift(h) : f.queues[t].push(h);
                                var p = i.timeout || f.timeout;
                                p &&
                                    (c = setTimeout(function () {
                                        (c = null), l(!1, new Error("async-lock timed out"));
                                    }, p));
                            }
                        else (f.queues[t] = []), d(!0);
                        return s || void 0;
                    }),
                    (r.prototype._acquireBatch = function (t, e, r, n) {
                        "function" != typeof r && ((n = r), (r = null));
                        var i = this,
                            o = e;
                        if (
                            (t.reverse().forEach(function (t) {
                                o = (function (t, e) {
                                    return function (r) {
                                        i.acquire(t, e, r, n);
                                    };
                                })(t, o);
                            }),
                            "function" != typeof r)
                        )
                            return new this.Promise(function (t, e) {
                                1 === o.length
                                    ? o(function (r, n) {
                                          r ? e(r) : t(n);
                                      })
                                    : t(o());
                            });
                        o(r);
                    }),
                    (r.prototype.isBusy = function (t) {
                        return t ? !!this.queues[t] : Object.keys(this.queues).length > 0;
                    }),
                    (r.prototype._promiseTry = function (t) {
                        try {
                            return this.Promise.resolve(t());
                        } catch (t) {
                            return this.Promise.reject(t);
                        }
                    }),
                    (t.exports = r);
            }.call(this, r(48)));
        },
        function (t, e) {
            "function" == typeof Object.create
                ? (t.exports = function (t, e) {
                      (t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }));
                  })
                : (t.exports = function (t, e) {
                      t.super_ = e;
                      var r = function () {};
                      (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
                  });
        },
        function (t, e, r) {
            var n = r(77).Buffer;
            function i(t, e) {
                (this._block = n.alloc(t)), (this._finalSize = e), (this._blockSize = t), (this._len = 0);
            }
            (i.prototype.update = function (t, e) {
                "string" == typeof t && ((e = e || "utf8"), (t = n.from(t, e)));
                for (var r = this._block, i = this._blockSize, o = t.length, a = this._len, s = 0; s < o; ) {
                    for (var u = a % i, c = Math.min(o - s, i - u), f = 0; f < c; f++) r[u + f] = t[s + f];
                    (s += c), (a += c) % i == 0 && this._update(r);
                }
                return (this._len += o), this;
            }),
                (i.prototype.digest = function (t) {
                    var e = this._len % this._blockSize;
                    (this._block[e] = 128), this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
                    var r = 8 * this._len;
                    if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                    else {
                        var n = (4294967295 & r) >>> 0,
                            i = (r - n) / 4294967296;
                        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
                    }
                    this._update(this._block);
                    var o = this._hash();
                    return t ? o.toString(t) : o;
                }),
                (i.prototype._update = function () {
                    throw new Error("_update must be implemented by subclass");
                }),
                (t.exports = i);
        },
        function (t, e, r) {
            "use strict";
            var n = r(109),
                i = r(25),
                o = r(80),
                a = r(64),
                s = r(81),
                u = Object.prototype.toString,
                c = 0,
                f = -1,
                l = 0,
                d = 8;
            function h(t) {
                if (!(this instanceof h)) return new h(t);
                this.options = i.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, t || {});
                var e = this.options;
                e.raw && e.windowBits > 0 ? (e.windowBits = -e.windowBits) : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new s()),
                    (this.strm.avail_out = 0);
                var r = n.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                if (r !== c) throw new Error(a[r]);
                if ((e.header && n.deflateSetHeader(this.strm, e.header), e.dictionary)) {
                    var p;
                    if (((p = "string" == typeof e.dictionary ? o.string2buf(e.dictionary) : "[object ArrayBuffer]" === u.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary), (r = n.deflateSetDictionary(this.strm, p)) !== c))
                        throw new Error(a[r]);
                    this._dict_set = !0;
                }
            }
            function p(t, e) {
                var r = new h(e);
                if ((r.push(t, !0), r.err)) throw r.msg || a[r.err];
                return r.result;
            }
            (h.prototype.push = function (t, e) {
                var r,
                    a,
                    s = this.strm,
                    f = this.options.chunkSize;
                if (this.ended) return !1;
                (a = e === ~~e ? e : !0 === e ? 4 : 0),
                    "string" == typeof t ? (s.input = o.string2buf(t)) : "[object ArrayBuffer]" === u.call(t) ? (s.input = new Uint8Array(t)) : (s.input = t),
                    (s.next_in = 0),
                    (s.avail_in = s.input.length);
                do {
                    if ((0 === s.avail_out && ((s.output = new i.Buf8(f)), (s.next_out = 0), (s.avail_out = f)), 1 !== (r = n.deflate(s, a)) && r !== c)) return this.onEnd(r), (this.ended = !0), !1;
                    (0 !== s.avail_out && (0 !== s.avail_in || (4 !== a && 2 !== a))) || ("string" === this.options.to ? this.onData(o.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
                } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== r);
                return 4 === a ? ((r = n.deflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === c) : 2 !== a || (this.onEnd(c), (s.avail_out = 0), !0);
            }),
                (h.prototype.onData = function (t) {
                    this.chunks.push(t);
                }),
                (h.prototype.onEnd = function (t) {
                    t === c && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = i.flattenChunks(this.chunks))), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
                }),
                (e.Deflate = h),
                (e.deflate = p),
                (e.deflateRaw = function (t, e) {
                    return ((e = e || {}).raw = !0), p(t, e);
                }),
                (e.gzip = function (t, e) {
                    return ((e = e || {}).gzip = !0), p(t, e);
                });
        },
        function (t, e, r) {
            "use strict";
            var n,
                i = r(25),
                o = r(110),
                a = r(78),
                s = r(79),
                u = r(64),
                c = 0,
                f = 1,
                l = 3,
                d = 4,
                h = 5,
                p = 0,
                g = 1,
                m = -2,
                y = -3,
                v = -5,
                w = -1,
                b = 1,
                _ = 2,
                x = 3,
                E = 4,
                k = 0,
                O = 2,
                j = 8,
                P = 9,
                S = 15,
                R = 8,
                $ = 286,
                A = 30,
                T = 19,
                I = 2 * $ + 1,
                B = 15,
                F = 3,
                U = 258,
                M = U + F + 1,
                C = 32,
                N = 42,
                D = 69,
                z = 73,
                H = 91,
                L = 103,
                G = 113,
                q = 666,
                W = 1,
                Y = 2,
                Z = 3,
                K = 4,
                V = 3;
            function X(t, e) {
                return (t.msg = u[e]), e;
            }
            function J(t) {
                return (t << 1) - (t > 4 ? 9 : 0);
            }
            function Q(t) {
                for (var e = t.length; --e >= 0; ) t[e] = 0;
            }
            function tt(t) {
                var e = t.state,
                    r = e.pending;
                r > t.avail_out && (r = t.avail_out),
                    0 !== r && (i.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out), (t.next_out += r), (e.pending_out += r), (t.total_out += r), (t.avail_out -= r), (e.pending -= r), 0 === e.pending && (e.pending_out = 0));
            }
            function et(t, e) {
                o._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), (t.block_start = t.strstart), tt(t.strm);
            }
            function rt(t, e) {
                t.pending_buf[t.pending++] = e;
            }
            function nt(t, e) {
                (t.pending_buf[t.pending++] = (e >>> 8) & 255), (t.pending_buf[t.pending++] = 255 & e);
            }
            function it(t, e) {
                var r,
                    n,
                    i = t.max_chain_length,
                    o = t.strstart,
                    a = t.prev_length,
                    s = t.nice_match,
                    u = t.strstart > t.w_size - M ? t.strstart - (t.w_size - M) : 0,
                    c = t.window,
                    f = t.w_mask,
                    l = t.prev,
                    d = t.strstart + U,
                    h = c[o + a - 1],
                    p = c[o + a];
                t.prev_length >= t.good_match && (i >>= 2), s > t.lookahead && (s = t.lookahead);
                do {
                    if (c[(r = e) + a] === p && c[r + a - 1] === h && c[r] === c[o] && c[++r] === c[o + 1]) {
                        (o += 2), r++;
                        do {} while (c[++o] === c[++r] && c[++o] === c[++r] && c[++o] === c[++r] && c[++o] === c[++r] && c[++o] === c[++r] && c[++o] === c[++r] && c[++o] === c[++r] && c[++o] === c[++r] && o < d);
                        if (((n = U - (d - o)), (o = d - U), n > a)) {
                            if (((t.match_start = e), (a = n), n >= s)) break;
                            (h = c[o + a - 1]), (p = c[o + a]);
                        }
                    }
                } while ((e = l[e & f]) > u && 0 != --i);
                return a <= t.lookahead ? a : t.lookahead;
            }
            function ot(t) {
                var e,
                    r,
                    n,
                    o,
                    u,
                    c,
                    f,
                    l,
                    d,
                    h,
                    p = t.w_size;
                do {
                    if (((o = t.window_size - t.lookahead - t.strstart), t.strstart >= p + (p - M))) {
                        i.arraySet(t.window, t.window, p, p, 0), (t.match_start -= p), (t.strstart -= p), (t.block_start -= p), (e = r = t.hash_size);
                        do {
                            (n = t.head[--e]), (t.head[e] = n >= p ? n - p : 0);
                        } while (--r);
                        e = r = p;
                        do {
                            (n = t.prev[--e]), (t.prev[e] = n >= p ? n - p : 0);
                        } while (--r);
                        o += p;
                    }
                    if (0 === t.strm.avail_in) break;
                    if (
                        ((c = t.strm),
                        (f = t.window),
                        (l = t.strstart + t.lookahead),
                        (d = o),
                        (h = void 0),
                        (h = c.avail_in) > d && (h = d),
                        (r =
                            0 === h
                                ? 0
                                : ((c.avail_in -= h),
                                  i.arraySet(f, c.input, c.next_in, h, l),
                                  1 === c.state.wrap ? (c.adler = a(c.adler, f, h, l)) : 2 === c.state.wrap && (c.adler = s(c.adler, f, h, l)),
                                  (c.next_in += h),
                                  (c.total_in += h),
                                  h)),
                        (t.lookahead += r),
                        t.lookahead + t.insert >= F)
                    )
                        for (
                            u = t.strstart - t.insert, t.ins_h = t.window[u], t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[u + 1]) & t.hash_mask;
                            t.insert && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[u + F - 1]) & t.hash_mask), (t.prev[u & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = u), u++, t.insert--, !(t.lookahead + t.insert < F));

                        );
                } while (t.lookahead < M && 0 !== t.strm.avail_in);
            }
            function at(t, e) {
                for (var r, n; ; ) {
                    if (t.lookahead < M) {
                        if ((ot(t), t.lookahead < M && e === c)) return W;
                        if (0 === t.lookahead) break;
                    }
                    if (
                        ((r = 0),
                        t.lookahead >= F && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + F - 1]) & t.hash_mask), (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart)),
                        0 !== r && t.strstart - r <= t.w_size - M && (t.match_length = it(t, r)),
                        t.match_length >= F)
                    )
                        if (((n = o._tr_tally(t, t.strstart - t.match_start, t.match_length - F)), (t.lookahead -= t.match_length), t.match_length <= t.max_lazy_match && t.lookahead >= F)) {
                            t.match_length--;
                            do {
                                t.strstart++, (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + F - 1]) & t.hash_mask), (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart);
                            } while (0 != --t.match_length);
                            t.strstart++;
                        } else (t.strstart += t.match_length), (t.match_length = 0), (t.ins_h = t.window[t.strstart]), (t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) & t.hash_mask);
                    else (n = o._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
                    if (n && (et(t, !1), 0 === t.strm.avail_out)) return W;
                }
                return (t.insert = t.strstart < F - 1 ? t.strstart : F - 1), e === d ? (et(t, !0), 0 === t.strm.avail_out ? Z : K) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? W : Y;
            }
            function st(t, e) {
                for (var r, n, i; ; ) {
                    if (t.lookahead < M) {
                        if ((ot(t), t.lookahead < M && e === c)) return W;
                        if (0 === t.lookahead) break;
                    }
                    if (
                        ((r = 0),
                        t.lookahead >= F && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + F - 1]) & t.hash_mask), (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart)),
                        (t.prev_length = t.match_length),
                        (t.prev_match = t.match_start),
                        (t.match_length = F - 1),
                        0 !== r &&
                            t.prev_length < t.max_lazy_match &&
                            t.strstart - r <= t.w_size - M &&
                            ((t.match_length = it(t, r)), t.match_length <= 5 && (t.strategy === b || (t.match_length === F && t.strstart - t.match_start > 4096)) && (t.match_length = F - 1)),
                        t.prev_length >= F && t.match_length <= t.prev_length)
                    ) {
                        (i = t.strstart + t.lookahead - F), (n = o._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - F)), (t.lookahead -= t.prev_length - 1), (t.prev_length -= 2);
                        do {
                            ++t.strstart <= i && ((t.ins_h = ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + F - 1]) & t.hash_mask), (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]), (t.head[t.ins_h] = t.strstart));
                        } while (0 != --t.prev_length);
                        if (((t.match_available = 0), (t.match_length = F - 1), t.strstart++, n && (et(t, !1), 0 === t.strm.avail_out))) return W;
                    } else if (t.match_available) {
                        if (((n = o._tr_tally(t, 0, t.window[t.strstart - 1])) && et(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out)) return W;
                    } else (t.match_available = 1), t.strstart++, t.lookahead--;
                }
                return (
                    t.match_available && ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])), (t.match_available = 0)),
                    (t.insert = t.strstart < F - 1 ? t.strstart : F - 1),
                    e === d ? (et(t, !0), 0 === t.strm.avail_out ? Z : K) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? W : Y
                );
            }
            function ut(t, e, r, n, i) {
                (this.good_length = t), (this.max_lazy = e), (this.nice_length = r), (this.max_chain = n), (this.func = i);
            }
            function ct() {
                (this.strm = null),
                    (this.status = 0),
                    (this.pending_buf = null),
                    (this.pending_buf_size = 0),
                    (this.pending_out = 0),
                    (this.pending = 0),
                    (this.wrap = 0),
                    (this.gzhead = null),
                    (this.gzindex = 0),
                    (this.method = j),
                    (this.last_flush = -1),
                    (this.w_size = 0),
                    (this.w_bits = 0),
                    (this.w_mask = 0),
                    (this.window = null),
                    (this.window_size = 0),
                    (this.prev = null),
                    (this.head = null),
                    (this.ins_h = 0),
                    (this.hash_size = 0),
                    (this.hash_bits = 0),
                    (this.hash_mask = 0),
                    (this.hash_shift = 0),
                    (this.block_start = 0),
                    (this.match_length = 0),
                    (this.prev_match = 0),
                    (this.match_available = 0),
                    (this.strstart = 0),
                    (this.match_start = 0),
                    (this.lookahead = 0),
                    (this.prev_length = 0),
                    (this.max_chain_length = 0),
                    (this.max_lazy_match = 0),
                    (this.level = 0),
                    (this.strategy = 0),
                    (this.good_match = 0),
                    (this.nice_match = 0),
                    (this.dyn_ltree = new i.Buf16(2 * I)),
                    (this.dyn_dtree = new i.Buf16(2 * (2 * A + 1))),
                    (this.bl_tree = new i.Buf16(2 * (2 * T + 1))),
                    Q(this.dyn_ltree),
                    Q(this.dyn_dtree),
                    Q(this.bl_tree),
                    (this.l_desc = null),
                    (this.d_desc = null),
                    (this.bl_desc = null),
                    (this.bl_count = new i.Buf16(B + 1)),
                    (this.heap = new i.Buf16(2 * $ + 1)),
                    Q(this.heap),
                    (this.heap_len = 0),
                    (this.heap_max = 0),
                    (this.depth = new i.Buf16(2 * $ + 1)),
                    Q(this.depth),
                    (this.l_buf = 0),
                    (this.lit_bufsize = 0),
                    (this.last_lit = 0),
                    (this.d_buf = 0),
                    (this.opt_len = 0),
                    (this.static_len = 0),
                    (this.matches = 0),
                    (this.insert = 0),
                    (this.bi_buf = 0),
                    (this.bi_valid = 0);
            }
            function ft(t) {
                var e;
                return t && t.state
                    ? ((t.total_in = t.total_out = 0),
                      (t.data_type = O),
                      ((e = t.state).pending = 0),
                      (e.pending_out = 0),
                      e.wrap < 0 && (e.wrap = -e.wrap),
                      (e.status = e.wrap ? N : G),
                      (t.adler = 2 === e.wrap ? 0 : 1),
                      (e.last_flush = c),
                      o._tr_init(e),
                      p)
                    : X(t, m);
            }
            function lt(t) {
                var e,
                    r = ft(t);
                return (
                    r === p &&
                        (((e = t.state).window_size = 2 * e.w_size),
                        Q(e.head),
                        (e.max_lazy_match = n[e.level].max_lazy),
                        (e.good_match = n[e.level].good_length),
                        (e.nice_match = n[e.level].nice_length),
                        (e.max_chain_length = n[e.level].max_chain),
                        (e.strstart = 0),
                        (e.block_start = 0),
                        (e.lookahead = 0),
                        (e.insert = 0),
                        (e.match_length = e.prev_length = F - 1),
                        (e.match_available = 0),
                        (e.ins_h = 0)),
                    r
                );
            }
            function dt(t, e, r, n, o, a) {
                if (!t) return m;
                var s = 1;
                if ((e === w && (e = 6), n < 0 ? ((s = 0), (n = -n)) : n > 15 && ((s = 2), (n -= 16)), o < 1 || o > P || r !== j || n < 8 || n > 15 || e < 0 || e > 9 || a < 0 || a > E)) return X(t, m);
                8 === n && (n = 9);
                var u = new ct();
                return (
                    (t.state = u),
                    (u.strm = t),
                    (u.wrap = s),
                    (u.gzhead = null),
                    (u.w_bits = n),
                    (u.w_size = 1 << u.w_bits),
                    (u.w_mask = u.w_size - 1),
                    (u.hash_bits = o + 7),
                    (u.hash_size = 1 << u.hash_bits),
                    (u.hash_mask = u.hash_size - 1),
                    (u.hash_shift = ~~((u.hash_bits + F - 1) / F)),
                    (u.window = new i.Buf8(2 * u.w_size)),
                    (u.head = new i.Buf16(u.hash_size)),
                    (u.prev = new i.Buf16(u.w_size)),
                    (u.lit_bufsize = 1 << (o + 6)),
                    (u.pending_buf_size = 4 * u.lit_bufsize),
                    (u.pending_buf = new i.Buf8(u.pending_buf_size)),
                    (u.d_buf = 1 * u.lit_bufsize),
                    (u.l_buf = 3 * u.lit_bufsize),
                    (u.level = e),
                    (u.strategy = a),
                    (u.method = r),
                    lt(t)
                );
            }
            (n = [
                new ut(0, 0, 0, 0, function (t, e) {
                    var r = 65535;
                    for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
                        if (t.lookahead <= 1) {
                            if ((ot(t), 0 === t.lookahead && e === c)) return W;
                            if (0 === t.lookahead) break;
                        }
                        (t.strstart += t.lookahead), (t.lookahead = 0);
                        var n = t.block_start + r;
                        if ((0 === t.strstart || t.strstart >= n) && ((t.lookahead = t.strstart - n), (t.strstart = n), et(t, !1), 0 === t.strm.avail_out)) return W;
                        if (t.strstart - t.block_start >= t.w_size - M && (et(t, !1), 0 === t.strm.avail_out)) return W;
                    }
                    return (t.insert = 0), e === d ? (et(t, !0), 0 === t.strm.avail_out ? Z : K) : (t.strstart > t.block_start && (et(t, !1), t.strm.avail_out), W);
                }),
                new ut(4, 4, 8, 4, at),
                new ut(4, 5, 16, 8, at),
                new ut(4, 6, 32, 32, at),
                new ut(4, 4, 16, 16, st),
                new ut(8, 16, 32, 32, st),
                new ut(8, 16, 128, 128, st),
                new ut(8, 32, 128, 256, st),
                new ut(32, 128, 258, 1024, st),
                new ut(32, 258, 258, 4096, st),
            ]),
                (e.deflateInit = function (t, e) {
                    return dt(t, e, j, S, R, k);
                }),
                (e.deflateInit2 = dt),
                (e.deflateReset = lt),
                (e.deflateResetKeep = ft),
                (e.deflateSetHeader = function (t, e) {
                    return t && t.state ? (2 !== t.state.wrap ? m : ((t.state.gzhead = e), p)) : m;
                }),
                (e.deflate = function (t, e) {
                    var r, i, a, u;
                    if (!t || !t.state || e > h || e < 0) return t ? X(t, m) : m;
                    if (((i = t.state), !t.output || (!t.input && 0 !== t.avail_in) || (i.status === q && e !== d))) return X(t, 0 === t.avail_out ? v : m);
                    if (((i.strm = t), (r = i.last_flush), (i.last_flush = e), i.status === N))
                        if (2 === i.wrap)
                            (t.adler = 0),
                                rt(i, 31),
                                rt(i, 139),
                                rt(i, 8),
                                i.gzhead
                                    ? (rt(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)),
                                      rt(i, 255 & i.gzhead.time),
                                      rt(i, (i.gzhead.time >> 8) & 255),
                                      rt(i, (i.gzhead.time >> 16) & 255),
                                      rt(i, (i.gzhead.time >> 24) & 255),
                                      rt(i, 9 === i.level ? 2 : i.strategy >= _ || i.level < 2 ? 4 : 0),
                                      rt(i, 255 & i.gzhead.os),
                                      i.gzhead.extra && i.gzhead.extra.length && (rt(i, 255 & i.gzhead.extra.length), rt(i, (i.gzhead.extra.length >> 8) & 255)),
                                      i.gzhead.hcrc && (t.adler = s(t.adler, i.pending_buf, i.pending, 0)),
                                      (i.gzindex = 0),
                                      (i.status = D))
                                    : (rt(i, 0), rt(i, 0), rt(i, 0), rt(i, 0), rt(i, 0), rt(i, 9 === i.level ? 2 : i.strategy >= _ || i.level < 2 ? 4 : 0), rt(i, V), (i.status = G));
                        else {
                            var y = (j + ((i.w_bits - 8) << 4)) << 8;
                            (y |= (i.strategy >= _ || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6),
                                0 !== i.strstart && (y |= C),
                                (y += 31 - (y % 31)),
                                (i.status = G),
                                nt(i, y),
                                0 !== i.strstart && (nt(i, t.adler >>> 16), nt(i, 65535 & t.adler)),
                                (t.adler = 1);
                        }
                    if (i.status === D)
                        if (i.gzhead.extra) {
                            for (
                                a = i.pending;
                                i.gzindex < (65535 & i.gzhead.extra.length) &&
                                (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)), tt(t), (a = i.pending), i.pending !== i.pending_buf_size));

                            )
                                rt(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                            i.gzhead.hcrc && i.pending > a && (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)), i.gzindex === i.gzhead.extra.length && ((i.gzindex = 0), (i.status = z));
                        } else i.status = z;
                    if (i.status === z)
                        if (i.gzhead.name) {
                            a = i.pending;
                            do {
                                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)), tt(t), (a = i.pending), i.pending === i.pending_buf_size)) {
                                    u = 1;
                                    break;
                                }
                                (u = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0), rt(i, u);
                            } while (0 !== u);
                            i.gzhead.hcrc && i.pending > a && (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)), 0 === u && ((i.gzindex = 0), (i.status = H));
                        } else i.status = H;
                    if (i.status === H)
                        if (i.gzhead.comment) {
                            a = i.pending;
                            do {
                                if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)), tt(t), (a = i.pending), i.pending === i.pending_buf_size)) {
                                    u = 1;
                                    break;
                                }
                                (u = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0), rt(i, u);
                            } while (0 !== u);
                            i.gzhead.hcrc && i.pending > a && (t.adler = s(t.adler, i.pending_buf, i.pending - a, a)), 0 === u && (i.status = L);
                        } else i.status = L;
                    if (
                        (i.status === L &&
                            (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && tt(t), i.pending + 2 <= i.pending_buf_size && (rt(i, 255 & t.adler), rt(i, (t.adler >> 8) & 255), (t.adler = 0), (i.status = G))) : (i.status = G)),
                        0 !== i.pending)
                    ) {
                        if ((tt(t), 0 === t.avail_out)) return (i.last_flush = -1), p;
                    } else if (0 === t.avail_in && J(e) <= J(r) && e !== d) return X(t, v);
                    if (i.status === q && 0 !== t.avail_in) return X(t, v);
                    if (0 !== t.avail_in || 0 !== i.lookahead || (e !== c && i.status !== q)) {
                        var w =
                            i.strategy === _
                                ? (function (t, e) {
                                      for (var r; ; ) {
                                          if (0 === t.lookahead && (ot(t), 0 === t.lookahead)) {
                                              if (e === c) return W;
                                              break;
                                          }
                                          if (((t.match_length = 0), (r = o._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++, r && (et(t, !1), 0 === t.strm.avail_out))) return W;
                                      }
                                      return (t.insert = 0), e === d ? (et(t, !0), 0 === t.strm.avail_out ? Z : K) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? W : Y;
                                  })(i, e)
                                : i.strategy === x
                                ? (function (t, e) {
                                      for (var r, n, i, a, s = t.window; ; ) {
                                          if (t.lookahead <= U) {
                                              if ((ot(t), t.lookahead <= U && e === c)) return W;
                                              if (0 === t.lookahead) break;
                                          }
                                          if (((t.match_length = 0), t.lookahead >= F && t.strstart > 0 && (n = s[(i = t.strstart - 1)]) === s[++i] && n === s[++i] && n === s[++i])) {
                                              a = t.strstart + U;
                                              do {} while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < a);
                                              (t.match_length = U - (a - i)), t.match_length > t.lookahead && (t.match_length = t.lookahead);
                                          }
                                          if (
                                              (t.match_length >= F
                                                  ? ((r = o._tr_tally(t, 1, t.match_length - F)), (t.lookahead -= t.match_length), (t.strstart += t.match_length), (t.match_length = 0))
                                                  : ((r = o._tr_tally(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++),
                                              r && (et(t, !1), 0 === t.strm.avail_out))
                                          )
                                              return W;
                                      }
                                      return (t.insert = 0), e === d ? (et(t, !0), 0 === t.strm.avail_out ? Z : K) : t.last_lit && (et(t, !1), 0 === t.strm.avail_out) ? W : Y;
                                  })(i, e)
                                : n[i.level].func(i, e);
                        if (((w !== Z && w !== K) || (i.status = q), w === W || w === Z)) return 0 === t.avail_out && (i.last_flush = -1), p;
                        if (
                            w === Y &&
                            (e === f ? o._tr_align(i) : e !== h && (o._tr_stored_block(i, 0, 0, !1), e === l && (Q(i.head), 0 === i.lookahead && ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))), tt(t), 0 === t.avail_out)
                        )
                            return (i.last_flush = -1), p;
                    }
                    return e !== d
                        ? p
                        : i.wrap <= 0
                        ? g
                        : (2 === i.wrap
                              ? (rt(i, 255 & t.adler),
                                rt(i, (t.adler >> 8) & 255),
                                rt(i, (t.adler >> 16) & 255),
                                rt(i, (t.adler >> 24) & 255),
                                rt(i, 255 & t.total_in),
                                rt(i, (t.total_in >> 8) & 255),
                                rt(i, (t.total_in >> 16) & 255),
                                rt(i, (t.total_in >> 24) & 255))
                              : (nt(i, t.adler >>> 16), nt(i, 65535 & t.adler)),
                          tt(t),
                          i.wrap > 0 && (i.wrap = -i.wrap),
                          0 !== i.pending ? p : g);
                }),
                (e.deflateEnd = function (t) {
                    var e;
                    return t && t.state ? ((e = t.state.status) !== N && e !== D && e !== z && e !== H && e !== L && e !== G && e !== q ? X(t, m) : ((t.state = null), e === G ? X(t, y) : p)) : m;
                }),
                (e.deflateSetDictionary = function (t, e) {
                    var r,
                        n,
                        o,
                        s,
                        u,
                        c,
                        f,
                        l,
                        d = e.length;
                    if (!t || !t.state) return m;
                    if (2 === (s = (r = t.state).wrap) || (1 === s && r.status !== N) || r.lookahead) return m;
                    for (
                        1 === s && (t.adler = a(t.adler, e, d, 0)),
                            r.wrap = 0,
                            d >= r.w_size && (0 === s && (Q(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0)), (l = new i.Buf8(r.w_size)), i.arraySet(l, e, d - r.w_size, r.w_size, 0), (e = l), (d = r.w_size)),
                            u = t.avail_in,
                            c = t.next_in,
                            f = t.input,
                            t.avail_in = d,
                            t.next_in = 0,
                            t.input = e,
                            ot(r);
                        r.lookahead >= F;

                    ) {
                        (n = r.strstart), (o = r.lookahead - (F - 1));
                        do {
                            (r.ins_h = ((r.ins_h << r.hash_shift) ^ r.window[n + F - 1]) & r.hash_mask), (r.prev[n & r.w_mask] = r.head[r.ins_h]), (r.head[r.ins_h] = n), n++;
                        } while (--o);
                        (r.strstart = n), (r.lookahead = F - 1), ot(r);
                    }
                    return (
                        (r.strstart += r.lookahead),
                        (r.block_start = r.strstart),
                        (r.insert = r.lookahead),
                        (r.lookahead = 0),
                        (r.match_length = r.prev_length = F - 1),
                        (r.match_available = 0),
                        (t.next_in = c),
                        (t.input = f),
                        (t.avail_in = u),
                        (r.wrap = s),
                        p
                    );
                }),
                (e.deflateInfo = "pako deflate (from Nodeca project)");
        },
        function (t, e, r) {
            "use strict";
            var n = r(25),
                i = 4,
                o = 0,
                a = 1,
                s = 2;
            function u(t) {
                for (var e = t.length; --e >= 0; ) t[e] = 0;
            }
            var c = 0,
                f = 1,
                l = 2,
                d = 29,
                h = 256,
                p = h + 1 + d,
                g = 30,
                m = 19,
                y = 2 * p + 1,
                v = 15,
                w = 16,
                b = 7,
                _ = 256,
                x = 16,
                E = 17,
                k = 18,
                O = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                j = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                P = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                R = new Array(2 * (p + 2));
            u(R);
            var $ = new Array(2 * g);
            u($);
            var A = new Array(512);
            u(A);
            var T = new Array(256);
            u(T);
            var I = new Array(d);
            u(I);
            var B,
                F,
                U,
                M = new Array(g);
            function C(t, e, r, n, i) {
                (this.static_tree = t), (this.extra_bits = e), (this.extra_base = r), (this.elems = n), (this.max_length = i), (this.has_stree = t && t.length);
            }
            function N(t, e) {
                (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
            }
            function D(t) {
                return t < 256 ? A[t] : A[256 + (t >>> 7)];
            }
            function z(t, e) {
                (t.pending_buf[t.pending++] = 255 & e), (t.pending_buf[t.pending++] = (e >>> 8) & 255);
            }
            function H(t, e, r) {
                t.bi_valid > w - r ? ((t.bi_buf |= (e << t.bi_valid) & 65535), z(t, t.bi_buf), (t.bi_buf = e >> (w - t.bi_valid)), (t.bi_valid += r - w)) : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r));
            }
            function L(t, e, r) {
                H(t, r[2 * e], r[2 * e + 1]);
            }
            function G(t, e) {
                var r = 0;
                do {
                    (r |= 1 & t), (t >>>= 1), (r <<= 1);
                } while (--e > 0);
                return r >>> 1;
            }
            function q(t, e, r) {
                var n,
                    i,
                    o = new Array(v + 1),
                    a = 0;
                for (n = 1; n <= v; n++) o[n] = a = (a + r[n - 1]) << 1;
                for (i = 0; i <= e; i++) {
                    var s = t[2 * i + 1];
                    0 !== s && (t[2 * i] = G(o[s]++, s));
                }
            }
            function W(t) {
                var e;
                for (e = 0; e < p; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < g; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < m; e++) t.bl_tree[2 * e] = 0;
                (t.dyn_ltree[2 * _] = 1), (t.opt_len = t.static_len = 0), (t.last_lit = t.matches = 0);
            }
            function Y(t) {
                t.bi_valid > 8 ? z(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0);
            }
            function Z(t, e, r, n) {
                var i = 2 * e,
                    o = 2 * r;
                return t[i] < t[o] || (t[i] === t[o] && n[e] <= n[r]);
            }
            function K(t, e, r) {
                for (var n = t.heap[r], i = r << 1; i <= t.heap_len && (i < t.heap_len && Z(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !Z(e, n, t.heap[i], t.depth)); ) (t.heap[r] = t.heap[i]), (r = i), (i <<= 1);
                t.heap[r] = n;
            }
            function V(t, e, r) {
                var n,
                    i,
                    o,
                    a,
                    s = 0;
                if (0 !== t.last_lit)
                    do {
                        (n = (t.pending_buf[t.d_buf + 2 * s] << 8) | t.pending_buf[t.d_buf + 2 * s + 1]),
                            (i = t.pending_buf[t.l_buf + s]),
                            s++,
                            0 === n ? L(t, i, e) : (L(t, (o = T[i]) + h + 1, e), 0 !== (a = O[o]) && H(t, (i -= I[o]), a), L(t, (o = D(--n)), r), 0 !== (a = j[o]) && H(t, (n -= M[o]), a));
                    } while (s < t.last_lit);
                L(t, _, e);
            }
            function X(t, e) {
                var r,
                    n,
                    i,
                    o = e.dyn_tree,
                    a = e.stat_desc.static_tree,
                    s = e.stat_desc.has_stree,
                    u = e.stat_desc.elems,
                    c = -1;
                for (t.heap_len = 0, t.heap_max = y, r = 0; r < u; r++) 0 !== o[2 * r] ? ((t.heap[++t.heap_len] = c = r), (t.depth[r] = 0)) : (o[2 * r + 1] = 0);
                for (; t.heap_len < 2; ) (o[2 * (i = t.heap[++t.heap_len] = c < 2 ? ++c : 0)] = 1), (t.depth[i] = 0), t.opt_len--, s && (t.static_len -= a[2 * i + 1]);
                for (e.max_code = c, r = t.heap_len >> 1; r >= 1; r--) K(t, o, r);
                i = u;
                do {
                    (r = t.heap[1]),
                        (t.heap[1] = t.heap[t.heap_len--]),
                        K(t, o, 1),
                        (n = t.heap[1]),
                        (t.heap[--t.heap_max] = r),
                        (t.heap[--t.heap_max] = n),
                        (o[2 * i] = o[2 * r] + o[2 * n]),
                        (t.depth[i] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1),
                        (o[2 * r + 1] = o[2 * n + 1] = i),
                        (t.heap[1] = i++),
                        K(t, o, 1);
                } while (t.heap_len >= 2);
                (t.heap[--t.heap_max] = t.heap[1]),
                    (function (t, e) {
                        var r,
                            n,
                            i,
                            o,
                            a,
                            s,
                            u = e.dyn_tree,
                            c = e.max_code,
                            f = e.stat_desc.static_tree,
                            l = e.stat_desc.has_stree,
                            d = e.stat_desc.extra_bits,
                            h = e.stat_desc.extra_base,
                            p = e.stat_desc.max_length,
                            g = 0;
                        for (o = 0; o <= v; o++) t.bl_count[o] = 0;
                        for (u[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < y; r++)
                            (o = u[2 * u[2 * (n = t.heap[r]) + 1] + 1] + 1) > p && ((o = p), g++),
                                (u[2 * n + 1] = o),
                                n > c || (t.bl_count[o]++, (a = 0), n >= h && (a = d[n - h]), (s = u[2 * n]), (t.opt_len += s * (o + a)), l && (t.static_len += s * (f[2 * n + 1] + a)));
                        if (0 !== g) {
                            do {
                                for (o = p - 1; 0 === t.bl_count[o]; ) o--;
                                t.bl_count[o]--, (t.bl_count[o + 1] += 2), t.bl_count[p]--, (g -= 2);
                            } while (g > 0);
                            for (o = p; 0 !== o; o--) for (n = t.bl_count[o]; 0 !== n; ) (i = t.heap[--r]) > c || (u[2 * i + 1] !== o && ((t.opt_len += (o - u[2 * i + 1]) * u[2 * i]), (u[2 * i + 1] = o)), n--);
                        }
                    })(t, e),
                    q(o, c, t.bl_count);
            }
            function J(t, e, r) {
                var n,
                    i,
                    o = -1,
                    a = e[1],
                    s = 0,
                    u = 7,
                    c = 4;
                for (0 === a && ((u = 138), (c = 3)), e[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)
                    (i = a),
                        (a = e[2 * (n + 1) + 1]),
                        (++s < u && i === a) ||
                            (s < c ? (t.bl_tree[2 * i] += s) : 0 !== i ? (i !== o && t.bl_tree[2 * i]++, t.bl_tree[2 * x]++) : s <= 10 ? t.bl_tree[2 * E]++ : t.bl_tree[2 * k]++,
                            (s = 0),
                            (o = i),
                            0 === a ? ((u = 138), (c = 3)) : i === a ? ((u = 6), (c = 3)) : ((u = 7), (c = 4)));
            }
            function Q(t, e, r) {
                var n,
                    i,
                    o = -1,
                    a = e[1],
                    s = 0,
                    u = 7,
                    c = 4;
                for (0 === a && ((u = 138), (c = 3)), n = 0; n <= r; n++)
                    if (((i = a), (a = e[2 * (n + 1) + 1]), !(++s < u && i === a))) {
                        if (s < c)
                            do {
                                L(t, i, t.bl_tree);
                            } while (0 != --s);
                        else 0 !== i ? (i !== o && (L(t, i, t.bl_tree), s--), L(t, x, t.bl_tree), H(t, s - 3, 2)) : s <= 10 ? (L(t, E, t.bl_tree), H(t, s - 3, 3)) : (L(t, k, t.bl_tree), H(t, s - 11, 7));
                        (s = 0), (o = i), 0 === a ? ((u = 138), (c = 3)) : i === a ? ((u = 6), (c = 3)) : ((u = 7), (c = 4));
                    }
            }
            u(M);
            var tt = !1;
            function et(t, e, r, i) {
                H(t, (c << 1) + (i ? 1 : 0), 3),
                    (function (t, e, r, i) {
                        Y(t), i && (z(t, r), z(t, ~r)), n.arraySet(t.pending_buf, t.window, e, r, t.pending), (t.pending += r);
                    })(t, e, r, !0);
            }
            (e._tr_init = function (t) {
                tt ||
                    (!(function () {
                        var t,
                            e,
                            r,
                            n,
                            i,
                            o = new Array(v + 1);
                        for (r = 0, n = 0; n < d - 1; n++) for (I[n] = r, t = 0; t < 1 << O[n]; t++) T[r++] = n;
                        for (T[r - 1] = n, i = 0, n = 0; n < 16; n++) for (M[n] = i, t = 0; t < 1 << j[n]; t++) A[i++] = n;
                        for (i >>= 7; n < g; n++) for (M[n] = i << 7, t = 0; t < 1 << (j[n] - 7); t++) A[256 + i++] = n;
                        for (e = 0; e <= v; e++) o[e] = 0;
                        for (t = 0; t <= 143; ) (R[2 * t + 1] = 8), t++, o[8]++;
                        for (; t <= 255; ) (R[2 * t + 1] = 9), t++, o[9]++;
                        for (; t <= 279; ) (R[2 * t + 1] = 7), t++, o[7]++;
                        for (; t <= 287; ) (R[2 * t + 1] = 8), t++, o[8]++;
                        for (q(R, p + 1, o), t = 0; t < g; t++) ($[2 * t + 1] = 5), ($[2 * t] = G(t, 5));
                        (B = new C(R, O, h + 1, p, v)), (F = new C($, j, 0, g, v)), (U = new C(new Array(0), P, 0, m, b));
                    })(),
                    (tt = !0)),
                    (t.l_desc = new N(t.dyn_ltree, B)),
                    (t.d_desc = new N(t.dyn_dtree, F)),
                    (t.bl_desc = new N(t.bl_tree, U)),
                    (t.bi_buf = 0),
                    (t.bi_valid = 0),
                    W(t);
            }),
                (e._tr_stored_block = et),
                (e._tr_flush_block = function (t, e, r, n) {
                    var u,
                        c,
                        d = 0;
                    t.level > 0
                        ? (t.strm.data_type === s &&
                              (t.strm.data_type = (function (t) {
                                  var e,
                                      r = 4093624447;
                                  for (e = 0; e <= 31; e++, r >>>= 1) if (1 & r && 0 !== t.dyn_ltree[2 * e]) return o;
                                  if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return a;
                                  for (e = 32; e < h; e++) if (0 !== t.dyn_ltree[2 * e]) return a;
                                  return o;
                              })(t)),
                          X(t, t.l_desc),
                          X(t, t.d_desc),
                          (d = (function (t) {
                              var e;
                              for (J(t, t.dyn_ltree, t.l_desc.max_code), J(t, t.dyn_dtree, t.d_desc.max_code), X(t, t.bl_desc), e = m - 1; e >= 3 && 0 === t.bl_tree[2 * S[e] + 1]; e--);
                              return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                          })(t)),
                          (u = (t.opt_len + 3 + 7) >>> 3),
                          (c = (t.static_len + 3 + 7) >>> 3) <= u && (u = c))
                        : (u = c = r + 5),
                        r + 4 <= u && -1 !== e
                            ? et(t, e, r, n)
                            : t.strategy === i || c === u
                            ? (H(t, (f << 1) + (n ? 1 : 0), 3), V(t, R, $))
                            : (H(t, (l << 1) + (n ? 1 : 0), 3),
                              (function (t, e, r, n) {
                                  var i;
                                  for (H(t, e - 257, 5), H(t, r - 1, 5), H(t, n - 4, 4), i = 0; i < n; i++) H(t, t.bl_tree[2 * S[i] + 1], 3);
                                  Q(t, t.dyn_ltree, e - 1), Q(t, t.dyn_dtree, r - 1);
                              })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, d + 1),
                              V(t, t.dyn_ltree, t.dyn_dtree)),
                        W(t),
                        n && Y(t);
                }),
                (e._tr_tally = function (t, e, r) {
                    return (
                        (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                        (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
                        t.last_lit++,
                        0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (T[r] + h + 1)]++, t.dyn_dtree[2 * D(e)]++),
                        t.last_lit === t.lit_bufsize - 1
                    );
                }),
                (e._tr_align = function (t) {
                    H(t, f << 1, 3),
                        L(t, _, R),
                        (function (t) {
                            16 === t.bi_valid ? (z(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0)) : t.bi_valid >= 8 && ((t.pending_buf[t.pending++] = 255 & t.bi_buf), (t.bi_buf >>= 8), (t.bi_valid -= 8));
                        })(t);
                });
        },
        function (t, e, r) {
            "use strict";
            var n = r(112),
                i = r(25),
                o = r(80),
                a = r(82),
                s = r(64),
                u = r(81),
                c = r(115),
                f = Object.prototype.toString;
            function l(t) {
                if (!(this instanceof l)) return new l(t);
                this.options = i.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t || {});
                var e = this.options;
                e.raw && e.windowBits >= 0 && e.windowBits < 16 && ((e.windowBits = -e.windowBits), 0 === e.windowBits && (e.windowBits = -15)),
                    !(e.windowBits >= 0 && e.windowBits < 16) || (t && t.windowBits) || (e.windowBits += 32),
                    e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new u()),
                    (this.strm.avail_out = 0);
                var r = n.inflateInit2(this.strm, e.windowBits);
                if (r !== a.Z_OK) throw new Error(s[r]);
                if (
                    ((this.header = new c()),
                    n.inflateGetHeader(this.strm, this.header),
                    e.dictionary &&
                        ("string" == typeof e.dictionary ? (e.dictionary = o.string2buf(e.dictionary)) : "[object ArrayBuffer]" === f.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)),
                        e.raw && (r = n.inflateSetDictionary(this.strm, e.dictionary)) !== a.Z_OK))
                )
                    throw new Error(s[r]);
            }
            function d(t, e) {
                var r = new l(e);
                if ((r.push(t, !0), r.err)) throw r.msg || s[r.err];
                return r.result;
            }
            (l.prototype.push = function (t, e) {
                var r,
                    s,
                    u,
                    c,
                    l,
                    d = this.strm,
                    h = this.options.chunkSize,
                    p = this.options.dictionary,
                    g = !1;
                if (this.ended) return !1;
                (s = e === ~~e ? e : !0 === e ? a.Z_FINISH : a.Z_NO_FLUSH),
                    "string" == typeof t ? (d.input = o.binstring2buf(t)) : "[object ArrayBuffer]" === f.call(t) ? (d.input = new Uint8Array(t)) : (d.input = t),
                    (d.next_in = 0),
                    (d.avail_in = d.input.length);
                do {
                    if (
                        (0 === d.avail_out && ((d.output = new i.Buf8(h)), (d.next_out = 0), (d.avail_out = h)),
                        (r = n.inflate(d, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && p && (r = n.inflateSetDictionary(this.strm, p)),
                        r === a.Z_BUF_ERROR && !0 === g && ((r = a.Z_OK), (g = !1)),
                        r !== a.Z_STREAM_END && r !== a.Z_OK)
                    )
                        return this.onEnd(r), (this.ended = !0), !1;
                    d.next_out &&
                        ((0 !== d.avail_out && r !== a.Z_STREAM_END && (0 !== d.avail_in || (s !== a.Z_FINISH && s !== a.Z_SYNC_FLUSH))) ||
                            ("string" === this.options.to
                                ? ((u = o.utf8border(d.output, d.next_out)), (c = d.next_out - u), (l = o.buf2string(d.output, u)), (d.next_out = c), (d.avail_out = h - c), c && i.arraySet(d.output, d.output, u, c, 0), this.onData(l))
                                : this.onData(i.shrinkBuf(d.output, d.next_out)))),
                        0 === d.avail_in && 0 === d.avail_out && (g = !0);
                } while ((d.avail_in > 0 || 0 === d.avail_out) && r !== a.Z_STREAM_END);
                return r === a.Z_STREAM_END && (s = a.Z_FINISH), s === a.Z_FINISH ? ((r = n.inflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === a.Z_OK) : s !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), (d.avail_out = 0), !0);
            }),
                (l.prototype.onData = function (t) {
                    this.chunks.push(t);
                }),
                (l.prototype.onEnd = function (t) {
                    t === a.Z_OK && ("string" === this.options.to ? (this.result = this.chunks.join("")) : (this.result = i.flattenChunks(this.chunks))), (this.chunks = []), (this.err = t), (this.msg = this.strm.msg);
                }),
                (e.Inflate = l),
                (e.inflate = d),
                (e.inflateRaw = function (t, e) {
                    return ((e = e || {}).raw = !0), d(t, e);
                }),
                (e.ungzip = d);
        },
        function (t, e, r) {
            "use strict";
            var n = r(25),
                i = r(78),
                o = r(79),
                a = r(113),
                s = r(114),
                u = 0,
                c = 1,
                f = 2,
                l = 4,
                d = 5,
                h = 6,
                p = 0,
                g = 1,
                m = 2,
                y = -2,
                v = -3,
                w = -4,
                b = -5,
                _ = 8,
                x = 1,
                E = 2,
                k = 3,
                O = 4,
                j = 5,
                P = 6,
                S = 7,
                R = 8,
                $ = 9,
                A = 10,
                T = 11,
                I = 12,
                B = 13,
                F = 14,
                U = 15,
                M = 16,
                C = 17,
                N = 18,
                D = 19,
                z = 20,
                H = 21,
                L = 22,
                G = 23,
                q = 24,
                W = 25,
                Y = 26,
                Z = 27,
                K = 28,
                V = 29,
                X = 30,
                J = 31,
                Q = 32,
                tt = 852,
                et = 592,
                rt = 15;
            function nt(t) {
                return ((t >>> 24) & 255) + ((t >>> 8) & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
            }
            function it() {
                (this.mode = 0),
                    (this.last = !1),
                    (this.wrap = 0),
                    (this.havedict = !1),
                    (this.flags = 0),
                    (this.dmax = 0),
                    (this.check = 0),
                    (this.total = 0),
                    (this.head = null),
                    (this.wbits = 0),
                    (this.wsize = 0),
                    (this.whave = 0),
                    (this.wnext = 0),
                    (this.window = null),
                    (this.hold = 0),
                    (this.bits = 0),
                    (this.length = 0),
                    (this.offset = 0),
                    (this.extra = 0),
                    (this.lencode = null),
                    (this.distcode = null),
                    (this.lenbits = 0),
                    (this.distbits = 0),
                    (this.ncode = 0),
                    (this.nlen = 0),
                    (this.ndist = 0),
                    (this.have = 0),
                    (this.next = null),
                    (this.lens = new n.Buf16(320)),
                    (this.work = new n.Buf16(288)),
                    (this.lendyn = null),
                    (this.distdyn = null),
                    (this.sane = 0),
                    (this.back = 0),
                    (this.was = 0);
            }
            function ot(t) {
                var e;
                return t && t.state
                    ? ((e = t.state),
                      (t.total_in = t.total_out = e.total = 0),
                      (t.msg = ""),
                      e.wrap && (t.adler = 1 & e.wrap),
                      (e.mode = x),
                      (e.last = 0),
                      (e.havedict = 0),
                      (e.dmax = 32768),
                      (e.head = null),
                      (e.hold = 0),
                      (e.bits = 0),
                      (e.lencode = e.lendyn = new n.Buf32(tt)),
                      (e.distcode = e.distdyn = new n.Buf32(et)),
                      (e.sane = 1),
                      (e.back = -1),
                      p)
                    : y;
            }
            function at(t) {
                var e;
                return t && t.state ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), ot(t)) : y;
            }
            function st(t, e) {
                var r, n;
                return t && t.state
                    ? ((n = t.state), e < 0 ? ((r = 0), (e = -e)) : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? y : (null !== n.window && n.wbits !== e && (n.window = null), (n.wrap = r), (n.wbits = e), at(t)))
                    : y;
            }
            function ut(t, e) {
                var r, n;
                return t ? ((n = new it()), (t.state = n), (n.window = null), (r = st(t, e)) !== p && (t.state = null), r) : y;
            }
            var ct,
                ft,
                lt = !0;
            function dt(t) {
                if (lt) {
                    var e;
                    for (ct = new n.Buf32(512), ft = new n.Buf32(32), e = 0; e < 144; ) t.lens[e++] = 8;
                    for (; e < 256; ) t.lens[e++] = 9;
                    for (; e < 280; ) t.lens[e++] = 7;
                    for (; e < 288; ) t.lens[e++] = 8;
                    for (s(c, t.lens, 0, 288, ct, 0, t.work, { bits: 9 }), e = 0; e < 32; ) t.lens[e++] = 5;
                    s(f, t.lens, 0, 32, ft, 0, t.work, { bits: 5 }), (lt = !1);
                }
                (t.lencode = ct), (t.lenbits = 9), (t.distcode = ft), (t.distbits = 5);
            }
            function ht(t, e, r, i) {
                var o,
                    a = t.state;
                return (
                    null === a.window && ((a.wsize = 1 << a.wbits), (a.wnext = 0), (a.whave = 0), (a.window = new n.Buf8(a.wsize))),
                    i >= a.wsize
                        ? (n.arraySet(a.window, e, r - a.wsize, a.wsize, 0), (a.wnext = 0), (a.whave = a.wsize))
                        : ((o = a.wsize - a.wnext) > i && (o = i),
                          n.arraySet(a.window, e, r - i, o, a.wnext),
                          (i -= o) ? (n.arraySet(a.window, e, r - i, i, 0), (a.wnext = i), (a.whave = a.wsize)) : ((a.wnext += o), a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += o))),
                    0
                );
            }
            (e.inflateReset = at),
                (e.inflateReset2 = st),
                (e.inflateResetKeep = ot),
                (e.inflateInit = function (t) {
                    return ut(t, rt);
                }),
                (e.inflateInit2 = ut),
                (e.inflate = function (t, e) {
                    var r,
                        tt,
                        et,
                        rt,
                        it,
                        ot,
                        at,
                        st,
                        ut,
                        ct,
                        ft,
                        lt,
                        pt,
                        gt,
                        mt,
                        yt,
                        vt,
                        wt,
                        bt,
                        _t,
                        xt,
                        Et,
                        kt,
                        Ot,
                        jt = 0,
                        Pt = new n.Buf8(4),
                        St = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                    if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in)) return y;
                    (r = t.state).mode === I && (r.mode = B), (it = t.next_out), (et = t.output), (at = t.avail_out), (rt = t.next_in), (tt = t.input), (ot = t.avail_in), (st = r.hold), (ut = r.bits), (ct = ot), (ft = at), (Et = p);
                    t: for (;;)
                        switch (r.mode) {
                            case x:
                                if (0 === r.wrap) {
                                    r.mode = B;
                                    break;
                                }
                                for (; ut < 16; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                if (2 & r.wrap && 35615 === st) {
                                    (r.check = 0), (Pt[0] = 255 & st), (Pt[1] = (st >>> 8) & 255), (r.check = o(r.check, Pt, 2, 0)), (st = 0), (ut = 0), (r.mode = E);
                                    break;
                                }
                                if (((r.flags = 0), r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & st) << 8) + (st >> 8)) % 31)) {
                                    (t.msg = "incorrect header check"), (r.mode = X);
                                    break;
                                }
                                if ((15 & st) !== _) {
                                    (t.msg = "unknown compression method"), (r.mode = X);
                                    break;
                                }
                                if (((ut -= 4), (xt = 8 + (15 & (st >>>= 4))), 0 === r.wbits)) r.wbits = xt;
                                else if (xt > r.wbits) {
                                    (t.msg = "invalid window size"), (r.mode = X);
                                    break;
                                }
                                (r.dmax = 1 << xt), (t.adler = r.check = 1), (r.mode = 512 & st ? A : I), (st = 0), (ut = 0);
                                break;
                            case E:
                                for (; ut < 16; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                if (((r.flags = st), (255 & r.flags) !== _)) {
                                    (t.msg = "unknown compression method"), (r.mode = X);
                                    break;
                                }
                                if (57344 & r.flags) {
                                    (t.msg = "unknown header flags set"), (r.mode = X);
                                    break;
                                }
                                r.head && (r.head.text = (st >> 8) & 1), 512 & r.flags && ((Pt[0] = 255 & st), (Pt[1] = (st >>> 8) & 255), (r.check = o(r.check, Pt, 2, 0))), (st = 0), (ut = 0), (r.mode = k);
                            case k:
                                for (; ut < 32; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                r.head && (r.head.time = st),
                                    512 & r.flags && ((Pt[0] = 255 & st), (Pt[1] = (st >>> 8) & 255), (Pt[2] = (st >>> 16) & 255), (Pt[3] = (st >>> 24) & 255), (r.check = o(r.check, Pt, 4, 0))),
                                    (st = 0),
                                    (ut = 0),
                                    (r.mode = O);
                            case O:
                                for (; ut < 16; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                r.head && ((r.head.xflags = 255 & st), (r.head.os = st >> 8)), 512 & r.flags && ((Pt[0] = 255 & st), (Pt[1] = (st >>> 8) & 255), (r.check = o(r.check, Pt, 2, 0))), (st = 0), (ut = 0), (r.mode = j);
                            case j:
                                if (1024 & r.flags) {
                                    for (; ut < 16; ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    (r.length = st), r.head && (r.head.extra_len = st), 512 & r.flags && ((Pt[0] = 255 & st), (Pt[1] = (st >>> 8) & 255), (r.check = o(r.check, Pt, 2, 0))), (st = 0), (ut = 0);
                                } else r.head && (r.head.extra = null);
                                r.mode = P;
                            case P:
                                if (
                                    1024 & r.flags &&
                                    ((lt = r.length) > ot && (lt = ot),
                                    lt &&
                                        (r.head && ((xt = r.head.extra_len - r.length), r.head.extra || (r.head.extra = new Array(r.head.extra_len)), n.arraySet(r.head.extra, tt, rt, lt, xt)),
                                        512 & r.flags && (r.check = o(r.check, tt, lt, rt)),
                                        (ot -= lt),
                                        (rt += lt),
                                        (r.length -= lt)),
                                    r.length)
                                )
                                    break t;
                                (r.length = 0), (r.mode = S);
                            case S:
                                if (2048 & r.flags) {
                                    if (0 === ot) break t;
                                    lt = 0;
                                    do {
                                        (xt = tt[rt + lt++]), r.head && xt && r.length < 65536 && (r.head.name += String.fromCharCode(xt));
                                    } while (xt && lt < ot);
                                    if ((512 & r.flags && (r.check = o(r.check, tt, lt, rt)), (ot -= lt), (rt += lt), xt)) break t;
                                } else r.head && (r.head.name = null);
                                (r.length = 0), (r.mode = R);
                            case R:
                                if (4096 & r.flags) {
                                    if (0 === ot) break t;
                                    lt = 0;
                                    do {
                                        (xt = tt[rt + lt++]), r.head && xt && r.length < 65536 && (r.head.comment += String.fromCharCode(xt));
                                    } while (xt && lt < ot);
                                    if ((512 & r.flags && (r.check = o(r.check, tt, lt, rt)), (ot -= lt), (rt += lt), xt)) break t;
                                } else r.head && (r.head.comment = null);
                                r.mode = $;
                            case $:
                                if (512 & r.flags) {
                                    for (; ut < 16; ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    if (st !== (65535 & r.check)) {
                                        (t.msg = "header crc mismatch"), (r.mode = X);
                                        break;
                                    }
                                    (st = 0), (ut = 0);
                                }
                                r.head && ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)), (t.adler = r.check = 0), (r.mode = I);
                                break;
                            case A:
                                for (; ut < 32; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                (t.adler = r.check = nt(st)), (st = 0), (ut = 0), (r.mode = T);
                            case T:
                                if (0 === r.havedict) return (t.next_out = it), (t.avail_out = at), (t.next_in = rt), (t.avail_in = ot), (r.hold = st), (r.bits = ut), m;
                                (t.adler = r.check = 1), (r.mode = I);
                            case I:
                                if (e === d || e === h) break t;
                            case B:
                                if (r.last) {
                                    (st >>>= 7 & ut), (ut -= 7 & ut), (r.mode = Z);
                                    break;
                                }
                                for (; ut < 3; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                switch (((r.last = 1 & st), (ut -= 1), 3 & (st >>>= 1))) {
                                    case 0:
                                        r.mode = F;
                                        break;
                                    case 1:
                                        if ((dt(r), (r.mode = z), e === h)) {
                                            (st >>>= 2), (ut -= 2);
                                            break t;
                                        }
                                        break;
                                    case 2:
                                        r.mode = C;
                                        break;
                                    case 3:
                                        (t.msg = "invalid block type"), (r.mode = X);
                                }
                                (st >>>= 2), (ut -= 2);
                                break;
                            case F:
                                for (st >>>= 7 & ut, ut -= 7 & ut; ut < 32; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                if ((65535 & st) != ((st >>> 16) ^ 65535)) {
                                    (t.msg = "invalid stored block lengths"), (r.mode = X);
                                    break;
                                }
                                if (((r.length = 65535 & st), (st = 0), (ut = 0), (r.mode = U), e === h)) break t;
                            case U:
                                r.mode = M;
                            case M:
                                if ((lt = r.length)) {
                                    if ((lt > ot && (lt = ot), lt > at && (lt = at), 0 === lt)) break t;
                                    n.arraySet(et, tt, rt, lt, it), (ot -= lt), (rt += lt), (at -= lt), (it += lt), (r.length -= lt);
                                    break;
                                }
                                r.mode = I;
                                break;
                            case C:
                                for (; ut < 14; ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                if (((r.nlen = 257 + (31 & st)), (st >>>= 5), (ut -= 5), (r.ndist = 1 + (31 & st)), (st >>>= 5), (ut -= 5), (r.ncode = 4 + (15 & st)), (st >>>= 4), (ut -= 4), r.nlen > 286 || r.ndist > 30)) {
                                    (t.msg = "too many length or distance symbols"), (r.mode = X);
                                    break;
                                }
                                (r.have = 0), (r.mode = N);
                            case N:
                                for (; r.have < r.ncode; ) {
                                    for (; ut < 3; ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    (r.lens[St[r.have++]] = 7 & st), (st >>>= 3), (ut -= 3);
                                }
                                for (; r.have < 19; ) r.lens[St[r.have++]] = 0;
                                if (((r.lencode = r.lendyn), (r.lenbits = 7), (kt = { bits: r.lenbits }), (Et = s(u, r.lens, 0, 19, r.lencode, 0, r.work, kt)), (r.lenbits = kt.bits), Et)) {
                                    (t.msg = "invalid code lengths set"), (r.mode = X);
                                    break;
                                }
                                (r.have = 0), (r.mode = D);
                            case D:
                                for (; r.have < r.nlen + r.ndist; ) {
                                    for (; (yt = ((jt = r.lencode[st & ((1 << r.lenbits) - 1)]) >>> 16) & 255), (vt = 65535 & jt), !((mt = jt >>> 24) <= ut); ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    if (vt < 16) (st >>>= mt), (ut -= mt), (r.lens[r.have++] = vt);
                                    else {
                                        if (16 === vt) {
                                            for (Ot = mt + 2; ut < Ot; ) {
                                                if (0 === ot) break t;
                                                ot--, (st += tt[rt++] << ut), (ut += 8);
                                            }
                                            if (((st >>>= mt), (ut -= mt), 0 === r.have)) {
                                                (t.msg = "invalid bit length repeat"), (r.mode = X);
                                                break;
                                            }
                                            (xt = r.lens[r.have - 1]), (lt = 3 + (3 & st)), (st >>>= 2), (ut -= 2);
                                        } else if (17 === vt) {
                                            for (Ot = mt + 3; ut < Ot; ) {
                                                if (0 === ot) break t;
                                                ot--, (st += tt[rt++] << ut), (ut += 8);
                                            }
                                            (ut -= mt), (xt = 0), (lt = 3 + (7 & (st >>>= mt))), (st >>>= 3), (ut -= 3);
                                        } else {
                                            for (Ot = mt + 7; ut < Ot; ) {
                                                if (0 === ot) break t;
                                                ot--, (st += tt[rt++] << ut), (ut += 8);
                                            }
                                            (ut -= mt), (xt = 0), (lt = 11 + (127 & (st >>>= mt))), (st >>>= 7), (ut -= 7);
                                        }
                                        if (r.have + lt > r.nlen + r.ndist) {
                                            (t.msg = "invalid bit length repeat"), (r.mode = X);
                                            break;
                                        }
                                        for (; lt--; ) r.lens[r.have++] = xt;
                                    }
                                }
                                if (r.mode === X) break;
                                if (0 === r.lens[256]) {
                                    (t.msg = "invalid code -- missing end-of-block"), (r.mode = X);
                                    break;
                                }
                                if (((r.lenbits = 9), (kt = { bits: r.lenbits }), (Et = s(c, r.lens, 0, r.nlen, r.lencode, 0, r.work, kt)), (r.lenbits = kt.bits), Et)) {
                                    (t.msg = "invalid literal/lengths set"), (r.mode = X);
                                    break;
                                }
                                if (((r.distbits = 6), (r.distcode = r.distdyn), (kt = { bits: r.distbits }), (Et = s(f, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, kt)), (r.distbits = kt.bits), Et)) {
                                    (t.msg = "invalid distances set"), (r.mode = X);
                                    break;
                                }
                                if (((r.mode = z), e === h)) break t;
                            case z:
                                r.mode = H;
                            case H:
                                if (ot >= 6 && at >= 258) {
                                    (t.next_out = it),
                                        (t.avail_out = at),
                                        (t.next_in = rt),
                                        (t.avail_in = ot),
                                        (r.hold = st),
                                        (r.bits = ut),
                                        a(t, ft),
                                        (it = t.next_out),
                                        (et = t.output),
                                        (at = t.avail_out),
                                        (rt = t.next_in),
                                        (tt = t.input),
                                        (ot = t.avail_in),
                                        (st = r.hold),
                                        (ut = r.bits),
                                        r.mode === I && (r.back = -1);
                                    break;
                                }
                                for (r.back = 0; (yt = ((jt = r.lencode[st & ((1 << r.lenbits) - 1)]) >>> 16) & 255), (vt = 65535 & jt), !((mt = jt >>> 24) <= ut); ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                if (yt && 0 == (240 & yt)) {
                                    for (wt = mt, bt = yt, _t = vt; (yt = ((jt = r.lencode[_t + ((st & ((1 << (wt + bt)) - 1)) >> wt)]) >>> 16) & 255), (vt = 65535 & jt), !(wt + (mt = jt >>> 24) <= ut); ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    (st >>>= wt), (ut -= wt), (r.back += wt);
                                }
                                if (((st >>>= mt), (ut -= mt), (r.back += mt), (r.length = vt), 0 === yt)) {
                                    r.mode = Y;
                                    break;
                                }
                                if (32 & yt) {
                                    (r.back = -1), (r.mode = I);
                                    break;
                                }
                                if (64 & yt) {
                                    (t.msg = "invalid literal/length code"), (r.mode = X);
                                    break;
                                }
                                (r.extra = 15 & yt), (r.mode = L);
                            case L:
                                if (r.extra) {
                                    for (Ot = r.extra; ut < Ot; ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    (r.length += st & ((1 << r.extra) - 1)), (st >>>= r.extra), (ut -= r.extra), (r.back += r.extra);
                                }
                                (r.was = r.length), (r.mode = G);
                            case G:
                                for (; (yt = ((jt = r.distcode[st & ((1 << r.distbits) - 1)]) >>> 16) & 255), (vt = 65535 & jt), !((mt = jt >>> 24) <= ut); ) {
                                    if (0 === ot) break t;
                                    ot--, (st += tt[rt++] << ut), (ut += 8);
                                }
                                if (0 == (240 & yt)) {
                                    for (wt = mt, bt = yt, _t = vt; (yt = ((jt = r.distcode[_t + ((st & ((1 << (wt + bt)) - 1)) >> wt)]) >>> 16) & 255), (vt = 65535 & jt), !(wt + (mt = jt >>> 24) <= ut); ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    (st >>>= wt), (ut -= wt), (r.back += wt);
                                }
                                if (((st >>>= mt), (ut -= mt), (r.back += mt), 64 & yt)) {
                                    (t.msg = "invalid distance code"), (r.mode = X);
                                    break;
                                }
                                (r.offset = vt), (r.extra = 15 & yt), (r.mode = q);
                            case q:
                                if (r.extra) {
                                    for (Ot = r.extra; ut < Ot; ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    (r.offset += st & ((1 << r.extra) - 1)), (st >>>= r.extra), (ut -= r.extra), (r.back += r.extra);
                                }
                                if (r.offset > r.dmax) {
                                    (t.msg = "invalid distance too far back"), (r.mode = X);
                                    break;
                                }
                                r.mode = W;
                            case W:
                                if (0 === at) break t;
                                if (((lt = ft - at), r.offset > lt)) {
                                    if ((lt = r.offset - lt) > r.whave && r.sane) {
                                        (t.msg = "invalid distance too far back"), (r.mode = X);
                                        break;
                                    }
                                    lt > r.wnext ? ((lt -= r.wnext), (pt = r.wsize - lt)) : (pt = r.wnext - lt), lt > r.length && (lt = r.length), (gt = r.window);
                                } else (gt = et), (pt = it - r.offset), (lt = r.length);
                                lt > at && (lt = at), (at -= lt), (r.length -= lt);
                                do {
                                    et[it++] = gt[pt++];
                                } while (--lt);
                                0 === r.length && (r.mode = H);
                                break;
                            case Y:
                                if (0 === at) break t;
                                (et[it++] = r.length), at--, (r.mode = H);
                                break;
                            case Z:
                                if (r.wrap) {
                                    for (; ut < 32; ) {
                                        if (0 === ot) break t;
                                        ot--, (st |= tt[rt++] << ut), (ut += 8);
                                    }
                                    if (((ft -= at), (t.total_out += ft), (r.total += ft), ft && (t.adler = r.check = r.flags ? o(r.check, et, ft, it - ft) : i(r.check, et, ft, it - ft)), (ft = at), (r.flags ? st : nt(st)) !== r.check)) {
                                        (t.msg = "incorrect data check"), (r.mode = X);
                                        break;
                                    }
                                    (st = 0), (ut = 0);
                                }
                                r.mode = K;
                            case K:
                                if (r.wrap && r.flags) {
                                    for (; ut < 32; ) {
                                        if (0 === ot) break t;
                                        ot--, (st += tt[rt++] << ut), (ut += 8);
                                    }
                                    if (st !== (4294967295 & r.total)) {
                                        (t.msg = "incorrect length check"), (r.mode = X);
                                        break;
                                    }
                                    (st = 0), (ut = 0);
                                }
                                r.mode = V;
                            case V:
                                Et = g;
                                break t;
                            case X:
                                Et = v;
                                break t;
                            case J:
                                return w;
                            case Q:
                            default:
                                return y;
                        }
                    return (
                        (t.next_out = it),
                        (t.avail_out = at),
                        (t.next_in = rt),
                        (t.avail_in = ot),
                        (r.hold = st),
                        (r.bits = ut),
                        (r.wsize || (ft !== t.avail_out && r.mode < X && (r.mode < Z || e !== l))) && ht(t, t.output, t.next_out, ft - t.avail_out)
                            ? ((r.mode = J), w)
                            : ((ct -= t.avail_in),
                              (ft -= t.avail_out),
                              (t.total_in += ct),
                              (t.total_out += ft),
                              (r.total += ft),
                              r.wrap && ft && (t.adler = r.check = r.flags ? o(r.check, et, ft, t.next_out - ft) : i(r.check, et, ft, t.next_out - ft)),
                              (t.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === I ? 128 : 0) + (r.mode === z || r.mode === U ? 256 : 0)),
                              ((0 === ct && 0 === ft) || e === l) && Et === p && (Et = b),
                              Et)
                    );
                }),
                (e.inflateEnd = function (t) {
                    if (!t || !t.state) return y;
                    var e = t.state;
                    return e.window && (e.window = null), (t.state = null), p;
                }),
                (e.inflateGetHeader = function (t, e) {
                    var r;
                    return t && t.state ? (0 == (2 & (r = t.state).wrap) ? y : ((r.head = e), (e.done = !1), p)) : y;
                }),
                (e.inflateSetDictionary = function (t, e) {
                    var r,
                        n = e.length;
                    return t && t.state ? (0 !== (r = t.state).wrap && r.mode !== T ? y : r.mode === T && i(1, e, n, 0) !== r.check ? v : ht(t, e, n, n) ? ((r.mode = J), w) : ((r.havedict = 1), p)) : y;
                }),
                (e.inflateInfo = "pako inflate (from Nodeca project)");
        },
        function (t, e, r) {
            "use strict";
            t.exports = function (t, e) {
                var r, n, i, o, a, s, u, c, f, l, d, h, p, g, m, y, v, w, b, _, x, E, k, O, j;
                (r = t.state),
                    (n = t.next_in),
                    (O = t.input),
                    (i = n + (t.avail_in - 5)),
                    (o = t.next_out),
                    (j = t.output),
                    (a = o - (e - t.avail_out)),
                    (s = o + (t.avail_out - 257)),
                    (u = r.dmax),
                    (c = r.wsize),
                    (f = r.whave),
                    (l = r.wnext),
                    (d = r.window),
                    (h = r.hold),
                    (p = r.bits),
                    (g = r.lencode),
                    (m = r.distcode),
                    (y = (1 << r.lenbits) - 1),
                    (v = (1 << r.distbits) - 1);
                t: do {
                    p < 15 && ((h += O[n++] << p), (p += 8), (h += O[n++] << p), (p += 8)), (w = g[h & y]);
                    e: for (;;) {
                        if (((h >>>= b = w >>> 24), (p -= b), 0 === (b = (w >>> 16) & 255))) j[o++] = 65535 & w;
                        else {
                            if (!(16 & b)) {
                                if (0 == (64 & b)) {
                                    w = g[(65535 & w) + (h & ((1 << b) - 1))];
                                    continue e;
                                }
                                if (32 & b) {
                                    r.mode = 12;
                                    break t;
                                }
                                (t.msg = "invalid literal/length code"), (r.mode = 30);
                                break t;
                            }
                            (_ = 65535 & w), (b &= 15) && (p < b && ((h += O[n++] << p), (p += 8)), (_ += h & ((1 << b) - 1)), (h >>>= b), (p -= b)), p < 15 && ((h += O[n++] << p), (p += 8), (h += O[n++] << p), (p += 8)), (w = m[h & v]);
                            r: for (;;) {
                                if (((h >>>= b = w >>> 24), (p -= b), !(16 & (b = (w >>> 16) & 255)))) {
                                    if (0 == (64 & b)) {
                                        w = m[(65535 & w) + (h & ((1 << b) - 1))];
                                        continue r;
                                    }
                                    (t.msg = "invalid distance code"), (r.mode = 30);
                                    break t;
                                }
                                if (((x = 65535 & w), p < (b &= 15) && ((h += O[n++] << p), (p += 8) < b && ((h += O[n++] << p), (p += 8))), (x += h & ((1 << b) - 1)) > u)) {
                                    (t.msg = "invalid distance too far back"), (r.mode = 30);
                                    break t;
                                }
                                if (((h >>>= b), (p -= b), x > (b = o - a))) {
                                    if ((b = x - b) > f && r.sane) {
                                        (t.msg = "invalid distance too far back"), (r.mode = 30);
                                        break t;
                                    }
                                    if (((E = 0), (k = d), 0 === l)) {
                                        if (((E += c - b), b < _)) {
                                            _ -= b;
                                            do {
                                                j[o++] = d[E++];
                                            } while (--b);
                                            (E = o - x), (k = j);
                                        }
                                    } else if (l < b) {
                                        if (((E += c + l - b), (b -= l) < _)) {
                                            _ -= b;
                                            do {
                                                j[o++] = d[E++];
                                            } while (--b);
                                            if (((E = 0), l < _)) {
                                                _ -= b = l;
                                                do {
                                                    j[o++] = d[E++];
                                                } while (--b);
                                                (E = o - x), (k = j);
                                            }
                                        }
                                    } else if (((E += l - b), b < _)) {
                                        _ -= b;
                                        do {
                                            j[o++] = d[E++];
                                        } while (--b);
                                        (E = o - x), (k = j);
                                    }
                                    for (; _ > 2; ) (j[o++] = k[E++]), (j[o++] = k[E++]), (j[o++] = k[E++]), (_ -= 3);
                                    _ && ((j[o++] = k[E++]), _ > 1 && (j[o++] = k[E++]));
                                } else {
                                    E = o - x;
                                    do {
                                        (j[o++] = j[E++]), (j[o++] = j[E++]), (j[o++] = j[E++]), (_ -= 3);
                                    } while (_ > 2);
                                    _ && ((j[o++] = j[E++]), _ > 1 && (j[o++] = j[E++]));
                                }
                                break;
                            }
                        }
                        break;
                    }
                } while (n < i && o < s);
                (n -= _ = p >> 3), (h &= (1 << (p -= _ << 3)) - 1), (t.next_in = n), (t.next_out = o), (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)), (t.avail_out = o < s ? s - o + 257 : 257 - (o - s)), (r.hold = h), (r.bits = p);
            };
        },
        function (t, e, r) {
            "use strict";
            var n = r(25),
                i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            t.exports = function (t, e, r, u, c, f, l, d) {
                var h,
                    p,
                    g,
                    m,
                    y,
                    v,
                    w,
                    b,
                    _,
                    x = d.bits,
                    E = 0,
                    k = 0,
                    O = 0,
                    j = 0,
                    P = 0,
                    S = 0,
                    R = 0,
                    $ = 0,
                    A = 0,
                    T = 0,
                    I = null,
                    B = 0,
                    F = new n.Buf16(16),
                    U = new n.Buf16(16),
                    M = null,
                    C = 0;
                for (E = 0; E <= 15; E++) F[E] = 0;
                for (k = 0; k < u; k++) F[e[r + k]]++;
                for (P = x, j = 15; j >= 1 && 0 === F[j]; j--);
                if ((P > j && (P = j), 0 === j)) return (c[f++] = 20971520), (c[f++] = 20971520), (d.bits = 1), 0;
                for (O = 1; O < j && 0 === F[O]; O++);
                for (P < O && (P = O), $ = 1, E = 1; E <= 15; E++) if ((($ <<= 1), ($ -= F[E]) < 0)) return -1;
                if ($ > 0 && (0 === t || 1 !== j)) return -1;
                for (U[1] = 0, E = 1; E < 15; E++) U[E + 1] = U[E] + F[E];
                for (k = 0; k < u; k++) 0 !== e[r + k] && (l[U[e[r + k]]++] = k);
                if (
                    (0 === t ? ((I = M = l), (v = 19)) : 1 === t ? ((I = i), (B -= 257), (M = o), (C -= 257), (v = 256)) : ((I = a), (M = s), (v = -1)),
                    (T = 0),
                    (k = 0),
                    (E = O),
                    (y = f),
                    (S = P),
                    (R = 0),
                    (g = -1),
                    (m = (A = 1 << P) - 1),
                    (1 === t && A > 852) || (2 === t && A > 592))
                )
                    return 1;
                for (;;) {
                    (w = E - R), l[k] < v ? ((b = 0), (_ = l[k])) : l[k] > v ? ((b = M[C + l[k]]), (_ = I[B + l[k]])) : ((b = 96), (_ = 0)), (h = 1 << (E - R)), (O = p = 1 << S);
                    do {
                        c[y + (T >> R) + (p -= h)] = (w << 24) | (b << 16) | _ | 0;
                    } while (0 !== p);
                    for (h = 1 << (E - 1); T & h; ) h >>= 1;
                    if ((0 !== h ? ((T &= h - 1), (T += h)) : (T = 0), k++, 0 == --F[E])) {
                        if (E === j) break;
                        E = e[r + l[k]];
                    }
                    if (E > P && (T & m) !== g) {
                        for (0 === R && (R = P), y += O, $ = 1 << (S = E - R); S + R < j && !(($ -= F[S + R]) <= 0); ) S++, ($ <<= 1);
                        if (((A += 1 << S), (1 === t && A > 852) || (2 === t && A > 592))) return 1;
                        c[(g = T & m)] = (P << 24) | (S << 16) | (y - f) | 0;
                    }
                }
                return 0 !== T && (c[y + T] = ((E - R) << 24) | (64 << 16) | 0), (d.bits = P), 0;
            };
        },
        function (t, e, r) {
            "use strict";
            t.exports = function () {
                (this.text = 0), (this.time = 0), (this.xflags = 0), (this.os = 0), (this.extra = null), (this.extra_len = 0), (this.name = ""), (this.comment = ""), (this.hcrc = 0), (this.done = !1);
            };
        },
        function (t, e, r) {
            var n = {};
            function i(t, e) {
                for (var r in t) e[r] = t[r];
            }
            (t.exports = n), (n.from = r(117)), (n.to = r(118)), (n.is = r(120)), (n.subarray = r(121)), (n.join = r(122)), (n.copy = r(123)), (n.create = r(124)), i(r(125), n), i(r(126), n);
        },
        function (t, e, r) {
            t.exports = function (t, e) {
                if (Array.isArray(t)) return new Uint8Array(t);
                return i[e || "utf8"](t);
            };
            var n = r(63),
                i = {
                    hex: function (t) {
                        for (var e = t.length / 2, r = new Uint8Array(e), n = "", i = 0, o = t.length; i < o; ++i) (n += t.charAt(i)), i > 0 && i % 2 == 1 && ((r[i >>> 1] = parseInt(n, 16)), (n = ""));
                        return r;
                    },
                    utf8: function (t) {
                        for (var e, r, n = [], i = 0, o = t.length; i < o; ++i)
                            if (128 & (r = t.charCodeAt(i))) {
                                e = encodeURIComponent(t.charAt(i)).substr(1).split("%");
                                for (var a = 0, s = e.length; a < s; ++a) n[n.length] = parseInt(e[a], 16);
                            } else n[n.length] = r;
                        return new Uint8Array(n);
                    },
                    base64: function (t) {
                        return new Uint8Array(n.toByteArray(t));
                    },
                };
        },
        function (t, e, r) {
            t.exports = function (t, e) {
                return o[e || "utf8"](t);
            };
            var n = r(63),
                i = r(119),
                o = {
                    hex: function (t) {
                        for (var e, r = "", n = 0, i = t.length; n < i; ++n) (e = t[n]), (r += ((240 & e) >>> 4).toString(16)), (r += (15 & e).toString(16));
                        return r;
                    },
                    utf8: function (t) {
                        return i(t);
                    },
                    base64: function (t) {
                        return n.fromByteArray(t);
                    },
                };
        },
        function (t, e) {
            t.exports = function (t, e, o) {
                (e = void 0 === e ? 0 : e), (o = void 0 === o ? t.length : o);
                var c,
                    f,
                    l = 0,
                    d = 0;
                n.length = r.length = 0;
                for (; l < t.length; )
                    (f = t[l]), !d && 128 & f ? ((c = s(f)), (d += c), c < 8 && (n[n.length] = f & a[6 - c])) : d ? ((n[n.length] = f & a[6]), !--d && n.length && ((r[r.length] = i(u(n))), (n.length = 0))) : (r[r.length] = i(f)), ++l;
                n.length && !d && ((r[r.length] = i(u(n))), (n.length = 0));
                return r.join("");
            };
            var r = [],
                n = [],
                i = String.fromCharCode,
                o = [64, 32, 16, 8, 4, 2, 1],
                a = [0, 1, 3, 7, 15, 31, 63, 127];
            function s(t) {
                for (var e = 0; e < 7 && t & o[e]; ++e);
                return e;
            }
            function u(t) {
                for (var e = 0, r = 0, n = t.length; r < n; ++r) e |= t[r] << (6 * (n - r - 1));
                return e;
            }
        },
        function (t, e) {
            t.exports = function (t) {
                return t instanceof Uint8Array;
            };
        },
        function (t, e) {
            t.exports = function (t, e, r) {
                return t.subarray(e || 0, r || t.length);
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                if (!t.length) return new Uint8Array(0);
                var r =
                        void 0 !== e
                            ? e
                            : (function (t) {
                                  for (var e = 0, r = 0, n = t.length; r < n; ++r) e += t[r].byteLength;
                                  return e;
                              })(t),
                    n = new Uint8Array(r),
                    i = t[0],
                    o = i.length,
                    a = 0,
                    s = 0,
                    u = 0;
                for (; u < r; ) s !== o ? (n[u++] = i[s++]) : ((s = 0), (i = t[++a]), (o = i && i.length));
                return n;
            };
        },
        function (t, e) {
            t.exports = function (t, e, n, i, o) {
                if (((n = arguments.length < 3 ? 0 : n), (i = arguments.length < 4 ? 0 : i), (o = arguments.length < 5 ? t.length : o) === i)) return;
                if (0 === e.length || 0 === t.length) return;
                o > t.length && (o = t.length);
                e.length - n < o - i && (o = e.length - n + i);
                if (t.buffer !== e.buffer)
                    return (function (t, e, r, n, i) {
                        for (var o = i - n + r, a = r, s = n; a < o; ++a, ++s) e[a] = t[s];
                    })(t, e, n, i, o);
                return (function (t, e, n, i, o) {
                    for (var a = o + i, s = new Uint8Array(r.call(t, i, a)), u = 0; i < a; ++i, ++u) e[n++] = s[u];
                })(t, e, n, i, o);
            };
            var r = [].slice;
        },
        function (t, e) {
            t.exports = function (t) {
                return new Uint8Array(t);
            };
        },
        function (t, e, r) {
            t.exports = {
                readUInt8: function (t, e) {
                    return t[e];
                },
                readInt8: function (t, e) {
                    var r = t[e];
                    return r < 128 ? r : r - 256;
                },
                readUInt16LE: function (t, e) {
                    return n.get(t).getUint16(e + t.byteOffset, !0);
                },
                readUInt32LE: function (t, e) {
                    return n.get(t).getUint32(e + t.byteOffset, !0);
                },
                readInt16LE: function (t, e) {
                    return n.get(t).getInt16(e + t.byteOffset, !0);
                },
                readInt32LE: function (t, e) {
                    return n.get(t).getInt32(e + t.byteOffset, !0);
                },
                readFloatLE: function (t, e) {
                    return n.get(t).getFloat32(e + t.byteOffset, !0);
                },
                readDoubleLE: function (t, e) {
                    return n.get(t).getFloat64(e + t.byteOffset, !0);
                },
                readUInt16BE: function (t, e) {
                    return n.get(t).getUint16(e + t.byteOffset, !1);
                },
                readUInt32BE: function (t, e) {
                    return n.get(t).getUint32(e + t.byteOffset, !1);
                },
                readInt16BE: function (t, e) {
                    return n.get(t).getInt16(e + t.byteOffset, !1);
                },
                readInt32BE: function (t, e) {
                    return n.get(t).getInt32(e + t.byteOffset, !1);
                },
                readFloatBE: function (t, e) {
                    return n.get(t).getFloat32(e + t.byteOffset, !1);
                },
                readDoubleBE: function (t, e) {
                    return n.get(t).getFloat64(e + t.byteOffset, !1);
                },
            };
            var n = r(83);
        },
        function (t, e, r) {
            t.exports = {
                writeUInt8: function (t, e, r) {
                    return (t[r] = e);
                },
                writeInt8: function (t, e, r) {
                    return (t[r] = e < 0 ? e + 256 : e);
                },
                writeUInt16LE: function (t, e, r) {
                    return n.get(t).setUint16(r + t.byteOffset, e, !0);
                },
                writeUInt32LE: function (t, e, r) {
                    return n.get(t).setUint32(r + t.byteOffset, e, !0);
                },
                writeInt16LE: function (t, e, r) {
                    return n.get(t).setInt16(r + t.byteOffset, e, !0);
                },
                writeInt32LE: function (t, e, r) {
                    return n.get(t).setInt32(r + t.byteOffset, e, !0);
                },
                writeFloatLE: function (t, e, r) {
                    return n.get(t).setFloat32(r + t.byteOffset, e, !0);
                },
                writeDoubleLE: function (t, e, r) {
                    return n.get(t).setFloat64(r + t.byteOffset, e, !0);
                },
                writeUInt16BE: function (t, e, r) {
                    return n.get(t).setUint16(r + t.byteOffset, e, !1);
                },
                writeUInt32BE: function (t, e, r) {
                    return n.get(t).setUint32(r + t.byteOffset, e, !1);
                },
                writeInt16BE: function (t, e, r) {
                    return n.get(t).setInt16(r + t.byteOffset, e, !1);
                },
                writeInt32BE: function (t, e, r) {
                    return n.get(t).setInt32(r + t.byteOffset, e, !1);
                },
                writeFloatBE: function (t, e, r) {
                    return n.get(t).setFloat32(r + t.byteOffset, e, !1);
                },
                writeDoubleBE: function (t, e, r) {
                    return n.get(t).setFloat64(r + t.byteOffset, e, !1);
                },
            };
            var n = r(83);
        },
        function (t, e) {
            t.exports = i;
            var r = 128,
                n = 127;
            function i() {
                this.accum = [];
            }
            i.prototype.write = function (t) {
                var e,
                    i,
                    o = t & r,
                    a = this.accum;
                if (((a[a.length] = t & n), o)) return;
                (e = a.length), (i = 0);
                for (var s = 0; s < e; ++s) i |= a[s] << (7 * s);
                return (a.length = 0), void this.ondata(i);
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                var r,
                    n,
                    i = t,
                    o = e,
                    a = i.length,
                    s = o.length,
                    u = !1,
                    c = null,
                    f = a + 1,
                    l = [],
                    d = [],
                    h = [],
                    p = "",
                    g = function (t, e, r) {
                        return { x: t, y: e, k: r };
                    },
                    m = function (t, e) {
                        return { elem: t, t: e };
                    },
                    y = function (t, e, r) {
                        var n, u, c;
                        for (n = e > r ? l[t - 1 + f] : l[t + 1 + f], u = (c = Math.max(e, r)) - t; u < a && c < s && i[u] === o[c]; ) ++u, ++c;
                        return (l[t + f] = d.length), (d[d.length] = new g(u, c, n)), c;
                    };
                return (
                    a >= s && ((r = i), (n = a), (i = o), (o = r), (a = s), (s = n), (u = !0), (f = a + 1)),
                    {
                        SES_DELETE: -1,
                        SES_COMMON: 0,
                        SES_ADD: 1,
                        editdistance: function () {
                            return c;
                        },
                        getlcs: function () {
                            return p;
                        },
                        getses: function () {
                            return h;
                        },
                        compose: function () {
                            var t, e, r, n, v, w, b, _;
                            for (t = s - a, e = a + s + 3, r = {}, b = 0; b < e; ++b) (r[b] = -1), (l[b] = -1);
                            n = -1;
                            do {
                                for (_ = -++n; _ <= t - 1; ++_) r[_ + f] = y(_, r[_ - 1 + f] + 1, r[_ + 1 + f]);
                                for (_ = t + n; _ >= t + 1; --_) r[_ + f] = y(_, r[_ - 1 + f] + 1, r[_ + 1 + f]);
                                r[t + f] = y(t, r[t - 1 + f] + 1, r[t + 1 + f]);
                            } while (r[t + f] !== s);
                            for (c = t + 2 * n, v = l[t + f], w = []; -1 !== v; ) (w[w.length] = new g(d[v].x, d[v].y, null)), (v = d[v].k);
                            !(function (t) {
                                var e, r, n;
                                for (1, e = r = 0, n = t.length - 1; n >= 0; --n)
                                    for (; e < t[n].x || r < t[n].y; )
                                        t[n].y - t[n].x > r - e
                                            ? ((h[h.length] = new m(o[r], u ? -1 : 1)), 0, ++r)
                                            : t[n].y - t[n].x < r - e
                                            ? ((h[h.length] = new m(i[e], u ? 1 : -1)), 0, ++e)
                                            : ((h[h.length] = new m(i[e], 0)), (p += i[e]), 0, 0, ++e, ++r);
                            })(w);
                        },
                    }
                );
            };
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return o;
                });
                var n = r(132);
                function i(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function o(t) {
                    return a.apply(this, arguments);
                }
                function a() {
                    var e;
                    return (
                        (e = function* ({ core: e = "default", object: r }) {
                            try {
                                "string" == typeof r && (r = t.from(r, "utf8"));
                                const e = "blob",
                                    { oid: i, object: o } = yield Object(n.a)({ type: "blob", format: "content", object: r });
                                return { oid: i, type: e, object: o, format: "wrapped" };
                            } catch (t) {
                                throw ((t.caller = "git.hashBlob"), t);
                            }
                        }),
                        (a = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, o) {
                                var a = e.apply(t, r);
                                function s(t) {
                                    i(a, n, o, s, u, "next", t);
                                }
                                function u(t) {
                                    i(a, n, o, s, u, "throw", t);
                                }
                                s(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            "use strict";
            (function (t) {
                r.d(e, "a", function () {
                    return d;
                });
                var n = r(1),
                    i = r(15),
                    o = r(7),
                    a = r(0),
                    s = r(11),
                    u = r(22),
                    c = r(2),
                    f = r(3);
                function l(t, e, r, n, i, o, a) {
                    try {
                        var s = t[o](a),
                            u = s.value;
                    } catch (t) {
                        return void r(t);
                    }
                    s.done ? e(u) : Promise.resolve(u).then(n, i);
                }
                function d(t) {
                    return h.apply(this, arguments);
                }
                function h() {
                    var e;
                    return (
                        (e = function* ({ core: e = "default", dir: r, gitdir: l = Object(c.a)(r, ".git"), fs: d = f.a.get(e).get("fs"), type: h, object: p, format: g = "parsed", oid: m, encoding: y }) {
                            try {
                                const e = new n.a(d);
                                if ("parsed" === g)
                                    switch (h) {
                                        case "commit":
                                            p = o.a.from(p).toObject();
                                            break;
                                        case "tree":
                                            p = s.a.from(p.entries).toObject();
                                            break;
                                        case "blob":
                                            p = t.from(p, y);
                                            break;
                                        case "tag":
                                            p = i.a.from(p).toObject();
                                            break;
                                        default:
                                            throw new a.b(a.a.ObjectTypeUnknownFail, { type: h });
                                    }
                                const r = "parsed" === g ? "content" : g;
                                return (m = yield Object(u.a)({ fs: e, gitdir: l, type: h, object: p, oid: m, format: r }));
                            } catch (t) {
                                throw ((t.caller = "git.writeObject"), t);
                            }
                        }),
                        (h = function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, i) {
                                var o = e.apply(t, r);
                                function a(t) {
                                    l(o, n, i, a, s, "next", t);
                                }
                                function s(t) {
                                    l(o, n, i, a, s, "throw", t);
                                }
                                a(void 0);
                            });
                        }).apply(this, arguments)
                    );
                }
            }.call(this, r(10).Buffer));
        },
        function (t, e, r) {
            const n = r(75),
                i = { "{": "}", "(": ")", "[": "]" },
                o = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\)|(\\).|([@?!+*]\(.*\)))/,
                a = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;
            function s(t, { strict: e = !0 } = {}) {
                if ("" === t) return !1;
                let r,
                    n = e ? o : a;
                for (; (r = n.exec(t)); ) {
                    if (r[2]) return !0;
                    let e = r.index + r[0].length,
                        n = r[1],
                        o = n ? i[n] : null;
                    if (n && o) {
                        let r = t.indexOf(o, e);
                        -1 !== r && (e = r + 1);
                    }
                    t = t.slice(e);
                }
                return !1;
            }
            t.exports = function (t, e = {}) {
                let r,
                    i = (function (t, { strict: e = !1 } = {}) {
                        (t = n.normalize(t).replace(/\/|\\/, "/")), /[\{\[].*[\/]*.*[\}\]]$/.test(t) && (t += "/"), (t += "a");
                        do {
                            t = n.dirname(t);
                        } while (s(t, { strict: e }) || /(^|[^\\])([\{\[]|\([^\)]+$)/.test(t));
                        return t.replace(/\\([\*\?\|\[\]\(\)\{\}])/g, "$1");
                    })(t, e),
                    o = s(t, e);
                return (
                    "." != i ? (r = t.substr(i.length)).startsWith("/") && (r = r.substr(1)) : (r = t),
                    o || (r = "." !== (i = n.dirname(t)) ? t.substr(i.length) : t),
                    r.startsWith("./") && (r = r.substr(2)),
                    r.startsWith("/") && (r = r.substr(1)),
                    { base: i, glob: r, isGlob: o }
                );
            };
        },
        function (t, e, r) {
            "use strict";
            r.d(e, "a", function () {
                return a;
            });
            var n = r(16),
                i = r(12);
            function o(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function a(t) {
                return s.apply(this, arguments);
            }
            function s() {
                var t;
                return (
                    (t = function* ({ type: t, object: e, format: r = "content", oid: o }) {
                        return "deflated" !== r && ("wrapped" !== r && (e = n.a.wrap({ type: t, object: e })), (o = yield Object(i.a)(e))), { oid: o, object: e };
                    }),
                    (s = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var a = t.apply(e, r);
                            function s(t) {
                                o(a, n, i, s, u, "next", t);
                            }
                            function u(t) {
                                o(a, n, i, s, u, "throw", t);
                            }
                            s(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
        },
        function (t, e, r) {
            "use strict";
            r.r(e);
            var n = r(91),
                i = r(51),
                o = r(49),
                a = r(13),
                s = r(1),
                u = r(0),
                c = r(22),
                f = r(2),
                l = r(3);
            function d(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function h(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            d(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            d(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function p(t) {
                return g.apply(this, arguments);
            }
            function g() {
                return (g = h(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), filepath: i }) {
                    try {
                        const t = new s.a(n);
                        yield a.a.acquire(
                            { fs: t, gitdir: r },
                            (function () {
                                var n = h(function* (n) {
                                    yield m({ dir: e, gitdir: r, fs: t, filepath: i, index: n });
                                });
                                return function (t) {
                                    return n.apply(this, arguments);
                                };
                            })()
                        );
                    } catch (t) {
                        throw ((t.caller = "git.add"), t);
                    }
                })).apply(this, arguments);
            }
            function m(t) {
                return y.apply(this, arguments);
            }
            function y() {
                return (y = h(function* ({ dir: t, gitdir: e, fs: r, filepath: n, index: i }) {
                    if (yield o.a.isIgnored({ fs: r, dir: t, gitdir: e, filepath: n })) return;
                    const a = yield r.lstat(Object(f.a)(t, n));
                    if (!a) throw new u.b(u.a.FileReadError, { filepath: n });
                    if (a.isDirectory()) {
                        const o = (yield r.readdir(Object(f.a)(t, n))).map((o) => m({ dir: t, gitdir: e, fs: r, filepath: Object(f.a)(n, o), index: i }));
                        yield Promise.all(o);
                    } else {
                        const o = a.isSymbolicLink() ? yield r.readlink(Object(f.a)(t, n)) : yield r.read(Object(f.a)(t, n));
                        if (null === o) throw new u.b(u.a.FileReadError, { filepath: n });
                        const s = yield Object(c.a)({ fs: r, gitdir: e, type: "blob", object: o });
                        i.insert({ filepath: n, stats: a, oid: s });
                    }
                })).apply(this, arguments);
            }
            var v = r(38),
                w = r.n(v),
                b = r(24);
            function _(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function x(t) {
                return E.apply(this, arguments);
            }
            function E() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), remote: i, url: o, force: a = !1 }) {
                        try {
                            const t = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "addRemote", parameter: "remote" });
                            if (void 0 === o) throw new u.b(u.a.MissingRequiredParameterError, { function: "addRemote", parameter: "url" });
                            if (i !== w.a.clean(i)) throw new u.b(u.a.InvalidRefNameError, { verb: "add", noun: "remote", ref: i, suggestion: w.a.clean(i) });
                            const e = yield b.a.get({ fs: t, gitdir: r });
                            if (!a && (yield e.getSubsections("remote")).includes(i) && o !== (yield e.get(`remote.${i}.url`))) throw new u.b(u.a.AddingRemoteWouldOverwrite, { remote: i });
                            yield e.set(`remote.${i}.url`, o), yield e.set(`remote.${i}.fetch`, `+refs/heads/*:refs/remotes/${i}/*`), yield b.a.save({ fs: t, gitdir: r, config: e });
                        } catch (t) {
                            throw ((t.caller = "git.addRemote"), t);
                        }
                    }),
                    (E = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                _(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                _(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var k = r(4),
                O = r(15),
                j = r(5);
            function P(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function S(t) {
                return R.apply(this, arguments);
            }
            function R() {
                var t;
                return (
                    (t = function* (t) {
                        const { core: e = "default", dir: r, gitdir: n = Object(f.a)(r, ".git"), fs: i = l.a.get(e).get("fs"), all: o = !1, append: a = !1, path: u, value: c } = t;
                        try {
                            const e = new s.a(i),
                                r = yield b.a.get({ fs: e, gitdir: n });
                            if (void 0 === c && !Object.prototype.hasOwnProperty.call(t, "value")) return o ? r.getall(u) : r.get(u);
                            a ? yield r.append(u, c) : yield r.set(u, c), yield b.a.save({ fs: e, gitdir: n, config: r });
                        } catch (t) {
                            throw ((t.caller = "git.config"), t);
                        }
                    }),
                    (R = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                P(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                P(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function $(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function A(t) {
                return T.apply(this, arguments);
            }
            function T() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, author: r = {} }) {
                        let { name: n, email: i, date: o, timestamp: a, timezoneOffset: s } = r;
                        if (((n = n || (yield S({ fs: t, gitdir: e, path: "user.name" }))), (i = i || (yield S({ fs: t, gitdir: e, path: "user.email" }))), void 0 !== n && void 0 !== i))
                            return (o = o || new Date()), (a = null != a ? a : Math.floor(o.valueOf() / 1e3)), (s = null != s ? s : o.getTimezoneOffset()), { name: n, email: i, date: o, timestamp: a, timezoneOffset: s };
                    }),
                    (T = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                $(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                $(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function I(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function B(t) {
                return F.apply(this, arguments);
            }
            function F() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i, tagger: o, message: a = i, signature: d, object: h, signingKey: p, force: g = !1 }) {
                        try {
                            const e = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "annotatedTag", parameter: "ref" });
                            if (((i = i.startsWith("refs/tags/") ? i : `refs/tags/${i}`), !g && (yield k.a.exists({ fs: e, gitdir: r, ref: i })))) throw new u.b(u.a.RefExistsError, { noun: "tag", ref: i });
                            const f = yield k.a.resolve({ fs: e, gitdir: r, ref: h || "HEAD" });
                            if (d && p) throw new u.b(u.a.InvalidParameterCombinationError, { function: "annotatedTag", parameters: ["signature", "signingKey"] });
                            if (void 0 === (o = yield A({ fs: e, gitdir: r, author: o }))) throw new u.b(u.a.MissingTaggerError);
                            const { type: m } = yield Object(j.a)({ fs: e, gitdir: r, oid: f });
                            let y = O.a.from({ object: f, type: m, tag: i.replace("refs/tags/", ""), tagger: o, message: a, signature: d });
                            if (p) {
                                const e = l.a.get(t).get("pgp");
                                y = yield O.a.sign(y, e, p);
                            }
                            const v = yield Object(c.a)({ fs: e, gitdir: r, type: "tag", object: y.toObject() });
                            yield k.a.writeRef({ fs: e, gitdir: r, ref: i, value: v });
                        } catch (t) {
                            throw ((t.caller = "git.annotatedTag"), t);
                        }
                    }),
                    (F = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                I(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                I(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function U(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function M(t) {
                return C.apply(this, arguments);
            }
            function C() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i, checkout: o = !1 }) {
                        try {
                            const t = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "branch", parameter: "ref" });
                            if (i !== w.a.clean(i)) throw new u.b(u.a.InvalidRefNameError, { verb: "create", noun: "branch", ref: i, suggestion: w.a.clean(i) });
                            const e = `refs/heads/${i}`;
                            if (yield k.a.exists({ fs: t, gitdir: r, ref: e })) throw new u.b(u.a.RefExistsError, { noun: "branch", ref: i });
                            let a;
                            try {
                                a = yield k.a.resolve({ fs: t, gitdir: r, ref: "HEAD" });
                            } catch (t) {}
                            a && (yield k.a.writeRef({ fs: t, gitdir: r, ref: e, value: a })), o && (yield k.a.writeSymbolicRef({ fs: t, gitdir: r, ref: "HEAD", value: e }));
                        } catch (t) {
                            throw ((t.caller = "git.branch"), t);
                        }
                    }),
                    (C = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                U(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                U(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var N = r(102),
                D = r.n(N),
                z = r(131),
                H = r.n(z);
            const L = (t) => {
                    const e = H()(t).base;
                    return "." === e ? "" : e;
                },
                G = (t, e) => "." === t || null == e || 0 === e.length || "." === e || (e.length >= t.length ? e.startsWith(t) : t.startsWith(e));
            var q = r(28),
                W = r(41),
                Y = r(8),
                Z = r(20),
                K = r(12),
                V = r(16);
            function X(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function J(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            X(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            X(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            class Q {
                constructor({ fs: t, dir: e, gitdir: r }) {
                    const n = new s.a(t);
                    (this.fs = n), (this.dir = e), (this.gitdir = r);
                    const i = this;
                    this.ConstructEntry = class {
                        constructor(t) {
                            Object.assign(this, t);
                        }
                        populateStat() {
                            var t = this;
                            return J(function* () {
                                t.exists && (yield i.populateStat(t));
                            })();
                        }
                        populateContent() {
                            var t = this;
                            return J(function* () {
                                t.exists && (yield i.populateContent(t));
                            })();
                        }
                        populateHash() {
                            var t = this;
                            return J(function* () {
                                t.exists && (yield i.populateHash(t));
                            })();
                        }
                    };
                }
                readdir(t) {
                    var e = this;
                    return J(function* () {
                        if (!t.exists) return [];
                        const r = t.fullpath,
                            { fs: n, dir: i } = e,
                            o = yield n.readdir(Object(f.a)(i, r));
                        return null === o ? null : o.map((t) => ({ fullpath: Object(f.a)(r, t), basename: t, exists: !0 }));
                    })();
                }
                populateStat(t) {
                    var e = this;
                    return J(function* () {
                        if (!t.exists) return;
                        const { fs: r, dir: n } = e;
                        let i = yield r.lstat(`${n}/${t.fullpath}`),
                            o = i.isDirectory() ? "tree" : "blob";
                        if (("blob" !== o || i.isFile() || i.isSymbolicLink() || (o = "special"), !i)) throw new Error(`ENOENT: no such file or directory, lstat '${t.fullpath}'`);
                        (i = Object(Z.a)(i)), Object.assign(t, { type: o }, i);
                    })();
                }
                populateContent(t) {
                    var e = this;
                    return J(function* () {
                        if (!t.exists) return;
                        const { fs: r, dir: n } = e,
                            i = yield r.read(`${n}/${t.fullpath}`);
                        -1 === t.size && (t.size = i.length), Object.assign(t, { content: i });
                    })();
                }
                populateHash(t) {
                    var e = this;
                    return J(function* () {
                        if (!t.exists) return;
                        const { fs: r, gitdir: n } = e,
                            i = yield a.a.acquire(
                                { fs: r, gitdir: n },
                                (function () {
                                    var e = J(function* (e) {
                                        const r = e.entriesMap.get(t.fullpath);
                                        if ((t.type || (yield t.populateStat()), !r || Object(W.a)(t, r))) {
                                            Object(Y.a)(`INDEX CACHE MISS: calculating SHA for ${t.fullpath}`), t.content || (yield t.populateContent());
                                            const n = yield Object(K.a)(V.a.wrap({ type: "blob", object: t.content }));
                                            return r && n === r.oid && e.insert({ filepath: t.fullpath, stats: t, oid: n }), n;
                                        }
                                        return r.oid;
                                    });
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })()
                            );
                        Object.assign(t, { oid: i });
                    })();
                }
            }
            function tt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function et(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            tt(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            tt(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            class rt {
                constructor({ fs: t, dir: e, gitdir: r }) {
                    const n = new s.a(t);
                    (this.fs = n), (this.dir = e), (this.gitdir = r);
                    const i = this;
                    this.ConstructEntry = class {
                        constructor(t) {
                            (this._fullpath = t), (this._type = !1), (this._mode = !1), (this._stat = !1), (this._content = !1), (this._oid = !1);
                        }
                        type() {
                            var t = this;
                            return et(function* () {
                                return i.type(t);
                            })();
                        }
                        mode() {
                            var t = this;
                            return et(function* () {
                                return i.mode(t);
                            })();
                        }
                        stat() {
                            var t = this;
                            return et(function* () {
                                return i.stat(t);
                            })();
                        }
                        content() {
                            var t = this;
                            return et(function* () {
                                return i.content(t);
                            })();
                        }
                        oid() {
                            var t = this;
                            return et(function* () {
                                return i.oid(t);
                            })();
                        }
                    };
                }
                readdir(t) {
                    var e = this;
                    return et(function* () {
                        const r = t._fullpath,
                            { fs: n, dir: i } = e,
                            o = yield n.readdir(Object(f.a)(i, r));
                        return null === o ? null : o.map((t) => Object(f.a)(r, t));
                    })();
                }
                type(t) {
                    return et(function* () {
                        return !1 === t._type && (yield t.stat()), t._type;
                    })();
                }
                mode(t) {
                    return et(function* () {
                        return !1 === t._mode && (yield t.stat()), t._mode;
                    })();
                }
                stat(t) {
                    var e = this;
                    return et(function* () {
                        if (!1 === t._stat) {
                            const { fs: r, dir: n } = e;
                            let i = yield r.lstat(`${n}/${t._fullpath}`);
                            if (!i) throw new Error(`ENOENT: no such file or directory, lstat '${t._fullpath}'`);
                            let o = i.isDirectory() ? "tree" : "blob";
                            "blob" !== o || i.isFile() || i.isSymbolicLink() || (o = "special"), (t._type = o), (i = Object(Z.a)(i)), (t._mode = i.mode), -1 === i.size && t._actualSize && (i.size = t._actualSize), (t._stat = i);
                        }
                        return t._stat;
                    })();
                }
                content(t) {
                    var e = this;
                    return et(function* () {
                        if (!1 === t._content) {
                            const { fs: r, dir: n } = e;
                            if ("tree" === (yield t.type())) t._content = void 0;
                            else {
                                const e = yield r.read(`${n}/${t._fullpath}`);
                                (t._actualSize = e.length), t._stat && -1 === t._stat.size && (t._stat.size = t._actualSize), (t._content = e);
                            }
                        }
                        return t._content;
                    })();
                }
                oid(t) {
                    var e = this;
                    return et(function* () {
                        if (!1 === t._oid) {
                            const { fs: r, gitdir: n } = e;
                            let i;
                            yield a.a.acquire(
                                { fs: r, gitdir: n },
                                (function () {
                                    var e = et(function* (e) {
                                        const r = e.entriesMap.get(t._fullpath),
                                            n = yield t.stat();
                                        if (!r || Object(W.a)(n, r)) {
                                            Object(Y.a)(`INDEX CACHE MISS: calculating SHA for ${t._fullpath}`),
                                                void 0 === (yield t.content())
                                                    ? (i = void 0)
                                                    : ((i = yield Object(K.a)(V.a.wrap({ type: "blob", object: yield t.content() }))), r && i === r.oid && e.insert({ filepath: t._fullpath, stats: n, oid: i }));
                                        } else i = r.oid;
                                    });
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })()
                            ),
                                (t._oid = i);
                        }
                        return t._oid;
                    })();
                }
            }
            var nt = r(19);
            function it({ core: t = "default", dir: e, gitdir: r, fs: n } = {}) {
                const i = Object.create(null);
                return (
                    Object.defineProperty(i, nt.a, {
                        value: function () {
                            (r = r || Object(f.a)(e, ".git")), (n = l.a.get(t).get("fs"));
                            const i = new s.a(n);
                            return new Q({ fs: i, dir: e, gitdir: r });
                        },
                    }),
                    Object.defineProperty(i, nt.b, {
                        value: function ({ fs: t, dir: e, gitdir: r }) {
                            return new rt({ fs: t, dir: e, gitdir: r });
                        },
                    }),
                    Object.freeze(i),
                    i
                );
            }
            var ot = r(33);
            function at(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function st(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            at(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            at(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function ut(t) {
                return ct.apply(this, arguments);
            }
            function ct() {
                return (ct = st(function* ({
                    core: t = "default",
                    dir: e,
                    gitdir: r = Object(f.a)(e, ".git"),
                    fs: n = l.a.get(t).get("fs"),
                    emitter: i = l.a.get(t).get("emitter"),
                    emitterPrefix: o = "",
                    remote: c = "origin",
                    ref: d,
                    filepaths: h = ["."],
                    pattern: p = null,
                    noCheckout: g = !1,
                }) {
                    try {
                        const t = new s.a(n);
                        if (void 0 === d) throw new u.b(u.a.MissingRequiredParameterError, { function: "checkout", parameter: "ref" });
                        let l,
                            m = "";
                        p && ((m = L(p)) && (p = p.replace(m + "/", "")), (l = D()(p, { globstar: !0, extended: !0 })));
                        const y = h.map((t) => Object(f.a)(t, m));
                        let v;
                        try {
                            v = yield k.a.resolve({ fs: t, gitdir: r, ref: d });
                        } catch (e) {
                            const n = `${c}/${d}`;
                            (v = yield k.a.resolve({ fs: t, gitdir: r, ref: n })),
                                yield S({ gitdir: r, fs: t, path: `branch.${d}.remote`, value: `${c}` }),
                                yield S({ gitdir: r, fs: t, path: `branch.${d}.merge`, value: `refs/heads/${d}` }),
                                yield t.write(`${r}/refs/heads/${d}`, v + "\n");
                        }
                        const w = yield k.a.expand({ fs: t, gitdir: r, ref: d });
                        if (!g) {
                            let n = 0;
                            yield a.a.acquire(
                                { fs: t, gitdir: r },
                                (function () {
                                    var a = st(function* (a) {
                                        for (const r of a)
                                            try {
                                                yield t.rm(Object(f.a)(e, r.path)), i && i.emit(`${o}progress`, { phase: "Updating workdir", loaded: ++n, lengthComputable: !1 });
                                            } catch (t) {}
                                        a.clear();
                                        try {
                                            yield Object(ot.a)({
                                                fs: t,
                                                dir: e,
                                                gitdir: r,
                                                trees: [Object(q.a)({ ref: d }), it()],
                                                map:
                                                    ((s = st(function* (r, [s, c]) {
                                                        if (!y.some((t) => G(r, t))) return null;
                                                        if ("." === r) return;
                                                        if (!s) return;
                                                        if (l) {
                                                            let t = !1;
                                                            for (const e of y) {
                                                                const n = r.replace(e + "/", "");
                                                                if (l.regex.test(n)) {
                                                                    t = !0;
                                                                    break;
                                                                }
                                                            }
                                                            if (!t) return;
                                                        }
                                                        const f = `${e}/${r}`;
                                                        switch (yield s.type()) {
                                                            case "tree":
                                                                c || (yield t.mkdir(f));
                                                                break;
                                                            case "commit":
                                                                console.log(new u.b(u.a.NotImplementedFail, { thing: "submodule support" }));
                                                                break;
                                                            case "blob": {
                                                                if (33188 === (yield s.mode())) yield t.write(f, yield s.content());
                                                                else if (33261 === (yield s.mode())) yield t.write(f, yield s.content(), { mode: 511 });
                                                                else {
                                                                    if (40960 !== (yield s.mode())) throw new u.b(u.a.InternalFail, { message: `Invalid mode "${yield s.mode()}" detected in blob ${yield s.oid()}` });
                                                                    yield t.writelink(f, yield s.content());
                                                                }
                                                                const e = yield t.lstat(f);
                                                                33261 === (yield s.mode()) && (e.mode = 33261),
                                                                    a.insert({ filepath: r, stats: e, oid: yield s.oid() }),
                                                                    i && i.emit(`${o}progress`, { phase: "Updating workdir", loaded: ++n, lengthComputable: !1 });
                                                                break;
                                                            }
                                                            default:
                                                                throw new u.b(u.a.ObjectTypeAssertionInTreeFail, { type: yield s.type(), oid: yield s.oid(), entrypath: r });
                                                        }
                                                    })),
                                                    function (t, e) {
                                                        return s.apply(this, arguments);
                                                    }),
                                            });
                                        } catch (t) {
                                            throw t.code === u.a.ReadObjectFail && t.data.oid === v ? new u.b(u.a.CommitNotFetchedError, { ref: d, oid: v }) : t;
                                        }
                                        var s;
                                    });
                                    return function (t) {
                                        return a.apply(this, arguments);
                                    };
                                })()
                            );
                        }
                        const b = w.startsWith("refs/heads") ? `ref: ${w}` : v;
                        yield t.write(`${r}/HEAD`, `${b}\n`);
                    } catch (t) {
                        throw ((t.caller = "git.checkout"), t);
                    }
                })).apply(this, arguments);
            }
            var ft = r(60),
                lt = r(34),
                dt = r(50);
            function ht(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function pt(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            ht(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            ht(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            class gt {
                constructor({ fs: t, gitdir: e }) {
                    const r = new s.a(t);
                    this.treePromise = a.a.acquire(
                        { fs: r, gitdir: e },
                        (function () {
                            var t = pt(function* (t) {
                                return Object(dt.a)(t.entries);
                            });
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })()
                    );
                    const n = this;
                    this.ConstructEntry = class {
                        constructor(t) {
                            Object.assign(this, t);
                        }
                        populateStat() {
                            var t = this;
                            return pt(function* () {
                                t.exists && (yield n.populateStat(t));
                            })();
                        }
                        populateContent() {
                            var t = this;
                            return pt(function* () {
                                t.exists && (yield n.populateContent(t));
                            })();
                        }
                        populateHash() {
                            var t = this;
                            return pt(function* () {
                                t.exists && (yield n.populateHash(t));
                            })();
                        }
                    };
                }
                readdir(t) {
                    var e = this;
                    return pt(function* () {
                        if (!t.exists) return [];
                        const r = t.fullpath,
                            n = (yield e.treePromise).get(r);
                        if (!n) return null;
                        if ("blob" === n.type) return null;
                        if ("tree" !== n.type) throw new Error(`ENOTDIR: not a directory, scandir '${r}'`);
                        return n.children.map((t) => ({ fullpath: t.fullpath, basename: t.basename, exists: !0 })).sort((t, e) => Object(lt.a)(t.fullpath, e.fullpath));
                    })();
                }
                populateStat(t) {
                    var e = this;
                    return pt(function* () {
                        const r = (yield e.treePromise).get(t.fullpath);
                        if (!r) throw new Error(`ENOENT: no such file or directory, lstat '${t.fullpath}'`);
                        const n = "tree" === r.type ? {} : Object(Z.a)(r.metadata);
                        Object.assign(t, { type: r.type }, n);
                    })();
                }
                populateContent(t) {
                    return pt(function* () {})();
                }
                populateHash(t) {
                    var e = this;
                    return pt(function* () {
                        const r = (yield e.treePromise).get(t.fullpath);
                        if (!r) return null;
                        if ("tree" === r.type) throw new Error("EISDIR: illegal operation on a directory, read");
                        Object.assign(t, { oid: r.metadata.oid });
                    })();
                }
            }
            function mt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function yt(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            mt(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            mt(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            class vt {
                constructor({ fs: t, gitdir: e }) {
                    const r = new s.a(t);
                    this.treePromise = a.a.acquire(
                        { fs: r, gitdir: e },
                        (function () {
                            var t = yt(function* (t) {
                                return Object(dt.a)(t.entries);
                            });
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })()
                    );
                    const n = this;
                    this.ConstructEntry = class {
                        constructor(t) {
                            (this._fullpath = t), (this._type = !1), (this._mode = !1), (this._stat = !1), (this._oid = !1);
                        }
                        type() {
                            var t = this;
                            return yt(function* () {
                                return n.type(t);
                            })();
                        }
                        mode() {
                            var t = this;
                            return yt(function* () {
                                return n.mode(t);
                            })();
                        }
                        stat() {
                            var t = this;
                            return yt(function* () {
                                return n.stat(t);
                            })();
                        }
                        content() {
                            var t = this;
                            return yt(function* () {
                                return n.content(t);
                            })();
                        }
                        oid() {
                            var t = this;
                            return yt(function* () {
                                return n.oid(t);
                            })();
                        }
                    };
                }
                readdir(t) {
                    var e = this;
                    return yt(function* () {
                        const r = t._fullpath,
                            n = (yield e.treePromise).get(r);
                        if (!n) return null;
                        if ("blob" === n.type) return null;
                        if ("tree" !== n.type) throw new Error(`ENOTDIR: not a directory, scandir '${r}'`);
                        const i = n.children.map((t) => t.fullpath);
                        return i.sort(lt.a), i;
                    })();
                }
                type(t) {
                    return yt(function* () {
                        return !1 === t._type && (yield t.stat()), t._type;
                    })();
                }
                mode(t) {
                    return yt(function* () {
                        return !1 === t._mode && (yield t.stat()), t._mode;
                    })();
                }
                stat(t) {
                    var e = this;
                    return yt(function* () {
                        if (!1 === t._stat) {
                            const r = (yield e.treePromise).get(t._fullpath);
                            if (!r) throw new Error(`ENOENT: no such file or directory, lstat '${t._fullpath}'`);
                            const n = "tree" === r.type ? {} : Object(Z.a)(r.metadata);
                            (t._type = r.type), (t._mode = n.mode), "tree" === r.type ? (t._stat = void 0) : (t._stat = n);
                        }
                        return t._stat;
                    })();
                }
                content(t) {
                    return yt(function* () {})();
                }
                oid(t) {
                    var e = this;
                    return yt(function* () {
                        if (!1 === t._oid) {
                            const r = (yield e.treePromise).get(t._fullpath);
                            t._oid = r.metadata.oid;
                        }
                        return t._oid;
                    })();
                }
            }
            function wt({ core: t = "default", dir: e, gitdir: r, fs: n } = {}) {
                const i = Object.create(null);
                return (
                    Object.defineProperty(i, nt.a, {
                        value: function () {
                            (r = r || Object(f.a)(e, ".git")), (n = l.a.get(t).get("fs"));
                            const i = new s.a(n);
                            return new gt({ fs: i, gitdir: r });
                        },
                    }),
                    Object.defineProperty(i, nt.b, {
                        value: function ({ fs: t, gitdir: e }) {
                            return new vt({ fs: t, gitdir: e });
                        },
                    }),
                    Object.freeze(i),
                    i
                );
            }
            function bt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function _t(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            bt(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            bt(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function xt(t) {
                return Et.apply(this, arguments);
            }
            function Et() {
                return (Et = _t(function* ({
                    core: t = "default",
                    dir: e,
                    gitdir: r = Object(f.a)(e, ".git"),
                    fs: n = l.a.get(t).get("fs"),
                    emitter: i = l.a.get(t).get("emitter"),
                    emitterPrefix: o = "",
                    remote: c = "origin",
                    ref: d,
                    filepaths: h = ["."],
                    noCheckout: p = !1,
                    noUpdateHead: g = void 0 === d,
                    dryRun: m = !1,
                    debug: y = !1,
                    force: v = !1,
                }) {
                    try {
                        const t = d || "HEAD",
                            f = new s.a(n);
                        let l;
                        try {
                            l = yield k.a.resolve({ fs: f, gitdir: r, ref: t });
                        } catch (e) {
                            if ("HEAD" === t) throw e;
                            const n = `${c}/${t}`;
                            (l = yield k.a.resolve({ fs: f, gitdir: r, ref: n })),
                                yield S({ gitdir: r, fs: f, path: `branch.${t}.remote`, value: `${c}` }),
                                yield S({ gitdir: r, fs: f, path: `branch.${t}.merge`, value: `refs/heads/${t}` }),
                                yield f.write(`${r}/refs/heads/${t}`, l + "\n");
                        }
                        if (!p) {
                            let n;
                            try {
                                n = yield (function (t) {
                                    return kt.apply(this, arguments);
                                })({ fs: f, dir: e, gitdir: r, ref: t, force: v, filepaths: h, emitter: i, emitterPrefix: o });
                            } catch (e) {
                                throw e.code === u.a.ReadObjectFail && e.data.oid === l ? new u.b(u.a.CommitNotFetchedError, { ref: t, oid: l }) : e;
                            }
                            const s = n.filter(([t]) => "conflict" === t).map(([t, e]) => e);
                            if (s.length > 0) throw new u.b(u.a.CheckoutConflictError, { filepaths: s });
                            const c = n.filter(([t]) => "error" === t).map(([t, e]) => e);
                            if (c.length > 0) throw new u.b(u.a.InternalFail, { message: c });
                            if (m) return y ? n : void 0;
                            let d = 0;
                            const p = n.length;
                            yield a.a.acquire(
                                { fs: f, gitdir: r },
                                (function () {
                                    var t = _t(function* (t) {
                                        yield Promise.all(
                                            n
                                                .filter(([t]) => "delete" === t || "delete-index" === t)
                                                .map(
                                                    (function () {
                                                        var r = _t(function* ([r, n]) {
                                                            const a = `${e}/${n}`;
                                                            "delete" === r && (yield f.rm(a)), t.delete({ filepath: n }), i && i.emit(`${o}progress`, { phase: "Updating workdir", loaded: ++d, total: p });
                                                        });
                                                        return function (t) {
                                                            return r.apply(this, arguments);
                                                        };
                                                    })()
                                                )
                                        );
                                    });
                                    return function (e) {
                                        return t.apply(this, arguments);
                                    };
                                })()
                            );
                            for (const [t, r] of n)
                                if ("rmdir" === t) {
                                    const t = `${e}/${r}`;
                                    try {
                                        yield f.rmdir(t), i && i.emit(`${o}progress`, { phase: "Updating workdir", loaded: ++d, total: p });
                                    } catch (t) {
                                        if ("ENOTEMPTY" !== t.code) throw t;
                                        console.log(`Did not delete ${r} because directory is not empty`);
                                    }
                                }
                            yield Promise.all(
                                n
                                    .filter(([t]) => "mkdir" === t)
                                    .map(
                                        (function () {
                                            var t = _t(function* ([t, r]) {
                                                const n = `${e}/${r}`;
                                                yield f.mkdir(n), i && i.emit(`${o}progress`, { phase: "Updating workdir", loaded: ++d, total: p });
                                            });
                                            return function (e) {
                                                return t.apply(this, arguments);
                                            };
                                        })()
                                    )
                            ),
                                yield a.a.acquire(
                                    { fs: f, gitdir: r },
                                    (function () {
                                        var t = _t(function* (t) {
                                            yield Promise.all(
                                                n
                                                    .filter(([t]) => "create" === t || "create-index" === t || "update" === t)
                                                    .map(
                                                        (function () {
                                                            var n = _t(function* ([n, a, s, c, l]) {
                                                                const h = `${e}/${a}`;
                                                                try {
                                                                    if ("create-index" !== n) {
                                                                        const { object: t } = yield Object(j.a)({ fs: f, gitdir: r, oid: s });
                                                                        if ((l && (yield f.rm(h)), 33188 === c)) yield f.write(h, t);
                                                                        else if (33261 === c) yield f.write(h, t, { mode: 511 });
                                                                        else {
                                                                            if (40960 !== c) throw new u.b(u.a.InternalFail, { message: `Invalid mode 0o${c.toString(8)} detected in blob ${s}` });
                                                                            yield f.writelink(h, t);
                                                                        }
                                                                    }
                                                                    const e = yield f.lstat(h);
                                                                    33261 === c && (e.mode = 493), t.insert({ filepath: a, stats: e, oid: s }), i && i.emit(`${o}progress`, { phase: "Updating workdir", loaded: ++d, total: p });
                                                                } catch (t) {
                                                                    console.log(t);
                                                                }
                                                            });
                                                            return function (t) {
                                                                return n.apply(this, arguments);
                                                            };
                                                        })()
                                                    )
                                            );
                                        });
                                        return function (e) {
                                            return t.apply(this, arguments);
                                        };
                                    })()
                                );
                        }
                        if (!g) {
                            const e = yield k.a.expand({ fs: f, gitdir: r, ref: t });
                            e.startsWith("refs/heads") ? yield k.a.writeSymbolicRef({ fs: f, gitdir: r, ref: "HEAD", value: e }) : yield k.a.writeRef({ fs: f, gitdir: r, ref: "HEAD", value: l });
                        }
                    } catch (t) {
                        throw ((t.caller = "git.checkout"), t);
                    }
                })).apply(this, arguments);
            }
            function kt() {
                return (kt = _t(function* ({ fs: t, dir: e, gitdir: r, ref: n, force: i, filepaths: o, emitter: a, emitterPrefix: s }) {
                    let c = 0;
                    return Object(ot.a)({
                        fs: t,
                        dir: e,
                        gitdir: r,
                        trees: [Object(q.a)({ ref: n }), it(), wt()],
                        map:
                            ((l = _t(function* (t, [e, r, n]) {
                                if ("." !== t) {
                                    if (!o.some((e) => G(t, e))) return null;
                                    switch ((a && a.emit(`${s}progress`, { phase: "Analyzing workdir", loaded: ++c, lengthComputable: !1 }), [!!n, !!e, !!r].map(Number).join(""))) {
                                        case "000":
                                            return;
                                        case "001":
                                            return i && o.includes(t) ? ["delete", t] : void 0;
                                        case "010":
                                            switch (yield e.type()) {
                                                case "tree":
                                                    return ["mkdir", t];
                                                case "blob":
                                                    return ["create", t, yield e.oid(), yield e.mode()];
                                                case "commit":
                                                    return void console.log(new u.b(u.a.NotImplementedFail, { thing: "submodule support" }));
                                                default:
                                                    return ["error", `new entry Unhandled type ${yield e.type()}`];
                                            }
                                        case "011":
                                            switch (`${yield e.type()}-${yield r.type()}`) {
                                                case "tree-tree":
                                                    return;
                                                case "tree-blob":
                                                case "blob-tree":
                                                    return ["conflict", t];
                                                case "blob-blob":
                                                    return (yield e.oid()) !== (yield r.oid())
                                                        ? i
                                                            ? ["update", t, yield e.oid(), yield e.mode(), (yield e.mode()) !== (yield r.mode())]
                                                            : ["conflict", t]
                                                        : (yield e.mode()) !== (yield r.mode())
                                                        ? i
                                                            ? ["update", t, yield e.oid(), yield e.mode(), !0]
                                                            : ["conflict", t]
                                                        : ["create-index", t, yield e.oid(), yield e.mode()];
                                                case "commit-tree":
                                                    return void console.log(new u.b(u.a.NotImplementedFail, { thing: "submodule support" }));
                                                case "commit-blob":
                                                    return ["conflict", t];
                                                default:
                                                    return ["error", `new entry Unhandled type ${e.type}`];
                                            }
                                        case "100":
                                            return ["delete-index", t];
                                        case "101":
                                            switch (yield n.type()) {
                                                case "tree":
                                                    return ["rmdir", t];
                                                case "blob":
                                                    return (yield n.oid()) !== (yield r.oid()) ? (i ? ["delete", t] : ["conflict", t]) : ["delete", t];
                                                default:
                                                    return [`delete entry Unhandled type ${yield n.type()}`];
                                            }
                                        case "110":
                                        case "111":
                                            switch (`${yield n.type()}-${yield e.type()}`) {
                                                case "tree-tree":
                                                    return;
                                                case "blob-blob":
                                                    if (r) {
                                                        if ((yield r.oid()) !== (yield n.oid()) && (yield r.oid()) !== (yield e.oid()))
                                                            return i ? ["update", t, yield e.oid(), yield e.mode(), (yield e.mode()) !== (yield r.mode())] : ["conflict", t];
                                                    } else if (i) return ["update", t, yield e.oid(), yield e.mode(), (yield e.mode()) !== (yield n.mode())];
                                                    return (yield e.mode()) !== (yield n.mode())
                                                        ? ["update", t, yield e.oid(), yield e.mode(), !0]
                                                        : (yield e.oid()) !== (yield n.oid())
                                                        ? ["update", t, yield e.oid(), yield e.mode(), !1]
                                                        : void 0;
                                                case "tree-blob":
                                                    return ["update-dir-to-blob", t, yield e.oid()];
                                                case "blob-tree":
                                                    return ["update-blob-to-tree", t];
                                                default:
                                                    return ["error", `update entry Unhandled type ${yield n.type()}-${yield e.type()}`];
                                            }
                                    }
                                }
                            })),
                            function (t, e) {
                                return l.apply(this, arguments);
                            }),
                        reduce:
                            ((f = _t(function* (t, e) {
                                return (e = Object(ft.a)(e)), t ? (t && "rmdir" === t[0] ? (e.push(t), e) : (e.unshift(t), e)) : e;
                            })),
                            function (t, e) {
                                return f.apply(this, arguments);
                            }),
                    });
                    var f, l;
                })).apply(this, arguments);
            }
            var Ot = r(69),
                jt = r(31),
                Pt = r(7),
                St = r(40);
            function Rt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function $t() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r }) {
                        const n = new s.a(t),
                            i = `objects/${r.slice(0, 2)}/${r.slice(2)}`;
                        return n.exists(`${e}/${i}`);
                    }),
                    ($t = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Rt(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Rt(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var At = r(56);
            function Tt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function It() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r, getExternalRefDelta: n }) {
                        const i = new s.a(t);
                        let o = yield i.readdir(Object(f.a)(e, "objects/pack"));
                        o = o.filter((t) => t.endsWith(".idx"));
                        for (const t of o) {
                            const o = `${e}/objects/pack/${t}`,
                                a = yield Object(At.a)({ fs: i, filename: o, getExternalRefDelta: n });
                            if (a.error) throw new u.b(u.a.InternalFail, { message: a.error });
                            if (a.offsets.has(r)) return !0;
                        }
                        return !1;
                    }),
                    (It = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Tt(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Tt(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Bt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Ft(t) {
                return Ut.apply(this, arguments);
            }
            function Ut() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r, format: n = "content" }) {
                        const i = new s.a(t),
                            o = (t) => Object(j.a)({ fs: i, gitdir: e, oid: t });
                        let a = yield (function (t) {
                            return $t.apply(this, arguments);
                        })({ fs: i, gitdir: e, oid: r });
                        return (
                            a ||
                                (a = yield (function (t) {
                                    return It.apply(this, arguments);
                                })({ fs: i, gitdir: e, oid: r, getExternalRefDelta: o })),
                            a
                        );
                    }),
                    (Ut = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Bt(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Bt(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            const Mt = new RegExp("^refs/(heads/|tags/|remotes/)?(.*)");
            function Ct(t) {
                const e = Mt.exec(t);
                return e ? ("remotes/" === e[1] && t.endsWith("/HEAD") ? e[2].slice(0, -5) : e[2]) : t;
            }
            var Nt = r(29);
            function Dt(t, e) {
                const r = t.map((t) => t.split("=", 1)[0]);
                return e.filter((t) => {
                    const e = t.split("=", 1)[0];
                    return r.includes(e);
                });
            }
            var zt = r(30),
                Ht = r(26),
                Lt = r(47);
            function Gt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function qt(t) {
                const e = t.indexOf("\r"),
                    r = t.indexOf("\n");
                return -1 === e && -1 === r ? -1 : -1 === e ? r + 1 : -1 === r ? e + 1 : r === e + 1 ? r + 1 : Math.min(e, r) + 1;
            }
            function Wt(t) {
                const e = new Lt.a();
                let r = "";
                var n;
                return (
                    ((n = function* () {
                        yield Object(zt.a)(t, (t) => {
                            for (t = t.toString("utf8"), r += t; ; ) {
                                const t = qt(r);
                                if (-1 === t) break;
                                e.write(r.slice(0, t)), (r = r.slice(t));
                            }
                        }),
                            r.length > 0 && e.write(r),
                            e.end();
                    }),
                    function () {
                        var t = this,
                            e = arguments;
                        return new Promise(function (r, i) {
                            var o = n.apply(t, e);
                            function a(t) {
                                Gt(o, r, i, a, s, "next", t);
                            }
                            function s(t) {
                                Gt(o, r, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    })(),
                    e
                );
            }
            var Yt = r(85),
                Zt = r(84);
            function Kt(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Vt(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            Kt(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            Kt(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function Xt(t) {
                return Jt.apply(this, arguments);
            }
            function Jt() {
                return (Jt = Vt(function* ({
                    core: t = "default",
                    dir: e,
                    gitdir: r = Object(f.a)(e, ".git"),
                    fs: n = l.a.get(t).get("fs"),
                    emitter: i = l.a.get(t).get("emitter"),
                    emitterPrefix: o = "",
                    ref: a = "HEAD",
                    refs: u,
                    remote: c,
                    url: d,
                    noGitSuffix: h = !1,
                    corsProxy: p,
                    authUsername: g,
                    authPassword: m,
                    username: y = g,
                    password: v = m,
                    token: w,
                    oauth2format: b,
                    depth: _ = null,
                    since: x = null,
                    exclude: E = [],
                    relative: k = !1,
                    tags: O = !1,
                    singleBranch: P = !1,
                    headers: S = {},
                    prune: R = !1,
                    pruneTags: $ = !1,
                    onprogress: A,
                }) {
                    try {
                        void 0 !== A && console.warn("The `onprogress` callback has been deprecated. Please use the more generic `emitter` EventEmitter argument instead.");
                        const e = new s.a(n),
                            l = yield (function (t) {
                                return Qt.apply(this, arguments);
                            })({
                                core: t,
                                gitdir: r,
                                fs: e,
                                emitter: i,
                                emitterPrefix: o,
                                ref: a,
                                refs: u,
                                remote: c,
                                url: d,
                                noGitSuffix: h,
                                corsProxy: p,
                                username: y,
                                password: v,
                                token: w,
                                oauth2format: b,
                                depth: _,
                                since: x,
                                exclude: E,
                                relative: k,
                                tags: O,
                                singleBranch: P,
                                headers: S,
                                prune: R,
                                pruneTags: $,
                            });
                        if (null === l) return { defaultBranch: null, fetchHead: null, fetchHeadDescription: null };
                        if (i) {
                            const t = Wt(l.progress);
                            Object(zt.a)(t, (t) => {
                                i.emit(`${o}message`, t.trim()), i.emit(`${o}rawmessage`, t);
                                const e = t.match(/([^:]*).*\((\d+?)\/(\d+?)\)/);
                                e && i.emit(`${o}progress`, { phase: e[1].trim(), loaded: parseInt(e[2], 10), total: parseInt(e[3], 10), lengthComputable: !0 });
                            });
                        }
                        const g = yield Object(Nt.a)(l.packfile),
                            m = g.slice(-20).toString("hex"),
                            T = { defaultBranch: l.HEAD, fetchHead: l.FETCH_HEAD.oid, fetchHeadDescription: l.FETCH_HEAD.description };
                        if ((l.headers && (T.headers = l.headers), R && (T.pruned = l.pruned), "" !== m && "5041434b0000000200000000" !== g.slice(0, 12).toString("hex"))) {
                            T.packfile = `objects/pack/pack-${m}.pack`;
                            const t = Object(f.a)(r, T.packfile);
                            yield e.write(t, g);
                            const n = (t) => Object(j.a)({ fs: e, gitdir: r, oid: t }),
                                a = yield St.a.fromPack({ pack: g, getExternalRefDelta: n, emitter: i, emitterPrefix: o });
                            yield e.write(t.replace(/\.pack$/, ".idx"), yield a.toBuffer());
                        }
                        return T;
                    } catch (t) {
                        throw ((t.caller = "git.fetch"), t);
                    }
                })).apply(this, arguments);
            }
            function Qt() {
                return (Qt = Vt(function* ({
                    core: t,
                    gitdir: e,
                    fs: r,
                    emitter: n,
                    emitterPrefix: i,
                    ref: o,
                    refs: a = [o],
                    remote: c,
                    url: f,
                    noGitSuffix: l,
                    corsProxy: d,
                    username: h,
                    password: p,
                    token: g,
                    oauth2format: m,
                    depth: y,
                    since: v,
                    exclude: w,
                    relative: b,
                    tags: _,
                    singleBranch: x,
                    headers: E,
                    prune: O,
                    pruneTags: P,
                }) {
                    const R = new s.a(r);
                    if (null !== y) {
                        if (Number.isNaN(parseInt(y))) throw new u.b(u.a.InvalidDepthParameterError, { depth: y });
                        y = parseInt(y);
                    }
                    (c = c || "origin"), void 0 === f && (f = yield S({ fs: R, gitdir: e, path: `remote.${c}.url` })), void 0 === d && (d = yield S({ fs: R, gitdir: e, path: "http.corsProxy" }));
                    let $ = { username: h, password: p, token: g, oauth2format: m };
                    const A = Ot.a.getRemoteHelperFor({ url: f }),
                        T = yield A.discover({ core: t, corsProxy: d, service: "git-upload-pack", url: f, noGitSuffix: l, auth: $, headers: E });
                    $ = T.auth;
                    const I = T.refs;
                    if (0 === I.size) return null;
                    if (null !== y && !T.capabilities.has("shallow")) throw new u.b(u.a.RemoteDoesNotSupportShallowFail);
                    if (null !== v && !T.capabilities.has("deepen-since")) throw new u.b(u.a.RemoteDoesNotSupportDeepenSinceFail);
                    if (w.length > 0 && !T.capabilities.has("deepen-not")) throw new u.b(u.a.RemoteDoesNotSupportDeepenNotFail);
                    if (!0 === b && !T.capabilities.has("deepen-relative")) throw new u.b(u.a.RemoteDoesNotSupportDeepenRelativeFail);
                    const { oid: B, fullref: F } = k.a.resolveAgainstMap({ ref: o, map: I });
                    for (const t of I.keys()) t === F || "HEAD" === t || t.startsWith("refs/heads/") || (_ && t.startsWith("refs/tags/")) || I.delete(t);
                    const U = Dt([...T.capabilities], ["multi_ack_detailed", "no-done", "side-band-64k", "ofs-delta", `agent=${Ht.a.agent}`]);
                    b && U.push("deepen-relative");
                    const M = x ? [B] : I.values(),
                        C = x ? a : yield k.a.listRefs({ fs: R, gitdir: e, filepath: "refs" });
                    let N = [];
                    for (let t of C)
                        try {
                            t = yield k.a.expand({ fs: R, gitdir: e, ref: t });
                            const r = yield k.a.resolve({ fs: R, gitdir: e, ref: t });
                            (yield Ft({ fs: R, gitdir: e, oid: r })) && N.push(r);
                        } catch (t) {}
                    N = [...new Set(N)];
                    const D = yield jt.a.read({ fs: R, gitdir: e }),
                        z = T.capabilities.has("shallow") ? [...D] : [],
                        H = Object(Zt.a)({ capabilities: U, wants: M, haves: N, shallows: z, depth: y, since: v, exclude: w }),
                        L = yield Object(Nt.a)(H),
                        G = yield A.connect({ core: t, emitter: n, emitterPrefix: i, corsProxy: d, service: "git-upload-pack", url: f, noGitSuffix: l, auth: $, body: [L], headers: E }),
                        q = yield Object(Yt.a)(G.body);
                    G.headers && (q.headers = G.headers);
                    for (const t of q.shallows)
                        if (!D.has(t))
                            try {
                                const { object: r } = yield Object(j.a)({ fs: R, gitdir: e, oid: t }),
                                    n = new Pt.a(r),
                                    i = yield Promise.all(n.headers().parent.map((t) => Ft({ fs: R, gitdir: e, oid: t })));
                                0 === i.length || i.every((t) => t) || D.add(t);
                            } catch (e) {
                                D.add(t);
                            }
                    for (const t of q.unshallows) D.delete(t);
                    if ((yield jt.a.write({ fs: R, gitdir: e, oids: D }), x)) {
                        const t = new Map([[F, B]]),
                            r = new Map();
                        let n = 10,
                            i = F;
                        for (; n--; ) {
                            const t = T.symrefs.get(i);
                            if (void 0 === t) break;
                            r.set(i, t), (i = t);
                        }
                        t.set(i, I.get(i));
                        const { pruned: o } = yield k.a.updateRemoteRefs({ fs: R, gitdir: e, remote: c, refs: t, symrefs: r, tags: _, prune: O });
                        O && (q.pruned = o);
                    } else {
                        const { pruned: t } = yield k.a.updateRemoteRefs({ fs: R, gitdir: e, remote: c, refs: I, symrefs: T.symrefs, tags: _, prune: O, pruneTags: P });
                        O && (q.pruned = t);
                    }
                    if (((q.HEAD = T.symrefs.get("HEAD")), void 0 === q.HEAD)) {
                        const { oid: t } = k.a.resolveAgainstMap({ ref: "HEAD", map: I });
                        for (const [e, r] of I.entries())
                            if ("HEAD" !== e && r === t) {
                                q.HEAD = e;
                                break;
                            }
                    }
                    const W = F.startsWith("refs/tags") ? "tag" : "branch";
                    return (q.FETCH_HEAD = { oid: B, description: `${W} '${Ct(F)}' of ${f}` }), q;
                })).apply(this, arguments);
            }
            function te(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ee(t) {
                return re.apply(this, arguments);
            }
            function re() {
                var t;
                return (
                    (t = function* ({ core: t = "default", bare: e = !1, dir: r, gitdir: n = e ? r : Object(f.a)(r, ".git"), fs: i = l.a.get(t).get("fs"), noOverwrite: o = !1 }) {
                        try {
                            const t = new s.a(i);
                            if (o && (yield t.exists(n + "/config"))) return;
                            let r = ["hooks", "info", "objects/info", "objects/pack", "refs/heads", "refs/tags"];
                            r = r.map((t) => n + "/" + t);
                            for (const e of r) yield t.mkdir(e);
                            yield t.write(n + "/config", "[core]\n\trepositoryformatversion = 0\n\tfilemode = false\n" + `\tbare = ${e}\n` + (e ? "" : "\tlogallrefupdates = true\n") + "\tsymlinks = false\n\tignorecase = true\n"),
                                yield t.write(n + "/HEAD", "ref: refs/heads/master\n");
                        } catch (t) {
                            throw ((t.caller = "git.init"), t);
                        }
                    }),
                    (re = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                te(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                te(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function ne(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ie(t) {
                return oe.apply(this, arguments);
            }
            function oe() {
                var t;
                return (
                    (t = function* ({
                        core: t = "default",
                        dir: e,
                        gitdir: r = Object(f.a)(e, ".git"),
                        fs: n = l.a.get(t).get("fs"),
                        emitter: i = l.a.get(t).get("emitter"),
                        emitterPrefix: o = "",
                        url: a,
                        noGitSuffix: u = !1,
                        corsProxy: c,
                        ref: d,
                        remote: h = "origin",
                        authUsername: p,
                        authPassword: g,
                        username: m,
                        password: y,
                        token: v,
                        oauth2format: w,
                        depth: b,
                        since: _,
                        exclude: x = [],
                        relative: E = !1,
                        singleBranch: k = !1,
                        noCheckout: O = !1,
                        noTags: j = !1,
                        headers: P = {},
                        onprogress: R,
                    }) {
                        try {
                            void 0 !== R && console.warn("The `onprogress` callback has been deprecated. Please use the more generic `emitter` EventEmitter argument instead.");
                            const f = new s.a(n);
                            (m = void 0 === m ? p : m),
                                (y = void 0 === y ? g : y),
                                yield ee({ gitdir: r, fs: f }),
                                yield S({ gitdir: r, fs: f, path: `remote.${h}.url`, value: a }),
                                yield S({ gitdir: r, fs: f, path: `remote.${h}.fetch`, value: `+refs/heads/*:refs/remotes/${h}/*` }),
                                c && (yield S({ gitdir: r, fs: f, path: "http.corsProxy", value: c }));
                            const { defaultBranch: l, fetchHead: $ } = yield Xt({
                                core: t,
                                gitdir: r,
                                fs: f,
                                emitter: i,
                                emitterPrefix: o,
                                noGitSuffix: u,
                                ref: d,
                                remote: h,
                                username: m,
                                password: y,
                                token: v,
                                oauth2format: w,
                                depth: b,
                                since: _,
                                exclude: x,
                                relative: E,
                                singleBranch: k,
                                headers: P,
                                tags: !j,
                            });
                            if (null === $) return;
                            (d = (d = d || l).replace("refs/heads/", "")), yield ut({ dir: e, gitdir: r, fs: f, emitter: i, emitterPrefix: o, ref: d, remote: h, noCheckout: O });
                        } catch (t) {
                            throw ((t.caller = "git.clone"), t);
                        }
                    }),
                    (oe = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                ne(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                ne(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var ae = r(11);
            function se(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ue(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            se(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            se(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function ce(t) {
                return fe.apply(this, arguments);
            }
            function fe() {
                return (fe = ue(function* ({
                    core: t = "default",
                    dir: e,
                    gitdir: r = Object(f.a)(e, ".git"),
                    fs: n = l.a.get(t).get("fs"),
                    message: i,
                    author: o,
                    committer: d,
                    signingKey: h,
                    dryRun: p = !1,
                    noUpdateBranch: g = !1,
                    ref: m,
                    parent: y,
                    tree: v,
                }) {
                    try {
                        const e = new s.a(n);
                        if ((m || (m = yield k.a.resolve({ fs: e, gitdir: r, ref: "HEAD", depth: 2 })), void 0 === i)) throw new u.b(u.a.MissingRequiredParameterError, { function: "commit", parameter: "message" });
                        if (void 0 === (o = yield A({ fs: e, gitdir: r, author: o }))) throw new u.b(u.a.MissingAuthorError);
                        if ((((d = Object.assign({}, d || o)).date = d.date || o.date), void 0 === (d = yield A({ fs: e, gitdir: r, author: d })))) throw new u.b(u.a.MissingCommitterError);
                        return a.a.acquire(
                            { fs: e, gitdir: r },
                            (function () {
                                var n = ue(function* (n) {
                                    const a = Object(dt.a)(n.entries).get(".");
                                    if ((v || (v = yield le({ fs: e, gitdir: r, inode: a, dryRun: p })), !y))
                                        try {
                                            y = [yield k.a.resolve({ fs: e, gitdir: r, ref: m })];
                                        } catch (t) {
                                            y = [];
                                        }
                                    let s = Pt.a.from({ tree: v, parent: y, author: o, committer: d, message: i });
                                    if (h) {
                                        const e = l.a.get(t).get("pgp");
                                        s = yield Pt.a.sign(s, e, h);
                                    }
                                    const u = yield Object(c.a)({ fs: e, gitdir: r, type: "commit", object: s.toObject(), dryRun: p });
                                    return g || p || (yield k.a.writeRef({ fs: e, gitdir: r, ref: m, value: u })), u;
                                });
                                return function (t) {
                                    return n.apply(this, arguments);
                                };
                            })()
                        );
                    } catch (t) {
                        throw ((t.caller = "git.commit"), t);
                    }
                })).apply(this, arguments);
            }
            function le(t) {
                return de.apply(this, arguments);
            }
            function de() {
                return (de = ue(function* ({ fs: t, gitdir: e, inode: r, dryRun: n }) {
                    const i = r.children;
                    for (const r of i) "tree" === r.type && ((r.metadata.mode = "040000"), (r.metadata.oid = yield le({ fs: t, gitdir: e, inode: r, dryRun: n })));
                    const o = i.map((t) => ({ mode: t.metadata.mode, path: t.basename, oid: t.metadata.oid, type: t.type })),
                        a = ae.a.from(o);
                    return yield Object(c.a)({ fs: t, gitdir: e, type: "tree", object: a.toObject(), dryRun: n });
                })).apply(this, arguments);
            }
            function he(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function pe(t) {
                return ge.apply(this, arguments);
            }
            function ge() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), fullname: i = !1 }) {
                        try {
                            const t = new s.a(n),
                                e = yield k.a.resolve({ fs: t, gitdir: r, ref: "HEAD", depth: 2 });
                            if (!e.startsWith("refs/")) return;
                            return i ? e : Ct(e);
                        } catch (t) {
                            throw ((t.caller = "git.currentBranch"), t);
                        }
                    }),
                    (ge = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                he(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                he(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function me(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ye(t) {
                return ve.apply(this, arguments);
            }
            function ve() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i }) {
                        try {
                            const t = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "deleteBranch", parameter: "ref" });
                            if (i !== w.a.clean(i)) throw new u.b(u.a.InvalidRefNameError, { verb: "delete", noun: "branch", ref: i, suggestion: w.a.clean(i) });
                            if (!(yield t.exists(`${r}/refs/heads/${i}`))) throw new u.b(u.a.RefNotExistsError, { verb: "delete", noun: "branch", ref: i });
                            if (i === (yield pe({ fs: t, gitdir: r }))) throw new u.b(u.a.BranchDeleteError, { ref: i });
                            yield t.rm(`${r}/refs/heads/${i}`);
                        } catch (t) {
                            throw ((t.caller = "git.deleteBranch"), t);
                        }
                    }),
                    (ve = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                me(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                me(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function we(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function be(t) {
                return _e.apply(this, arguments);
            }
            function _e() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i }) {
                        try {
                            const t = new s.a(n);
                            yield k.a.deleteRef({ fs: t, gitdir: r, ref: i });
                        } catch (t) {
                            throw ((t.caller = "git.deleteRef"), t);
                        }
                    }),
                    (_e = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                we(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                we(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function xe(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Ee(t) {
                return ke.apply(this, arguments);
            }
            function ke() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), remote: i }) {
                        try {
                            const t = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "deleteRemote", parameter: "remote" });
                            const e = yield b.a.get({ fs: t, gitdir: r });
                            yield e.deleteSection("remote", i), yield b.a.save({ fs: t, gitdir: r, config: e });
                        } catch (t) {
                            throw ((t.caller = "git.deleteRemote"), t);
                        }
                    }),
                    (ke = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                xe(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                xe(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Oe(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function je(t) {
                return Pe.apply(this, arguments);
            }
            function Pe() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i }) {
                        try {
                            const t = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "deleteTag", parameter: "ref" });
                            (i = i.startsWith("refs/tags/") ? i : `refs/tags/${i}`), yield be({ fs: t, gitdir: r, ref: i });
                        } catch (t) {
                            throw ((t.caller = "git.deleteTag"), t);
                        }
                    }),
                    (Pe = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Oe(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Oe(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Se(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Re() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r }) {
                        const n = new s.a(t),
                            i = r.slice(0, 2);
                        return (yield n.readdir(`${e}/objects/${i}`)).map((t) => `${i}${t}`).filter((t) => t.startsWith(r));
                    }),
                    (Re = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Se(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Se(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function $e(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Ae() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r, getExternalRefDelta: n }) {
                        const i = new s.a(t),
                            o = [];
                        let a = yield i.readdir(Object(f.a)(e, "objects/pack"));
                        a = a.filter((t) => t.endsWith(".idx"));
                        for (const t of a) {
                            const a = `${e}/objects/pack/${t}`,
                                s = yield Object(At.a)({ fs: i, filename: a, getExternalRefDelta: n });
                            if (s.error) throw new u.b(u.a.InternalFail, { message: s.error });
                            for (const t of s.offsets.keys()) t.startsWith(r) && o.push(t);
                        }
                        return o;
                    }),
                    (Ae = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                $e(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                $e(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Te(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Ie() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r }) {
                        const n = new s.a(t),
                            i = yield (function (t) {
                                return Re.apply(this, arguments);
                            })({ fs: n, gitdir: e, oid: r }),
                            o = yield (function (t) {
                                return Ae.apply(this, arguments);
                            })({ fs: n, gitdir: e, oid: r, getExternalRefDelta: (r) => Object(j.a)({ fs: t, gitdir: e, oid: r }) }),
                            a = i.concat(o);
                        if (1 === a.length) return a[0];
                        if (a.length > 1) throw new u.b(u.a.AmbiguousShortOid, { short: r, matches: a.join(", ") });
                        throw new u.b(u.a.ShortOidNotFound, { short: r });
                    }),
                    (Ie = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Te(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Te(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Be(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Fe(t) {
                return Ue.apply(this, arguments);
            }
            function Ue() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), oid: i }) {
                        try {
                            const t = new s.a(n);
                            return yield (function (t) {
                                return Ie.apply(this, arguments);
                            })({ fs: t, gitdir: r, oid: i });
                        } catch (t) {
                            throw ((t.caller = "git.expandOid"), t);
                        }
                    }),
                    (Ue = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Be(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Be(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Me(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Ce(t) {
                return Ne.apply(this, arguments);
            }
            function Ne() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i }) {
                        try {
                            const t = new s.a(n);
                            return yield k.a.expand({ fs: t, gitdir: r, ref: i });
                        } catch (t) {
                            throw ((t.caller = "git.expandRef"), t);
                        }
                    }),
                    (Ne = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Me(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Me(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function De(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ze(t) {
                return He.apply(this, arguments);
            }
            function He() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), oids: i }) {
                        try {
                            const t = new s.a(n),
                                e = {},
                                o = i.length;
                            let a = i.map((t, e) => ({ index: e, oid: t }));
                            for (; a.length; ) {
                                const n = new Set();
                                for (const t of a) {
                                    const { oid: r, index: i } = t;
                                    e[r] || (e[r] = new Set()), e[r].add(i), e[r].size === o && n.add(r);
                                }
                                if (n.size > 0) return [...n];
                                const i = [];
                                for (const e of a) {
                                    const { oid: n, index: o } = e;
                                    try {
                                        const { object: e } = yield Object(j.a)({ fs: t, gitdir: r, oid: n }),
                                            a = Pt.a.from(e),
                                            { parent: s } = a.parseHeaders();
                                        for (const t of s) i.push({ oid: t, index: o });
                                    } catch (t) {}
                                }
                                a = i;
                            }
                            return [];
                        } catch (t) {
                            throw ((t.caller = "git.findMergeBase"), t);
                        }
                    }),
                    (He = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                De(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                De(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var Le = r(23);
            function Ge(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function qe(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            Ge(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            Ge(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function We(t) {
                return Ye.apply(this, arguments);
            }
            function Ye() {
                return (Ye = qe(function* ({ core: t = "default", fs: e = l.a.get(t).get("fs"), filepath: r }) {
                    try {
                        return Ze(new s.a(e), r);
                    } catch (t) {
                        throw ((t.caller = "git.findRoot"), t);
                    }
                })).apply(this, arguments);
            }
            function Ze(t, e) {
                return Ke.apply(this, arguments);
            }
            function Ke() {
                return (Ke = qe(function* (t, e) {
                    if (yield t.exists(Object(f.a)(e, ".git"))) return e;
                    {
                        const r = Object(Le.a)(e);
                        if (r === e) throw new u.b(u.a.GitRootNotFoundError, { filepath: e });
                        return Ze(t, r);
                    }
                })).apply(this, arguments);
            }
            var Ve = r(42);
            function Xe(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Je(t) {
                return Qe.apply(this, arguments);
            }
            function Qe() {
                var t;
                return (
                    (t = function* ({ core: t = "default", corsProxy: e, url: r, authUsername: n, authPassword: i, noGitSuffix: o = !1, username: a = n, password: s = i, token: u, oauth2format: c, headers: f = {}, forPush: l = !1 }) {
                        try {
                            let n = { username: a, password: s, token: u, oauth2format: c };
                            const i = yield Ve.a.discover({ core: t, corsProxy: e, service: l ? "git-receive-pack" : "git-upload-pack", url: r, noGitSuffix: o, auth: n, headers: f });
                            n = i.auth;
                            const d = { capabilities: [...i.capabilities] };
                            for (const [t, e] of i.refs) {
                                const r = t.split("/"),
                                    n = r.pop();
                                let i = d;
                                for (const t of r) (i[t] = i[t] || {}), (i = i[t]);
                                i[n] = e;
                            }
                            for (const [t, e] of i.symrefs) {
                                const r = t.split("/"),
                                    n = r.pop();
                                let i = d;
                                for (const t of r) (i[t] = i[t] || {}), (i = i[t]);
                                i[n] = e;
                            }
                            return d;
                        } catch (t) {
                            throw ((t.caller = "git.getRemoteInfo"), t);
                        }
                    }),
                    (Qe = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Xe(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Xe(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var tr = r(129);
            function er(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function rr(t) {
                return nr.apply(this, arguments);
            }
            function nr() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), emitter: i = l.a.get(t).get("emitter"), emitterPrefix: o = "", filepath: a }) {
                        try {
                            const t = new s.a(n);
                            a = Object(f.a)(e, a);
                            const u = yield t.read(a),
                                c = (e) => Object(j.a)({ fs: t, gitdir: r, oid: e }),
                                l = yield St.a.fromPack({ pack: u, getExternalRefDelta: c, emitter: i, emitterPrefix: o });
                            yield t.write(a.replace(/\.pack$/, ".idx"), yield l.toBuffer());
                        } catch (t) {
                            throw ((t.caller = "git.indexPack"), t);
                        }
                    }),
                    (nr = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                er(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                er(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function ir(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function or(t) {
                return ar.apply(this, arguments);
            }
            function ar() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), oid: i, ancestor: o, depth: a = -1 }) {
                        try {
                            const t = new s.a(n),
                                e = yield jt.a.read({ fs: t, gitdir: r });
                            if (!i) throw new u.b(u.a.MissingRequiredParameterError, { function: "isDescendent", parameter: "oid" });
                            if (!o) throw new u.b(u.a.MissingRequiredParameterError, { function: "isDescendent", parameter: "ancestor" });
                            if (i === o) return !1;
                            const c = [i],
                                f = new Set();
                            let l = 0;
                            for (; c.length; ) {
                                if (l++ === a) throw new u.b(u.a.MaxSearchDepthExceeded, { depth: a });
                                const n = c.shift(),
                                    { type: i, object: s } = yield Object(j.a)({ fs: t, gitdir: r, oid: n });
                                if ("commit" !== i) throw new u.b(u.a.ResolveCommitError, { oid: n });
                                const d = Pt.a.from(s).parse();
                                for (const t of d.parent) if (t === o) return !0;
                                if (!e.has(n)) for (const t of d.parent) f.has(t) || (c.push(t), f.add(t));
                            }
                            return !1;
                        } catch (t) {
                            throw ((t.caller = "git.isDescendent"), t);
                        }
                    }),
                    (ar = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                ir(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                ir(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function sr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ur(t) {
                return cr.apply(this, arguments);
            }
            function cr() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), remote: i }) {
                        try {
                            const t = new s.a(n);
                            return k.a.listBranches({ fs: t, gitdir: r, remote: i });
                        } catch (t) {
                            throw ((t.caller = "git.listBranches"), t);
                        }
                    }),
                    (cr = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                sr(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                sr(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var fr = r(32);
            function lr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function dr(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            lr(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            lr(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function hr(t) {
                return pr.apply(this, arguments);
            }
            function pr() {
                return (pr = dr(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), oid: i, format: o = "parsed", filepath: a, encoding: c }) {
                    try {
                        const t = new s.a(n);
                        if (void 0 !== a) {
                            if (a.startsWith("/") || a.endsWith("/")) throw new u.b(u.a.DirectorySeparatorsError);
                            const e = i,
                                n = yield Object(fr.a)({ fs: t, gitdir: r, oid: i }),
                                o = n.tree;
                            if ("" === a) i = n.oid;
                            else {
                                const n = a.split("/");
                                i = yield gr({ fs: t, gitdir: r, tree: o, pathArray: n, oid: e, filepath: a });
                            }
                        }
                        const e = "parsed" === o ? "content" : o,
                            f = yield Object(j.a)({ fs: t, gitdir: r, oid: i, format: e });
                        if (((f.oid = i), "parsed" === o))
                            switch (((f.format = "parsed"), f.type)) {
                                case "commit":
                                    f.object = Pt.a.from(f.object).parse();
                                    break;
                                case "tree":
                                    f.object = { entries: ae.a.from(f.object).entries() };
                                    break;
                                case "blob":
                                    c ? (f.object = f.object.toString(c)) : (f.format = "content");
                                    break;
                                case "tag":
                                    f.object = O.a.from(f.object).parse();
                                    break;
                                default:
                                    throw new u.b(u.a.ObjectTypeUnknownFail, { type: f.type });
                            }
                        return f;
                    } catch (t) {
                        throw ((t.caller = "git.readObject"), t);
                    }
                })).apply(this, arguments);
            }
            function gr(t) {
                return mr.apply(this, arguments);
            }
            function mr() {
                return (mr = dr(function* ({ fs: t, gitdir: e, tree: r, pathArray: n, oid: i, filepath: o }) {
                    const a = n.shift();
                    for (const s of r)
                        if (s.path === a) {
                            if (0 === n.length) return s.oid;
                            {
                                const { type: a, object: c } = yield Object(j.a)({ fs: t, gitdir: e, oid: s.oid });
                                if ("blob" === a) throw new u.b(u.a.DirectoryIsAFileError, { oid: i, filepath: o });
                                if ("tree" !== a) throw new u.b(u.a.ObjectTypeAssertionInTreeFail, { oid: s.oid, entrypath: o, type: a });
                                return gr({ fs: t, gitdir: e, tree: (r = ae.a.from(c)), pathArray: n, oid: i, filepath: o });
                            }
                        }
                    throw new u.b(u.a.TreeOrBlobNotFoundError, { oid: i, filepath: o });
                })).apply(this, arguments);
            }
            function yr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function vr(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            yr(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            yr(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function wr(t) {
                return br.apply(this, arguments);
            }
            function br() {
                return (br = vr(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i }) {
                    try {
                        const t = new s.a(n);
                        if (i) {
                            const e = yield k.a.resolve({ gitdir: r, fs: t, ref: i }),
                                n = [];
                            return yield _r({ gitdir: r, fs: t, oid: e, filenames: n, prefix: "" }), n;
                        }
                        return a.a.acquire(
                            { fs: t, gitdir: r },
                            (function () {
                                var t = vr(function* (t) {
                                    return t.entries.map((t) => t.path);
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })()
                        );
                    } catch (t) {
                        throw ((t.caller = "git.listFiles"), t);
                    }
                })).apply(this, arguments);
            }
            function _r(t) {
                return xr.apply(this, arguments);
            }
            function xr() {
                return (xr = vr(function* ({ gitdir: t, fs: e, oid: r, filenames: n, prefix: i }) {
                    const { object: o } = yield hr({ gitdir: t, fs: e, oid: r, filepath: "" });
                    for (const r of o.entries) "tree" === r.type ? yield _r({ gitdir: t, fs: e, oid: r.oid, filenames: n, prefix: Object(f.a)(i, r.path) }) : n.push(Object(f.a)(i, r.path));
                })).apply(this, arguments);
            }
            function Er(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function kr(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            Er(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            Er(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function Or(t) {
                return jr.apply(this, arguments);
            }
            function jr() {
                return (jr = kr(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs") }) {
                    try {
                        const t = new s.a(n),
                            e = yield b.a.get({ fs: t, gitdir: r }),
                            i = yield e.getSubsections("remote");
                        return Promise.all(
                            i.map(
                                (function () {
                                    var t = kr(function* (t) {
                                        return { remote: t, url: yield e.get(`remote.${t}.url`) };
                                    });
                                    return function (e) {
                                        return t.apply(this, arguments);
                                    };
                                })()
                            )
                        );
                    } catch (t) {
                        throw ((t.caller = "git.listRemotes"), t);
                    }
                })).apply(this, arguments);
            }
            function Pr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Sr(t) {
                return Rr.apply(this, arguments);
            }
            function Rr() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs") }) {
                        try {
                            const t = new s.a(n);
                            return k.a.listTags({ fs: t, gitdir: r });
                        } catch (t) {
                            throw ((t.caller = "git.listTags"), t);
                        }
                    }),
                    (Rr = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Pr(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Pr(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function $r(t, e) {
                return t.committer.timestamp - e.committer.timestamp;
            }
            function Ar(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Tr(t) {
                return Ir.apply(this, arguments);
            }
            function Ir() {
                var t;
                return (
                    (t = function* ({ fs: t, gitdir: e, oid: r, signing: n }) {
                        try {
                            const { type: i, object: o } = yield Object(j.a)({ fs: t, gitdir: e, oid: r });
                            if ("commit" !== i) throw new u.b(u.a.ObjectTypeAssertionFail, { oid: r, expected: "commit", type: i });
                            const a = Pt.a.from(o),
                                s = Object.assign({ oid: r }, a.parse());
                            return n && (s.payload = a.withoutSignature()), s;
                        } catch (t) {
                            return { oid: r, error: t };
                        }
                    }),
                    (Ir = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Ar(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Ar(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Br(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Fr(t) {
                return Ur.apply(this, arguments);
            }
            function Ur() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i = "HEAD", depth: o, since: a, signing: u = !1 }) {
                        try {
                            const t = new s.a(n),
                                e = void 0 === a ? void 0 : Math.floor(a.valueOf() / 1e3),
                                c = [],
                                f = yield jt.a.read({ fs: t, gitdir: r }),
                                l = yield k.a.resolve({ fs: t, gitdir: r, ref: i }),
                                d = [yield Tr({ fs: t, gitdir: r, oid: l, signing: u })];
                            for (;;) {
                                const n = d.pop();
                                if (n.error) {
                                    c.push(n);
                                    break;
                                }
                                if (void 0 !== e && n.committer.timestamp <= e) break;
                                if ((c.push(n), void 0 !== o && c.length === o)) break;
                                if (!f.has(n.oid))
                                    for (const e of n.parent) {
                                        const n = yield Tr({ fs: t, gitdir: r, oid: e, signing: u });
                                        d.map((t) => t.oid).includes(n.oid) || d.push(n);
                                    }
                                if (0 === d.length) break;
                                d.sort($r);
                            }
                            return c;
                        } catch (t) {
                            throw ((t.caller = "git.log"), t);
                        }
                    }),
                    (Ur = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Br(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Br(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var Mr = r(86);
            function Cr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Nr(t) {
                return Dr.apply(this, arguments);
            }
            function Dr() {
                var t;
                return (
                    (t = function* ({
                        core: t = "default",
                        dir: e,
                        gitdir: r = Object(f.a)(e, ".git"),
                        fs: n = l.a.get(t).get("fs"),
                        ours: i,
                        theirs: o,
                        fastForwardOnly: a = !1,
                        dryRun: c = !1,
                        noUpdateBranch: d = !1,
                        message: h,
                        author: p,
                        committer: g,
                        signingKey: m,
                    }) {
                        try {
                            const f = new s.a(n);
                            void 0 === i && (i = yield pe({ fs: f, gitdir: r, fullname: !0 })), (i = yield k.a.expand({ fs: f, gitdir: r, ref: i })), (o = yield k.a.expand({ fs: f, gitdir: r, ref: o }));
                            const l = yield k.a.resolve({ fs: f, gitdir: r, ref: i }),
                                y = yield k.a.resolve({ fs: f, gitdir: r, ref: o }),
                                v = yield ze({ core: t, dir: e, gitdir: r, fs: f, oids: [l, y] });
                            if (1 !== v.length) throw new u.b(u.a.MergeNotSupportedFail);
                            const w = v[0];
                            if (w === y) return { oid: l, alreadyMerged: !0 };
                            if (w === l) return c || d || (yield k.a.writeRef({ fs: f, gitdir: r, ref: i, value: y })), { oid: y, fastForward: !0 };
                            {
                                if (a) throw new u.b(u.a.FastForwardFail);
                                const e = yield Object(Mr.a)({ core: t, fs: f, gitdir: r, ourOid: l, theirOid: y, baseOid: w, ourName: i, baseName: "base", theirName: o, dryRun: c });
                                return (
                                    h || (h = `Merge branch '${Ct(o)}' into ${Ct(i)}`),
                                    { oid: yield ce({ fs: f, gitdir: r, message: h, ref: i, tree: e, parent: [l, y], author: p, committer: g, signingKey: m, dryRun: c, noUpdateBranch: d }), tree: e, mergeCommit: !0 }
                                );
                            }
                        } catch (t) {
                            throw ((t.caller = "git.merge"), t);
                        }
                    }),
                    (Dr = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Cr(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Cr(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var zr = r(71);
            function Hr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Lr(t) {
                return Gr.apply(this, arguments);
            }
            function Gr() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), oids: i, write: o = !1 }) {
                        try {
                            const e = new s.a(n),
                                a = yield Object(zr.a)({ core: t, gitdir: r, fs: e, oids: i }),
                                u = yield Object(Nt.a)(a),
                                c = `pack-${u.slice(-20).toString("hex")}.pack`;
                            return o ? (yield e.write(Object(f.a)(r, `objects/pack/${c}`), u), { filename: c }) : { filename: c, packfile: u };
                        } catch (t) {
                            throw ((t.caller = "git.packObjects"), t);
                        }
                    }),
                    (Gr = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Hr(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Hr(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function qr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Wr(t) {
                return Yr.apply(this, arguments);
            }
            function Yr() {
                var t;
                return (
                    (t = function* ({
                        core: t = "default",
                        dir: e,
                        gitdir: r = Object(f.a)(e, ".git"),
                        fs: n = l.a.get(t).get("fs"),
                        ref: i,
                        fastForwardOnly: o = !1,
                        noGitSuffix: a = !1,
                        corsProxy: u,
                        emitter: c = l.a.get(t).get("emitter"),
                        emitterPrefix: d = "",
                        authUsername: h,
                        authPassword: p,
                        username: g = h,
                        password: m = p,
                        token: y,
                        oauth2format: v,
                        singleBranch: w,
                        headers: b = {},
                        author: _,
                        committer: x,
                        signingKey: E,
                        fast: k = !1,
                    }) {
                        try {
                            const t = new s.a(n);
                            i || (i = yield pe({ fs: t, gitdir: r }));
                            const f = yield S({ gitdir: r, fs: t, path: `branch.${i}.remote` }),
                                { fetchHead: l, fetchHeadDescription: h } = yield Xt({
                                    dir: e,
                                    gitdir: r,
                                    fs: t,
                                    emitter: c,
                                    emitterPrefix: d,
                                    noGitSuffix: a,
                                    corsProxy: u,
                                    ref: i,
                                    remote: f,
                                    username: g,
                                    password: m,
                                    token: y,
                                    oauth2format: v,
                                    singleBranch: w,
                                    headers: b,
                                });
                            yield Nr({ gitdir: r, fs: t, ours: i, theirs: l, fastForwardOnly: o, message: `Merge ${h}`, author: _, committer: x, signingKey: E }),
                                k ? yield xt({ dir: e, gitdir: r, fs: t, ref: i, emitter: c, emitterPrefix: d }) : yield ut({ dir: e, gitdir: r, fs: t, ref: i, emitter: c, emitterPrefix: d });
                        } catch (t) {
                            throw ((t.caller = "git.pull"), t);
                        }
                    }),
                    (Yr = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                qr(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                qr(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var Zr = r(52),
                Kr = r(90),
                Vr = r(89),
                Xr = r(87),
                Jr = r(88);
            function Qr(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function tn(t) {
                return en.apply(this, arguments);
            }
            function en() {
                var t;
                return (
                    (t = function* ({
                        core: t = "default",
                        dir: e,
                        gitdir: r = Object(f.a)(e, ".git"),
                        fs: n = l.a.get(t).get("fs"),
                        emitter: i = l.a.get(t).get("emitter"),
                        emitterPrefix: o = "",
                        ref: a,
                        remoteRef: c,
                        remote: d = "origin",
                        url: h,
                        force: p = !1,
                        noGitSuffix: g = !1,
                        corsProxy: m,
                        authUsername: y,
                        authPassword: v,
                        username: w = y,
                        password: b = v,
                        token: _,
                        oauth2format: x,
                        headers: E = {},
                    }) {
                        try {
                            const e = new s.a(n);
                            let f;
                            void 0 === h && (h = yield S({ fs: e, gitdir: r, path: `remote.${d}.url` })),
                                void 0 === m && (m = yield S({ fs: e, gitdir: r, path: "http.corsProxy" })),
                                (f = a ? yield k.a.expand({ fs: e, gitdir: r, ref: a }) : yield k.a.resolve({ fs: e, gitdir: r, ref: "HEAD", depth: 2 }));
                            const l = yield k.a.resolve({ fs: e, gitdir: r, ref: f });
                            let y = { username: w, password: b, token: _, oauth2format: x };
                            const v = Ot.a.getRemoteHelperFor({ url: h }),
                                O = yield v.discover({ core: t, corsProxy: m, service: "git-receive-pack", url: h, noGitSuffix: g, auth: y, headers: E });
                            let j;
                            if (((y = O.auth), c))
                                try {
                                    j = yield k.a.expandAgainstMap({ ref: c, map: O.refs });
                                } catch (t) {
                                    if (t.code !== u.a.ExpandRefError) throw t;
                                    j = c.startsWith("refs/") ? c : `refs/heads/${c}`;
                                }
                            else j = f;
                            const P = O.refs.get(j) || "0000000000000000000000000000000000000000",
                                R = [...O.refs.values()],
                                $ = yield ze({ fs: e, gitdir: r, oids: [l, P] });
                            for (const t of $) R.push(t);
                            const A = yield Object(Xr.a)({ fs: e, gitdir: r, start: [l], finish: R }),
                                T = yield Object(Jr.a)({ fs: e, gitdir: r, oids: A });
                            if (!p) {
                                if (f.startsWith("refs/tags") && "0000000000000000000000000000000000000000" !== P) throw new u.b(u.a.PushRejectedTagExists, {});
                                if ("0000000000000000000000000000000000000000" !== l && "0000000000000000000000000000000000000000" !== P && !(yield or({ fs: e, gitdir: r, oid: l, ancestor: P })))
                                    throw new u.b(u.a.PushRejectedNonFastForward, {});
                            }
                            const I = Dt([...O.capabilities], ["report-status", "side-band-64k", `agent=${Ht.a.agent}`]),
                                B = yield Object(Vr.a)({ capabilities: I, triplets: [{ oldoid: P, oid: l, fullRef: j }] }),
                                F = yield Object(zr.a)({ fs: e, gitdir: r, oids: [...T] }),
                                U = yield v.connect({ core: t, emitter: i, emitterPrefix: o, corsProxy: m, service: "git-receive-pack", url: h, noGitSuffix: g, auth: y, headers: E, body: [...B, ...F] }),
                                { packfile: M, progress: C } = yield Zr.a.demux(U.body);
                            if (i) {
                                const t = Wt(C);
                                Object(zt.a)(t, (t) => {
                                    i.emit(`${o}message`, t);
                                });
                            }
                            const N = yield Object(Kr.a)(M);
                            return U.headers && (N.headers = U.headers), N;
                        } catch (t) {
                            throw ((t.caller = "git.push"), t);
                        }
                    }),
                    (en = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Qr(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Qr(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function rn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function nn(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            rn(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            rn(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function on(t) {
                return an.apply(this, arguments);
            }
            function an() {
                return (an = nn(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), filepath: i }) {
                    try {
                        const t = new s.a(n);
                        yield a.a.acquire(
                            { fs: t, gitdir: r },
                            (function () {
                                var t = nn(function* (t) {
                                    t.delete({ filepath: i });
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })()
                        );
                    } catch (t) {
                        throw ((t.caller = "git.remove"), t);
                    }
                })).apply(this, arguments);
            }
            function sn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function un(t) {
                return cn.apply(this, arguments);
            }
            function cn() {
                var t;
                return (
                    (t = function* ({ gitdir: t, type: e, object: r }) {
                        return Object(K.a)(V.a.wrap({ type: e, object: r }));
                    }),
                    (cn = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                sn(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                sn(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function fn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function ln(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            fn(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            fn(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function dn(t) {
                return hn.apply(this, arguments);
            }
            function hn() {
                return (hn = ln(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), filepath: i, ref: o = "HEAD" }) {
                    try {
                        const t = new s.a(n);
                        let u,
                            c = yield k.a.resolve({ fs: t, gitdir: r, ref: o });
                        try {
                            const e = yield hr({ gitdir: r, fs: t, oid: c, filepath: i, format: "deflated" });
                            c = e && e.oid;
                        } catch (t) {
                            c = null;
                        }
                        let l = { ctime: new Date(0), mtime: new Date(0), dev: 0, ino: 0, mode: 0, uid: 0, gid: 0, size: 0 };
                        const d = e && (yield t.read(Object(f.a)(e, i)));
                        d && ((u = yield un({ gitdir: r, type: "blob", object: d })), c === u && (l = yield t.lstat(Object(f.a)(e, i)))),
                            yield a.a.acquire(
                                { fs: t, gitdir: r },
                                (function () {
                                    var t = ln(function* (t) {
                                        t.delete({ filepath: i }), c && t.insert({ filepath: i, stats: l, oid: c });
                                    });
                                    return function (e) {
                                        return t.apply(this, arguments);
                                    };
                                })()
                            );
                    } catch (t) {
                        throw ((t.caller = "git.reset"), t);
                    }
                })).apply(this, arguments);
            }
            function pn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function gn(t) {
                return mn.apply(this, arguments);
            }
            function mn() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i, depth: o }) {
                        try {
                            const t = new s.a(n);
                            return yield k.a.resolve({ fs: t, gitdir: r, ref: i, depth: o });
                        } catch (t) {
                            throw ((t.caller = "git.resolveRef"), t);
                        }
                    }),
                    (mn = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                pn(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                pn(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            var yn = r(72);
            function vn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function wn(t) {
                return bn.apply(this, arguments);
            }
            function bn() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), privateKeys: i, openpgp: o }) {
                        try {
                            const e = new s.a(n),
                                a = yield k.a.resolve({ fs: e, gitdir: r, ref: "HEAD" }),
                                { type: d, object: h } = yield Object(j.a)({ fs: e, gitdir: r, oid: a });
                            if ("commit" !== d) throw new u.b(u.a.ObjectTypeAssertionInRefFail, { expected: "commit", ref: "HEAD", type: d });
                            let p;
                            if (o) (p = yn.a.from(h)), (p = yield p.sign(o, i));
                            else {
                                const e = l.a.get(t).get("pgp");
                                (p = Pt.a.from(h)), (p = yield Pt.a.sign(p, e, i));
                            }
                            const g = yield Object(c.a)({ fs: e, gitdir: r, type: "commit", object: p.toObject() }),
                                m = yield k.a.resolve({ fs: e, gitdir: r, ref: "HEAD", depth: 2 });
                            yield e.write(Object(f.a)(r, m), g + "\n");
                        } catch (t) {
                            throw ((t.caller = "git.sign"), t);
                        }
                    }),
                    (bn = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                vn(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                vn(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function _n(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function xn(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            _n(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            _n(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function En(t) {
                return kn.apply(this, arguments);
            }
            function kn() {
                return (kn = xn(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), filepath: i }) {
                    try {
                        const t = new s.a(n);
                        if (yield o.a.isIgnored({ gitdir: r, dir: e, filepath: i, fs: t })) return "ignored";
                        const u = yield (function (t) {
                                return Pn.apply(this, arguments);
                            })({ fs: t, gitdir: r }),
                            c = yield On({ fs: t, gitdir: r, tree: u, path: i }),
                            l = yield a.a.acquire(
                                { fs: t, gitdir: r },
                                (function () {
                                    var t = xn(function* (t) {
                                        for (const e of t) if (e.path === i) return e;
                                        return null;
                                    });
                                    return function (e) {
                                        return t.apply(this, arguments);
                                    };
                                })()
                            ),
                            d = yield t.lstat(Object(f.a)(e, i)),
                            h = null !== c,
                            p = null !== l,
                            g = null !== d,
                            m = (function () {
                                var n = xn(function* () {
                                    if (p && !Object(W.a)(l, d)) return l.oid;
                                    {
                                        const n = yield t.read(Object(f.a)(e, i)),
                                            o = yield un({ gitdir: r, type: "blob", object: n });
                                        return (
                                            p &&
                                                l.oid === o &&
                                                -1 !== d.size &&
                                                a.a.acquire(
                                                    { fs: t, gitdir: r },
                                                    (function () {
                                                        var t = xn(function* (t) {
                                                            t.insert({ filepath: i, stats: d, oid: o });
                                                        });
                                                        return function (e) {
                                                            return t.apply(this, arguments);
                                                        };
                                                    })()
                                                ),
                                            o
                                        );
                                    }
                                });
                                return function () {
                                    return n.apply(this, arguments);
                                };
                            })();
                        if (!h && !g && !p) return "absent";
                        if (!h && !g && p) return "*absent";
                        if (!h && g && !p) return "*added";
                        if (!h && g && p) {
                            return (yield m()) === l.oid ? "added" : "*added";
                        }
                        if (h && !g && !p) return "deleted";
                        if (h && !g && p) return l.oid, "*deleted";
                        if (h && g && !p) {
                            return (yield m()) === c ? "*undeleted" : "*undeletemodified";
                        }
                        if (h && g && p) {
                            const t = yield m();
                            return t === c ? (t === l.oid ? "unmodified" : "*unmodified") : t === l.oid ? "modified" : "*modified";
                        }
                    } catch (t) {
                        throw ((t.caller = "git.status"), t);
                    }
                })).apply(this, arguments);
            }
            function On(t) {
                return jn.apply(this, arguments);
            }
            function jn() {
                return (jn = xn(function* ({ fs: t, gitdir: e, tree: r, path: n }) {
                    "string" == typeof n && (n = n.split("/"));
                    const i = n.shift();
                    for (const o of r)
                        if (o.path === i) {
                            if (0 === n.length) return o.oid;
                            const { type: r, object: i } = yield Object(j.a)({ fs: t, gitdir: e, oid: o.oid });
                            if ("tree" === r) {
                                return On({ fs: t, gitdir: e, tree: ae.a.from(i), path: n });
                            }
                            if ("blob" === r) throw new u.b(u.a.ObjectTypeAssertionInPathFail, { oid: o.oid, path: n.join("/") });
                        }
                    return null;
                })).apply(this, arguments);
            }
            function Pn() {
                return (Pn = xn(function* ({ fs: t, gitdir: e }) {
                    let r;
                    try {
                        r = yield k.a.resolve({ fs: t, gitdir: e, ref: "HEAD" });
                    } catch (t) {
                        if (t.code === u.a.ResolveRefError) return [];
                    }
                    const { type: n, object: i } = yield Object(j.a)({ fs: t, gitdir: e, oid: r });
                    if ("commit" !== n) throw new u.b(u.a.ResolveCommitError, { oid: r });
                    return (function (t) {
                        return Sn.apply(this, arguments);
                    })({ fs: t, gitdir: e, oid: (r = Pt.a.from(i).parseHeaders().tree) });
                })).apply(this, arguments);
            }
            function Sn() {
                return (Sn = xn(function* ({ fs: t, gitdir: e, oid: r }) {
                    const { type: n, object: i } = yield Object(j.a)({ fs: t, gitdir: e, oid: r });
                    if ("tree" !== n) throw new u.b(u.a.ResolveTreeError, { oid: r });
                    return ae.a.from(i).entries();
                })).apply(this, arguments);
            }
            function Rn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function $n(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            Rn(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            Rn(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function An(t) {
                return Tn.apply(this, arguments);
            }
            function Tn() {
                return (Tn = $n(function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i = "HEAD", filepaths: a = ["."], pattern: u = null }) {
                    try {
                        const t = new s.a(n);
                        let l,
                            d = "";
                        u && ((d = L(u)) && (u = u.replace(d + "/", "")), (l = D()(u, { globstar: !0, extended: !0 })));
                        const h = a.map((t) => Object(f.a)(t, d));
                        return yield Object(ot.a)({
                            fs: t,
                            dir: e,
                            gitdir: r,
                            trees: [Object(q.a)({ ref: i }), it(), wt()],
                            map:
                                ((c = $n(function* (r, [n, i, a]) {
                                    if (!n && !a && i && (yield o.a.isIgnored({ fs: t, dir: e, filepath: r }))) return null;
                                    if (!h.some((t) => G(r, t))) return null;
                                    if (l) {
                                        let t = !1;
                                        for (const e of h) {
                                            const n = r.replace(e + "/", "");
                                            if (l.regex.test(n)) {
                                                t = !0;
                                                break;
                                            }
                                        }
                                        if (!t) return;
                                    }
                                    const s = n && (yield n.type());
                                    if ("tree" === s || "special" === s) return;
                                    const u = i && (yield i.type());
                                    if ("tree" === u || "special" === u) return;
                                    const c = a && (yield a.type());
                                    if ("tree" === c || "special" === c) return;
                                    const f = n ? yield n.oid() : void 0,
                                        d = a ? yield a.oid() : void 0;
                                    let p;
                                    n || !i || a ? i && (p = yield i.oid()) : (p = "42");
                                    const g = [void 0, f, p, d],
                                        m = g.map((t) => g.indexOf(t));
                                    return m.shift(), [r, ...m];
                                })),
                                function (t, e) {
                                    return c.apply(this, arguments);
                                }),
                        });
                    } catch (t) {
                        throw ((t.caller = "git.statusMatrix"), t);
                    }
                    var c;
                })).apply(this, arguments);
            }
            function In(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Bn(t) {
                return Fn.apply(this, arguments);
            }
            function Fn() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i, object: o, force: a = !1 }) {
                        try {
                            const t = new s.a(n);
                            if (void 0 === i) throw new u.b(u.a.MissingRequiredParameterError, { function: "tag", parameter: "ref" });
                            i = i.startsWith("refs/tags/") ? i : `refs/tags/${i}`;
                            const e = yield k.a.resolve({ fs: t, gitdir: r, ref: o || "HEAD" });
                            if (!a && (yield k.a.exists({ fs: t, gitdir: r, ref: i }))) throw new u.b(u.a.RefExistsError, { noun: "tag", ref: i });
                            yield k.a.writeRef({ fs: t, gitdir: r, ref: i, value: e });
                        } catch (t) {
                            throw ((t.caller = "git.tag"), t);
                        }
                    }),
                    (Fn = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                In(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                In(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Un(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Mn(t) {
                return Cn.apply(this, arguments);
            }
            function Cn() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i, publicKeys: o, openpgp: a }) {
                        try {
                            const e = new s.a(n),
                                c = yield k.a.resolve({ fs: e, gitdir: r, ref: i }),
                                { type: f, object: d } = yield Object(j.a)({ fs: e, gitdir: r, oid: c });
                            if ("commit" !== f && "tag" !== f) throw new u.b(u.a.ObjectTypeAssertionInRefFail, { expected: "commit/tag", ref: i, type: f });
                            if (a) {
                                const t = yn.a.from(d),
                                    e = yield t.listSigningKeys(a);
                                return !!(yield t.verify(a, o)) && e;
                            }
                            {
                                const e = l.a.get(t).get("pgp");
                                if ("commit" === f) {
                                    const t = Pt.a.from(d),
                                        { valid: r, invalid: n } = yield Pt.a.verify(t, e, o);
                                    return !(n.length > 0) && r;
                                }
                                if ("tag" === f) {
                                    const t = O.a.from(d),
                                        { valid: r, invalid: n } = yield O.a.verify(t, e, o);
                                    return !(n.length > 0) && r;
                                }
                            }
                        } catch (t) {
                            throw ((t.caller = "git.verify"), t);
                        }
                    }),
                    (Cn = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Un(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Un(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            function Nn() {
                try {
                    return Ht.a.version;
                } catch (t) {
                    throw ((t.caller = "git.version"), t);
                }
            }
            var Dn = r(73),
                zn = r(74),
                Hn = r(27);
            function* Ln(t) {
                const e = new zn.a();
                let r;
                const n = [],
                    i = t.length;
                for (let r = 0; r < i; r++) (n[r] = t[r].next().value), void 0 !== n[r] && e.consider(n[r].fullpath);
                if (null !== e.value)
                    for (;;) {
                        const o = [];
                        (r = e.value), e.reset();
                        for (let a = 0; a < i; a++)
                            void 0 !== n[a] && n[a].fullpath === r ? ((o[a] = n[a]), (n[a] = t[a].next().value)) : (o[a] = { fullpath: r, basename: Object(Hn.a)(r), exists: !1 }), void 0 !== n[a] && e.consider(n[a].fullpath);
                        if ((yield o, null === e.value)) return;
                    }
            }
            function Gn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function qn(t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (n, i) {
                        var o = t.apply(e, r);
                        function a(t) {
                            Gn(o, n, i, a, s, "next", t);
                        }
                        function s(t) {
                            Gn(o, n, i, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function Wn(t) {
                return Yn.apply(this, arguments);
            }
            function Yn() {
                return (Yn = qn(function* ({
                    trees: t,
                    filter: e = qn(function* () {
                        return !0;
                    }),
                    map: r = (function () {
                        var t = qn(function* (t) {
                            return t;
                        });
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })(),
                    reduce: n = (function () {
                        var t = qn(function* (t, e) {
                            const r = Object(ft.a)(e);
                            return void 0 !== t && r.unshift(t), r;
                        });
                        return function (e, r) {
                            return t.apply(this, arguments);
                        };
                    })(),
                    iterate: i = (t, e) => Promise.all([...e].map(t)),
                }) {
                    try {
                        const o = t.map((t) => t[nt.a]()),
                            a = new Array(o.length).fill({ fullpath: ".", basename: ".", exists: !0 }),
                            s = Object(Dn.a)(0, o.length),
                            u = (function () {
                                var t = qn(function* (t) {
                                    const e = yield Promise.all(s.map((e) => o[e].readdir(t[e])));
                                    s.map((e) => {
                                        t[e] = new o[e].ConstructEntry(t[e]);
                                    });
                                    const r = e.map((t) => (null === t ? [] : t)).map((t) => t[Symbol.iterator]());
                                    return { entry: t, children: Ln(r) };
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                            c = (function () {
                                var t = qn(function* (t) {
                                    const { children: o, entry: a } = yield u(t);
                                    if (yield e(a)) {
                                        const t = yield r(a);
                                        let e = yield i(c, o);
                                        return (e = e.filter((t) => void 0 !== t)), n(t, e);
                                    }
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })();
                        return c(a);
                    } catch (t) {
                        throw ((t.caller = "git.walk"), t);
                    }
                })).apply(this, arguments);
            }
            var Zn = r(130);
            function Kn(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void r(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(n, i);
            }
            function Vn(t) {
                return Xn.apply(this, arguments);
            }
            function Xn() {
                var t;
                return (
                    (t = function* ({ core: t = "default", dir: e, gitdir: r = Object(f.a)(e, ".git"), fs: n = l.a.get(t).get("fs"), ref: i, value: o, force: a = !1, symbolic: c = !1 }) {
                        try {
                            const t = new s.a(n);
                            if (i !== w.a.clean(i)) throw new u.b(u.a.InvalidRefNameError, { verb: "write", noun: "ref", ref: i, suggestion: w.a.clean(i) });
                            if (!a && (yield k.a.exists({ fs: t, gitdir: r, ref: i }))) throw new u.b(u.a.RefExistsError, { noun: "ref", ref: i });
                            c ? yield k.a.writeSymbolicRef({ fs: t, gitdir: r, ref: i, value: o }) : ((o = yield k.a.resolve({ fs: t, gitdir: r, ref: o })), yield k.a.writeRef({ fs: t, gitdir: r, ref: i, value: o }));
                        } catch (t) {
                            throw ((t.caller = "git.writeRef"), t);
                        }
                    }),
                    (Xn = function () {
                        var e = this,
                            r = arguments;
                        return new Promise(function (n, i) {
                            var o = t.apply(e, r);
                            function a(t) {
                                Kn(o, n, i, a, s, "next", t);
                            }
                            function s(t) {
                                Kn(o, n, i, a, s, "throw", t);
                            }
                            a(void 0);
                        });
                    }).apply(this, arguments)
                );
            }
            r.d(e, "utils", function () {
                return Jn;
            }),
                r.d(e, "add", function () {
                    return p;
                }),
                r.d(e, "addRemote", function () {
                    return x;
                }),
                r.d(e, "annotatedTag", function () {
                    return B;
                }),
                r.d(e, "branch", function () {
                    return M;
                }),
                r.d(e, "checkout", function () {
                    return ut;
                }),
                r.d(e, "fastCheckout", function () {
                    return xt;
                }),
                r.d(e, "clone", function () {
                    return ie;
                }),
                r.d(e, "commit", function () {
                    return ce;
                }),
                r.d(e, "config", function () {
                    return S;
                }),
                r.d(e, "currentBranch", function () {
                    return pe;
                }),
                r.d(e, "deleteBranch", function () {
                    return ye;
                }),
                r.d(e, "deleteRef", function () {
                    return be;
                }),
                r.d(e, "deleteRemote", function () {
                    return Ee;
                }),
                r.d(e, "deleteTag", function () {
                    return je;
                }),
                r.d(e, "expandOid", function () {
                    return Fe;
                }),
                r.d(e, "expandRef", function () {
                    return Ce;
                }),
                r.d(e, "fetch", function () {
                    return Xt;
                }),
                r.d(e, "findMergeBase", function () {
                    return ze;
                }),
                r.d(e, "findRoot", function () {
                    return We;
                }),
                r.d(e, "getRemoteInfo", function () {
                    return Je;
                }),
                r.d(e, "hashBlob", function () {
                    return tr.a;
                }),
                r.d(e, "indexPack", function () {
                    return rr;
                }),
                r.d(e, "init", function () {
                    return ee;
                }),
                r.d(e, "isDescendent", function () {
                    return or;
                }),
                r.d(e, "listBranches", function () {
                    return ur;
                }),
                r.d(e, "listFiles", function () {
                    return wr;
                }),
                r.d(e, "listRemotes", function () {
                    return Or;
                }),
                r.d(e, "listTags", function () {
                    return Sr;
                }),
                r.d(e, "log", function () {
                    return Fr;
                }),
                r.d(e, "merge", function () {
                    return Nr;
                }),
                r.d(e, "packObjects", function () {
                    return Lr;
                }),
                r.d(e, "pull", function () {
                    return Wr;
                }),
                r.d(e, "push", function () {
                    return tn;
                }),
                r.d(e, "readObject", function () {
                    return hr;
                }),
                r.d(e, "remove", function () {
                    return on;
                }),
                r.d(e, "resetIndex", function () {
                    return dn;
                }),
                r.d(e, "resolveRef", function () {
                    return gn;
                }),
                r.d(e, "sign", function () {
                    return wn;
                }),
                r.d(e, "status", function () {
                    return En;
                }),
                r.d(e, "statusMatrix", function () {
                    return An;
                }),
                r.d(e, "tag", function () {
                    return Bn;
                }),
                r.d(e, "verify", function () {
                    return Mn;
                }),
                r.d(e, "version", function () {
                    return Nn;
                }),
                r.d(e, "walkBeta1", function () {
                    return Wn;
                }),
                r.d(e, "walkBeta2", function () {
                    return ot.a;
                }),
                r.d(e, "writeObject", function () {
                    return Zn.a;
                }),
                r.d(e, "writeRef", function () {
                    return Vn;
                }),
                r.d(e, "WORKDIR", function () {
                    return it;
                }),
                r.d(e, "STAGE", function () {
                    return wt;
                }),
                r.d(e, "TREE", function () {
                    return q.a;
                }),
                r.d(e, "E", function () {
                    return u.a;
                }),
                r.d(e, "plugins", function () {
                    return l.b;
                }),
                r.d(e, "cores", function () {
                    return l.a;
                });
            const Jn = { auth: n.a, oauth2: i.a };
        },
    ]);
});
//# sourceMappingURL=bundle.umd.min.js.map

