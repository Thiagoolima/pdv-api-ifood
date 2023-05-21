import { schemaProduto, schemaProdutoResponse } from '../schemas/produto';

export const pathProduto = {
    "/produto": {
        get: {
            tags: [
                "Produtos"
            ],
            summary: "Listar produtos",
            description: "Lista todos os produtos cadastrados no sistema, ou filtra pelo ID da categoria, caso seja informada!",
            security: [
                {
                    "bearerAuth": []
                }
            ],
            parameters: [
                {
                    name: "id",
                    in: "query",
                    description: "ID da categoria",
                    required: false
                }
            ],
            responses: {
                200: {
                    description: "Operação concluida com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.get.status200
                            }
                        }
                    },
                },
                500: {
                    description: "Mensagem de erro informado que ocorreu um erro inesperado no servidor",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.get.status500
                            }
                        }
                    }
                }
            }
        },
        post: {
            tags: [
                "Produtos"
            ],
            summary: "Listar produtos",
            description: "Lista todos os produtos cadastrados no sistema, ou filtra pelo ID da categoria, caso seja informada!",
            security: [
                {
                    "bearerAuth": []
                }
            ],
            requestBody: {
                description: "Informe os dados do novo produto!",
                content: {
                    "application/json": {
                        schema: {
                            ...schemaProduto
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Operação concluida com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.post.status200
                            }
                        }
                    },
                },
                500: {
                    description: "Mensagem de erro informado que ocorreu um erro inesperado no servidor",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.post.status500
                            }
                        }
                    }
                }
            }
        }
    },
    "/produto/{id}": {
        get: {
            tags: [
                "Produtos"
            ],
            summary: "Detalhar produto",
            description: "Detalha um produto identificado pelo ID!",
            security: [
                {
                    "bearerAuth": []
                }
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "ID do cliente",
                    required: true
                }
            ],
            required: true,
            responses: {
                201: {
                    description: "Operação concluida com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status201
                            }
                        }
                    }
                },
                404: {
                    description: "Ocorreu um erro com o ID informado",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status404
                            }
                        }
                    }
                },
                409: {
                    description: "Ocorreu um erro com o um dado informado!",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status409
                            }
                        }
                    }
                },
                500: {
                    description: "Erro inesperado no servidor",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status500
                            }
                        }
                    }
                }
            }
        },
        put: {
            tags: [
                "Produtos"
            ],
            summary: "Atualizar",
            description: "Detalha um produto identificado pelo ID!",
            security: [
                {
                    "bearerAuth": []
                }
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "ID do cliente",
                    required: true
                }
            ],
            required: true,
            responses: {
                201: {
                    description: "Operação concluida com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status201
                            }
                        }
                    }
                },
                404: {
                    description: "Ocorreu um erro com o ID informado",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status404
                            }
                        }
                    }
                },
                409: {
                    description: "Ocorreu um erro com o um dado informado!",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status409
                            }
                        }
                    }
                },
                500: {
                    description: "Erro inesperado no servidor",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.put.status500
                            }
                        }
                    }
                }
            }
        },
        delete: {
            tags: [
                "Clientes"
            ],
            summary: "Deletara cliente",
            description: "Excluí um cliente informando seu ID!",
            security: [
                {
                    "bearerAuth": []
                }
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    description: "ID do cliente",
                    required: true
                }
            ],
            required: true,
            responses: {
                204: {
                    description: "Operação concluida com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.delete.status204
                            }
                        }
                    }
                },
                404: {
                    description: "Ocorreu um erro com o ID informado",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.delete.status404
                            }
                        }
                    }
                },
                500: {
                    description: "Erro inesperado no servidor",
                    content: {
                        "application/json": {
                            schema: {
                                ...schemaProdutoResponse.delete.status500
                            }
                        }
                    }
                }
            }
        }
    }
}
