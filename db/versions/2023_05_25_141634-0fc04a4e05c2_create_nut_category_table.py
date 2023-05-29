"""create nut.category table

Revision ID: 0fc04a4e05c2
Revises: 590b3e55b790
Create Date: 2023-05-25 14:16:34.762873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0fc04a4e05c2'
down_revision = '590b3e55b790'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'categories',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('code', sa.String(length=63), nullable=False, unique=True),
        sa.Column('left', sa.Integer, nullable=False),
        sa.Column('right', sa.Integer, nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_categories_left_right', 'categories',
                    ['left', 'right'], unique=True)


def downgrade() -> None:
    op.drop_table('categories')
