const datas = [
    {
        "home": {
          "path": "/",
          "name": "home",
          "title": "Home",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "UserList": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
              }
            }
          }
        },
        "userList": {
          "path": "/users",
          "name": "userList",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Users",
                        "href": "/users",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "about2",
                        "href": "/about2",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "about",
                        "href": "/about",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  },
                  {
                    "title": "home2",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "to": "/",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Users",
                        "to": "/users",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "about2",
                        "to": "/about2",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "about",
                        "to": "/about",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "rightButtons": [
                  {
                    "tag": "a",
                    "title": "Add User",
                    "href": "/users/create",
                    "class": ""
                  },
                  {
                    "tag": "a",
                    "title": "Filter",
                    "href": "#",
                    "class": ""
                  }
                ]
              }
            },
            "UserList": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
              }
            }
          }
        },
        "userEdit": {
          "path": "/users/:id",
          "name": "userEdit",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                ]
              }
            },
            "SideBar": {
              "component": "SideBar",
              "place": "side",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "to": "/",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Users",
                        "to": "/users",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "about2",
                        "to": "/about2",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "about",
                        "to": "/about",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "rightButtons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/users",
                    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "form": {
                  "id": "my-awesome-form",
                  "fields": [
                    {
                      "name": "firstName",
                      "label": "First Name",
                      "type": "TextField",
                      "validations": [
                        {
                          "validator": "required",
                          "text": "This first name is required"
                        }
                      ]
                    },
                    {
                      "name": "name",
                      "label": "name",
                      "type": "TextField",
                      "validations": [
                        {
                          "validator": "required",
                          "text": "This field is required"
                        }
                      ]
                    },
                    {
                      "name": "lastName",
                      "label": "Last Name",
                      "type": "TextField",
                      "validations": [
                        {
                          "validator": "required",
                          "text": "This field is required"
                        }
                      ]
                    },
                    {
                      "name": "email",
                      "label": "Email",
                      "type": "EmailField",
                      "validations": [
                        {
                          "validator": "required",
                          "text": "This field is required"
                        },
                        {
                          "validator": "email",
                          "text": "Format of email is incorrect"
                        }
                      ]
                    }
                  ]
                },
                "submit": {
                  "redirect": "/users"
                }
              }
            }
          }
        },
        "colorList": {
          "path": "/colors",
          "name": "colorList",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Colors",
                "description": "A list of all the colors.",
                "buttonWrapperClass": "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Add Color",
                    "href": "/colors/create",
                    "class": "bg-indigo-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  },
                  {
                    "tag": "a",
                    "title": "Filter",
                    "href": "#",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "Grid": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
                "request": {
                  "url": "/api/master/color/index",
                  "store": "colors"
                },
                "columns": [
                  {
                    "label": "Sr.No",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "serialNumber"
                  },
                  {
                    "label": "Name",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
                    "name": "name"
                  },
                  {
                    "label": "Action",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "action",
                    "links": [
                      {
                        "route": "colorEdit",
                        "label": "edit",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      },
                      {
                        "route": "destroy",
                        "label": "Delete",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      }
                    ]
                  }
                ]
              }
            },
            "Pagination": {
              "component": "MyPagination",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "colors"
              }
            },
            "DeleteModel": {
              "component": "DeleteModel",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "colors",
                "popup": {
                  "title": "Delete Record",
                  "message": "Are you sure you want to delete? This data\n                      will be permanently removed from our servers forever. This action cannot be undone.",
                  "deleteButtonTitle": "Delete",
                  "cancelButtonTitle": "Cancel"
                },
                "request": {
                  "deleteUrl": "/api/master/color/destroy/{id}",
                  "gridUrl": "/api/master/color/index"
                }
              }
            }
          }
        },
        "colorAdd": {
          "path": "/colors/create",
          "name": "colorAdd",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Create color",
                "description": "Create new color like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/colors",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "create",
                    "id": "colorCreate",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch color.",
                      "validation": "required"
                    }
                  ]
                },
                "submitRequest": {
                  "method": "postSubmit",
                  "url": "/api/master/color/create",
                  "successRedirectRoute": {
                    "name": "colorList"
                  }
                }
              }
            }
          }
        },
        "colorEdit": {
          "path": "/colors/:id/edit",
          "name": "colorEdit",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Edit color",
                "description": "Edit existing color like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/colors",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "Edit",
                    "id": "colorEdit",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch color.",
                      "validation": "required"
                    }
                  ]
                },
                "findRequest": {
                  "url": "/api/master/color/find/{id}",
                  "primaryKey": "id"
                },
                "submitRequest": {
                  "method": "putSubmit",
                  "url": "/api/master/color/update/{id}",
                  "successRedirectRoute": {
                    "name": "colorList"
                  }
                }
              }
            }
          }
        },
        "OrderTypeList": {
          "path": "/orderType",
          "name": "OrderTypeList",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "orderType",
                "description": "A list of all the orderType.",
                "buttonWrapperClass": "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Add OrderType",
                    "href": "/orderType/create",
                    "class": "bg-indigo-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  },
                  {
                    "tag": "a",
                    "title": "Filter",
                    "href": "#",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "Grid": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
                "request": {
                  "url": "/api/master/orderType/index",
                  "store": "orderType"
                },
                "columns": [
                  {
                    "label": "Sr.No",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "serialNumber"
                  },
                  {
                    "label": "Name",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
                    "name": "name"
                  },
                  {
                    "label": "Type",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
                    "name": "type"
                  },
                  {
                    "label": "Action",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "action",
                    "links": [
                      {
                        "route": "OrderTypeEdit",
                        "label": "edit",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      },
                      {
                        "route": "destroy",
                        "label": "Delete",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      }
                    ]
                  }
                ]
              }
            },
            "Pagination": {
              "component": "MyPagination",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "orderType"
              }
            },
            "DeleteModel": {
              "component": "DeleteModel",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "orderType",
                "popup": {
                  "title": "Delete Record",
                  "message": "Are you sure you want to delete? This data\n                      will be permanently removed from our servers forever. This action cannot be undone.",
                  "deleteButtonTitle": "Delete",
                  "cancelButtonTitle": "Cancel"
                },
                "request": {
                  "deleteUrl": "/api/master/orderType/destroy/{id}",
                  "gridUrl": "/api/master/orderType/index"
                }
              }
            }
          }
        },
        "OrderTypeAdd": {
          "path": "/orderType/create",
          "name": "OrderTypeAdd",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Create orderType",
                "description": "Create new orderType like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/orderType",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "create",
                    "id": "orderTypeCreate",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your Order.",
                      "validation": "required"
                    },
                    {
                      "$formkit": "select",
                      "name": "type",
                      "label": "Order Type",
                      "help": "This will be used for your order.",
                      "validation": "required",
                      "placeholder": "Select a type",
                      "options": [
                        "Stock",
                        "CPS"
                      ]
                    }
                  ]
                },
                "submitRequest": {
                  "method": "postSubmit",
                  "url": "/api/master/orderType/create",
                  "successRedirectRoute": {
                    "name": "OrderTypeList"
                  }
                }
              }
            }
          }
        },
        "OrderTypeEdit": {
          "path": "/orderType/:id/edit",
          "name": "OrderTypeEdit",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Edit orderType",
                "description": "Edit existing orderType like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/orderType",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "Edit",
                    "id": "OrderTypeEdit",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch orderType.",
                      "validation": "required"
                    },
                    {
                      "$formkit": "select",
                      "name": "type",
                      "label": "Order Type",
                      "help": "This will be used for your order.",
                      "validation": "required",
                      "placeholder": "Select a type",
                      "options": [
                        "Stock",
                        "CPS"
                      ]
                    }
                  ]
                },
                "findRequest": {
                  "url": "/api/master/orderType/find/{id}",
                  "primaryKey": "id"
                },
                "submitRequest": {
                  "method": "putSubmit",
                  "url": "/api/master/orderType/update/{id}",
                  "successRedirectRoute": {
                    "name": "OrderTypeList"
                  }
                }
              }
            }
          }
        },
        "departmentList": {
          "path": "/department",
          "name": "departmentList",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "department",
                "description": "A list of all the department.",
                "buttonWrapperClass": "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Add department",
                    "href": "/department/create",
                    "class": "bg-indigo-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  },
                  {
                    "tag": "a",
                    "title": "Filter",
                    "href": "#",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "Grid": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
                "request": {
                  "url": "/api/master/department/index",
                  "store": "department"
                },
                "columns": [
                  {
                    "label": "Sr.No",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "serialNumber"
                  },
                  {
                    "label": "Name",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
                    "name": "name"
                  },
                  {
                    "label": "Action",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "action",
                    "links": [
                      {
                        "route": "departmentEdit",
                        "label": "edit",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      },
                      {
                        "route": "destroy",
                        "label": "Delete",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      }
                    ]
                  }
                ]
              }
            },
            "Pagination": {
              "component": "MyPagination",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "department"
              }
            },
            "DeleteModel": {
              "component": "DeleteModel",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "department",
                "popup": {
                  "title": "Delete Record Rohit",
                  "message": "Are you sure you want to delete? This data\n                      will be permanently removed from our servers forever. This action cannot be undone.",
                  "deleteButtonTitle": "Delete",
                  "cancelButtonTitle": "Cancel"
                },
                "request": {
                  "deleteUrl": "/api/master/department/destroy/{id}",
                  "gridUrl": "/api/master/department/index"
                }
              }
            }
          }
        },
        "departmentAdd": {
          "path": "/department/create",
          "name": "departmentAdd",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Create department",
                "description": "Create new department like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/department",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "create",
                    "id": "departmentCreate",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch department.",
                      "validation": "required"
                    }
                  ]
                },
                "submitRequest": {
                  "method": "postSubmit",
                  "url": "/api/master/department/create",
                  "successRedirectRoute": {
                    "name": "departmentList"
                  }
                }
              }
            }
          }
        },
        "departmentEdit": {
          "path": "/department/:id/edit",
          "name": "departmentEdit",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Department",
                        "href": "/department",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Edit department",
                "description": "Edit existing department like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/department",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "Edit",
                    "id": "departmentEdit",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch department.",
                      "validation": "required"
                    }
                  ]
                },
                "findRequest": {
                  "url": "/api/master/department/find/{id}",
                  "primaryKey": "id"
                },
                "submitRequest": {
                  "method": "putSubmit",
                  "url": "/api/master/department/update/{id}",
                  "successRedirectRoute": {
                    "name": "departmentList"
                  }
                }
              }
            }
          }
        },
        "layoutList": {
          "path": "/layout",
          "name": "layoutList",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "layout",
                        "href": "/layout",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "layout",
                "description": "A list of all the layout.",
                "buttonWrapperClass": "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Add layout",
                    "href": "/layout/create",
                    "class": "bg-indigo-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  },
                  {
                    "tag": "a",
                    "title": "Filter",
                    "href": "#",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "Grid": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
                "request": {
                  "url": "/api/setup/layout/index",
                  "store": "layout"
                },
                "columns": [
                  {
                    "label": "Sr.No",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "serialNumber"
                  },
                  {
                    "label": "Name",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
                    "name": "name"
                  },
                  {
                    "label": "Action",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "action",
                    "links": [
                      {
                        "route": "layoutEdit",
                        "label": "edit",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      },
                      {
                        "route": "destroy",
                        "label": "Delete",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      }
                    ]
                  }
                ]
              }
            },
            "Pagination": {
              "component": "MyPagination",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "layout"
              }
            },
            "DeleteModel": {
              "component": "DeleteModel",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "layout",
                "popup": {
                  "title": "Delete Record Rohit",
                  "message": "Are you sure you want to delete? This data\n                      will be permanently removed from our servers forever. This action cannot be undone.",
                  "deleteButtonTitle": "Delete",
                  "cancelButtonTitle": "Cancel"
                },
                "request": {
                  "deleteUrl": "/api/setup/layout/destroy/{id}",
                  "gridUrl": "/api/setup/layout/index"
                }
              }
            }
          }
        },
        "layoutAdd": {
          "path": "/layout/create",
          "name": "layoutAdd",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "layout",
                        "href": "/layout",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Create layout",
                "description": "Create new layout like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/layout",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "create",
                    "id": "layoutCreate",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch layout.",
                      "validation": "required"
                    },
                    {
                      "$formkit": "text",
                      "name": "component",
                      "label": "component",
                      "help": "This will be used for your touch layout.",
                      "validation": "required"
                    }
                  ],
                  "nested": {
                    "setup_widgets": {
                      "meta": {
                        "title": "Add Components",
                        "description": "Attached components with layout",
                        "addButtonTitle": "Add component",
                        "removeButtonTitle": "Remove"
                      },
                      "headers": [
                        {
                          "label": "Object Type",
                          "class": "hidden"
                        },
                        {
                          "label": "Name",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "component",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "place",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "config",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": ""
                        }
                      ],
                      "elements": [
                        {
                          "name": "object_type",
                          "type": "hidden",
                          "validation": "required",
                          "tdClass": "hidden",
                          "default": "layouts"
                        },
                        {
                          "name": "name",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "component",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "place",
                          "type": "select",
                          "validation": "required",
                          "tdClass": "",
                          "placeholder": "Select a place",
                          "options": [
                            "top",
                            "main",
                            "bottom"
                          ]
                        },
                        {
                          "name": "config",
                          "type": "textarea",
                          "validation": "required",
                          "tdClass": ""
                        }
                      ]
                    }
                  }
                },
                "submitRequest": {
                  "method": "postSubmit",
                  "url": "/api/setup/layout/create",
                  "successRedirectRoute": {
                    "name": "layoutList"
                  }
                }
              }
            }
          }
        },
        "layoutEdit": {
          "path": "/layout/:id/edit",
          "name": "layoutEdit",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "layout",
                        "href": "/layout",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Edit layout",
                "description": "Edit existing layout like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/layout",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "Edit",
                    "id": "layoutEdit",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "validation": "required"
                    },
                    {
                      "$formkit": "text",
                      "name": "component",
                      "label": "component",
                      "validation": "required"
                    }
                  ],
                  "nested": {
                    "setup_widgets": {
                      "meta": {
                        "title": "Add Components",
                        "description": "Attached components with layout",
                        "addButtonTitle": "Add component",
                        "removeButtonTitle": "Remove"
                      },
                      "headers": [
                        {
                          "label": "Object Type",
                          "class": "hidden"
                        },
                        {
                          "label": "Name",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "component",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "place",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "config",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": ""
                        }
                      ],
                      "elements": [
                        {
                          "name": "object_type",
                          "type": "hidden",
                          "validation": "required",
                          "tdClass": "hidden",
                          "default": "layouts"
                        },
                        {
                          "name": "name",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "component",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "place",
                          "type": "select",
                          "validation": "required",
                          "tdClass": "",
                          "placeholder": "Select a place",
                          "options": [
                            "top",
                            "main",
                            "bottom"
                          ]
                        },
                        {
                          "name": "config",
                          "type": "textarea",
                          "validation": "required",
                          "tdClass": ""
                        }
                      ]
                    }
                  }
                },
                "findRequest": {
                  "url": "/api/setup/layout/find/{id}",
                  "primaryKey": "id"
                },
                "submitRequest": {
                  "method": "putSubmit",
                  "url": "/api/setup/layout/update/{id}",
                  "successRedirectRoute": {
                    "name": "layoutList"
                  }
                }
              }
            }
          }
        },
        "routeList": {
          "path": "/route",
          "name": "routeList",
          "component": "MasterLayout",
          "meta": {
            "requiresAuth": true
          },
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "route",
                        "href": "/route",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "route",
                "description": "A list of all the route.",
                "buttonWrapperClass": "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Add route",
                    "href": "/route/create",
                    "class": "bg-indigo-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  },
                  {
                    "tag": "a",
                    "title": "Filter",
                    "href": "#",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "Grid": {
              "component": "MyDataGrid",
              "place": "main",
              "class": "",
              "config": {
                "request": {
                  "url": "/api/setup/route/index",
                  "store": "route"
                },
                "columns": [
                  {
                    "label": "Sr.No",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "serialNumber"
                  },
                  {
                    "label": "Name",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6",
                    "name": "name"
                  },
                  {
                    "label": "Action",
                    "class": "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                    "tdClass": "px-3 py-4 text-sm text-gray-500",
                    "format": "action",
                    "links": [
                      {
                        "route": "routeEdit",
                        "label": "edit",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      },
                      {
                        "route": "destroy",
                        "label": "Delete",
                        "class": "text-indigo-600 hover:text-indigo-900"
                      }
                    ]
                  }
                ]
              }
            },
            "Pagination": {
              "component": "MyPagination",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "route"
              }
            },
            "DeleteModel": {
              "component": "DeleteModel",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8",
                "store": "route",
                "popup": {
                  "title": "Delete Record",
                  "message": "Are you sure you want to delete? This data\n                      will be permanently removed from our servers forever. This action cannot be undone.",
                  "deleteButtonTitle": "Delete",
                  "cancelButtonTitle": "Cancel"
                },
                "request": {
                  "deleteUrl": "/api/setup/route/destroy/{id}",
                  "gridUrl": "/api/setup/route/index"
                }
              }
            }
          }
        },
        "routeAdd": {
          "path": "/route/create",
          "name": "routeAdd",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "route",
                        "href": "/route",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Create route",
                "description": "Create new route like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/route",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "create",
                    "id": "routeCreate",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "help": "This will be used for your touch route.",
                      "validation": "required"
                    },
                    {
                      "$formkit": "text",
                      "name": "url",
                      "label": "url",
                      "validation": "required"
                    },
                    {
                      "$formkit": "textarea",
                      "name": "meta",
                      "label": "meta",
                      "validation": "required",
                      "value": "{\n      \"requiresAuth\": true\n    }"
                    },
                    {
                      "$formkit": "select",
                      "name": "layouts_id",
                      "label": "Layout",
                      "validation": "required",
                      "placeholder": "Select a layout",
                      "options": {
                        "1": "login",
                        "2": "master"
                      }
                    }
                  ],
                  "nested": {
                    "setup_widgets": {
                      "meta": {
                        "title": "Add Components",
                        "description": "Attached components with route",
                        "addButtonTitle": "Add component",
                        "removeButtonTitle": "Remove"
                      },
                      "headers": [
                        {
                          "label": "Object Type",
                          "class": "hidden"
                        },
                        {
                          "label": "Name",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "component",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "place",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "config",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": ""
                        }
                      ],
                      "elements": [
                        {
                          "name": "object_type",
                          "type": "hidden",
                          "validation": "required",
                          "tdClass": "hidden",
                          "default": "routes"
                        },
                        {
                          "name": "name",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "component",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "place",
                          "type": "select",
                          "validation": "required",
                          "tdClass": "",
                          "placeholder": "Select a place",
                          "options": [
                            "top",
                            "main",
                            "bottom"
                          ]
                        },
                        {
                          "name": "config",
                          "type": "textarea",
                          "validation": "required",
                          "tdClass": ""
                        }
                      ]
                    }
                  }
                },
                "submitRequest": {
                  "method": "postSubmit",
                  "url": "/api/setup/route/create",
                  "successRedirectRoute": {
                    "name": "routeList"
                  }
                }
              }
            }
          }
        },
        "routeEdit": {
          "path": "/route/:id/edit",
          "name": "routeEdit",
          "component": "MasterLayout",
          "widgets": {
            "TopBar": {
              "component": "TopBar",
              "place": "top",
              "config": {
                "list": [
                  {
                    "title": "home",
                    "class": "uppercase text-xs text-gray-600 mb-4 tracking-wider",
                    "routerLinks": [
                      {
                        "title": "home",
                        "href": "/",
                        "icon": "ChartBarIcon",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Colors",
                        "href": "/colors",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "route",
                        "href": "/route",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      },
                      {
                        "title": "Order Type",
                        "href": "/orderType",
                        "class": "mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500"
                      }
                    ]
                  }
                ]
              }
            },
            "Filter": {
              "component": "MyDataGridFilter",
              "place": "main",
              "config": {
                "title": "Edit route",
                "description": "Edit existing route like rose, green, yellow etc",
                "buttons": [
                  {
                    "tag": "a",
                    "title": "Back",
                    "href": "/route",
                    "class": "bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                ]
              }
            },
            "MyForm": {
              "component": "MyForm",
              "place": "main",
              "config": {
                "class": "px-4 sm:px-6 lg:px-8 -mx-0 mt-8",
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "Edit",
                    "id": "routeEdit",
                    "class": "space-y-8 divide-y divide-gray-200"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "name",
                      "label": "name",
                      "validation": "required"
                    },
                    {
                      "$formkit": "text",
                      "name": "url",
                      "label": "url",
                      "validation": "required"
                    },
                    {
                      "$formkit": "textarea",
                      "name": "meta",
                      "label": "meta",
                      "validation": "required"
                    },
                    {
                      "$formkit": "select",
                      "name": "layouts_id",
                      "label": "Layout",
                      "validation": "required",
                      "placeholder": "Select a layout",
                      "options": {
                        "1": "login",
                        "2": "master"
                      }
                    }
                  ],
                  "nested": {
                    "setup_widgets": {
                      "meta": {
                        "title": "Add Components",
                        "description": "Attached components with route",
                        "addButtonTitle": "Add component",
                        "removeButtonTitle": "Remove"
                      },
                      "headers": [
                        {
                          "label": "Object Type",
                          "class": "hidden"
                        },
                        {
                          "label": "Name",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "component",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "place",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": "config",
                          "class": "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                        },
                        {
                          "label": ""
                        }
                      ],
                      "elements": [
                        {
                          "name": "object_type",
                          "type": "hidden",
                          "validation": "required",
                          "tdClass": "hidden",
                          "default": "routes"
                        },
                        {
                          "name": "name",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "component",
                          "type": "text",
                          "validation": "required",
                          "tdClass": ""
                        },
                        {
                          "name": "place",
                          "type": "select",
                          "validation": "required",
                          "tdClass": "",
                          "placeholder": "Select a place",
                          "options": [
                            "top",
                            "main",
                            "bottom"
                          ]
                        },
                        {
                          "name": "config",
                          "type": "textarea",
                          "validation": "required",
                          "tdClass": ""
                        }
                      ]
                    }
                  }
                },
                "findRequest": {
                  "url": "/api/setup/route/find/{id}",
                  "primaryKey": "id"
                },
                "submitRequest": {
                  "method": "putSubmit",
                  "url": "/api/setup/route/update/{id}",
                  "successRedirectRoute": {
                    "name": "routeList"
                  }
                }
              }
            }
          }
        },
        "about2": {
          "path": "/about2",
          "name": "about2",
          "component": "HomeView"
        },
        "about": {
          "path": "/about",
          "name": "about",
          "component": "AboutView"
        },
        "login": {
          "path": "/login",
          "name": "login",
          "component": "BlankLayout",
          "meta": {
            "requiresAuth": false
          },
          "widgets": {
            "Login": {
              "component": "Login",
              "place": "main",
              "config": {
                "formKit": {
                  "props": {
                    "type": "form",
                    "submit-label": "Login"
                  },
                  "elements": [
                    {
                      "$formkit": "text",
                      "name": "username",
                      "autocomplete": "email",
                      "label": "Email",
                      "help": "This will be used for your account login.",
                      "validation": "required|email"
                    },
                    {
                      "$formkit": "password",
                      "name": "password",
                      "label": "Password",
                      "autocomplete": "current-password",
                      "help": "Enter your password.",
                      "validation": "required|length:5,16"
                    }
                  ]
                },
                "staticElements": {
                  "grant_type": "password",
                  "client_id": "96ae2c8a-3b64-42c6-9d20-60296ef743c1",
                  "client_secret": "3LbKZT4ug5qKPWfi0hSbw3MJDb4i4bbm6x4pUBzX"
                },
                "submitRequest": {
                  "method": "login",
                  "url": "/api/oauth/token",
                  "successRedirectRoute": {
                    "name": "home"
                  }
                }
              }
            }
          }
        }
      }
]

export default datas